import { useEffect } from "react";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export function InnerPageLayout({ children }) {
  return (
    <div className="inner-site">
      <div className="page-header-wrap">
        <SiteHeader />
      </div>
      {children}
      <SiteFooter />
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Brickline`;
    return () => { document.title = previousTitle; };
  }, [title]);

  return (
    <header className="page-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
