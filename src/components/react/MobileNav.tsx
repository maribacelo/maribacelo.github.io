import { useEffect, useId, useRef, useState } from 'react';
import type { NavLink } from '../../types/site';

export interface MobileNavProps {
  links: NavLink[];
  wordmarkHref: string;
}

export default function MobileNav({ links, wordmarkHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const [visible, setVisible] = useState(true);
  const [height, setHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const navId = useId();

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let lastY = Math.max(0, window.scrollY);
    let headerHeight = header.getBoundingClientRect().height;
    let frame = 0;
    const measure = () => {
      headerHeight = header.getBoundingClientRect().height;
      setHeight(headerHeight);
    };
    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const atTop = y <= headerHeight;
      setFloating(!atTop);
      if (atTop || open || header.querySelector(':focus-visible')) {
        setVisible(true);
        lastY = y;
      } else if (Math.abs(y - lastY) >= 8) {
        setVisible(y < lastY);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    measure();
    setFloating(lastY > headerHeight);
    setVisible(lastY <= headerHeight || open);
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    observer?.observe(header);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      observer?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="site-header-slot" style={floating ? { height } : undefined}>
    <header
      ref={headerRef}
      onFocusCapture={() => setVisible(true)}
      className={`site-header ${floating ? 'is-floating' : ''} ${floating && !visible && !open ? 'is-hidden' : ''} mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8 xl:max-w-[1680px] 2xl:px-10`}
    >
      <a
        aria-label="Mariana Bacelo home"
        className="wordmark min-h-[44px] min-w-[44px] inline-flex items-center"
        href={wordmarkHref}
      >
        mariana bacelo<span className="brand-dot">.</span>
      </a>

      <button
        type="button"
        className="menu-toggle inline-flex min-h-[44px] min-w-[44px] items-center gap-3 md:hidden"
        aria-controls={navId}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        Menu <span aria-hidden="true">{open ? '×' : '＋'}</span>
      </button>

      <nav
        id={navId}
        aria-label="Main navigation"
        className={`main-nav ${open ? 'is-open' : ''}`}
      >
        {links.map((link) => (
          <a
            key={`${link.href}-${link.label}`}
            href={link.href}
            aria-current={link.current ? 'page' : undefined}
            className={`inline-flex min-h-[44px] items-center ${link.highlight ? 'nav-contact' : ''}`}
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            onClick={close}
          >
            {link.label}
            {(link.external || link.highlight) && (
              <span aria-hidden="true" className="pl-3">
                ↗
              </span>
            )}
          </a>
        ))}
      </nav>
    </header>
    </div>
  );
}
