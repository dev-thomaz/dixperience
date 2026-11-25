"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navigation } from "./content";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = navigation.flatMap(({ id }) => {
      const section = document.getElementById(id);
      return section ? [section] : [];
    });

    let frame = 0;

    const updateHeader = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
      const readingLine = window.innerHeight * 0.35;
      const visibleSection = sections.findLast(
        (section) => section.getBoundingClientRect().top <= readingLine,
      );
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActiveSection(atBottom ? "contact" : (visibleSection?.id ?? "home"));
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const desktop = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", closeWithEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      window.removeEventListener("keydown", closeWithEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const navigateFromMenu = (id: string) => {
    if (!menuOpen) return;
    setMenuOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  };

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-menu-open={menuOpen}
      ref={headerRef}
    >
      <div className="shell header-inner">
        <a className="brand-link" href="#home" onClick={() => navigateFromMenu("home")}>
          <Image
            src="/brand/wordmark.webp"
            alt="D!XPERIENCE — Home"
            width={686}
            height={81}
            sizes="(max-width: 460px) 170px, (max-width: 760px) 224px, (max-width: 1680px) 19vw, 320px"
            preload
          />
        </a>
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          ref={menuButtonRef}
          type="button"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-icon" aria-hidden="true"><i /><i /></span>
        </button>
        <nav aria-label="Main navigation" className="header-nav" id="primary-navigation">
          {navigation.map(({ id, label }) => (
            <a
              aria-current={activeSection === id ? "location" : undefined}
              href={`#${id}`}
              key={id}
              onClick={() => navigateFromMenu(id)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
