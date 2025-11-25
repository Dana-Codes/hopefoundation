export default function AboutCTA() {
  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1A2F]/80"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Join Us in Making a Difference
        </h2>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg leading-7">
          Together, we can transform lives through education, medical support, and 
          community development. Your contribution matters.
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
  );
}
