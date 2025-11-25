export default function SuccessStories() {
  const stories = [
    {
      name: "Amina Yusuf",
      role: "Student",
      story: "Thanks to the scholarship program, I could continue my education and pursue my dream of becoming a teacher.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Samuel Johnson",
      role: "Medical Patient",
      story: "The medical outreach program saved my life and provided my family with much-needed healthcare support.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Grace Okeke",
      role: "Community Leader",
      story: "Our village received clean water and education support, and our children now have hope for a better future.",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] text-center mb-12">
        Success Stories
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {stories.map((story, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <img
              src={story.image}
              alt={story.name}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#0A1A2F]">{story.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{story.role}</p>
            <p className="text-gray-600 leading-7">{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
