import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { InnerPageLayout, PageIntro } from "../components/InnerPageLayout";

function AboutPage() {
  return (
    <InnerPageLayout>
      <main className="inner-page">
        <PageIntro
          eyebrow="About Brickline"
          title="Thoughtful places. A better way to live."
          description="An introduction to Brickline and the approach behind the properties featured on this site."
        />

        <section className="about-content">
          <div className="about-lead">
            <span className="eyebrow">Our approach</span>
            <h2>Start with the place, then make the next step clear.</h2>
          </div>
          <div className="about-copy">
            <p>
              Brickline is presented here as a property-discovery concept, with a portfolio spanning residential,
              hospitality, commercial, and mixed-use examples.
            </p>
            <p>
              Verified company history, team credentials, service areas, and completed-work information were not
              provided for this demo. Add confirmed details before publishing this page as a company profile.
            </p>
            <Link className="text-link" to="/properties">
              Explore the sample portfolio <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        <section className="about-values" aria-label="Brickline principles">
          <article>
            <span>01</span>
            <h2>Consider the details</h2>
            <p>Present each property with clear type, location, and current information.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Make discovery simple</h2>
            <p>Help people browse a portfolio and identify what they would like to know.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Support a next step</h2>
            <p>Make it easy to ask questions or share property requirements directly.</p>
          </article>
        </section>
      </main>
    </InnerPageLayout>
  );
}

export default AboutPage;
