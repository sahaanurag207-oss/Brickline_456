import { useState } from "react";
import { ArrowUpRight, Menu, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function emailLink(subject) {
  return `mailto:hello@brickline.com?subject=${encodeURIComponent(subject)}`;
}

export function Brand({ light = false }) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} to="/" aria-label="Brickline home">
      BRICKLINE<span>.</span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerClass = `site-header${overlay ? "" : " site-header-page"}${menuOpen ? " menu-open" : ""}`;

  return (
    <>
      <header className={headerClass}>
        <button
          type="button"
          className="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={21} />
        </button>

        <nav className="nav-left" aria-label="Main navigation">
          <Link to="/#projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About us</Link>
        </nav>

        <Brand light />

        <nav className="nav-right" aria-label="Property navigation">
          <Link to="/properties">Properties</Link>
          <a href={emailLink("Financing and loan consultation")}>Loan</a>
          <Link className="nav-cta" to="/requirements">Contact us</Link>
        </nav>
      </header>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <Link to="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
        <a href={emailLink("Financing and loan consultation")} onClick={() => setMenuOpen(false)}>Loan</a>
        <Link to="/properties" onClick={() => setMenuOpen(false)}>Properties</Link>
        <Link to="/requirements" onClick={() => setMenuOpen(false)}>Contact us</Link>
      </nav>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Brand light />
          <p>Thoughtful places.<br />A better way to live.</p>
          <a href="mailto:hello@brickline.com">hello@brickline.com <ArrowUpRight size={14} /></a>
        </div>

        <div className="footer-col">
          <span>Explore</span>
          <Link to="/properties">Our properties</Link>
          <Link to="/properties">New developments</Link>
          <Link to="/about">Our approach</Link>
        </div>

        <div className="footer-col">
          <span>Company</span>
          <Link to="/about">About Brickline</Link>
          <Link to="/services">Our services</Link>
          <Link to="/requirements">Share your requirements</Link>
        </div>

        <Link className="footer-note" to="/#top">
          <span>Find a place that<br />feels like yours.</span>
          <MoveUpRight size={19} />
        </Link>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Brickline. All rights reserved.</span>
        <div>
          <a href="mailto:hello@brickline.com?subject=Website%20enquiry">Contact</a>
          <span>Made for living well.</span>
        </div>
      </div>
    </footer>
  );
}
