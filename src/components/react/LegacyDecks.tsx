import { useEffect } from 'react';

/**
 * Progressive enhancement for case pages that still use data-deck markup.
 * Keeps gallery behaviour without rewriting every case narrative into props first.
 */
export default function LegacyDecks() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>('[data-deck]').forEach((deck) => {
      if (deck.dataset.enhanced === 'true') return;
      deck.dataset.enhanced = 'true';

      const track = deck.querySelector<HTMLElement>('.deck-track');
      const slides = track ? [...track.querySelectorAll<HTMLElement>('.deck-slide')] : [];
      const prev = deck.querySelector<HTMLButtonElement>('[data-deck-prev]');
      const next = deck.querySelector<HTMLButtonElement>('[data-deck-next]');
      const status = deck.querySelector<HTMLElement>('[data-deck-status]');
      if (!track || !slides.length || !prev || !next || !status) return;

      let index = 0;
      let pending = false;
      let drag: {
        id: number;
        x: number;
        y: number;
        left: number;
        active: boolean;
      } | null = null;
      let suppressClick = false;

      const offset = (i: number) => slides[i].offsetLeft - slides[0].offsetLeft;

      const update = () => {
        let closest = 0;
        let distance = Infinity;
        slides.forEach((slide, i) => {
          const d = Math.abs(offset(i) - track.scrollLeft);
          if (d < distance) {
            distance = d;
            closest = i;
          }
        });
        index = closest;
        prev.disabled = index === 0;
        next.disabled = index === slides.length - 1;
        status.textContent = `${index + 1} / ${slides.length}`;
      };

      const go = (i: number) => {
        i = Math.max(0, Math.min(slides.length - 1, i));
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        track.scrollTo({ left: offset(i), behavior: reduced ? 'instant' : 'smooth' });
      };

      const onPrev = () => go(index - 1);
      const onNext = () => go(index + 1);
      const onScroll = () => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => {
          pending = false;
          update();
        });
      };
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.target !== track) return;
        let target: number | undefined;
        if (event.key === 'ArrowRight') target = index + 1;
        if (event.key === 'ArrowLeft') target = index - 1;
        if (event.key === 'Home') target = 0;
        if (event.key === 'End') target = slides.length - 1;
        if (target === undefined) return;
        event.preventDefault();
        go(target);
      };

      const onPointerDown = (event: PointerEvent) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        suppressClick = false;
        drag = {
          id: event.pointerId,
          x: event.clientX,
          y: event.clientY,
          left: track.scrollLeft,
          active: false,
        };
      };

      const onPointerMove = (event: PointerEvent) => {
        if (!drag || event.pointerId !== drag.id) return;
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
          update();
        }
      };

      const endDrag = (event: PointerEvent) => {
        if (!drag || event.pointerId !== drag.id) return;
        const wasDragging = drag.active;
        const id = drag.id;
        drag = null;
        track.classList.remove('is-dragging');
        if (track.hasPointerCapture?.(id)) track.releasePointerCapture(id);
        if (wasDragging) {
          suppressClick = true;
          update();
          go(index);
        }
      };

      const onClickCapture = (event: MouseEvent) => {
        if (suppressClick && event.detail !== 0) {
          event.preventDefault();
          event.stopPropagation();
          suppressClick = false;
        } else if (event.detail === 0) {
          suppressClick = false;
        }
      };

      prev.addEventListener('click', onPrev);
      next.addEventListener('click', onNext);
      track.addEventListener('scroll', onScroll, { passive: true });
      track.addEventListener('keydown', onKeyDown);
      track.addEventListener('pointerdown', onPointerDown);
      track.addEventListener('pointermove', onPointerMove);
      track.addEventListener('pointerup', endDrag);
      track.addEventListener('pointercancel', endDrag);
      track.addEventListener('click', onClickCapture, true);
      window.addEventListener('resize', update);
      update();

      cleanups.push(() => {
        prev.removeEventListener('click', onPrev);
        next.removeEventListener('click', onNext);
        track.removeEventListener('scroll', onScroll);
        track.removeEventListener('keydown', onKeyDown);
        track.removeEventListener('pointerdown', onPointerDown);
        track.removeEventListener('pointermove', onPointerMove);
        track.removeEventListener('pointerup', endDrag);
        track.removeEventListener('pointercancel', endDrag);
        track.removeEventListener('click', onClickCapture, true);
        window.removeEventListener('resize', update);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
