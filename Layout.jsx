import { Outlet } from "react-router-dom";
import Navbar from "./src/Components/Navbar";
import Footer from "./src/Components/Footer";
import Seo from "./src/Components/Seo";
import ScrollToTop from "./src/Pages/ScrollToTop";
import BackToTop from "./src/Pages/BackToTop";
import ScrollToHash from "./src/Pages/ScrollToHash";


export default function Layout() {
    return (
        <>
            <Seo />
            <Navbar />
            <ScrollToHash />
            <ScrollToTop />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <BackToTop />
            <Footer />
        </>
    );
}
