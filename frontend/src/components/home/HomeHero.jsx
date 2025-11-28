import React from "react";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section
      className="
        relative w-full h-[80vh] md:h-[85vh] 
        bg-cover bg-center rounded-xl overflow-hidden
        flex items-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-white px-6 md:px-16 lg:px-20 max-w-4xl">
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl 
            font-bold leading-tight drop-shadow-xl
          "
        >
          Creating Hope.
          <br /> Changing Lives.
        </h1>

        <p
          className="
            mt-4 sm:mt-5 text-base sm:text-lg md:text-xl 
            text-gray-200 max-w-2xl
          "
        >
          We empower communities through education, medical support, poverty
          relief, and sustainable projects across the world.
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-8 flex flex-col sm:flex-row 
            gap-4 sm:gap-6
          "
        >
          <Link
            to="/donate"
            className="
              bg-blue-700 hover:bg-blue-800 
              transition px-6 py-3 
              rounded-lg font-semibold text-center
            "
          >
            Donate Now
          </Link>

          <Link
            to="/campaigns"
            className="
              bg-white text-blue-700 hover:bg-gray-100
              transition px-6 py-3 
              rounded-lg font-semibold text-center
            "
          >
            Explore Campaigns
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
