import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { motion } from "framer-motion";
import profileImg from "../../assets/images/profile.jpeg";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home-section position-relative w-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="content-z h-100 w-100 p-5 d-flex align-items-center">
          <div className="row w-100 align-items-center">

            {/* Left Content Column */}
            <div className="col-lg-7 d-flex flex-column justify-content-center text-start fade-in delay-1 mb-5 mb-lg-0">
              <h1 className="home-title fade-in delay-3 mt-3">
                {introdata.title}
              </h1>

              <div className="home-subtitle fade-in delay-3">
                <span style={{ color: 'var(--accent-color)', fontWeight: '600' }}>
                  {introdata.role}
                </span>
              </div>

              {/* Render multi-line paragraphs correctly */}
              <div className="home-desc fade-in delay-4">
                {introdata.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="btn-container fade-in delay-4 mt-4">
                <motion.a
                  href="#portfolio"
                  className="btn-primary-custom"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                {/* <motion.a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-custom"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a> */}
                <motion.a
                  href="#contact"
                  className="btn-secondary-custom"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </div>

            {/* Right Profile Image Column */}
            <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end fade-in delay-2">
              <div className="profile-img-container">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="img-fluid profile-image"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
