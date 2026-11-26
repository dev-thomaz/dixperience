import Image from "next/image";
import { email, linkedin } from "./content";
import { ExternalLink } from "./external-link";
import type { SiteCopy } from "./translations";

const explore = ["home", "solutions", "work", "approach", "products", "about", "contact"] as const;

export function Footer({ copy, whatsapp }: { copy: SiteCopy; whatsapp: string }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-columns">
          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore">{copy.footer.explore}</h2>
            <ul>
              {explore.map((id) => (
                <li key={id}><a href={`#${id}`}>{copy.navigation[id]}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services">{copy.footer.services}</h2>
            <ul>
              {Object.entries(copy.solutions.items).map(([id, { name }]) => (
                <li key={id}><a href={`#service-${id}`}>{name}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-connect">
            <h2 id="footer-connect">{copy.footer.connect}</h2>
            <ul>
              <li><a href={`mailto:${email}`}>{copy.footer.email}</a></li>
              <li><ExternalLink href={whatsapp}>WhatsApp</ExternalLink></li>
              <li><ExternalLink href={linkedin}>LinkedIn</ExternalLink></li>
            </ul>
          </nav>
        </div>
        <div className="footer-signature">
          <a className="brand-link footer-brand" href="#home">
            <Image src="/brand/wordmark.webp" alt={copy.accessibility.backToTop} width={686} height={81} />
          </a>
          <small>{copy.footer.rights}</small>
        </div>
      </div>
    </footer>
  );
}
