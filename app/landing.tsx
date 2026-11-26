import Image from "next/image";
import { email, linkedin, whatsappLink, type Locale } from "./content";
import { ExternalLink } from "./external-link";
import { FeaturedWork } from "./featured-work";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroMotion } from "./hero-motion";
import { Approach, Products } from "./offers";
import { SelectedBrands } from "./selected-brands";
import { Solutions } from "./solutions";
import { translations } from "./translations";

export function Landing({ locale }: { locale: Locale }) {
  const copy = translations[locale];
  const whatsapp = whatsappLink(copy.contact.generalMessage);
  const discussOffer = (name: string) => whatsappLink(copy.contact.offerMessage.replace("{offer}", name));

  return (
    <>
      <a className="skip-link" href="#main">{copy.accessibility.skip}</a>
      <Header locale={locale} navigation={copy.navigation} accessibility={copy.accessibility} />
      <main id="main" tabIndex={-1}>
        <section className="hero section-anchor" id="home" aria-labelledby="hero-title" tabIndex={-1}>
          <HeroMotion play={copy.accessibility.play} pause={copy.accessibility.pause} />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">{copy.hero.firstLine}<br />{" "}{copy.hero.secondLine}<span className="accent">.</span></h1>
              <p>{copy.description}</p>
              <div className="hero-actions">
                <a className="button button-light" href="#contact">{copy.hero.talk}</a>
                <a className="hero-work-link" href="#work">{copy.hero.work}</a>
              </div>
            </div>
          </div>
        </section>

        <Solutions copy={copy.solutions} />
        <FeaturedWork copy={copy.work} />
        <SelectedBrands title={copy.brands} close={copy.accessibility.close} />
        <Approach copy={copy.approach} discussOffer={discussOffer} />
        <Products copy={copy.products} discussOffer={discussOffer} />

        <section className="about section-anchor" id="about" aria-labelledby="about-title" tabIndex={-1}>
          <div className="shell about-layout">
            <div className="portrait enter">
              <Image
                src="/brand/diandra-lavareda.webp"
                alt="Diandra Lavareda"
                width={800}
                height={800}
                sizes="(max-width: 560px) 85vw, (max-width: 760px) 38vw, 30vw"
              />
            </div>
            <div className="section-intro enter">
              <p className="section-label">{copy.navigation.about}</p>
              <h2 id="about-title">{copy.about.firstLine}<br /> Lavareda<span className="accent">.</span></h2>
              <p>{copy.about.description}</p>
              <ExternalLink className="text-link" href={linkedin}>{copy.about.linkedin}</ExternalLink>
            </div>
          </div>
        </section>

        <section className="contact section-anchor" id="contact" aria-labelledby="contact-title" tabIndex={-1}>
          <div className="shell contact-content enter">
            <p className="section-label">{copy.navigation.contact}</p>
            <h2 id="contact-title">{copy.contact.title}<span className="accent">.</span></h2>
            <p>{copy.contact.intro}</p>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${email}`}>{copy.contact.email}</a>
              <ExternalLink className="button button-outline" href={whatsapp}>WhatsApp</ExternalLink>
            </div>
          </div>
        </section>
      </main>
      <Footer copy={copy} whatsapp={whatsapp} />
      <ExternalLink
        aria-label={copy.accessibility.whatsapp}
        className="floating-whatsapp"
        href={whatsapp}
      >
        <Image alt="" src="/brand/whatsapp.png" width={28} height={28} unoptimized />
      </ExternalLink>
    </>
  );
}
