export default function ImpactStats() {
  const stats = [
    { title: "Schools Built", value: 12 },
    { title: "Medical Missions", value: 48 },
    { title: "Children Educated", value: 3200 },
    { title: "Communities Supported", value: 25 },
    { title: "Funds Raised ($)", value: 450000 },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] mb-12">
          Key Impact Metrics
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-4xl font-bold text-[#1A73E8]">{stat.value.toLocaleString()}</h3>
              <p className="mt-2 text-gray-600 font-medium">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
