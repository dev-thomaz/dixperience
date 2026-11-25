import type { ReactNode } from "react";
import { solutions } from "./content";

type Service = keyof typeof solutions;

const serviceOrder: Service[] = [
  "consulting", "branding", "web-design", "product-design", "marketing", "communication",
];

const icons: Record<Service, ReactNode> = {
  consulting: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  branding: <><path d="M12 3a9 9 0 1 0 0 18h1a1.8 1.8 0 0 0 1.3-3.1 1.8 1.8 0 0 1 1.3-3.1H18a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z" /><path d="M7.7 10.1h.01M10.5 7.3h.01M14.6 7.9h.01M7.6 14h.01" strokeWidth="2.5" /></>,
  "web-design": <><rect x="2.5" y="4.5" width="15" height="11" rx="1.7" /><path d="M6.5 19h6m-3-3.5V19" /><rect x="16.5" y="12.5" width="5" height="8.5" rx="1.3" /></>,
  "product-design": <path d="m4.9 4.3 14 5.2a1 1 0 0 1 .05 1.9l-5.2 2.2-2.2 5.2a1 1 0 0 1-1.9-.05l-5.2-14a.4.4 0 0 1 .45-.45Z" />,
  marketing: <><path d="M3 10.5 21 5v12L3 13.5v-3Zm2 3.4.6 2.9a2.7 2.7 0 0 0 5.2.5l.6-2.1" /></>,
  communication: <><path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-5 3V6a2 2 0 0 1 2-2Z" /><path d="M7 9h10m-10 4h7" /></>,
};

export function Solutions() {
  return (
    <section className="solutions section-anchor" id="solutions" aria-labelledby="solutions-title" tabIndex={-1}>
      <div className="shell">
        <div className="section-intro">
          <h2 id="solutions-title">What we do<span className="accent">.</span></h2>
          <p>Tailored creative and digital solutions for every stage of your business.</p>
        </div>
        <ul className="solution-list">
          {serviceOrder.map((id) => {
            const { name, details } = solutions[id];
            return (
              <li className="section-anchor" id={`service-${id}`} key={id} tabIndex={-1}>
                <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
                  {icons[id]}
                </svg>
                <h3>{name}</h3>
                <p>{details}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
