"use client";

import { useState } from "react";
import { fabrics, filters, type Tag } from "@/lib/content";
import Swatch from "./Swatch";
import WaLink from "./WaLink";

export default function FabricGrid() {
  const [active, setActive] = useState<Tag | "all">("all");
  const shown = active === "all" ? fabrics : fabrics.filter((f) => f.tags.includes(active));

  return (
    <>
      <div className="filters" role="group" aria-label="Filter fabrics">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter${active === f.value ? " is-active" : ""}`}
            aria-pressed={active === f.value}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="fabric-grid">
        {shown.map((f) => (
          <li className="fabric" key={f.slug}>
            <Swatch kind={f.slug} image={f.image} alt={f.name} />
            <div className="fabric-body">
              <h3>{f.name}</h3>
              <p>{f.blurb}</p>
              <p className="fabric-meta">{f.soldAs}</p>
              <WaLink
                className="fabric-link"
                message={`Hello JAK Textiles, I'm interested in ${f.name.toLowerCase()}. What colours and prices do you have today?`}
              >
                Ask about {f.name.split(/ [/&] /)[0].toLowerCase()} <span aria-hidden="true">→</span>
              </WaLink>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
