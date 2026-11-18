import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { InnerPageLayout, PageIntro } from "../components/InnerPageLayout";
import { propertyCatalog } from "../data/siteData";
import NotFoundPage from "./NotFoundPage";

function PropertyDetailPage() {
  const { slug } = useParams();
  const property = propertyCatalog.find((item) => item.slug === slug);

  if (!property) return <NotFoundPage />;

  const subject = encodeURIComponent(`Property enquiry: ${property.name}`);

  return (
    <InnerPageLayout>
      <main className="inner-page property-detail-page">
        <Link className="back-link" to="/properties"><ArrowLeft size={15} /> All properties</Link>
        <PageIntro
          eyebrow={`${property.category} · Sample listing`}
          title={property.name}
          description={property.place}
        />

        <div className="property-detail-grid">
          <figure className="property-detail-image">
            <img src={property.image} alt={property.name} />
            <figcaption>Illustrative image for this sample listing</figcaption>
          </figure>

          <section className="property-detail-copy" aria-label="Property information">
            <span className="project-status">{property.status}</span>
            <h2>Property information</h2>
            <p>
              {property.description || "This sample project does not include a verified property description."}
            </p>

            <dl className="property-facts">
              <div><dt>Property type</dt><dd>{property.category}</dd></div>
              <div><dt>Location</dt><dd>{property.place}</dd></div>
              <div><dt>Pricing and specifications</dt><dd>Not provided in this demo</dd></div>
              <div><dt>Availability</dt><dd>Verify with Brickline</dd></div>
            </dl>

            <p className="content-note">
              Names, locations, status, and imagery on this page are illustrative. Confirm all listing information before relying on it.
            </p>

            <a className="button button-orange" href={`mailto:hello@brickline.com?subject=${subject}`}>
              Ask about this listing <ArrowUpRight size={14} />
            </a>
            <Link className="text-link requirement-link" to="/requirements">
              Share your property requirements <ArrowUpRight size={14} />
            </Link>
          </section>
        </div>
      </main>
    </InnerPageLayout>
  );
}

export default PropertyDetailPage;
