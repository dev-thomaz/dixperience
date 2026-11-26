import Image from "next/image";
import { whatsappLink } from "./content";
import type { SiteCopy } from "./translations";

const approachCards = [
  { id: "launch", tone: "violet" },
  { id: "growth", tone: "cyan" },
  { id: "tailored", tone: "pink" },
] as const;

const productCards = [
  { id: "identity", tone: "violet" },
  { id: "landing", tone: "cyan" },
  { id: "social", tone: "pink" },
  { id: "diagnosis", tone: "blue" },
] as const;

const layers = "m12 2.8 9.2 4.7-9.2 4.7-9.2-4.7L12 2.8Zm-9.2 9.4 9.2 4.7 9.2-4.7M2.8 16.9l9.2 4.7 9.2-4.7";
const icons = {
  launch: "M8.5 15.5c-1.5-.5-3.2-.6-4.5-.2l1.8-3.8 3.4-1M8.5 15.5l2 2c.5 1.5.6 3.2.2 4.5l3.8-1.8 1-3.4M8.5 15.5C11 9 15 4.2 21 3c-.5 6.4-4.4 11.3-10.5 14.5M5.8 17.9C4.2 18 3.3 19.3 3 21c1.8-.2 3.2-1.1 3.4-2.7M17 7.5a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z",
  growth: "M3 20.5h18M5.5 20.5v-6h3v6m2.5 0v-10h3v10m2.5 0v-15h3v15",
  tailored: layers,
  identity: "m14.5 4.3 5.2 5.2-4.1 7.9L4 20l2.6-11.6 7.9-4.1Zm-.1.1 2-2 5.2 5.2-2 2M4 20l6-6m2.1-2.2a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z",
  landing: "M12 19H4a1.5 1.5 0 0 1-1.5-1.5v-12A1.5 1.5 0 0 1 4 4h16a1.5 1.5 0 0 1 1.5 1.5V12M2.5 8h19m-16-2h.1m2.4 0h.1m2.4 0h.1M15 13.5l6 3-2.7.7-.8 2.8-2.5-6.5Z",
  social: "M4 10h4l7-4v12l-7-4H4a2 2 0 0 1 0-4Zm4 4 1 3.5a1.3 1.3 0 0 1-2.5.6L5.4 14m12.6-4 2-1m-1.5 3h3m-3.5 2 2 1",
  diagnosis: layers,
};

function OfferIcon({ name }: { name: keyof typeof icons }) {
  return (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55" viewBox="0 0 24 24">
      <path d={icons[name]} />
    </svg>
  );
}

type ContactOffer = { discussOffer: (name: string) => string };

export function Approach({ copy, discussOffer }: { copy: SiteCopy["approach"] } & ContactOffer) {
  return (
    <section className="approach section-anchor" id="approach" aria-labelledby="approach-title" tabIndex={-1}>
      <div className="approach-intro">
        <div className="shell section-intro">
          <h2 id="approach-title">{copy.title}<span className="accent">.</span></h2>
          <p>{copy.intro}</p>
        </div>
      </div>
      <div className="offers-section approach-content">
        <div className="shell">
          <ul className="offers-grid approach-grid">
            {approachCards.map(({ id, tone }) => {
              const { name, tags, details, fit, action } = copy.items[id];
              return (
                <li className="offer-card approach-card" data-tone={tone} key={id}>
                  <ul aria-label={name} className="offer-tags">
                    {tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <div className="offer-heading">
                    <span className="offer-icon"><OfferIcon name={id} /></span>
                    <h3>{name}</h3>
                  </div>
                  <p>{details}</p>
                  <div className="offer-fit">
                    <p><strong>{copy.fit}</strong></p>
                    <ul>
                      {fit.map((line) => <li key={line}>{line}</li>)}
                    </ul>
                  </div>
                  <a className="button offer-button" href={discussOffer(name)}>{action}</a>
                </li>
              );
            })}
          </ul>
          <div className="discovery-call">
            <h3>{copy.discovery.question}<br />{" "}{copy.discovery.invitation}</h3>
            <a className="button button-light" href={whatsappLink(copy.discovery.message)}>
              {copy.discovery.action}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Products({ copy, discussOffer }: { copy: SiteCopy["products"] } & ContactOffer) {
  return (
    <section className="offers-section products section-anchor" id="products" aria-labelledby="products-title" tabIndex={-1}>
      <div className="shell">
        <div className="products-intro">
          <div className="section-intro offers-intro">
            <p className="section-label">{copy.label}</p>
            <h2 id="products-title">{copy.title}<span className="accent">.</span></h2>
            <p>{copy.intro}</p>
          </div>
          <Image
            alt=""
            className="products-mark"
            height={512}
            sizes="(max-width: 620px) 54px, (max-width: 1060px) 94px, 128px"
            src="/brand/products-mark.webp"
            width={512}
          />
        </div>
        <ul className="offers-grid product-grid">
          {productCards.map(({ id, tone }) => {
            const { name, details } = copy.items[id];
            return (
              <li className="offer-card product-card" data-tone={tone} key={id}>
                <span className="offer-icon"><OfferIcon name={id} /></span>
                <h3>{name}</h3>
                <p>{details}</p>
                <a aria-label={`${copy.action} — ${name}`} className="text-link offer-link" href={discussOffer(name)}>
                  {copy.action}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
