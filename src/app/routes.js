import React, { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css"; // We will add styling for sections here

function AppRoutes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="s_c main-scroll-container">
      {/* Home Section */}
      <section id="home" className="section-container">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" className="section-container" data-aos="fade-up">
        <About />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-container" data-aos="fade-up">
        <Portfolio />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container" data-aos="fade-up">
        <ContactUs />
      </section>

      <Socialicons />
      <ToastContainer />
    </div>
  );
}

export default AppRoutes;
