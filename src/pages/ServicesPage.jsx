import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { InnerPageLayout, PageIntro } from "../components/InnerPageLayout";

const services = [
  {
    number: "01",
    title: "Browse the portfolio",
    description: "Explore the sample collection by property type, name, or location.",
    to: "/properties",
    link: "View properties",
  },
  {
    number: "02",
    title: "Share your requirements",
    description: "Tell Brickline what kind of property, location, and timing you have in mind.",
    to: "/requirements",
    link: "Create a requirements email",
  },
  {
    number: "03",
    title: "Ask about a listing",
    description: "Use a property detail page to prepare an enquiry about a specific sample listing.",
    to: "/properties",
    link: "Choose a listing",
  },
];

function ServicesPage() {
  return (
    <InnerPageLayout>
      <main className="inner-page">
        <PageIntro
          eyebrow="Services"
          title="A clear path from browsing to asking."
          description="Use the tools in this demo to explore the portfolio and prepare an enquiry."
        />

        <section className="service-grid" aria-label="Brickline services">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link className="text-link" to={service.to}>
                {service.link} <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </section>

        <p className="content-note">
          This demo does not include property transactions, financial advice, or a backend enquiry system.
          Enquiry links open a draft email for you to review and send.
        </p>
      </main>
    </InnerPageLayout>
  );
}

export default ServicesPage;
