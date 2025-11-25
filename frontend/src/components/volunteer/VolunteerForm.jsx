import { useState } from "react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    role: "General Volunteer",
  });

  const roles = ["General Volunteer", "Event Volunteer", "Medical Volunteer", "Education Volunteer"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we will contact you soon!`);
    // Implement backend integration here
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#0A1A2F] text-center mb-6">
        Sign Up to Volunteer
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg space-y-6">
        {/* Full Name */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          />
        </div>

        {/* Volunteer Role */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Volunteer Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          >
            {roles.map((role, idx) => (
              <option key={idx} value={role}>{role}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Message / Availability</label>
          <textarea
            name="message"
            placeholder="Any message or preferred availability..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#1A73E8] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
