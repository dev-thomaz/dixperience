import Image from "next/image";

export function FeaturedWork() {
  return (
    <section className="featured-work section-anchor" id="work" aria-labelledby="work-title" tabIndex={-1}>
      <div className="shell">
        <div className="work-layout">
          <div className="work-intro section-intro">
            <p className="section-label">Featured work</p>
            <h2 id="work-title">Visit South<br /> America<span className="accent">.</span></h2>
            <div className="work-summary">
              <p>
                A tourism portal for a joint initiative across six South American countries.
                Travellers can discover destinations, explore by interest and start planning a trip.
              </p>
              <a className="button button-dark" href="https://visitsouthamerica.travel/">
                Visit the live site
              </a>
            </div>
          </div>

          <div className="work-visual">
            <div className="work-desktop">
              <Image
                alt="Visit South America homepage showing a traveller in a mountain landscape."
                src="/work/visit-south-america-desktop.webp"
                width={1440}
                height={880}
                sizes="(max-width: 620px) 84vw, (max-width: 900px) 74vw, (max-width: 1500px) 46vw, 740px"
              />
            </div>
            <div className="work-mobile">
              <Image
                alt="Mobile view of the Quebrada de Humahuaca experience in Argentina."
                src="/work/visit-south-america-experience.webp"
                width={384}
                height={732}
                sizes="(max-width: 620px) 1px, (max-width: 900px) 18vw, (max-width: 1500px) 12vw, 190px"
              />
            </div>
          </div>
        </div>

        <dl className="work-facts">
          <div>
            <dt>Scope</dt>
            <dd>Public website redevelopment</dd>
          </div>
          <div>
            <dt>Key features</dt>
            <dd>Destination guides, themed experiences and a travel planner</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>Spanish, English and Portuguese</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
