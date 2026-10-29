import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <a className="brand brand--footer" href="#top" aria-label="JAK Textiles, back to top">
            <span className="brand-mark" aria-hidden="true">JAK</span>
            <span className="brand-name">Textiles</span>
          </a>
          <p className="footer-tag">Quality fabrics, retail &amp; wholesale.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            <li><a href="#fabrics">Fabrics</a></li>
            <li><a href="#how-to-order">How to order</a></li>
            <li><a href="#wholesale">Wholesale</a></li>
            <li><a href="#yardage">Yardage guide</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#visit">Contact</a></li>
          </ul>
        </nav>
        <ul className="footer-social">
          <li><a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href={site.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></li>
        </ul>
      </div>
      <div className="wrap footer-base">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
