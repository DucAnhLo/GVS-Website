"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === "en"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("vi")}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === "vi"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        VI
      </button>
    </div>
  );
};

export default LanguageSwitcher;
