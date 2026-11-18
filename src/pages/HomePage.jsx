import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Globe2,
  Home,
  LockKeyhole,
  Pause,
  Play,
  Quote,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { goldenHorizon, heroSlides, projects, showcaseProjects, testimonials, photos } from "../data/siteData";

function SectionHeading({ eyebrow, children, action }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{children}</h2>
      </div>
      {action && (
        <Link className="text-link" to="/properties">
          {action} <ArrowUpRight size={15} strokeWidth={1.7} />
        </Link>
      )}
    </div>
  );
}

function emailLink(subject) {
  return `mailto:hello@brickline.com?subject=${encodeURIComponent(subject)}`;
}

function useAutomaticRotation(activeIndex, setActiveIndex, itemCount, setSlideDirection) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionPreference.matches);
      if (motionPreference.matches) setIsPlaying(false);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || isHovered || hasFocus) return undefined;

    const timeoutId = window.setTimeout(() => {
      setSlideDirection("next");
      setActiveIndex((current) => (current + 1) % itemCount);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, hasFocus, isHovered, isPlaying, itemCount, prefersReducedMotion, setActiveIndex, setSlideDirection]);

  return {
    isPlaying,
    setIsPlaying,
    prefersReducedMotion,
    isRotating: isPlaying && !prefersReducedMotion && !isHovered && !hasFocus,
    events: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onFocusCapture: () => setHasFocus(true),
      onBlurCapture: (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      },
    },
  };
}

function RotationToggle({ rotation, label }) {
  return (
    <button
      type="button"
      className="rotation-toggle"
      aria-label={
        rotation.prefersReducedMotion
          ? `Automatic ${label} rotation disabled by reduced-motion preference`
          : rotation.isPlaying
            ? `Pause automatic ${label} rotation`
            : `Resume automatic ${label} rotation`
      }
      aria-pressed={!rotation.isPlaying}
      disabled={rotation.prefersReducedMotion}
      onClick={() => rotation.setIsPlaying((playing) => !playing)}
    >
      {rotation.isPlaying ? <Pause size={13} /> : <Play size={13} />}
    </button>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const active = heroSlides[activeSlide];
  const slideTitle = active.title.split("\n");

  const showPrevious = () => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  const showNext = () => setActiveSlide((current) => (current + 1) % heroSlides.length);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(motionPreference.matches);
      if (motionPreference.matches) setIsPlaying(false);
    };

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || isHovered || hasFocus) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [hasFocus, isHovered, isPlaying, prefersReducedMotion]);

  return (
    <section
      className="hero"
      id="top"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
    >
      <div
        className="hero-background-track"
        aria-hidden="true"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            className="hero-background"
            key={slide.badge}
            style={{ backgroundImage: `url("${slide.background}")` }}
          />
        ))}
      </div>
      <div className="hero-shade" />
      <SiteHeader overlay />

      <div className="hero-copy" key={`copy-${activeSlide}`}>
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
        <Link to="/properties" className="button button-white">
          Find property <ChevronRight size={15} />
        </Link>
      </div>

      <span className="hero-tag">
        <Sparkles size={13} /> {active.tag}
      </span>

      <div className="hero-bottom">
        <Link className="scroll-cue" to="/#highlights"><ArrowDown size={14} /> Scroll to explore</Link>

        <div className="hero-pagination">
          <button type="button" aria-label="Previous featured property" onClick={showPrevious}><ArrowLeft size={15} /></button>
          <div className="carousel-dots" role="group" aria-label="Choose a featured property">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                className={`carousel-dot${activeSlide === index ? " active" : ""}`}
                aria-label={`Show slide ${index + 1}: ${slide.badge}`}
                aria-current={activeSlide === index ? "true" : undefined}
                key={slide.badge}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
          <span
            className="sr-only"
            aria-live={isPlaying && !prefersReducedMotion && !isHovered && !hasFocus ? "off" : "polite"}
          >
            Slide {activeSlide + 1} of {heroSlides.length}: {active.badge}
          </span>
          <button type="button" aria-label="Next featured property" onClick={showNext}><ArrowRight size={15} /></button>
          <button
            type="button"
            className="rotation-toggle"
            aria-label={
              prefersReducedMotion
                ? "Automatic slide rotation disabled by reduced-motion preference"
                : isPlaying
                  ? "Pause automatic slide rotation"
                  : "Resume automatic slide rotation"
            }
            aria-pressed={!isPlaying}
            disabled={prefersReducedMotion}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          </button>
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
        <span className="consultation-top">
          <img className="consultation-photo" src="/consultation-advisor.jpg" alt="" aria-hidden="true" />
          <span><b>Book a consultation</b><small>Talk with our team</small></span>
          <ArrowUpRight size={14} />
        </span>
      </a>
    </section>
  );
}

