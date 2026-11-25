"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const scrollKeys = new Set(["ArrowDown", "ArrowUp", "End", "Home", "PageDown", "PageUp", " ", "Tab"]);

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;

    const updatePreference = () => {
      if (reducedMotion.matches) {
        lenis?.destroy();
        lenis = undefined;
        return;
      }

      lenis ??= new Lenis({ autoRaf: true, lerp: 0.08 });
    };

    // Let native navigation take over if it starts during a wheel gesture.
    const cancelMomentum = () => {
      if (lenis?.isScrolling !== "smooth") return;
      lenis.stop();
      lenis.start();
    };

    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest('a[href^="#"]')) {
        cancelMomentum();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (scrollKeys.has(event.key)) cancelMomentum();
    };

    updatePreference();
    reducedMotion.addEventListener("change", updatePreference);
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", cancelMomentum);

    return () => {
      reducedMotion.removeEventListener("change", updatePreference);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", cancelMomentum);
      lenis?.destroy();
    };
  }, []);

  return null;
}
