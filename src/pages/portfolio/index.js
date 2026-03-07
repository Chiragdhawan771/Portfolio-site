import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const handleOpen = (project) => {
    // Navigate to project detail page
    if (project.id) {
       navigate(`/project/${project.id}`);
    }
  };

  // Filter projects based on category
  const filteredProjects = dataportfolio.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  });

  return (
    <HelmetProvider>
      <Container className="portfolio-section py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-4 text-center" data-aos="fade-up">
          <Col>
            <h1 className="fw-bold mb-3 display-5">
              <span style={{ color: "var(--accent-color)" }}>My</span> Portfolio
            </h1>
            <p className="fs-6 mb-4" style={{ color: "var(--text-secondary)" }}>
              A collection of my recent mobile and web projects
            </p>

            {/* Tabs for filtering */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button
                className={`btn rounded-pill px-4 py-2 fw-semibold ${activeTab === 'all' ? 'btn-active' : 'btn-inactive'}`}
                onClick={() => setActiveTab('all')}
              >
                All Projects
              </button>
              <button
                className={`btn rounded-pill px-4 py-2 fw-semibold ${activeTab === 'web' ? 'btn-active' : 'btn-inactive'}`}
                onClick={() => setActiveTab('web')}
              >
                Websites
              </button>
              <button
                className={`btn rounded-pill px-4 py-2 fw-semibold ${activeTab === 'mobile' ? 'btn-active' : 'btn-inactive'}`}
                onClick={() => setActiveTab('mobile')}
              >
                Mobile Apps
              </button>
            </div>
          </Col>
        </Row>

        <Row className="g-4 mt-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((data, i) => (
              <Col key={data.id || i} xs={12} sm={6} md={4} lg={4} as={motion.div}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="portfolio-card shadow-sm rounded overflow-hidden position-relative"
                  onClick={() => handleOpen(data)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: 'var(--sidebar-bg)',
                    border: '1px solid var(--sidebar-border)',
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div 
                    className="portfolio-img-wrapper" 
                    style={{ 
                      height: '200px', 
                      overflow: 'hidden', 
                      borderBottom: '1px solid var(--sidebar-border)' 
                    }}
                  >
                    <img
                      src={data.img}
                      alt={data.title || `Project ${i + 1}`}
                      className="img-fluid portfolio-img w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="p-4 flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold mb-2 text-white">{data.title || "Project Title"}</h5>
                      <p className="text-secondary small line-clamp-3">
                        {data.shortDescription || data.description}
                      </p>
                    </div>
                    <div className="mt-3">
                      {data.tech ? (
                        data.tech.map((t, idx) => (
                          <span key={idx} className="badge rounded-pill bg-dark border border-secondary text-light me-2 mb-2">
                            {t}
                          </span>
                        ))
                      ) : (
                        <span className="badge rounded-pill bg-dark border border-secondary text-light me-2 mb-2">
                           {data.category === 'mobile' ? 'React Native' : 'React.js'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
