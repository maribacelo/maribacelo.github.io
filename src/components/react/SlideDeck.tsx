import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import type { DeckSlide } from '../../types/site';

export interface SlideDeckProps {
  id: string;
  ariaLabel: string;
  eyebrow: string;
  title: string;
  description?: string;
  slides: DeckSlide[];
  hint?: string;
  wide?: boolean;
  onOpenImage?: (slide: DeckSlide) => void;
}

export default function SlideDeck({
  id,
  ariaLabel,
  eyebrow,
  title,
  description,
  slides,
  hint = 'Drag, use arrows, or swipe to move between slides. Select an image to enlarge.',
  wide = true,
  onOpenImage,
}: SlideDeckProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const dragRef = useRef<{
    id: number;
    x: number;
    y: number;
    left: number;
    active: boolean;
  } | null>(null);
  const suppressClick = useRef(false);

  const updateFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slidesEls = [...track.querySelectorAll<HTMLElement>('.deck-slide')];
    if (!slidesEls.length) return;
    const base = slidesEls[0].offsetLeft;
    let closest = 0;
    let distance = Infinity;
    slidesEls.forEach((slide, i) => {
      const d = Math.abs(slide.offsetLeft - base - track.scrollLeft);
      if (d < distance) {
        distance = d;
        closest = i;
      }
    });
    setIndex(closest);
  }, []);

  const go = useCallback(
    (target: number) => {
      const track = trackRef.current;
      if (!track) return;
      const slidesEls = [...track.querySelectorAll<HTMLElement>('.deck-slide')];
      const next = Math.max(0, Math.min(slidesEls.length - 1, target));
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const left = slidesEls[next].offsetLeft - slidesEls[0].offsetLeft;
      track.scrollTo({ left, behavior: reduced ? 'instant' : 'smooth' });
      setIndex(next);
    },
    [],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pending = false;
    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        updateFromScroll();
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    updateFromScroll();
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, [updateFromScroll]);

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`slide-deck ${wide ? 'wide-image' : ''}`}
      data-deck=""
    >
      <div className="deck-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="deck-controls">
          <button
            type="button"
            className="min-h-[44px] min-w-[44px]"
            aria-label="Previous slide"
            disabled={index === 0}
            onClick={() => go(index - 1)}
          >
            ←
          </button>
          <span data-deck-status aria-live="polite">
            {index + 1} / {slides.length}
          </span>
          <button
            type="button"
            className="min-h-[44px] min-w-[44px]"
            aria-label="Next slide"
            disabled={index === slides.length - 1}
            onClick={() => go(index + 1)}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="deck-track"
        tabIndex={0}
        role="region"
        aria-label={`${ariaLabel} slides`}
        onKeyDown={(event) => {
          if (event.target !== trackRef.current) return;
          let target: number | undefined;
          if (event.key === 'ArrowRight') target = index + 1;
          if (event.key === 'ArrowLeft') target = index - 1;
          if (event.key === 'Home') target = 0;
          if (event.key === 'End') target = slides.length - 1;
          if (target === undefined) return;
          event.preventDefault();
          go(target);
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse' || event.button !== 0) return;
          suppressClick.current = false;
          dragRef.current = {
            id: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            left: trackRef.current?.scrollLeft ?? 0,
            active: false,
          };
        }}
        onPointerMove={(event) => {
          const drag = dragRef.current;
          const track = trackRef.current;
          if (!drag || !track || event.pointerId !== drag.id) return;
          const dx = event.clientX - drag.x;
          const dy = event.clientY - drag.y;
          if (!drag.active && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy)) {
            drag.active = true;
            track.setPointerCapture?.(drag.id);
            track.classList.add('is-dragging');
          }
          if (drag.active) {
            event.preventDefault();
            track.scrollLeft = drag.left - dx;
            updateFromScroll();
          }
        }}
        onPointerUp={(event) => endDrag(event)}
        onPointerCancel={(event) => endDrag(event)}
        onClickCapture={(event) => {
          if (suppressClick.current && event.detail !== 0) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          } else if (event.detail === 0) {
            suppressClick.current = false;
          }
        }}
      >
        {slides.map((slide) => (
          <figure key={slide.id} className="deck-slide">
            <div className="slide-label">
              <span>{slide.label}</span>
              <h3>{slide.title}</h3>
            </div>
            <button
              type="button"
              className={`image-open min-h-[44px] ${slide.laptopFrame ? 'laptop-frame' : ''}`}
              data-caption={slide.caption}
              onClick={() => {
                if (suppressClick.current) return;
                onOpenImage?.(slide);
                window.dispatchEvent(
                  new CustomEvent('portfolio:open-image', {
                    detail: { src: slide.src, alt: slide.alt, caption: slide.caption },
                  }),
                );
              }}
            >
              <img src={slide.src} alt={slide.alt} loading="lazy" decoding="async" />
              <span>View</span>
            </button>
            <figcaption>{slide.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="deck-hint">{hint}</p>
    </section>
  );

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const track = trackRef.current;
    if (!drag || !track || event.pointerId !== drag.id) return;
    const wasDragging = drag.active;
    const pointerId = drag.id;
    dragRef.current = null;
    track.classList.remove('is-dragging');
    if (track.hasPointerCapture?.(pointerId)) track.releasePointerCapture(pointerId);
    if (wasDragging) {
      suppressClick.current = true;
      updateFromScroll();
      go(index);
    }
  }
}
