import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, logotext } from "../../content_option";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home-section position-relative w-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        {/* Glow effect in the background */}
        <div className="bg-glow"></div>
        
        <div className="content-z d-flex flex-column align-items-center justify-content-center text-center fade-in delay-1 h-100 w-100 p-4">
          
          <div 
            className="avatar-container fade-in delay-2" 
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>

          <h1 className="home-title fade-in delay-3 mt-3">
            Hi, I'm <span>{logotext}</span>
          </h1>
          
          <div className="home-subtitle fade-in delay-3">
            <span style={{color: '#fff', opacity: 0.8}}>I'm a </span>
            <span style={{color: 'var(--accent-color)'}}>
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </span>
          </div>

          <p className="home-desc fade-in delay-4">
            {introdata.description}
          </p>
          
          <div className="btn-container fade-in delay-4 mt-4">
          <div className="btn-container fade-in delay-4 mt-4">
            <motion.a 
              href="#portfolio"
              className="btn-primary-custom"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
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

        </div>
      </section>
    </HelmetProvider>
  );
};
