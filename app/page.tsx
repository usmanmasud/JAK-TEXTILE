import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FabricGrid from "@/components/FabricGrid";
import EnquiryForm from "@/components/EnquiryForm";
import Swatch from "@/components/Swatch";
import WaLink from "@/components/WaLink";
import { faqs, yardage } from "@/lib/content";
import { mapLink, site } from "@/lib/site";

const stripNames = [
  "Swiss lace", "Cord lace", "Ankara", "Bazin riche", "Atiku", "Cashmere",
  "Senator", "Voile", "Aso-oke", "George", "Guinea brocade",
];

function SectionHead({ index, title, intro }: { index: string; title: string; intro?: React.ReactNode }) {
  return (
    <header className="section-head">
      <div>
        <p className="eyebrow">{index}</p>
        <h2>{title}</h2>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}

export default function Home() {
  return (
    <>
      <div className="notice">
        <p>
          Retail &amp; wholesale · Sold by the yard or by the piece ·{" "}
          <WaLink message="Hello JAK Textiles, I'd like to ask about delivery.">Ask about delivery</WaLink>
        </p>
      </div>

      <Header />

      <main id="main">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Fabric house · Retail &amp; wholesale</p>
              <h1>
                Good fabric,
                <br /> measured <em>honestly.</em>
              </h1>
              <p className="lede">
                Lace for the wedding, shadda for Sallah, ankara for every other day. JAK Textiles stocks the
                materials people actually sew with — and we&apos;ll tell you straight how many yards you need.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#fabrics">Browse fabrics</a>
                <WaLink className="btn btn-ghost" message="Hello JAK Textiles, I'd like to see what's in stock.">
                  See today&apos;s stock
                </WaLink>
              </div>
              <dl className="hero-facts">
                <div><dt>Sold</dt><dd>By the yard &amp; by the piece</dd></div>
                <div><dt>For</dt><dd>Individuals, tailors &amp; boutiques</dd></div>
                <div><dt>Open</dt><dd>{site.hoursShort}</dd></div>
              </dl>
            </div>

            <div className="hero-book" aria-label="Fabric sample book">
              {[
                { kind: "lace", no: "014", label: "Swiss voile lace" },
                { kind: "ankara", no: "102", label: "Wax print" },
                { kind: "shadda", no: "057", label: "Bazin riche" },
                { kind: "asooke", no: "230", label: "Aso-oke" },
              ].map((s, i) => (
                <figure className={`sample sample--${i + 1}`} key={s.kind}>
                  <Swatch kind={s.kind} />
                  <figcaption><span>No. {s.no}</span> {s.label}</figcaption>
                </figure>
              ))}
              <p className="hero-note">
                Colours on screen are a guide. Ask us for a photo or video of the actual roll before you buy.
              </p>
            </div>
          </div>
        </section>

        <div className="strip" aria-hidden="true">
          <div className="strip-track">
            {[...stripNames, ...stripNames].map((n, i) => (
              <span key={i}>{n}</span>
            ))}
          </div>
        </div>

        {/* Fabrics */}
        <section className="section" id="fabrics">
          <div className="wrap">
            <SectionHead
              index="01 — What we stock"
              title="The fabrics"
              intro="Stock changes weekly, so prices are given on request. Tap any fabric to ask about colours, quality grades and today's price."
            />
            <FabricGrid />
          </div>
        </section>

        {/* How to order */}
        <section className="section section--ink" id="how-to-order">
          <div className="wrap">
            <SectionHead
              index="02 — Ordering"
              title="How to order"
              intro="Walk into the shop, or order from wherever you are. Either way, you see the fabric before you pay."
            />
            <ol className="steps">
              <li>
                <span className="step-no">1</span>
                <h3>Tell us what you need</h3>
                <p>Send the fabric type, colour, occasion and a style picture if you have one. Not sure? Describe the outfit and we&apos;ll suggest options.</p>
              </li>
              <li>
                <span className="step-no">2</span>
                <h3>See the real fabric</h3>
                <p>We send clear photos or a short video of the actual roll in daylight, with the price and quantity, so there are no surprises.</p>
              </li>
              <li>
                <span className="step-no">3</span>
                <h3>Pay and receive</h3>
                <p>Pay by bank transfer or in person. Collect from the shop, or we arrange delivery to your address and send tracking details.</p>
              </li>
            </ol>
            <div className="steps-cta">
              <WaLink className="btn btn-light" message="Hello JAK Textiles, I'd like to place an order. Here's what I need:">
                Start an order on WhatsApp
              </WaLink>
              <p>We reply during opening hours.</p>
            </div>
          </div>
        </section>

        {/* Wholesale */}
        <section className="section" id="wholesale">
          <div className="wrap wholesale-grid">
            <div className="wholesale-copy">
              <p className="eyebrow">03 — For the trade</p>
              <h2>Wholesale for tailors, boutiques and resellers</h2>
              <p>
                If you sew or sell for a living, buy from us in bulk at trade prices. We keep regular customers
                informed when new stock lands, so you see it before it goes on the shelf.
              </p>
              <ul className="ticks">
                <li>Trade pricing on bundles and full bales</li>
                <li>First look at new arrivals</li>
                <li>Matched colours for aso-ebi and family uniforms</li>
                <li>Waybill and delivery arranged for out-of-town orders</li>
              </ul>
              <WaLink className="btn" message="Hello JAK Textiles, I'd like to ask about wholesale prices.">
                Ask for the wholesale list
              </WaLink>
            </div>

            <aside className="asoebi">
              <h3>Planning aso-ebi?</h3>
              <p>
                Tell us the number of guests and the colours. We&apos;ll source enough of the same batch so every
                outfit matches, and can package each person&apos;s share separately.
              </p>
              <dl>
                <div><dt>You send</dt><dd>Guest count, colours, budget, date</dd></div>
                <div><dt>We send</dt><dd>Options, total cost, ready date</dd></div>
              </dl>
              <WaLink
                className="text-link"
                message={"Hello JAK Textiles, I'm planning aso-ebi.\nNumber of guests: \nColours: \nDate: "}
              >
                Get an aso-ebi quote <span aria-hidden="true">→</span>
              </WaLink>
            </aside>
          </div>
        </section>

        {/* Yardage */}
        <section className="section section--paper" id="yardage">
          <div className="wrap">
            <SectionHead
              index="04 — Before you buy"
              title="How many yards do I need?"
              intro="A rough guide for an average adult. Tall builds, long trains and full sleeves need more, so always confirm with your tailor."
            />
            <div className="table-wrap">
              <table className="yardage">
                <caption className="visually-hidden">Approximate fabric needed per outfit</caption>
                <thead>
                  <tr>
                    <th scope="col">Outfit</th>
                    <th scope="col">Approx. yards</th>
                    <th scope="col">Good fabrics for it</th>
                  </tr>
                </thead>
                <tbody>
                  {yardage.map((r) => (
                    <tr key={r.outfit}>
                      <th scope="row">{r.outfit}</th>
                      <td>{r.yards}</td>
                      <td>{r.fabrics}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="wrap about-grid">
            <div className="about-quote">
              <Swatch kind="brocade" />
              <blockquote>
                <p>“If the fabric isn&apos;t good enough for our own family, it doesn&apos;t go on our shelf.”</p>
              </blockquote>
            </div>
            <div className="about-copy">
              <p className="eyebrow">05 — About JAK</p>
              <h2>A fabric shop, run the old-fashioned way</h2>
              <p>
                JAK Textiles is a family fabric business. We buy carefully, keep our prices fair, and take the time
                to help each customer — whether you&apos;re buying two yards for a child&apos;s dress or a full bale
                for your boutique.
              </p>
              <p>
                Most of our customers come back because we tell them the truth about a fabric: how it handles, how it
                washes, and whether it suits what they want to make.
              </p>
              <ul className="values">
                <li><strong>Checked stock.</strong> Every roll is inspected for flaws and colour before it&apos;s sold.</li>
                <li><strong>Fair measure.</strong> A yard is a full yard, measured in front of you.</li>
                <li><strong>Honest advice.</strong> If a cheaper fabric will do the job, we&apos;ll say so.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--paper" id="faq">
          <div className="wrap faq-grid">
            <div>
              <p className="eyebrow">06 — Questions</p>
              <h2>Often asked</h2>
              <p className="section-intro">
                Something else?{" "}
                <WaLink className="text-link" message="Hello JAK Textiles, I have a question:">Message us</WaLink>.
              </p>
            </div>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section className="section section--ink" id="visit">
          <div className="wrap visit-grid">
            <div className="visit-info">
              <p className="eyebrow">07 — Find us</p>
              <h2>Visit the shop</h2>
              <p className="visit-lede">Come and feel the fabric. Bring your style picture and we&apos;ll help you choose.</p>
              <dl className="contact-list">
                <div>
                  <dt>Address</dt>
                  <dd><a href={mapLink} target="_blank" rel="noopener noreferrer">{site.address}</a></dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{site.hours}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd><a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a></dd>
                </div>
                <div>
                  <dt>WhatsApp</dt>
                  <dd><WaLink>{site.phoneDisplay}</WaLink></dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
                </div>
              </dl>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <Footer />

      <WaLink className="wa-float" aria-label="Chat with JAK Textiles on WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.16l-.3-.18-3.07.9.92-2.98-.2-.31a8.2 8.2 0 1 1 6.85 3.73Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.29.19-.53.07a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.77 4.77 0 0 0 1 2.53 10.9 10.9 0 0 0 4.18 3.7c1.56.67 2.17.73 2.95.61.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z"
          />
        </svg>
      </WaLink>
    </>
  );
}

