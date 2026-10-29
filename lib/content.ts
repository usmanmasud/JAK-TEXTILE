export type Tag = "women" | "men" | "occasion" | "everyday";

export type Fabric = {
  slug: string;
  name: string;
  blurb: string;
  soldAs: string;
  tags: Tag[];
  // Optional real photo in /public/fabrics. Falls back to the drawn swatch.
  image?: string;
};

export const fabrics: Fabric[] = [
  {
    slug: "lace",
    name: "Lace",
    blurb: "Swiss voile, cord, beaded and sequinned lace for weddings, naming ceremonies and big days.",
    soldAs: "Usually 5-yard pieces",
    tags: ["women", "occasion"],
  },
  {
    slug: "ankara",
    name: "Ankara",
    blurb: "Wax and hollandais prints in bold and quiet designs. Good for gowns, shirts, skirts and family uniforms.",
    soldAs: "Usually 6-yard pieces",
    tags: ["women", "men", "everyday"],
  },
  {
    slug: "shadda",
    name: "Shadda / Bazin riche",
    blurb: "Polished damask with a proper sheen. The material of choice for babban riga, kaftans and Sallah.",
    soldAs: "By the yard or full piece",
    tags: ["men", "occasion"],
  },
  {
    slug: "atiku",
    name: "Atiku",
    blurb: "Firm, breathable and easy to tailor. Clean kaftans and senator styles that hold their shape.",
    soldAs: "By the yard",
    tags: ["men", "everyday"],
  },
  {
    slug: "cashmere",
    name: "Cashmere & Senator",
    blurb: "Soft, heavier suiting materials in deep, plain colours for a finished, formal look.",
    soldAs: "By the yard",
    tags: ["men", "everyday", "occasion"],
  },
  {
    slug: "voile",
    name: "Voile",
    blurb: "Light, cool and comfortable in the heat. Plain and embroidered, for everyday wear and linings.",
    soldAs: "By the yard or piece",
    tags: ["women", "men", "everyday"],
  },
  {
    slug: "asooke",
    name: "Aso-oke",
    blurb: "Hand-woven strips for gele, ipele and fila. Available as sets, or made to match your colours.",
    soldAs: "Sold in sets",
    tags: ["women", "men", "occasion"],
  },
  {
    slug: "george",
    name: "George",
    blurb: "Rich wrappers with embroidered and sequinned detail, for traditional weddings and ceremonies.",
    soldAs: "Usually 6-yard pieces",
    tags: ["women", "occasion"],
  },
  {
    slug: "brocade",
    name: "Guinea brocade",
    blurb: "Crisp jacquard with a woven pattern. Holds embroidery well and wears beautifully over time.",
    soldAs: "By the yard or piece",
    tags: ["women", "men", "occasion"],
  },
];

export const filters: { value: Tag | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "women", label: "Women" },
  { value: "men", label: "Men" },
  { value: "occasion", label: "Occasion wear" },
  { value: "everyday", label: "Everyday" },
];

export const yardage = [
  { outfit: "Kaftan (men)", yards: "3 – 4", fabrics: "Atiku, cashmere, voile" },
  { outfit: "Senator / kaftan with trousers", yards: "4 – 5", fabrics: "Cashmere, senator, atiku" },
  { outfit: "Babban riga / agbada set", yards: "8 – 12", fabrics: "Shadda, brocade, lace" },
  { outfit: "Buba & sokoto", yards: "4 – 5", fabrics: "Ankara, brocade, lace" },
  { outfit: "Simple gown", yards: "3 – 4", fabrics: "Ankara, lace, voile" },
  { outfit: "Iro & buba", yards: "5 – 6", fabrics: "Lace, george, ankara" },
  { outfit: "Wrapper only", yards: "2 – 3", fabrics: "George, ankara" },
  { outfit: "Gele", yards: "1 set / 2 yards", fabrics: "Aso-oke, brocade" },
  { outfit: "Child's outfit (5–10 yrs)", yards: "2 – 3", fabrics: "Ankara, voile" },
];

export const faqs = [
  {
    q: "Why don't you show prices on the website?",
    a: "Fabric prices move with the market and with each new shipment. Rather than show a price that may be out of date, we give you today's price when you ask — it takes a minute on WhatsApp.",
  },
  {
    q: "Do you deliver outside the city?",
    a: "Yes. We send orders through trusted transport and courier partners. Delivery cost depends on the location and the weight of the order, and we confirm it before you pay.",
  },
  {
    q: "How do I pay?",
    a: "Bank transfer, POS or cash in the shop. For remote orders we only ask for payment after you have seen photos or a video of the exact fabric.",
  },
  {
    q: "Can I buy less than a full piece?",
    a: "For fabrics sold by the yard, yes. Lace, ankara and george are usually sold as full pieces, but ask — sometimes we can split one.",
  },
  {
    q: "Is there a minimum for wholesale?",
    a: "Wholesale pricing starts from a bundle quantity that depends on the fabric. Send us what you're looking for and we'll give you the trade price and minimum.",
  },
  {
    q: "How should I wash my fabric?",
    a: "Wash ankara and voile in cold water, inside out, before sewing to allow for shrinkage. Lace, george and shadda are best hand-washed gently or dry-cleaned. Dry in the shade to protect the colour.",
  },
];
