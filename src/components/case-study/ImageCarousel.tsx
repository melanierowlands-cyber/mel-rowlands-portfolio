"use client";

import { useState } from "react";
import Image from "next/image";
import type { ShowcaseImage } from "@/lib/projects";

export default function ImageCarousel({ images }: { images: ShowcaseImage[] }) {
  const [index, setIndex] = useState(0);
  const img = images[index];
  const go = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <div className="mx-auto w-full max-w-[760px]">
      <figure>
        <div className="relative">
          {img.src && (
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-auto w-full rounded-[14px] border border-line object-cover shadow-[0px_4px_20px_rgba(0,0,0,0.08)]"
            />
          )}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-[10px] top-1/2 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-[0px_4px_12px_rgba(0,0,0,0.16)] backdrop-blur transition hover:bg-surface md:left-[16px] md:h-[44px] md:w-[44px]"
              >
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
                  <path d="M8 1L1.5 7.5L8 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-[10px] top-1/2 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-[0px_4px_12px_rgba(0,0,0,0.16)] backdrop-blur transition hover:bg-surface md:right-[16px] md:h-[44px] md:w-[44px]"
              >
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
                  <path d="M1 1L7.5 7.5L1 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>
        {img.caption && (
          <figcaption className="mt-[10px] font-body text-[13px] leading-[1.5] text-ink-muted md:mt-[12px] md:text-[14px]">
            {img.caption}
          </figcaption>
        )}
      </figure>
      {images.length > 1 && (
        <div className="mt-[14px] flex justify-center gap-[6px]">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              className={`h-[7px] w-[7px] rounded-full transition ${i === index ? "bg-theme" : "bg-line"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
