import React, { useState, useEffect } from "react";
import { FiHome, FiBriefcase, FiUser, FiMail } from "react-icons/fi";

const Headermain = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", icon: <FiHome /> },
    { id: "about", icon: <FiUser /> },
    { id: "portfolio", icon: <FiBriefcase /> },
    { id: "contact", icon: <FiMail /> },
  ];

  const handleScrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
       window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="glass-sidebar fade-in">
      {navLinks.map((link) => (
        <div
          key={link.id}
          className={`sidebar-icon ${activeSection === link.id ? "active" : ""}`}
          onClick={() => handleScrollTo(link.id)}
        >
          {link.icon}
        </div>
      ))}
    </div>
  );
};

export default Headermain;
