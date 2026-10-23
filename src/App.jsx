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
import BurlingtonServicePage from "./Pages/Services/Burlington";
import SouthBurlington from "./Pages/Services/SouthBurlington";
import Milton from "./Pages/Services/Milton";
import Richmond from "./Pages/Services/Rich";
import Hinesburg from "./Pages/Services/Hinesburg";
import ColchesterHomeServices from "./Pages/Services/Colchester";
import TermsAndConditions from "./Pages/TermCondation";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQPage from "./Pages/Faq";
import Fairfax from "./Pages/Services/Fairfax";
import Underhill from "./Pages/Services/Underhill";
import Jericho from "./Pages/Services/Jericho";
import Essex from "./Pages/Services/Essex";
import Shelburne from "./Pages/Services/Shelburne";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";
import NotFound from "./Pages/NotFound";


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
          <Route path="roofing" element={<Roofing />} />
          <Route path="siding" element={<Siding />} />
          <Route path="painting" element={<Painting />} />
          <Route path="burlington-vt" element={<BurlingtonServicePage />} />
          <Route path="south-burlington-vt" element={<SouthBurlington />} />
          <Route path="milton-vt" element={<Milton />} />
          <Route path="richmond-vt" element={<Richmond />} />
          <Route path="hinesburg-vt" element={<Hinesburg />} />
          <Route path="colchester-vt" element={<ColchesterHomeServices />} />
          <Route path="fairfax-vt" element={<Fairfax />} />
          <Route path="underhill-vt" element={<Underhill />} />
          <Route path="jericho-vt" element={<Jericho />} />
          <Route path="essex-vt" element={<Essex />} />
          <Route path="shelburne-vt" element={<Shelburne />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}

export default App;
