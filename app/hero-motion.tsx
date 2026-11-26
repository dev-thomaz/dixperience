"use client";

import { useEffect, useRef, useState } from "react";

export function HeroMotion({ play, pause }: { play: string; pause: string }) {
  const backdrop = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const manualPlayback = useRef<(() => void) | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const layer = backdrop.current;
    const media = video.current;
    if (!layer || !media) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = true;
    let followPreference = true;
    let shouldPlay = !preference.matches;
    let mounted = true;

    const syncPlayback = () => {
      if (followPreference) shouldPlay = !preference.matches;
      if (!shouldPlay || !inView || document.hidden) {
        media.pause();
        return;
      }
      if (!media.getAttribute("src")) media.src = "/brand/ribbon.mp4";
      media.play().catch(() => {
        if (mounted) setPlaying(false);
      });
    };

    manualPlayback.current = () => {
      followPreference = false;
      shouldPlay = media.paused;
      syncPlayback();
    };

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(layer);

    setAvailable(true);
    preference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      mounted = false;
      manualPlayback.current = null;
      observer.disconnect();
      preference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      media.pause();
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="hero-art" ref={backdrop}>
        <video
          loop
          muted
          onError={() => setAvailable(false)}
          onPause={() => setPlaying(false)}
          onPlaying={() => setPlaying(true)}
          playsInline
          poster="/brand/ribbon-poster.webp"
          preload="none"
          ref={video}
          tabIndex={-1}
        />
      </div>
      {available && (
        <button
          aria-label={playing ? pause : play}
          className="motion-toggle"
          onClick={() => manualPlayback.current?.()}
          type="button"
        >
          <span aria-hidden="true" className={playing ? "pause-icon" : "play-icon"} />
        </button>
      )}
    </>
  );
}
