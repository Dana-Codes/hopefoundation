import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0A1A2F] text-gray-300 pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Column 1 - Logo & Mission */}
        <div>
          <h2 className="text-2xl font-bold text-white">Foundation</h2>
          <p className="mt-4 text-sm leading-6">
            We are committed to improving lives through education, medical
            support, poverty relief, and community development. Together, we
            can make a difference.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/campaigns" className="hover:text-white">Campaigns</Link></li>
            <li><Link to="/impact" className="hover:text-white">Impact</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: support@foundation.org</li>
            <li>Phone: +234 000 0000</li>
            <li>Address: Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 mt-14 pt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Foundation. All Rights Reserved.
      </div>
    </footer>
  );
}
