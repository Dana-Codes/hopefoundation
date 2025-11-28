import React from "react";
import { Link } from "react-router-dom";

// import local images from assets folder
import schoolImg from "../../assets/buildingschools.png";
import cancerImg from "../../assets/Cancer_Treatment.jpg";
import hospitalImg from "../../assets/hospital_renovation.jpg";

export default function CampaignCards() {
  const campaigns = [
    {
      title: "Build a School in Lagos",
      category: "Education",
      description:
        "Provide a safe, modern learning environment for underprivileged children.",
      image: schoolImg,
      goal: 50000,
      raised: 32000,
    },
    {
      title: "Cancer Treatment Fund",
      category: "Cancer",
      description:
        "Support patients with life-saving cancer treatments and medicines.",
      image: cancerImg,
      goal: 30000,
      raised: 18000,
    },
    {
      title: "Medical Center Renovation",
      category: "Medical Centers",
      description:
        "Upgrade facilities to provide better healthcare services.",
      image: hospitalImg,
      goal: 40000,
      raised: 15000,
    },
  ];

  return (
    <section className="py-16 px-5 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mb-10 text-center">
        Our Active Campaigns
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {campaigns.map((camp, index) => {
          const progress = Math.floor((camp.raised / camp.goal) * 100);

          return (
            <div
              key={index}
              className="
                bg-white rounded-xl shadow-md overflow-hidden 
                hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="h-52 md:h-56 w-full overflow-hidden">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {camp.category}
                </span>

                <h3 className="text-xl font-semibold text-[#0A1A2F] mt-3">
                  {camp.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
                  {camp.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-5 w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-blue-600 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <p className="text-gray-700 mt-2 font-medium">
                  Raised ${camp.raised.toLocaleString()}{" "}
                  <span className="text-gray-500">of</span> $
                  {camp.goal.toLocaleString()}
                </p>

                {/* Button */}
                <Link
                  to="/donate"
                  className="
                    block text-center bg-blue-600 text-white 
                    py-2.5 mt-6 rounded-lg font-medium 
                    hover:bg-blue-700 transition
                  "
                >
                  Donate Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
