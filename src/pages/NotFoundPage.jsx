import { useEffect } from "react";
import { Link } from "react-router-dom";
import { InnerPageLayout } from "../components/InnerPageLayout";

function NotFoundPage() {
  useEffect(() => {
    document.title = "Page not found | Brickline";
  }, []);

  return (
    <InnerPageLayout>
      <main className="inner-page not-found-page">
        <span className="eyebrow">Page not found</span>
        <h1>We could not find that page.</h1>
        <p>Check the address or return to the property collection.</p>
        <Link className="button button-orange" to="/properties">Browse properties</Link>
      </main>
    </InnerPageLayout>
  );
}

export default NotFoundPage;
