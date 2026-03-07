import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import "./style.css";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find project based on ID
    const found = dataportfolio.find((p) => p.id === id);
    if (!found) {
      navigate("/#portfolio");
    } else {
      setProject(found);
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <HelmetProvider>
      <Container className="project-detail-container pb-5" style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{project.title || 'Project'} | {meta.title}</title>
          </Helmet>
          
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Button 
            variant="link" 
            className="text-decoration-none d-flex align-items-center mb-4 ps-0" 
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => navigate("/")}
          >
            <FiArrowLeft className="me-2" /> Back to Portfolio
          </Button>

          <Row className="mb-4">
            <Col>
              <h1 className="display-4 fw-bold" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h1>
              <div className="mt-3">
                <span className="badge rounded-pill px-3 py-2 me-2" style={{ backgroundColor: 'var(--accent-color)', color: '#000' }}>
                  {project.category === 'mobile' ? 'Mobile App' : 'Website'}
                </span>
                {project.tech && project.tech.map((t, idx) => (
                  <span key={idx} className="badge rounded-pill px-3 py-2 me-2 mb-2" style={{ backgroundColor: 'var(--sidebar-bg)', color: 'var(--text-secondary)', border: '1px solid var(--sidebar-border)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            {/* Image Column */}
            <Col lg="8" className="mb-4 mb-lg-0">
              <div className="d-flex flex-column gap-4">
                {(project.images ? project.images : [project.img]).map((imgSrc, idx) => (
                  <div 
                    key={idx}
                    className="rounded-4 overflow-hidden shadow-lg border"
                    style={{ borderColor: 'var(--sidebar-border)', backgroundColor: 'var(--sidebar-bg)' }}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} - ${idx + 1}`} 
                      className="w-100 h-auto object-fit-cover"
                    />
                  </div>
                ))}
              </div>
            </Col>

            {/* Content Column */}
            <Col lg="4">
              <div 
                className="p-4 rounded-4 shadow-sm border h-100"
                style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--sidebar-border)' }}
              >
                <h3 className="fw-semibold mb-3" style={{ color: 'var(--accent-color)' }}>About Project</h3>
                <p className="fs-5" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  {project.description}
                </p>

                {project.link !== "#" && (
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary d-flex align-items-center justify-content-center mt-4 rounded-pill py-3 fw-semibold w-100"
                    style={{ backgroundColor: 'var(--accent-color)', color: '#000', border: 'none', boxShadow: '0 0 15px rgba(0, 210, 255, 0.4)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Project <FiExternalLink className="ms-2" />
                  </motion.a>
                )}

                {project.adminLink && (
                  <motion.a 
                    href={project.adminLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary d-flex align-items-center justify-content-center mt-3 rounded-pill py-3 fw-semibold w-100"
                    style={{ backgroundColor: 'transparent', color: 'var(--accent-color)', border: '2px solid var(--accent-color)' }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 210, 255, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Admin Panel <FiExternalLink className="ms-2" />
                  </motion.a>
                )}
              </div>
            </Col>
          </Row>
        </motion.div>

      </Container>
    </HelmetProvider>
  );
};
