import { useEffect, useRef, useState } from 'react';

interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
}

export default function ImageLightbox() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const [image, setImage] = useState<LightboxImage | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const openFromButton = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      // React SlideDeck already dispatches portfolio:open-image
      if (target.closest('[data-react-deck="true"]')) return;
      const img = target.querySelector('img');
      if (!img) return;
      openerRef.current = target;
      setZoomed(false);
      setImage({
        src: img.currentSrc || img.src,
        alt: img.alt,
        caption: target.dataset.caption || img.alt,
      });
    };

    const openFromEvent = (event: Event) => {
      const detail = (event as CustomEvent<LightboxImage>).detail;
      if (!detail?.src) return;
      openerRef.current = document.activeElement as HTMLElement | null;
      setZoomed(false);
      setImage(detail);
    };

    const buttons = document.querySelectorAll<HTMLElement>('.image-open');
    buttons.forEach((button) => button.addEventListener('click', openFromButton));
    window.addEventListener('portfolio:open-image', openFromEvent);

    return () => {
      buttons.forEach((button) => button.removeEventListener('click', openFromButton));
      window.removeEventListener('portfolio:open-image', openFromEvent);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (image) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
  }, [image]);

  const close = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Expanded project image"
      className={`image-dialog ${zoomed ? 'is-zoomed' : ''}`}
      onClick={(event) => {
        const dialog = dialogRef.current;
        if (!dialog || event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const { clientX: x, clientY: y } = event;
        if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) close();
      }}
      onClose={() => {
        document.body.style.overflow = '';
        setZoomed(false);
        setImage(null);
        openerRef.current?.focus();
      }}
    >
      <div className="dialog-actions">
        <button
          type="button"
          className="dialog-zoom min-h-[44px] min-w-[44px]"
          aria-label="Zoom image for close reading"
          aria-pressed={zoomed}
          onClick={() => setZoomed((value) => !value)}
        >
          {zoomed ? 'Fit image −' : 'Zoom in ＋'}
        </button>
        <button
          type="button"
          className="dialog-close min-h-[44px] min-w-[44px]"
          aria-label="Close image"
          autoFocus
          onClick={close}
        >
          Close ×
        </button>
      </div>
      <div className="dialog-image-wrap">
        {image ? <img src={image.src} alt={image.alt} /> : null}
      </div>
      <p>{image?.caption}</p>
    </dialog>
  );
}
