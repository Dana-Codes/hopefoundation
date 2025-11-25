import { useState } from "react";

export default function DonationForm() {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [tribute, setTribute] = useState("");

  const suggestedAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${amount}!`);
    // Implement payment gateway integration here
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-[#0A1A2F] text-center mb-6">
        Choose Your Donation
      </h2>

      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg space-y-6">
        {/* Suggested Amounts */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Suggested Amounts</label>
          <div className="flex flex-wrap gap-3">
            {suggestedAmounts.map((amt, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setAmount(amt)}
                className={`px-5 py-2 rounded-lg border ${
                  amount == amt ? "bg-[#1A73E8] text-white" : "bg-white text-gray-700 border-gray-300"
                } hover:bg-[#1A73E8] hover:text-white transition`}
              >
                ${amt}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Custom Amount</label>
          <input
            type="number"
            placeholder="$0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          />
        </div>

        {/* Donation Frequency */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Donation Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          >
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly Recurring</option>
          </select>
        </div>

        {/* Tribute / Memorial */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Tribute / Memorial (optional)</label>
          <input
            type="text"
            placeholder="In honor of..."
            value={tribute}
            onChange={(e) => setTribute(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
          />
        </div>

        {/* Donor Information */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Your Information</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
            required
          />
        </div>

        {/* Payment Button */}
        <button
          type="submit"
          className="w-full bg-[#1A73E8] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Donate Now
        </button>
      </form>
    </section>
  );
}
