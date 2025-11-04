import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Simple, dependency-free Carousel built with React + Tailwind utilities
 *
 * Props:
 * - images: Array<{ src: string; alt?: string; caption?: string }>
 * - autoPlay?: boolean (default: true)
 * - interval?: number in ms (default: 3000)
 * - showArrows?: boolean (default: true)
 * - showIndicators?: boolean (default: true)
 * - className?: string (extra classes for wrapper)
 *
 * Features:
 * - Auto-play with pause on hover
 * - Keyboard navigation (ArrowLeft/ArrowRight)
 * - Touch swipe on mobile
 * - Responsive with 16:9 aspect ratio by default
 */
export default function Carousel({
  images = [],
  autoPlay = true,
  interval = 3000,
  showArrows = true,
  showIndicators = true,
  className = "",
}) {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const total = validImages.length;

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, Math.max(1500, interval));
    return () => clearInterval(id);
  }, [autoPlay, paused, interval, total]);

  // Ensure index stays in range when images change
  useEffect(() => {
    if (index >= total) setIndex(0);
  }, [total, index]);

  const goTo = (i) => {
    if (total === 0) return;
    const next = (i + total) % total;
    setIndex(next);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    const threshold = 50; // px
    if (Math.abs(delta) > threshold) {
      if (delta > 0) prev();
      else next();
    }
  };

  if (total === 0) {
    return (
      <div className={`w-full bg-slate-100 text-slate-500 p-6 rounded-md ${className}`}>
        No images
      </div>
    );
  }

  return (
    <div
      className={`relative w-full select-none ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image Carousel"
    >
      {/* Viewport with 16:9 ratio; adjust aspect as needed */}
      <div className="overflow-hidden rounded-lg shadow-sm border border-slate-200 bg-white">
        <div
          className="relative w-full aspect-[16/9]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Track */}
          <div
            className="h-full whitespace-nowrap transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {validImages.map((img, i) => (
              <div key={i} className="inline-block h-full w-full align-top">
                <img
                  src={img.src}
                  alt={img.alt ?? `Slide ${i + 1}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                {img.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white">
                    <p className="text-sm">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrows */}
          {showArrows && total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow ring-1 ring-slate-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M15.78 4.72a.75.75 0 010 1.06L9.56 12l6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow ring-1 ring-slate-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M8.22 4.72a.75.75 0 000 1.06L14.44 12l-6.22 6.22a.75.75 0 101.06 1.06l6.75-6.75a.75.75 0 000-1.06L9.28 4.72a.75.75 0 00-1.06 0z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}

          {/* Indicators */}
          {showIndicators && total > 1 && (
            <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
              {validImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full ring-1 ring-slate-300 transition-all ${
                    i === index ? "bg-blue-600 w-6" : "bg-white/90 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/*
How to use:

1) Import and pass an images array

import Carousel from "../../components/Carousel/Carousel";

const slides = [
  { src: "/vite.svg", alt: "Vite", caption: "Vite Logo" },
  { src: "/src/assets/react.svg", alt: "React", caption: "React Logo" },
  { src: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200", alt: "Unsplash", caption: "Sample photo" },
];

<Carousel images={slides} autoPlay interval={4000} />

2) Placement
Place the component inside your page layout. It stretches to full width; wrap it in a container to limit width if needed:

<div className="mx-auto max-w-5xl px-4">
  <Carousel images={slides} />
</div>

3) Notes
- Requires Tailwind (already set up via @import "tailwindcss" in index.css) for styling.
- If you prefer a different aspect ratio, change class "aspect-[16/9]".
*/
