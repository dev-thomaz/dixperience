"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { languageTags, localePaths, locales, navigationIds, sectionIds, type Locale } from "./content";
import type { SiteCopy } from "./translations";

type HeaderProps = Pick<SiteCopy, "navigation" | "accessibility"> & { locale: Locale };

export function Header({ locale, navigation, accessibility }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = sectionIds.flatMap((id) => {
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

    const desktop = window.matchMedia("(min-width: 1061px)");
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

  const navSection = activeSection === "brands" ? "work" : activeSection === "about" ? "products" : activeSection;
  const sectionHash = activeSection === "home" ? "" : `#${activeSection}`;

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
            alt={accessibility.home}
            width={686}
            height={81}
            sizes="(max-width: 460px) 170px, (max-width: 1060px) 224px, (max-width: 1680px) 19vw, 320px"
            preload
          />
        </a>
        <nav aria-label={accessibility.navigation} className="header-nav" id="primary-navigation">
          {navigationIds.map((id) => (
            <a
              aria-current={navSection === id ? "location" : undefined}
              href={`#${id}`}
              key={id}
              onClick={() => navigateFromMenu(id)}
            >
              {navigation[id]}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <nav aria-label={accessibility.languages} className="language-switch">
            {locales.map((code) => {
              const name = code === "en" ? "English" : "Português";
              return code === locale ? (
                <span aria-current="page" aria-label={name} key={code} lang={languageTags[code]}>{code}</span>
              ) : (
                <a
                  aria-label={name}
                  href={localePaths[code] + sectionHash}
                  hrefLang={languageTags[code]}
                  key={code}
                  lang={languageTags[code]}
                  onClick={(event) => {
                    if (window.location.hash) event.currentTarget.hash = window.location.hash;
                  }}
                >
                  {code}
                </a>
              );
            })}
          </nav>
          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            ref={menuButtonRef}
            type="button"
          >
            <span>{menuOpen ? accessibility.close : accessibility.menu}</span>
            <span className="menu-icon" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>
    </header>
  );
}
