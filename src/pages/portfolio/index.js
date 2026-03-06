import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <HelmetProvider>
      <Container className="portfolio-section py-5 fade-in">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 text-center fade-in delay-1">
          <Col>
            <h1 className="fw-bold mb-3 display-5">
              <span style={{ color: "var(--accent-color)" }}>My</span> Portfolio
            </h1>
            <p className="fs-6" style={{ color: "var(--text-secondary)" }}>
              A collection of my recent mobile and web projects
            </p>
          </Col>
        </Row>

        <Row className="g-4 fade-in delay-2">
          {dataportfolio.map((data, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={4}>
              <div
                className="portfolio-card shadow-sm rounded overflow-hidden position-relative"
                onClick={() => handleOpen(data)}
                style={{
                  cursor: "pointer",
                  backgroundColor: 'var(--sidebar-bg)',
                  border: '1px solid var(--sidebar-border)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
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
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
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
                    <span className="badge rounded-pill bg-dark border border-secondary text-light me-2 mb-2">
                       React Native
                    </span>
                    <span className="badge rounded-pill bg-dark border border-secondary text-light me-2 mb-2">
                       Expo
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {selectedProject && (
          <Modal
            show={showModal}
            onHide={handleClose}
            centered
            size="lg"
            className="project-modal"
            contentClassName="bg-dark text-light border border-secondary"
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <Modal.Header closeButton closeVariant="white" className="border-bottom border-secondary">
              <Modal.Title className="fw-bold" style={{ color: "var(--accent-color)" }}>
                {selectedProject.title || "Project Details"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.img}
                alt={selectedProject.title || "Project"}
                className="img-fluid mb-4 rounded w-100"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <p className="fs-5 mb-4 text-light" style={{ lineHeight: '1.6' }}>
                {selectedProject.description}
              </p>
              {selectedProject.link !== "#" && (
                <Button
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 rounded-pill px-4 py-2 fw-semibold"
                  style={{
                    backgroundColor: 'var(--accent-color)',
                    color: '#000',
                    border: 'none',
                    boxShadow: '0 0 15px rgba(0, 210, 255, 0.4)'
                  }}
                >
                  View Live Project
                </Button>
              )}
            </Modal.Body>
          </Modal>
        )}
      </Container>
    </HelmetProvider>
  );
};
