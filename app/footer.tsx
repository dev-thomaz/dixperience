import Image from "next/image";
import { email, linkedin, navigation, solutions, whatsapp } from "./content";

const explore = navigation.flatMap((item) =>
  item.id === "contact" ? [{ id: "about", label: "About" }, item] : [item],
);

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-columns">
          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore">Explore</h2>
            <ul>
              {explore.map(({ id, label }) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services">Services</h2>
            <ul>
              {Object.entries(solutions).map(([id, { name }]) => (
                <li key={id}><a href={`#service-${id}`}>{name}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-connect">
            <h2 id="footer-connect">Connect</h2>
            <ul>
              <li><a href={`mailto:${email}`}>Email</a></li>
              <li><a href={whatsapp}>WhatsApp</a></li>
              <li><a href={linkedin}>LinkedIn</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-signature">
          <a className="brand-link footer-brand" href="#home">
            <Image src="/brand/wordmark.webp" alt="D!XPERIENCE — Back to top" width={686} height={81} />
          </a>
          <small>© D!XPERIENCE</small>
        </div>
      </div>
    </footer>
  );
}
