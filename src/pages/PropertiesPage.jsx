import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { InnerPageLayout, PageIntro } from "../components/InnerPageLayout";
import { propertyCatalog } from "../data/siteData";

function PropertiesPage() {
  const [category, setCategory] = useState("All types");
  const [search, setSearch] = useState("");
  const categories = ["All types", ...new Set(propertyCatalog.map((property) => property.category))];

  const visibleProperties = useMemo(() => {
    const query = search.trim().toLowerCase();
    return propertyCatalog.filter((property) => {
      const matchesCategory = category === "All types" || property.category === category;
      const matchesSearch = !query || `${property.name} ${property.place} ${property.category}`.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <InnerPageLayout>
      <main className="inner-page">
        <PageIntro
          eyebrow="Brickline portfolio"
          title="Find a place to begin."
          description="Browse the homes and developments featured on our landing page. Use the filters to narrow this sample collection."
        />

        <section className="property-browser" aria-label="Property listings">
          <div className="property-toolbar">
            <div className="property-filters" role="group" aria-label="Filter by property type">
              {categories.map((option) => (
                <button
                  type="button"
                  className={category === option ? "filter-chip active" : "filter-chip"}
                  aria-pressed={category === option}
                  key={option}
                  onClick={() => setCategory(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <label className="property-search">
              <span>Search by name or location</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Try Austin or Villa"
              />
            </label>
          </div>

          <p className="property-result-count" aria-live="polite">
            {visibleProperties.length} {visibleProperties.length === 1 ? "listing" : "listings"}
          </p>

          {visibleProperties.length ? (
            <div className="property-grid">
              {visibleProperties.map((property) => (
                <article className="property-listing-card" key={property.slug}>
                  <Link className="property-listing-image" to={`/properties/${property.slug}`}>
                    <img src={property.image} alt={property.name} />
                    <span className="image-arrow"><ArrowUpRight size={17} /></span>
                  </Link>
                  <div className="property-listing-copy">
                    <div className="project-labels">
                      <span className="project-status">{property.status}</span>
                      <span className="project-category">{property.category}</span>
                    </div>
                    <h2><Link to={`/properties/${property.slug}`}>{property.name}</Link></h2>
                    <p>{property.place}</p>
                    <Link className="text-link" to={`/properties/${property.slug}`}>
                      View sample details <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="empty-properties">No sample listings match those filters. Try another type or search.</p>
          )}

          <p className="content-note">
            Listings, locations, availability, and images are sample content. Ask Brickline for verified property information.
          </p>
        </section>
      </main>
    </InnerPageLayout>
  );
}

export default PropertiesPage;
