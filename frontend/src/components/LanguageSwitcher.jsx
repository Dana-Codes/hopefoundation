// LanguageWidget.jsx
import { useState } from "react";

const languages = [
  { label: "English", code: "en" },
  { label: "French", code: "fr" },
  { label: "Spanish", code: "es" },
  { label: "German", code: "de" },
   {label: "Thai", code: "th" },
  { label: "Chinese", code: "zh-CN" },
   {label: "Portuguese", code: "pt" },
    {label: "Russian", code: "ru" },
     {label: "Italian", code: "it" },
      {label: "Hungarian", code: "hu"}
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-black text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        🌍
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-14 left-0 w-44 bg-white rounded-xl shadow-xl overflow-hidden">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}