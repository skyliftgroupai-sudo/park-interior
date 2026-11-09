import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "./Pages/Home";
import About from "./Pages/Aboutus";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import HomeRenovation from "./Pages/Services/Renovation";
import HomeRemodeling from "./Pages/Services/Remodeling";
import HomeAddition from "./Pages/Services/Addition";
import Roofing from "./Pages/Services/Roofing";
import Siding from "./Pages/Services/Siding";
import Painting from "./Pages/Services/Painting";
import TermsAndConditions from "./Pages/TermCondation";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQPage from "./Pages/Faq";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import NotFound from "./Pages/NotFound";
import ServicePage from "./Components/ServicePage";
import CityPage from "./Components/CityPage";
import { citySlugs } from "./data/cities";
import { coreServiceSlugs } from "./data/servicePages";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="home-renovations" element={<HomeRenovation />} />
          <Route path="home-remodeling" element={<HomeRemodeling />} />
          <Route path="home-addition" element={<HomeAddition />} />
          {coreServiceSlugs.map((slug) => (
            <Route key={slug} path={slug} element={<ServicePage slug={slug} />} />
          ))}
          <Route path="roofing" element={<Roofing />} />
          <Route path="siding" element={<Siding />} />
          <Route path="painting" element={<Painting />} />
          {citySlugs.map((slug) => (
            <Route key={slug} path={slug} element={<CityPage slug={slug} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
