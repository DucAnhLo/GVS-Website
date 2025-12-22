"use client";
import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // For now, just accept essential only
    localStorage.setItem("cookieConsent", "essential");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-[#1a1a1a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-1">
              Cookies on the GVS website
            </h3>
            <p className="text-sm text-gray-400">
              <span className="text-[#0078D4]">We use cookies</span> to give you
              the best online experience. Strictly necessary cookies are on by
              default. Additional cookies are{" "}
              <span className="font-medium text-white">off</span> by default.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-[#0078D4] hover:bg-[#006cbd] rounded transition-colors duration-200"
            >
              Accept additional cookies
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-white bg-[#333] hover:bg-[#444] border border-gray-600 rounded transition-colors duration-200"
            >
              Reject additional cookies
            </button>
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              Let me choose
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
