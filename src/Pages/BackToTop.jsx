import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "auto" });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 bg-[#c1a944] text-white p-4 rounded-full shadow-lg 
                    hover:bg-black hover:text-white transition z-50"
                    aria-label="Back to Top"
                >
                    <ArrowUp size={24} strokeWidth={2} />
                </button>
            )}
        </>
    );
}
