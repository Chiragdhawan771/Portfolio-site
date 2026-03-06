import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="fade-in py-5" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="align-items-center mb-5 fade-in delay-1">
          {/* Left Column - 3D Illustration / Aesthetics */}
          <Col lg="5" className="text-center mb-4 mb-lg-0">
             <div className="skills-illustration-container fade-in delay-2">
                <img 
                  src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Futuristic Robot Hand" 
                  className="skills-illustration img-fluid rounded"
                  style={{ borderRadius: '20px', boxShadow: '0 0 30px rgba(0, 210, 255, 0.2)' }}
                />
             </div>
          </Col>

          {/* Right Column - Text & Progress Bars */}
          <Col lg="7" className="fade-in delay-3 ps-lg-5">
            <h1 className="fw-bold mb-3 display-5">
              <span style={{ color: "var(--accent-color)" }}>My</span> Skills
            </h1>
            <p className="mb-5 pe-lg-5" style={{ fontSize: '1.1rem', color: "var(--text-secondary)", lineHeight: '1.6' }}>
              {dataabout.aboutme.split('\n')[0]} {/* Taking the first paragraph out for short description */}
            </p>

            {/* Progress Bars */}
            <div className="skills-container pe-lg-5">
              {skills.slice(0, 5).map((data, i) => { // show top 5 skills for better fit
                return (
                  <div key={i} className="skill-item mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h5 className="mb-0 fw-semibold" style={{ fontSize: '1rem', color: "var(--text-primary)" }}>
                        {data.name}
                      </h5>
                      <span style={{ color: "var(--accent-color)", fontWeight: 'bold' }}>{data.value}%</span>
                    </div>
                    <div className="progress" style={{ height: '8px', backgroundColor: 'var(--sidebar-border)', borderRadius: '10px' }}>
                      <div
                        className="progress-bar progress-bar-animated progress-bar-striped"
                        role="progressbar"
                        style={{
                          width: `${data.value}%`,
                          backgroundColor: 'var(--accent-color)',
                          boxShadow: '0 0 10px var(--accent-color)'
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
