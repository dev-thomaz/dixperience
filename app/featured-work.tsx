import Image from "next/image";
import type { SiteCopy } from "./translations";

export function FeaturedWork({ copy }: { copy: SiteCopy["work"] }) {
  return (
    <section className="featured-work section-anchor" id="work" aria-labelledby="work-title" tabIndex={-1}>
      <div className="shell">
        <div className="work-layout">
          <div className="work-intro section-intro">
            <p className="section-label">{copy.label}</p>
            <h2 id="work-title">Visit South<br /> America<span className="accent">.</span></h2>
            <div className="work-summary">
              <p>{copy.summary}</p>
              <a className="button button-dark" href="https://visitsouthamerica.travel/">
                {copy.visit}
              </a>
            </div>
          </div>

          <div className="work-visual">
            <div className="work-desktop">
              <Image
                alt={copy.desktopAlt}
                src="/work/visit-south-america-desktop.webp"
                width={1440}
                height={880}
                sizes="(max-width: 620px) 84vw, (max-width: 900px) 74vw, (max-width: 1500px) 46vw, 740px"
              />
            </div>
            <div className="work-mobile">
              <Image
                alt={copy.mobileAlt}
                src="/work/visit-south-america-experience.webp"
                width={384}
                height={732}
                sizes="(max-width: 620px) 1px, (max-width: 900px) 18vw, (max-width: 1500px) 12vw, 190px"
              />
            </div>
          </div>
        </div>

        <dl className="work-facts">
          {copy.facts.map(({ label, value }) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
