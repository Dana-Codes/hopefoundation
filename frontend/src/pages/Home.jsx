import { Link } from "react-router-dom";

export default function Home() {

   const campaigns = [
    {
      title: "Build a School in Rural Community",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
      raised: 45000,
      goal: 60000,
    },
    {
      title: "Medical Aid for Cancer Patients",
      category: "Medical",
      image:
        "https://images.unsplash.com/photo-1580281658629-526bedb52f1c?auto=format&fit=crop&w=800&q=80",
      raised: 32000,
      goal: 50000,
    },
    {
      title: "Feed 1,000 Families in Poverty",
      category: "Poverty Relief",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      raised: 19000,
      goal: 30000,
    },
  ];

   const stats = [
    { number: "12", label: "Schools Built" },
    { number: "18,500+", label: "Meals Provided" },
    { number: "320+", label: "Medical Surgeries Funded" },
    { number: "2,700+", label: "Children Sponsored" },
  ];

   const actions = [
    {
      title: "Make a Donation",
      description:
        "Your financial support helps us fund education, medical care, poverty relief, and community development.",
      icon: "💰",
      btn: "Donate Now",
      link: "/donate",
    },
    {
      title: "Become a Volunteer",
      description:
        "Join our volunteer team and help us reach more communities, support field operations, and organize events.",
      icon: "🤝",
      btn: "Join Us",
      link: "/volunteer",
    },
    {
      title: "Partner With Us",
      description:
        "Corporations, NGOs, and individuals can collaborate with us to expand our impact and support large-scale projects.",
      icon: "🌍",
      btn: "Partner",
      link: "/contact",
    },
  ];


    const testimonials = [
    {
      name: "Amina Yusuf",
      role: "Beneficiary – Education Support",
      quote:
        "With the foundation’s help, I was able to return to school after two years at home. My life has completely changed.",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Dr. Samuel Ade",
      role: "Medical Partner",
      quote:
        "Their medical outreach programs have saved countless lives. Their commitment to healthcare is exceptional.",
      image:
        "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Grace Thompson",
      role: "Donor",
      quote:
        "I’ve donated to many organizations, but the transparency and real impact here keep me coming back.",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];



  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] w-full bg-cover bg-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 max-w-4xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Creating Hope.  
            <br /> Changing Lives.
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-2xl">
            We empower communities through education, medical support,
            poverty relief, and sustainable projects across the world.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/donate"
              className="bg-blue-700 hover:bg-blue-800 transition px-6 py-3 rounded-lg font-semibold"
            >
              Donate Now
            </Link>

            <Link
              to="/campaigns"
              className="bg-white text-blue-700 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold"
            >
              Explore Campaigns
            </Link>
          </div>
        </div>
      </section>


      {/* ================= MISSION SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
        <p className="mt-4 text-gray-600 text-lg leading-7 max-w-3xl mx-auto">
          We partner with communities to break cycles of poverty through education,
          healthcare, and long-term empowerment. Every donation directly supports
          families and children in need.
        </p>
      </section>


      {/* ================= IMPACT STATS ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-10 text-center">
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h3 className="text-4xl font-bold text-blue-700">12K+</h3>
          <p className="mt-3 text-gray-600">Children Educated</p>
        </div>

        <div className="p-8 bg-white shadow-md rounded-lg">
          <h3 className="text-4xl font-bold text-blue-700">8K+</h3>
          <p className="mt-3 text-gray-600">Medical Treatments</p>
        </div>

        <div className="p-8 bg-white shadow-md rounded-lg">
          <h3 className="text-4xl font-bold text-blue-700">150+</h3>
          <p className="mt-3 text-gray-600">Community Projects</p>
        </div>
      </section>


      {/* ================= FEATURED CAMPAIGNS ================= */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Featured Campaigns
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
              className="h-48 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800">
                Build a School for Rural Children
              </h3>
              <p className="text-gray-600 mt-3 text-sm">
                Help us provide classrooms, teachers, and educational resources.
              </p>
              <Link
                to="/campaigns"
                className="mt-4 inline-block text-blue-700 font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580281658629-89b61f3d6f4c?auto=format&fit=crop&w=800&q=80"
              className="h-48 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800">
                Medical Outreach for Rural Women
              </h3>
              <p className="text-gray-600 mt-3 text-sm">
                Support essential medical screenings, vaccines, and treatments.
              </p>
              <Link
                to="/campaigns"
                className="mt-4 inline-block text-blue-700 font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1566577739112-d609c249f85d?auto=format&fit=crop&w=800&q=80"
              className="h-48 w-full object-cover"
              alt=""
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800">
                Food & Poverty Relief Program
              </h3>
              <p className="text-gray-600 mt-3 text-sm">
                Provide meals, supplies, and support for low-income families.
              </p>
              <Link
                to="/campaigns"
                className="mt-4 inline-block text-blue-700 font-semibold hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/*=================another feature cam=================================*/}

       <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0A1A2F]">
        Featured Campaigns
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Your contribution helps us support children, families, and communities
        in need across education, medical care, and poverty relief.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {campaigns.map((item, index) => {
          const percentage = Math.round((item.raised / item.goal) * 100);

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  {item.category}
                </span>

                <h3 className="text-lg font-semibold mt-4 text-[#0A1A2F]">
                  {item.title}
                </h3>

                {/* Progress bar */}
                <div className="mt-5">
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="bg-[#1A73E8] h-2 rounded"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  <div className="mt-3 flex justify-between text-sm">
                    <p className="text-[#0A1A2F] font-semibold">
                      ${item.raised.toLocaleString()} Raised
                    </p>
                    <p className="text-gray-600">
                      Goal: ${item.goal.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Donate button */}
                <button className="mt-6 w-full bg-[#1A73E8] text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Donate Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/*============ Impact stats ======================*/}

         <section className="bg-[#0A1A2F] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our Impact in Communities
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Every donation goes directly into transforming lives through education,
          healthcare, poverty relief, and community development.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#1A73E8]">
                {item.number}
              </h3>
              <p className="text-gray-300 mt-3 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

     {/* ================= HOW CAN YOU HELP  ================= */}

       <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A1A2F]">
        How You Can Help
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-12">
        Every contribution — whether through donating, volunteering, or partnering —
        helps change lives and build stronger communities.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {actions.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
          >
            <div className="text-5xl mb-5">{item.icon}</div>

            <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-6 mb-8">
              {item.description}
            </p>

            <a
              href={item.link}
              className="inline-block bg-[#1A73E8] text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {item.btn}
            </a>
          </div>
        ))}
      </div>
    </section>

        {/* ===== Testimonial =================  */}

        <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F]">
          Stories of Hope & Impact
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4 mb-14">
          Real voices from communities, partners, and supporters whose lives have been
          touched by your kindness.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <img
                src={item.image}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-5"
                alt={item.name}
              />

              <p className="text-gray-600 italic leading-7 mb-6">
                “{item.quote}”
              </p>

              <h4 className="text-[#0A1A2F] font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

      {/* ================= CALL TO ACTION ================= */}
  
       <section
      className="relative py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1A2F]/80"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Together, We Can Change the World
        </h2>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg leading-7">
          Your contribution brings hope, healthcare, education, and opportunities 
          to thousands of families and children in need.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="/donate"
            className="bg-[#1A73E8] hover:bg-blue-700 transition text-white font-semibold py-3 px-10 rounded-lg shadow-lg"
          >
            Donate Now
          </a>

          <a
            href="/volunteer"
            className="bg-white text-[#0A1A2F] hover:bg-gray-100 transition font-semibold py-3 px-10 rounded-lg shadow-lg"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>

    </div>
  );
}
