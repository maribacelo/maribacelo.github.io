import { useEffect, useId, useState } from 'react';
import type { NavLink } from '../../types/site';

export interface MobileNavProps {
  links: NavLink[];
  wordmarkHref: string;
}

export default function MobileNav({ links, wordmarkHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const navId = useId();

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
    <header className="site-header mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8 xl:max-w-[1680px] 2xl:px-10">
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
  );
}
