import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            ...formData,
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata({
            ...formData,
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            loading: false,
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container className="fade-in py-5 d-flex flex-column justify-content-center" style={{ height: '100%' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="mb-4 mt-3 pt-md-3 fade-in delay-1 text-center">
          <Col lg="12">
            <h1 className="fw-bold mb-3 display-5">
              <span style={{ color: "var(--accent-color)" }}>Contact</span> Me
            </h1>
            <p className="fs-6 mb-4 pe-lg-5" style={{ color: "var(--text-secondary)" }}>
              {contactConfig.description}
            </p>
          </Col>
        </Row>
        
        <Row className="sec_sp fade-in delay-2 justify-content-center">
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-3 co_alert mb-4 ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
              style={{ backgroundColor: 'var(--sidebar-bg)', color: 'var(--text-primary)', border: '1px solid var(--accent-color)' }}
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>

          <Col lg="5" className="mb-5 mb-lg-0 pe-lg-5">
            <div className="contact-info-card p-4 rounded-4" style={{ backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--sidebar-border)' }}>
              <h3 className="mb-4 fw-semibold" style={{ color: "var(--accent-color)" }}>Get in touch</h3>
              <address className="mb-0 fs-5" style={{ color: "var(--text-secondary)"}}>
                <div className="mb-3">
                  <strong className="text-light">Email:</strong>{" "}
                  <a href={`mailto:${contactConfig.YOUR_EMAIL}`} style={{ color: "var(--accent-color)", textDecoration: "none" }}>
                    {contactConfig.YOUR_EMAIL}
                  </a>
                </div>
                {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                  <div>
                    <strong className="text-light">Phone:</strong> {contactConfig.YOUR_FONE}
                  </div>
                ) : (
                  ""
                )}
              </address>
            </div>
          </Col>
          
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group mb-4">
                  <input
                    className="form-control rounded-pill px-4 py-3 custom-input"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                    style={{ backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--sidebar-border)', color: 'white' }}
                  />
                </Col>
                <Col lg="6" className="form-group mb-4">
                  <input
                    className="form-control rounded-pill px-4 py-3 custom-input"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                    style={{ backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--sidebar-border)', color: 'white' }}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-4 px-4 py-3 mb-4 custom-input"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ backgroundColor: 'var(--sidebar-bg)', border: '1px solid var(--sidebar-border)', color: 'white' }}
              ></textarea>
              <Row>
                <Col lg="12" className="form-group text-end">
                  <button className="btn-primary-custom" type="submit" disabled={formData.loading}>
                    {formData.loading ? "Sending..." : "Send Message"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
