import React from 'react'

const HomeMission = () => {
  return (
    <div>
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
    </div>
  )
}

export default HomeMission