import Image from "next/image";
import { BrandCarousel } from "./brand-carousel";
import { description, email, linkedin, products, solutions, whatsapp } from "./content";
import { FeaturedWork } from "./featured-work";
import { Header } from "./header";
import { HeroMotion } from "./hero-motion";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="hero section-anchor" id="home" aria-labelledby="hero-title" tabIndex={-1}>
          <HeroMotion />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">Personalized<br />Innovation<span className="accent">.</span></h1>
              <p>{description}</p>
              <div className="hero-actions">
                <a className="button button-light" href="#contact">Talk to us</a>
                <a className="hero-work-link" href="#work">View our work</a>
              </div>
            </div>
          </div>
        </section>

        <FeaturedWork />
        <BrandCarousel />

        <section className="solutions section-anchor" id="solutions" aria-labelledby="solutions-title" tabIndex={-1}>
          <div className="shell solutions-layout">
            <div className="section-intro enter">
              <p className="section-label">Solutions</p>
              <h2 id="solutions-title">From strategy<br />to execution<span className="accent">.</span></h2>
              <p>Find the right mix of strategy, design and technology for what you want to build.</p>
            </div>
            <ul className="solution-list enter">
              {solutions.map(({ name, details }) => (
                <li key={name}>
                  <h3>{name}</h3>
                  <p>{details}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="products section-anchor" id="products" aria-labelledby="products-title" tabIndex={-1}>
          <div className="shell">
            <div className="section-intro enter">
              <p className="section-label">Products</p>
              <h2 id="products-title">Digital experiences<br /> built around you<span className="accent">.</span></h2>
            </div>
            <div className="products-layout">
              <div className="product-art enter" aria-hidden="true">
                <Image
                  alt=""
                  src="/brand/symbol.webp"
                  width={320}
                  height={219}
                  sizes="(max-width: 760px) 38vw, (max-width: 1440px) 24vw, 336px"
                />
              </div>
              <ul className="product-list enter">
                {products.map(({ name, details }) => (
                  <li key={name}>
                    <h3>{name}</h3>
                    <p>{details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about" aria-labelledby="about-title">
          <div className="shell about-layout">
            <div className="portrait enter">
              <Image
                src="/brand/diandra-lavareda.webp"
                alt="Diandra Lavareda"
                width={720}
                height={720}
                sizes="(max-width: 560px) 85vw, (max-width: 760px) 38vw, 30vw"
              />
            </div>
            <div className="section-intro enter">
              <p className="section-label">About</p>
              <h2 id="about-title">Meet Diandra<br />Lavareda<span className="accent">.</span></h2>
              <p>
                With over ten years of experience across design, digital marketing and product,
                Diandra brings together creative thinking, user-centred design and business strategy.
              </p>
              <a className="text-link" href={linkedin}>Diandra on LinkedIn</a>
            </div>
          </div>
        </section>

        <section className="contact section-anchor" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
          <div className="shell contact-content enter">
            <p className="section-label">Contact</p>
            <h2 id="contact-title">Let’s talk<span className="accent">.</span></h2>
            <p>Have a project in mind? Tell us what you’d like to create.</p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${email}`}>Email us</a>
              <a className="button button-outline" href={whatsapp}>WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell footer-inner">
          <a className="brand-link footer-brand" href="#home">
            <Image src="/brand/wordmark.webp" alt="D!XPERIENCE — Back to top" width={686} height={81} />
          </a>
          <a className="footer-email" href={`mailto:${email}`}>{email}</a>
          <small>© D!XPERIENCE</small>
        </div>
      </footer>
    </>
  );
}
