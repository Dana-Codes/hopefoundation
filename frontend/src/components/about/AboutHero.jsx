export default function AboutHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-[#0A1A2F]/70"></div>

      <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center px-4">
        About Our Foundation
      </h1>
    </section>
  );
}
