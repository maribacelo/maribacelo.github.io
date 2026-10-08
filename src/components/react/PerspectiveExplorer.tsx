import { useState, type KeyboardEvent } from 'react';
import type { Perspective } from '../../types/site';

export interface PerspectiveExplorerProps {
  perspectives: Perspective[];
}

export default function PerspectiveExplorer({ perspectives }: PerspectiveExplorerProps) {
  const [active, setActive] = useState(0);
  const current = perspectives[active];

  const select = (index: number, focus = false) => {
    setActive(index);
    if (focus) {
      document.getElementById(perspectives[index]?.id)?.focus();
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | undefined;
    if (event.key === 'ArrowRight') next = (index + 1) % perspectives.length;
    if (event.key === 'ArrowLeft') next = (index + perspectives.length - 1) % perspectives.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = perspectives.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    select(next, true);
  };

  if (!current) return null;

  return (
    <div className="explorer">
      <div aria-label="Explore design perspectives" className="explorer-controls" role="tablist">
        {perspectives.map((item, index) => (
          <button
            key={item.id}
            id={item.id}
            type="button"
            role="tab"
            className="lens-button min-h-[44px]"
            aria-controls="perspective-panel"
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span>{item.tabLabel}</span>
            {item.tabTitle.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <b aria-hidden="true">↗</b>
          </button>
        ))}
      </div>
      <div
        id="perspective-panel"
        role="tabpanel"
        aria-labelledby={current.id}
        className="perspective-panel"
      >
        <p className="eyebrow">{current.label}</p>
        <h3>{current.title}</h3>
        <p>{current.copy}</p>
        <a className="text-link inline-flex min-h-[44px] items-center" href={current.linkHref}>
          {current.linkText}
        </a>
      </div>
    </div>
  );
}
