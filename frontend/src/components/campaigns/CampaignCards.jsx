export default function CampaignCards() {
  const campaigns = [
    {
      title: "Build a School in Lagos",
      category: "Education",
      description: "Provide a safe, modern learning environment for underprivileged children.",
      image: "https://images.unsplash.com/photo-1581091012184-ffef2f3b1d4e?auto=format&fit=crop&w=800&q=80",
      goal: 50000,
      raised: 32000,
    },
    {
      title: "Cancer Treatment Fund",
      category: "Cancer",
      description: "Support patients with life-saving cancer treatments and medicines.",
      image: "https://images.unsplash.com/photo-1588776814546-cd0a857f6a53?auto=format&fit=crop&w=800&q=80",
      goal: 30000,
      raised: 18000,
    },
    {
      title: "Medical Center Renovation",
      category: "Medical Centers",
      description: "Upgrade facilities to provide better healthcare services.",
      image: "https://images.unsplash.com/photo-1576765607924-4ab07a2fa376?auto=format&fit=crop&w=800&q=80",
      goal: 40000,
      raised: 15000,
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10">
        {campaigns.map((camp, index) => {
          const progress = Math.floor((camp.raised / camp.goal) * 100);
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={camp.image} alt={camp.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0A1A2F] mb-2">{camp.title}</h3>
                <p className="text-gray-600 mb-4">{camp.description}</p>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div className="bg-[#1A73E8] h-3 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>

                <p className="text-gray-700 font-medium mb-4">
                  Raised ${camp.raised.toLocaleString()} of ${camp.goal.toLocaleString()}
                </p>

                <a
                  href="/donate"
                  className="inline-block bg-[#1A73E8] text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Donate Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
