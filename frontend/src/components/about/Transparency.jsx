export default function Transparency() {
  const reports = [
    {
      year: "2023",
      title: "Annual Impact Report",
      description: "Highlights of all programs, donations, and success stories from the past year.",
      link: "#",
    },
    {
      year: "2022",
      title: "Financial Report",
      description: "Detailed financial breakdown showing how funds were used across projects.",
      link: "#",
    },
    {
      year: "2021",
      title: "Medical & Education Report",
      description: "Insights into medical missions and educational support initiatives.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] text-center mb-8">
        Transparency & Reports
      </h2>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        We are committed to full transparency. Explore our financial reports, impact assessments, and donor updates.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-[#0A1A2F] mb-2">
              {report.title}
            </h3>
            <p className="text-gray-600 mb-4">{report.description}</p>
            <a
              href={report.link}
              className="text-[#1A73E8] font-semibold hover:underline"
            >
              View Report
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
