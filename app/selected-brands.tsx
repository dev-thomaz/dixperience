"use client";

import Image from "next/image";
import { useRef, useState } from "react";

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

export function SelectedBrands() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <section aria-labelledby="brands-title" className="selected-brands section-anchor" id="brands">
      <div className="shell">
        <h2 className="section-label" id="brands-title">Selected brands</h2>
        <ul className="brand-grid">
          {brands.map((brand) => (
            <li key={brand.file}>
              <button
                aria-haspopup="dialog"
                aria-label={brand.name}
                className="brand-tile"
                onClick={(event) => {
                  opener.current = event.currentTarget;
                  setSelectedBrand(brand.name);
                  dialog.current?.showModal();
                }}
                type="button"
              >
                <Image
                  alt=""
                  src={`/brands/${brand.file}.webp`}
                  width={brand.width}
                  height={brand.height}
                  unoptimized
                />
                <span aria-hidden="true" className="brand-tile-plus">+</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        aria-labelledby="brand-dialog-title"
        className="brand-dialog"
        data-lenis-prevent
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => opener.current?.focus({ preventScroll: true })}
        ref={dialog}
      >
        <div className="brand-dialog-content">
          <button
            aria-label="Close"
            autoFocus
            className="brand-dialog-close"
            onClick={() => dialog.current?.close()}
            type="button"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height={20}
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2.25}
              viewBox="0 0 24 24"
              width={20}
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <h3 id="brand-dialog-title">{selectedBrand}</h3>
        </div>
      </dialog>
    </section>
  );
}
