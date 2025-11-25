export default function Team() {
  const team = [
    {
      name: "Daniel Okoro",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Bello",
      role: "Head of Programs",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Samuel Adeyemi",
      role: "Medical Director",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Grace Thompson",
      role: "Education Lead",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F]">
          Our Leadership Team
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4 mb-16">
          Meet the passionate professionals driving our mission forward with experience, dedication, and vision.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-5"
              />

              <h3 className="text-xl font-semibold text-[#0A1A2F]">{member.name}</h3>
              <p className="text-gray-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
