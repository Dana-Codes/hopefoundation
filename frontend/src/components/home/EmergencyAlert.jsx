import React from "react";
import { Link } from "react-router-dom";
import johnImg from "../../assets/savejohn.jpg"; // <-- replace with your actual image

export default function EmergencyAlert() {
  return (
    <div
      className="
        w-full bg-white border border-gray-200 
        rounded-xl shadow-sm 
        px-5 py-6 md:px-8 md:py-7
        flex flex-col md:flex-row items-center gap-5
        transition-all 
        animate-fadeIn
      "
    >
      {/* Image */}
      <img
        src={johnImg}
        alt="John Emergency Case"
        className="
          w-24 h-24 md:w-28 md:h-28 
          object-cover rounded-lg 
          shadow-sm border border-gray-300
        "
      />

      {/* Text Area */}
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-semibold text-[#0A1A2F]">
          Emergency Case: Save John
        </h3>

        <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
          John urgently needs medical support. Your donation can help provide
          treatment and keep him strong during this difficult time.
        </p>
      </div>

      {/* Button */}
      <Link
        to="/donate"
        className="
          bg-[#f50000] text-white 
          font-medium 
          px-6 py-3 rounded-lg 
          shadow-sm 
          hover:bg-red-300 transition
        "
      >
        Save Now
      </Link>
    </div>
  );
}
