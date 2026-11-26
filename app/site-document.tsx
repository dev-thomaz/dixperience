import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "lenis/dist/lenis.css";
import { languageTags, localePaths, type Locale } from "./content";
import { SmoothScroll } from "./smooth-scroll";
import { translations } from "./translations";
import "./globals.css";

const siteHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || "dxpweb.com";
const openGraphLocales = { en: "en_US", pt: "pt_PT" };

export function getMetadata(locale: Locale): Metadata {
  const { title, description, hero } = translations[locale];

  return {
    metadataBase: new URL(`https://${siteHost}`),
    title,
    description,
    alternates: {
      canonical: localePaths[locale],
      languages: {
        en: localePaths.en,
        "pt-PT": localePaths.pt,
        "x-default": localePaths.en,
      },
    },
    openGraph: {
      title,
      description,
      siteName: "D!XPERIENCE",
      type: "website",
      url: localePaths[locale],
      locale: openGraphLocales[locale],
      alternateLocale: openGraphLocales[locale === "en" ? "pt" : "en"],
      images: [{
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 675,
        alt: `D!XPERIENCE — ${hero.firstLine} ${hero.secondLine}`,
      }],
    },
  };
}

export function SiteDocument({ locale, children }: Readonly<{ locale: Locale; children: React.ReactNode }>) {
  return (
    <html lang={languageTags[locale]}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
