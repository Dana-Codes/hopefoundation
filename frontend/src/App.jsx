import { Route, Routes } from 'react-router-dom'

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Campaigns from "./pages/Campaigns";
import CampaignDetails from "./pages/CampaignDetails";
import Donate from "./pages/Donate";
import Impact from "./pages/Impact";
import Events from "./pages/Events";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 900,
  once: true,
});


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">

        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaigns/:id" element={<CampaignDetails />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </>
  );
}

export default App;
