import { getMetadata, SiteDocument } from "../site-document";

export const metadata = getMetadata("pt");

export default function PortugueseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="pt">{children}</SiteDocument>;
}
