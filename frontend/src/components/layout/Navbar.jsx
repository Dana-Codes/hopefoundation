import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          Foundation
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/events">Events</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Donate Button */}
        <Link
          to="/donate"
          className="hidden md:block bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Donate
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-3xl">&#x2715;</span> // X icon
          ) : (
            <span className="text-3xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/campaigns">Campaigns</Link>
          <Link onClick={() => setOpen(false)} to="/impact">Impact</Link>
          <Link onClick={() => setOpen(false)} to="/events">Events</Link>
          <Link onClick={() => setOpen(false)} to="/volunteer">Volunteer</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
          
          <Link
            onClick={() => setOpen(false)}
            to="/donate"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-semibold"
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}
