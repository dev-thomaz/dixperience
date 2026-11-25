import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "lenis/dist/lenis.css";
import { description } from "./content";
import { SmoothScroll } from "./smooth-scroll";
import "./globals.css";

const title = "D!XPERIENCE — Creative & Digital Consultancy";
const siteHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || "dxpweb.com";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteHost}`),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "D!XPERIENCE",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