function HighlightStrip() {
  const highlights = [
    { Icon: Home, title: "Explore by property type", body: "The featured collection includes hospitality, commercial, and mixed-use developments, each with a listed location and status.", action: "Browse developments", subject: "Development details and availability" },
    { Icon: LockKeyhole, title: "Get current details", body: "Availability, pricing, and property specifications can change. Contact the team for up-to-date information.", action: "Request details", subject: "Current property details" },
    { Icon: Globe2, title: "Plan a next step", body: "Send a consultation request to discuss a property, financing questions, or what to do next.", action: "Book a consultation", subject: "Property consultation" },
  ];

  return (
    <section className="highlights section-pad" id="highlights">
      <div className="highlights-top">
        <div>
          <span className="eyebrow">The Brickline difference</span>
          <h2>Outstanding highlights</h2>
        </div>
        <Link className="text-link" to="/requirements">Get started <ArrowUpRight size={15} /></Link>
      </div>

      <div className="highlight-grid">
        {highlights.map(({ Icon, title, body, action, subject }, index) => (
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
            <a href={emailLink(subject)} className="learn-link">{action} <ArrowUpRight size={12} /></a>
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
        <span className="eyebrow">Selected developments</span>
        <h2><i /> Live, work, and gather <i /></h2>
        <p>Browse a mixed portfolio by property type, location, and current status.</p>
        <p className="content-note">Listings and imagery are sample content. Verify property details and availability before publication.</p>
      </div>

      <div className="featured-grid">
        {projects.map((project, index) => (
          <article className={`featured-card featured-card-${index + 1}`} key={project.name}>
            <Link className="project-image" to={`/properties/${project.slug}`}>
              <img src={project.image} alt={project.name} />
              {index === 1 && <span className="image-chip"><span>●</span> Explore virtually</span>}
              <span className="image-arrow"><ArrowUpRight size={17} /></span>
            </Link>

            <div className="project-card-copy">
              <div className="project-labels">
                <span className="project-status">{project.status}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <span className="project-place">{project.place}</span>
              <Link to={`/properties/${project.slug}`} className="button button-orange button-full">
                View details <ArrowUpRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InProgress() {
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [showcaseDirection, setShowcaseDirection] = useState("next");
  const rotation = useAutomaticRotation(showcaseIndex, setShowcaseIndex, showcaseProjects.length, setShowcaseDirection);
  const visibleProjects = [
    showcaseProjects[showcaseIndex % showcaseProjects.length],
    showcaseProjects[(showcaseIndex + 1) % showcaseProjects.length],
  ];

  const moveShowcase = (direction) => {
    setShowcaseDirection(direction);
    setShowcaseIndex((current) => (
      direction === "next"
        ? (current + 1) % showcaseProjects.length
        : (current - 1 + showcaseProjects.length) % showcaseProjects.length
    ));
  };

  return (
    <section className="in-progress section-pad" id="about" {...rotation.events}>
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
          <Link className="showcase-photo" to={`/properties/${goldenHorizon.slug}`}><img src={goldenHorizon.image} alt={goldenHorizon.name} /></Link>
          <div className="showcase-meta"><h3>{goldenHorizon.name}</h3><span>{goldenHorizon.place}</span></div>
          <p>{goldenHorizon.description}</p>
          <Link className="text-link" to={`/properties/${goldenHorizon.slug}`}>Explore this home <ArrowUpRight size={14} /></Link>
        </article>

        <div className="showcase-side">
          {visibleProjects.map((project) => (
            <article
              className={`showcase-small slide-content-${showcaseDirection}`}
              key={`${showcaseIndex}-${project.name}-${project.place}`}
            >
              <Link className="showcase-photo" to={`/properties/${project.slug}`}><img src={project.image} alt={project.name} /></Link>
              <h3>{project.name}</h3>
              <span>{project.place}</span>
            </article>
          ))}

          <div className="showcase-controls">
            <button type="button" aria-label="Previous projects" onClick={() => moveShowcase("previous")}><ArrowLeft size={14} /></button>
            <span className="pagination-line"><i style={{ width: `${((showcaseIndex + 1) / showcaseProjects.length) * 100}%` }} /></span>
            <button type="button" aria-label="Next projects" onClick={() => moveShowcase("next")}><ArrowRight size={14} /></button>
            <RotationToggle rotation={rotation} label="project" />
            <span className="sr-only" aria-live={rotation.isRotating ? "off" : "polite"}>
              Showing {visibleProjects.map((project) => project.name).join(" and ")}
            </span>
          </div>

          <Link className="showcase-explore" to="/properties">Explore more projects <span>in our collection</span> <ArrowUpRight size={13} /></Link>
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
  const [previousSpotlight, setPreviousSpotlight] = useState(null);
  const [spotlightDirection, setSpotlightDirection] = useState("next");
  const rotation = useAutomaticRotation(activeSpotlight, setActiveSpotlight, spotlights.length, setSpotlightDirection);
  const spotlight = spotlights[activeSpotlight];
  const moveSpotlight = (direction) => {
    setPreviousSpotlight(activeSpotlight);
    setSpotlightDirection(direction);
    setActiveSpotlight((current) => (
      direction === "next"
        ? (current + 1) % spotlights.length
        : (current - 1 + spotlights.length) % spotlights.length
    ));
  };

  return (
    <section
      className="retreat"
      style={{ backgroundImage: `url("${spotlights[previousSpotlight ?? activeSpotlight].image}")` }}
      {...rotation.events}
    >
      {previousSpotlight !== null && (
        <div
          className={`retreat-background slide-background-${spotlightDirection}`}
          key={activeSpotlight}
          style={{ backgroundImage: `url("${spotlight.image}")` }}
          aria-hidden="true"
        />
      )}
      <div className="retreat-shade" />
      <div className="retreat-content">
        <div className={`slide-content-${spotlightDirection}`} key={`spotlight-copy-${activeSpotlight}`}>
          <span className="pill pill-light">Property spotlight</span>
          <span className="retreat-location"><Sparkles size={12} /> {spotlight.location}</span>
          <h2>{spotlight.title[0]}<br />{spotlight.title[1]}</h2>
          <p>{spotlight.description}</p>
          <Link to="/properties" className="button button-white">Find property <ChevronRight size={14} /></Link>
        </div>
      </div>
      <div className="retreat-controls">
        <button type="button" aria-label="Previous property spotlight" onClick={() => moveSpotlight("previous")}><ArrowLeft size={14} /></button>
        <RotationToggle rotation={rotation} label="property spotlight" />
        <span className="sr-only" aria-live={rotation.isRotating ? "off" : "polite"}>
          Property spotlight: {spotlight.location}, {spotlight.title.join(" ")}
        </span>
        <button type="button" aria-label="Next property spotlight" onClick={() => moveSpotlight("next")}><ArrowRight size={14} /></button>
      </div>
    </section>
  );
}

function Testimonial() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState("next");
  const rotation = useAutomaticRotation(activeTestimonial, setActiveTestimonial, testimonials.length, setTestimonialDirection);
  const quote = testimonials[activeTestimonial];

  const moveTestimonial = (index, direction) => {
    setTestimonialDirection(direction);
    setActiveTestimonial(index);
  };
  const showPrevious = () => moveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length, "previous");
  const showNext = () => moveTestimonial((activeTestimonial + 1) % testimonials.length, "next");
  const chooseTestimonial = (index) => {
    const nextDistance = (index - activeTestimonial + testimonials.length) % testimonials.length;
    const previousDistance = (activeTestimonial - index + testimonials.length) % testimonials.length;
    moveTestimonial(index, nextDistance <= previousDistance ? "next" : "previous");
  };

  return (
    <section className="testimonial section-pad" id="testimonials" {...rotation.events}>
      <div className="testimonial-heading">
        <div>
          <span className="eyebrow">Illustrative client stories</span>
          <h2>Client testimonials</h2>
          <p className="testimonial-disclaimer">Illustrative testimonials; replace with verified client feedback before publication.</p>
        </div>
      </div>

      <div className="testimonial-content">
        <div className={`testimonial-image slide-content-${testimonialDirection}`} key={`testimonial-image-${activeTestimonial}`}>
          <img src={quote.propertyImage} alt="Modern residence" />
          <span className="quote-mark"><Quote size={20} fill="currentColor" /></span>
        </div>

        <div className="quote-copy">
          <div className={`slide-content-${testimonialDirection}`} key={`testimonial-copy-${activeTestimonial}`}>
            <p className="quote-text">“{quote.quote}”</p>
            <p className="quote-text quote-second">{quote.second}</p>
          </div>

          <div className="quote-bottom">
            <div className={`client slide-content-${testimonialDirection}`} key={`testimonial-client-${activeTestimonial}`}>
              <img className="client-photo" src={quote.clientImage} alt={`Illustrative portrait of ${quote.name}`} loading="lazy" />
              <span><b>{quote.name}</b><small>{quote.title}</small></span>
            </div>

            <div className="quote-controls">
              <button type="button" aria-label="Previous testimonial" onClick={showPrevious}><ArrowLeft size={13} /></button>
              <div className="carousel-dots" role="group" aria-label="Choose a testimonial">
                {testimonials.map((item, index) => (
                  <button
                    type="button"
                    className={`carousel-dot${activeTestimonial === index ? " active" : ""}`}
                    aria-label={`Show testimonial ${index + 1} from ${item.name}`}
                    aria-current={activeTestimonial === index ? "true" : undefined}
                    key={item.name}
                    onClick={() => chooseTestimonial(index)}
                  />
                ))}
              </div>
              <RotationToggle rotation={rotation} label="testimonial" />
              <span className="sr-only" aria-live={rotation.isRotating ? "off" : "polite"}>
                Testimonial {activeTestimonial + 1} of {testimonials.length}, from {quote.name}
              </span>
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
      <SiteFooter />
    </main>
  );
}

export default HomePage;
