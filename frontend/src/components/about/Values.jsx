export default function Values() {
  const values = [
    {
      title: "Compassion",
      description:
        "We care deeply about the people we serve and approach every project with empathy and humanity.",
      icon: "❤️",
    },
    {
      title: "Transparency",
      description:
        "We operate with full accountability, ensuring every donation is used responsibly to create real impact.",
      icon: "📊",
    },
    {
      title: "Integrity",
      description:
        "We uphold honesty, trust, and strong moral principles in all our programs and partnerships.",
      icon: "🤝",
    },
    {
      title: "Sustainability",
      description:
        "Our programs are designed to create long-term change, not temporary relief.",
      icon: "🌱",
    },
    {
      title: "Community",
      description:
        "We work hand-in-hand with local communities to ensure solutions are inclusive and effective.",
      icon: "👥",
    },
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in delivering humanitarian and development assistance.",
      icon: "⭐",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F]">
          Our Core Values
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4 mb-16">
          These values guide everything we do — from our decision-making to the way 
          we engage with communities and donors.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition"
            >
              <div className="text-4xl mb-4">{value.icon}</div>

              <h3 className="text-xl font-semibold text-[#0A1A2F] mb-3">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
