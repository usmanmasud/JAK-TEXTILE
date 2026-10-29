// ─────────────────────────────────────────────────────────────
// Business details — edit these values and the whole site updates.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: "JAK Textiles",
  url: "https://www.jaktextiles.com",
  description:
    "JAK Textiles sells quality lace, ankara, shadda, atiku, cashmere, voile, aso-oke and more. Retail and wholesale, sold by the yard or by the piece, with delivery available.",

  // WhatsApp number in international format, digits only (no +, spaces or leading 0).
  whatsapp: "2348000000000",
  phoneDisplay: "+234 800 000 0000",
  phoneHref: "+2348000000000",
  email: "hello@jaktextiles.com",

  address: "Shop address, Market, City, State",
  hours: "Monday – Saturday, 8:00am – 6:00pm",
  hoursShort: "Mon – Sat, 8am – 6pm",

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
} as const;

export function waLink(message = `Hello ${site.name},`) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${site.address}`,
)}`;
