import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: "70vh", display: "grid", placeItems: "center" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", marginBottom: "1rem" }}>This page has gone off the roll.</h1>
        <p style={{ color: "var(--ink-soft)", marginBottom: "2rem" }}>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link className="btn" href="/">Back to JAK Textiles</Link>
      </div>
    </main>
  );
}
