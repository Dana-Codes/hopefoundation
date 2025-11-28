import React from 'react'

const HomeTestimonial = () => {
      const testimonials = [
    {
      name: "Lisa clark",
      role: "Beneficiary – Education Support",
      quote:
        "With the foundation’s help, I was able to return to school after two years at home. My life has completely changed.",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Tony park",
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
    <div>
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

    </div>
  )
}

export default HomeTestimonial