import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import RequirementsPage from "./pages/RequirementsPage";
import ServicesPage from "./pages/ServicesPage";

function RoutePositionManager() {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RoutePositionManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:slug" element={<PropertyDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/requirements" element={<RequirementsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
