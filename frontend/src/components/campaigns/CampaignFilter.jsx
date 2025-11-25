export default function CampaignFilter() {
  const categories = ["All", "Education", "Medical", "Poverty", "Cancer", "Schools", "Medical Centers"];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A1A2F] mb-6">
        Filter by Category
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="bg-white border border-gray-300 px-5 py-2 rounded-full text-gray-700 font-medium hover:bg-[#1A73E8] hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
