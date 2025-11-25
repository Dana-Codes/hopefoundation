export default function DonateHero() {
  return (
    <section
      className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588776814546-cd0a857f6a53?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-[#0A1A2F]/70"></div>

      <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center px-4">
        Make a Donation
      </h1>
    </section>
  );
}
