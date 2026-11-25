"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  { name: "Mercosur", file: "mercosur", width: 268, height: 161 },
  { name: "UFPA", file: "ufpa", width: 163, height: 232 },
  { name: "Banco do Brasil", file: "banco-do-brasil", width: 307, height: 159 },
  { name: "Capgemini", file: "capgemini", width: 308, height: 80 },
  { name: "CNPq", file: "cnpq", width: 270, height: 94 },
  { name: "Sebrae", file: "sebrae", width: 255, height: 136 },
  { name: "TV Liberal", file: "tv-liberal", width: 207, height: 154 },
  { name: "PCT Guamá", file: "pct-guama", width: 325, height: 129 },
  { name: "Nü", file: "nu", width: 90, height: 152 },
  { name: "Duas Luas", file: "duas-luas", width: 333, height: 136 },
];

export function BrandCarousel() {
  const [paused, setPaused] = useState(false);
  const action = paused ? "Play logo carousel" : "Pause logo carousel";

  return (
    <section
      aria-labelledby="brands-title"
      className="brand-carousel section-anchor"
      data-paused={paused}
      id="brands"
    >
      <div className="shell">
        <div className="brand-carousel-heading">
          <h2 className="section-label" id="brands-title">Selected brands</h2>
          <button
            aria-controls="brand-carousel-track"
            aria-label={action}
            className="brand-carousel-toggle"
            onClick={() => setPaused((value) => !value)}
            title={action}
            type="button"
          >
            <span aria-hidden="true" className={paused ? "play-icon" : "pause-icon"} />
          </button>
        </div>
        <div className="brand-carousel-window">
          <div className="brand-carousel-track" id="brand-carousel-track">
            {["original", "loop"].map((group) => (
              <ul
                aria-hidden={group === "loop" || undefined}
                className="brand-carousel-list"
                key={group}
                role="list"
              >
                {brands.map(({ name, file, width, height }) => (
                  <li key={file}>
                    <Image
                      alt={group === "loop" ? "" : name}
                      src={`/brands/${file}.webp`}
                      width={width}
                      height={height}
                      unoptimized
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
