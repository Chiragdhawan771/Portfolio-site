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
      <Container className="About-header py-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 text-center">
          <Col>
            <h1 className="display-4 fw-bold mb-2">My Portfolio</h1>
            <p className="text-muted fs-5">
              A showcase of my full‑stack React Native + Expo mobile apps and modern web applications,
              built with scalable backends and elegant, user‑friendly designs.
            </p>
            <hr className="t_border mx-auto my-4" style={{ width: "80px" }} />
          </Col>
        </Row>

        <Row className="g-4">
          {dataportfolio.map((data, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={4}>
              <div
                className="po_item shadow-sm rounded overflow-hidden position-relative"
                onClick={() => handleOpen(data)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={data.img}
                  alt={data.title || `Project ${i + 1}`}
                  className="img-fluid portfolio-img"
                />
                <div className="overlay d-flex flex-column justify-content-center align-items-center text-center p-3">
                  <p className="text-white fw-semibold">{data.shortDescription || data.description}</p>
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
            contentClassName="bg-dark text-light"
          >
            <Modal.Header closeButton className="border-0">
              <Modal.Title className="fw-bold">{selectedProject.title || "Project Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.img}
                alt={selectedProject.title || "Project"}
                className="img-fluid mb-3 rounded"
              />
              <p className="fs-5">{selectedProject.description}</p>
              {selectedProject.link !== "#" && (
                <Button
                  variant="primary"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
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
