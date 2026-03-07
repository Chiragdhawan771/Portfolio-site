import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { ProjectDetail } from "../pages/portfolio/ProjectDetail";
import { Socialicons } from "../components/socialicons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css"; 

function SinglePageLayout() {
  const location = useLocation();

  useEffect(() => {
    // If returning back to home with a hash (e.g. /#portfolio), scroll to it
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
          });
        }
      }, 100); // Wait for render
    }
  }, [location]);

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

function AppRoutes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SinglePageLayout />} />
      <Route path="/project/:id" element={
        <div className="s_c main-scroll-container pb-5"> 
            {/* Keeping the container scrollable so details page can scroll */}
            <ProjectDetail />
        </div>
      } />
    </Routes>
  );
}

export default AppRoutes;
