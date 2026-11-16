import React, { useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Globe2,
  Home,
  LockKeyhole,
  Menu,
  MoveUpRight,
  Phone,
  Quote,
  Sparkles,
} from "lucide-react";
import { heroSlides, projects, showcaseProjects, testimonials, photos } from "../data/siteData";

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? " brand-light" : ""}`} href="#top" aria-label="Brickline home">
      BRICKLINE<span>.</span>
    </a>
  );
}

function SectionHeading({ eyebrow, children, action }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{children}</h2>
      </div>
      {action && (
        <a className="text-link" href="#projects">
          {action} <ArrowUpRight size={15} strokeWidth={1.7} />
        </a>
      )}
    </div>
  );
}

function emailLink(subject) {
  return `mailto:hello@brickline.com?subject=${encodeURIComponent(subject)}`;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`site-header${menuOpen ? " menu-open" : ""}`}>
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
          <a href="#projects">Projects</a>
          <a href="#highlights">Services</a>
          <a href="#about">About us</a>
        </nav>

        <Brand light />

        <nav className="nav-right" aria-label="Property navigation">
          <a href="#projects">Properties</a>
          <a href={emailLink("Financing and loan consultation")}>Loan</a>
          <a className="nav-cta" href="#contact">Contact us</a>
        </nav>
      </header>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#highlights" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
        <a href={emailLink("Financing and loan consultation")} onClick={() => setMenuOpen(false)}>Loan</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact us</a>
      </nav>
    </>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const active = heroSlides[activeSlide];
  const slideTitle = active.title.split("\n");

  const showPrevious = () => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  const showNext = () => setActiveSlide((current) => (current + 1) % heroSlides.length);

  return (
    <section className="hero" id="top" style={{ backgroundImage: `url("${active.background}")` }}>
      <div className="hero-shade" />
      <Header />

      <div className="hero-copy">
        <span className="pill pill-light">{active.badge}</span>
        <h1>
          {slideTitle.map((line, index) => (
            <React.Fragment key={`${line}-${index}`}>
              {line}
              {index < slideTitle.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </h1>
        <p>{active.body}</p>
        <a href="#projects" className="button button-white">
          Find property <ChevronRight size={15} />
        </a>
      </div>

      <span className="hero-tag">
        <Sparkles size={13} /> {active.tag}
      </span>

      <div className="hero-bottom">
        <a className="scroll-cue" href="#highlights"><ArrowDown size={14} /> Scroll to explore</a>

        <div className="hero-pagination">
          <button type="button" aria-label="Previous slide" onClick={showPrevious}><ArrowLeft size={15} /></button>
          <span className="pagination-line"><i style={{ width: `${((activeSlide + 1) / heroSlides.length) * 100}%` }} /></span>
          <button type="button" aria-label="Next slide" onClick={showNext}><ArrowRight size={15} /></button>
        </div>

        <div className="hero-caption">{active.caption}</div>
        <span className="hero-index">
          {String(activeSlide + 1).padStart(2, "0")} <span>/</span> {String(heroSlides.length).padStart(2, "0")}
        </span>
      </div>

      <a
        className="consultation-card"
        href={emailLink("Book a property consultation")}
        aria-label="Book a property consultation"
      >
        <span className="consultation-top"><Phone size={15} /> Book a consultation</span>
        <img src={photos.portrait} alt="" />
        <span className="consultant-label"><b>Talk to an expert</b><small>We're here to help</small></span>
      </a>
    </section>
  );
}

function HighlightStrip() {
  const highlights = [
    { Icon: Home, title: "Move-in-ready\ncomfort", body: "Thoughtfully finished homes make settling in simple, with inviting spaces and practical details ready from day one." },
    { Icon: LockKeyhole, title: "Peace of mind,\nbuilt in", body: "Secure access and carefully considered building features help make daily life feel comfortable and protected." },
    { Icon: Globe2, title: "Connected to\nwhat matters", body: "Well-chosen neighborhoods bring everyday essentials, vibrant communities, and new opportunities within easy reach." },
  ];

  return (
    <section className="highlights section-pad" id="highlights">
      <div className="highlights-top">
        <div>
          <span className="eyebrow">The Brickline difference</span>
          <h2>Outstanding highlights</h2>
        </div>
        <a className="text-link" href="#about">Get started <ArrowUpRight size={15} /></a>
      </div>

      <div className="highlight-grid">
        {highlights.map(({ Icon, title, body }, index) => (
          <article className="highlight-card" key={`${title}-${index}`}>
            <div className="highlight-icon"><Icon size={20} strokeWidth={1.45} /></div>
            <span className="highlight-number">0{index + 1}</span>
            <h3>
              {title.split("\n").map((line, lineIndex) => (
                <React.Fragment key={`${line}-${lineIndex}`}>
                  {line}
                  {lineIndex < title.split("\n").length - 1 ? <br /> : null}
                </React.Fragment>
              ))}
            </h3>
            <p>{body}</p>
            <a href={emailLink(`Learn more about ${title.replace("\n", " ")}`)} className="learn-link">Learn more <ArrowUpRight size={12} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="featured section-pad" id="projects">
      <div className="center-heading">
        <span className="eyebrow">Recent projects</span>
        <h2><i /> Redefining urban living <i /></h2>
        <p>A considered collection of places to live, work, and belong.</p>
      </div>

      <div className="featured-grid">
        {projects.map((project, index) => (
          <article className={`featured-card featured-card-${index + 1}`} key={project.name}>
            <a className="project-image" href={emailLink(`Property details: ${project.name}`)}>
              <img src={project.image} alt={project.name} />
              {index === 1 && <span className="image-chip"><span>●</span> Explore virtually</span>}
              <span className="image-arrow"><ArrowUpRight size={17} /></span>
            </a>

            <div className="project-card-copy">
              <span className="project-status">{project.status}</span>
              <h3>{project.name}</h3>
              <span className="project-place">{project.place}</span>
              <a href={emailLink(`Property details: ${project.name}`)} className="button button-orange button-full">
                View details <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InProgress() {
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const visibleProjects = [
    showcaseProjects[showcaseIndex % showcaseProjects.length],
    showcaseProjects[(showcaseIndex + 1) % showcaseProjects.length],
  ];

  const showPrevious = () => setShowcaseIndex((current) => (current - 1 + showcaseProjects.length) % showcaseProjects.length);
  const showNext = () => setShowcaseIndex((current) => (current + 1) % showcaseProjects.length);

  return (
    <section className="in-progress section-pad" id="about">
      <div className="progress-intro">
        <SectionHeading eyebrow="Made for the way you live">
          Executed &amp; in-progress<br />projects<span className="orange-dash"> —</span>
        </SectionHeading>
        <p className="progress-description">
          Designed with innovation, built in prime locations, and rooted in sustainability—our projects redefine modern living with comfort and elegance.
        </p>
      </div>

      <div className="project-showcase">
        <article className="showcase-primary">
          <a className="showcase-photo" href={emailLink("Golden Horizon Villa details")}><img src={photos.golden} alt="Contemporary Golden Horizon Villa" /></a>
          <div className="showcase-meta"><h3>Golden Horizon Villa</h3><span>South Carolina, 2025</span></div>
          <p>Discover the privacy of a thoughtfully designed villa, with refined interiors, peaceful surroundings, and room to unwind.</p>
          <a className="text-link" href={emailLink("Golden Horizon Villa details")}>Explore this home <ArrowUpRight size={14} /></a>
        </article>

        <div className="showcase-side">
          {visibleProjects.map((project) => (
            <article className="showcase-small" key={`${project.name}-${project.place}`}>
              <a className="showcase-photo" href={emailLink(`${project.name} details`)}><img src={project.image} alt={project.name} /></a>
              <h3>{project.name}</h3>
              <span>{project.place}</span>
            </article>
          ))}

          <div className="showcase-controls">
            <button type="button" aria-label="Previous projects" onClick={showPrevious}><ArrowLeft size={14} /></button>
            <span className="pagination-line"><i style={{ width: `${((showcaseIndex + 1) / showcaseProjects.length) * 100}%` }} /></span>
            <button type="button" aria-label="Next projects" onClick={showNext}><ArrowRight size={14} /></button>
          </div>

          <a className="showcase-explore" href="#projects">Explore more projects <span>in our collection</span> <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </section>
  );
}

function Retreat() {
  const spotlights = [
    {
      image: photos.retreat,
      location: "Arizona, United States",
      title: ["Where every home lives in", "balance with nature"],
      description: "Find a little more room to breathe.",
    },
    {
      image: photos.golden,
      location: "South Carolina, United States",
      title: ["A quieter kind of", "everyday luxury"],
      description: "Discover a home designed for slower mornings and thoughtful living.",
    },
    {
      image: photos.villa,
      location: "California, United States",
      title: ["Your own place to", "come back to"],
      description: "Explore a considered retreat with space to settle in and feel at home.",
    },
  ];
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const spotlight = spotlights[activeSpotlight];
  const showPrevious = () => setActiveSpotlight((current) => (current - 1 + spotlights.length) % spotlights.length);
  const showNext = () => setActiveSpotlight((current) => (current + 1) % spotlights.length);

  return (
    <section className="retreat" style={{ backgroundImage: `url("${spotlight.image}")` }}>
      <div className="retreat-shade" />
      <div className="retreat-content">
        <span className="pill pill-light">Property spotlight</span>
        <span className="retreat-location"><Sparkles size={12} /> {spotlight.location}</span>
        <h2>{spotlight.title[0]}<br />{spotlight.title[1]}</h2>
        <p>{spotlight.description}</p>
        <a href="#projects" className="button button-white">Find property <ChevronRight size={14} /></a>
      </div>
      <div className="retreat-controls">
        <button type="button" aria-label="Previous feature" onClick={showPrevious}><ArrowLeft size={14} /></button>
        <button type="button" aria-label="Next feature" onClick={showNext}><ArrowRight size={14} /></button>
      </div>
    </section>
  );
}

function Testimonial() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const quote = testimonials[activeTestimonial];

  const showPrevious = () => setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  const showNext = () => setActiveTestimonial((current) => (current + 1) % testimonials.length);

  return (
    <section className="testimonial section-pad">
      <div className="testimonial-heading">
        <div>
          <span className="eyebrow">A word from our community</span>
          <h2>Our client testimonial</h2>
        </div>
        <a className="text-link" href="mailto:hello@brickline.com">Our clients <ArrowUpRight size={15} /></a>
      </div>

      <div className="testimonial-content">
        <div className="testimonial-image">
          <img src={quote.image} alt="Modern Brickline residence" />
          <span className="quote-mark"><Quote size={20} fill="currentColor" /></span>
        </div>

        <div className="quote-copy">
          <p className="quote-text">“{quote.quote}”</p>
          <p className="quote-text quote-second">{quote.second}</p>

          <div className="quote-bottom">
            <div className="client">
              <img src={quote.image} alt="" />
              <span><b>{quote.name}</b><small>{quote.title}</small></span>
            </div>

            <div className="quote-controls">
              <button type="button" aria-label="Previous testimonial" onClick={showPrevious}><ArrowLeft size={13} /></button>
              <span className="pagination-line"><i style={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }} /></span>
              <button type="button" aria-label="Next testimonial" onClick={showNext}><ArrowRight size={13} /></button>
            </div>

            <span className="quote-count">
              {String(activeTestimonial + 1).padStart(2, "0")} <span>/ {String(testimonials.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div>
        <span className="eyebrow">Start a conversation</span>
        <h2>Let’s find your place.</h2>
        <p>Tell us what you’re looking for. Our team can help with properties, financing, and next steps.</p>
      </div>
      <div className="contact-actions">
        <a className="button button-orange" href={emailLink("Property consultation")}>
          Book a consultation <ArrowUpRight size={14} />
        </a>
        <a className="contact-email" href="mailto:hello@brickline.com">hello@brickline.com</a>
      </div>
    </section>
  );
}

function Footer() {
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
          <a href="#projects">Our properties</a>
          <a href="#about">New developments</a>
          <a href="#about">Our approach</a>
        </div>

        <div className="footer-col">
          <span>Company</span>
          <a href="#about">About Brickline</a>
          <a href="#highlights">Our services</a>
          <a href="#contact">Get in touch</a>
        </div>

        <a className="footer-note" href="#top">
          <span>Find a place that<br />feels like yours.</span>
          <MoveUpRight size={19} />
        </a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Brickline. All rights reserved.</span>
        <div>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Made for living well.</span>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <HighlightStrip />
      <Projects />
      <InProgress />
      <Retreat />
      <Testimonial />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default HomePage;
