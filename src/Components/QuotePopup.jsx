import { useEffect } from "react";
import { X } from "lucide-react";

export default function QuotePopup({ isOpen, onClose }) {
    // Load LeadConnector form embed script when popup opens
    useEffect(() => {
        if (isOpen) {
            const scriptId = "leadconnector-form-script";

            // Avoid loading the script multiple times
            if (!document.getElementById(scriptId)) {
                const script = document.createElement("script");
                script.id = scriptId;
                script.src = "https://link.msgsndr.com/js/form_embed.js";
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }, [isOpen]);

    // Lock background scroll when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close popup on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
                role="dialog"
                aria-modal="true"
                aria-labelledby="quote-popup-title"
            >
                <div
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-full overflow-hidden animate-slideUp"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-[#c1a944] hover:text-black transition-all duration-300 shadow-lg"
                        aria-label="Close quote form"
                    >
                        <X size={22} />
                    </button>

                    {/* Header */}
                    {/* <div className="bg-[#c1a944] px-6 py-4 border-b border-black/10">
                        <h2
                            id="quote-popup-title"
                            className="text-xl md:text-2xl font-bold text-black"
                        >
                            Get Your Free Quote
                        </h2>
                        <p className="text-sm text-black/80 mt-1">
                            Fill out the form below and we'll get back to you shortly.
                        </p>
                    </div> */}

                    {/* Form Iframe */}
                    <div className="w-full h-full overflow-y-auto">
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/bD14eSaRKCHgEdgQFruA"
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                                borderRadius: "8px",
                            }}
                            id="inline-bD14eSaRKCHgEdgQFruA"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Website Form"
                            data-height="760"
                            data-layout-iframe-id="inline-bD14eSaRKCHgEdgQFruA"
                            data-form-id="bD14eSaRKCHgEdgQFruA"
                            title="Website Form"
                        >
                        </iframe>
                    </div>
                </div>
            </div>

            {/* Inline Animation Styles */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
                .animate-slideUp { animation: slideUp 0.4s ease-out; }
            `}</style>
        </>
    );
}