import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0ntecyo",
        "template_virfa3c",
        formRef.current,
        { publicKey: "98iwU83ZsG1ewfkCN" }
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A2F] text-center mb-12">
        Contact Us
      </h2>

    

      {/* MAP SECTION */}
      <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg mb-16">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.749801934376!2d-77.05330652359898!3d38.80506585387545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1d056569789%3A0xadb39c7ad94cf236!2s225%20Reinekers%20Ln%2C%20Alexandria%2C%20VA%2022314%2C%20USA!5e0!3m2!1sen!2sus!4v1703955500000"
        ></iframe>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white shadow-lg rounded-xl p-8 md:p-10">
        <form ref={formRef} onSubmit={sendEmail} className="grid gap-6">
          {/* Name */}
          <div>
            <label className="text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="yourname@example.com"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="text-gray-700 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="What is your message about?"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {/* Success Message */}
          {sent && (
            <p className="text-green-600 font-semibold text-center">
              Message sent successfully! We’ll get back to you soon.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              bg-blue-600 text-white py-3 px-6 rounded-lg 
              font-semibold hover:bg-blue-700 transition 
              shadow-md disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
