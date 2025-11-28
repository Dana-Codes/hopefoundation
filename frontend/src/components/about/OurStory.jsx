export default function OurStory() {
  const timeline = [
    {
      year: "2021",
      title: "The Beginning",
      description:
        "The foundation was established with a mission to help vulnerable families and children facing extreme poverty and lack of access to education.",
    },
    {
      year: "2022",
      title: "First Education Program",
      description:
        "We launched our first scholarship program, supporting 50 children with school supplies, enrollment fees, and mentoring.",
    },
    {
      year: "2023",
      title: "Medical Outreach Expansion",
      description:
        "Expanded to rural medical outreach, reaching over 2,000 people with free medical checkups, medicines, and health education.",
    },
    {
      year: "2024",
      title: "Community Development Projects",
      description:
        "Started supporting community initiatives — clean water, small farming, and women empowerment programs.",
    },
    {
      year: "2025",
      title: "Building for the Future",
      description:
        "Launched school-building and health-center projects to create long-term sustainable impact.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] text-center mb-14">
        Our Story
      </h2>

      <div className="relative border-l-4 border-[#1A73E8] pl-8">

        {timeline.map((item, index) => (
          <div key={index} className="mb-12 relative">
            {/* Dot */}
            <div className="absolute -left-4 top-1 w-6 h-6 bg-[#1A73E8] rounded-full border-4 border-white"></div>

            <h3 className="text-2xl font-semibold text-[#0A1A2F]">
              {item.year}
            </h3>
            <h4 className="text-lg font-medium text-gray-700 mt-1">
              {item.title}
            </h4>
            <p className="text-gray-600 leading-7 mt-3">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
