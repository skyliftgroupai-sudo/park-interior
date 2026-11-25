// Opens the global "Get a Quote" popup (LeadConnector form) rendered by the Navbar.
export const QUOTE_POPUP_EVENT = "open-quote-popup";

export function openQuotePopup(e) {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    window.dispatchEvent(new Event(QUOTE_POPUP_EVENT));
}
