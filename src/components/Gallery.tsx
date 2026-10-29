"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Editorial grid of renders; click opens a full-screen viewer with arrows, keys and swipe.
export default function Gallery({ images, name }: { images: string[]; name: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef(0);

  const show = (i: number) => {
    setOpen(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <>
      <div className="gallery">
        {images.map((src, i) => (
          <button key={src} type="button" className="gallery-item" onClick={() => show(i)} aria-label={`Open image ${i + 1} of ${images.length}`}>
            <Image src={src} alt={`${name} — render ${i + 1}`} fill sizes="(max-width: 820px) 100vw, 50vw" className="object-cover" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="viewer"
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
        aria-label={`${name} gallery`}
      >
        {open !== null && (
          <figure key={open} className="viewer-fig">
            <Image src={images[open]} alt={`${name} — render ${open + 1}`} width={2000} height={1200} sizes="92vw" loading="eager" className="block h-auto max-h-[82vh] w-[min(92vw,1600px)] object-contain" />
            <figcaption className="mt-3 flex items-center justify-between gap-6 text-sm text-white/80">
              <span className="tabular-nums">{String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
              <span className="flex gap-2">
                <button type="button" className="viewer-btn" onClick={() => go(-1)} aria-label="Previous image">←</button>
                <button type="button" className="viewer-btn" onClick={() => go(1)} aria-label="Next image">→</button>
                <button type="button" className="viewer-btn" onClick={close} aria-label="Close">✕</button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
