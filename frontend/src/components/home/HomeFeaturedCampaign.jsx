import { Link } from "react-router-dom"
import medicaloutreach from "../../assets/medical-out-reach.jpg"
import foodrelief from "../../assets/food-relief.jpg"

const HomeFeaturedCampaign = () => {
  return (
    <div>
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
              src={medicaloutreach}
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
              src={foodrelief}
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

    </div>
  )
}

export default HomeFeaturedCampaign