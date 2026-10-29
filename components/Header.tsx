"use client";

import { useEffect, useState } from "react";
import WaLink from "./WaLink";

const links = [
  { href: "#fabrics", label: "Fabrics" },
  { href: "#how-to-order", label: "How to order" },
  { href: "#wholesale", label: "Wholesale" },
  { href: "#yardage", label: "Yardage guide" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Visit us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label="JAK Textiles, home">
          <span className="brand-mark" aria-hidden="true">JAK</span>
          <span className="brand-name">Textiles</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="visually-hidden">Menu</span>
        </button>

        <nav className={`site-nav${open ? " is-open" : ""}`} id="site-nav" aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <WaLink className="btn btn-small" message="Hello JAK Textiles, I'd like to place an order.">
            Order on WhatsApp
          </WaLink>
        </nav>
      </div>
    </header>
  );
}
