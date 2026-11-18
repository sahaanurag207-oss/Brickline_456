import { ArrowUpRight } from "lucide-react";
import { InnerPageLayout, PageIntro } from "../components/InnerPageLayout";
import { propertyCatalog } from "../data/siteData";

const propertyTypes = [...new Set(propertyCatalog.map((property) => property.category))];

function RequirementsPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Property type: ${formData.get("type")}`,
      `Preferred location: ${formData.get("location") || "Not specified"}`,
      `Budget range: ${formData.get("budget") || "Not specified"}`,
      `Timing: ${formData.get("timing") || "Not specified"}`,
      "",
      "Additional details:",
      `${formData.get("details") || "None provided"}`,
    ].join("\n");

    window.location.href = `mailto:hello@brickline.com?subject=${encodeURIComponent("Property requirements")}&body=${encodeURIComponent(details)}`;
  };

  return (
    <InnerPageLayout>
      <main className="inner-page">
        <PageIntro
          eyebrow="Buyer requirements"
          title="What are you looking for?"
          description="Share a few preferences to prepare an enquiry for the Brickline team."
        />

        <section className="requirements-layout">
          <div className="requirements-note">
            <h2>Start with the essentials.</h2>
            <p>
              Location, property type, and timing can help guide a conversation. You can leave anything
              you have not decided blank.
            </p>
            <p className="content-note">
              This demo does not store or submit form data. Submitting opens a draft in your email app;
              review it and choose whether to send.
            </p>
          </div>

          <form className="requirements-form" onSubmit={handleSubmit}>
            <label>
              Your name
              <input name="name" autoComplete="name" required />
            </label>

            <label>
              Email address
              <input name="email" type="email" autoComplete="email" required />
            </label>

            <label>
              Property type
              <select name="type" defaultValue="" required>
                <option value="" disabled>Select a type</option>
                <option value="Not sure">Not sure yet</option>
                {propertyTypes.map((type) => <option value={type} key={type}>{type}</option>)}
              </select>
            </label>

            <label>
              Preferred location
              <input name="location" autoComplete="address-level2" placeholder="City, region, or area" />
            </label>

            <label>
              Budget range
              <input name="budget" placeholder="Include a currency if you have a range in mind" />
            </label>

            <label>
              Preferred timing
              <select name="timing" defaultValue="">
                <option value="">Not sure yet</option>
                <option>Within 3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
                <option>More than 12 months</option>
              </select>
            </label>

            <label className="form-wide">
              What else should we know?
              <textarea name="details" rows="5" placeholder="Requirements, questions, or priorities" />
            </label>

            <button className="button button-orange form-wide" type="submit">
              Prepare email enquiry <ArrowUpRight size={14} />
            </button>
          </form>
        </section>
      </main>
    </InnerPageLayout>
  );
}

export default RequirementsPage;
