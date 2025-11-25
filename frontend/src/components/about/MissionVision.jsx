export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Mission */}
        <div>
          <h3 className="text-3xl font-bold text-[#0A1A2F] mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-7">
            To empower vulnerable children, families, and communities by providing 
            access to quality education, essential healthcare, poverty relief 
            programs, and sustainable development opportunities.  
          </p>
          <p className="text-gray-600 mt-4 leading-7">
            We are committed to creating long-lasting impact through transparent 
            and community-driven projects that restore hope and transform lives.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h3 className="text-3xl font-bold text-[#0A1A2F] mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-7">
            A world where every child has access to education, every family has 
            access to healthcare, and every community has the opportunity to thrive 
            beyond poverty.
          </p>
          <p className="text-gray-600 mt-4 leading-7">
            We envision a future built on compassion, dignity, and equal 
            opportunities for all — regardless of background or circumstance.
          </p>
        </div>

      </div>
    </section>
  );
}
