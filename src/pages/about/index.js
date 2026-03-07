import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, meta, skills } from "../../content_option";
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma,
  FaAws
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiExpo, 
  SiTensorflow,
  SiNextdotjs,
  SiNestjs,
  SiFlutter,
  SiMicrosoftazure
} from "react-icons/si";

const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();
  if (name.includes("react")) return <FaReact className="me-2" style={{color: "var(--accent-color)"}} />;
  if (name.includes("expo")) return <SiExpo className="me-2" style={{color: "white"}} />;
  if (name.includes("javascript")) return <SiJavascript className="me-2" style={{color: "#F7DF1E"}} />;
  if (name.includes("typescript")) return <SiTypescript className="me-2" style={{color: "#3178C6"}} />;
  if (name.includes("node")) return <FaNodeJs className="me-2" style={{color: "#339933"}} />;
  if (name.includes("next")) return <SiNextdotjs className="me-2" style={{color: "white"}} />;
  if (name.includes("nest")) return <SiNestjs className="me-2" style={{color: "#E0234E"}} />;
  if (name.includes("flutter")) return <SiFlutter className="me-2" style={{color: "#02569B"}} />;
  if (name.includes("aws")) return <FaAws className="me-2" style={{color: "#FF9900"}} />;
  if (name.includes("azure")) return <SiMicrosoftazure className="me-2" style={{color: "#0089D6"}} />;
  if (name.includes("mongo")) return <SiMongodb className="me-2" style={{color: "#47A248"}} />;
  if (name.includes("figma") || name.includes("ui/ux")) return <FaFigma className="me-2" style={{color: "#F24E1E"}} />;
  if (name.includes("ai") || name.includes("tensor")) return <SiTensorflow className="me-2" style={{color: "#FF6F00"}} />;
  return null;
};

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="fade-in py-5" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        <Row className="align-items-center justify-content-center mb-5 fade-in delay-1">
          {/* Main Column - Text & Skills */}
          <Col lg="10" className="fade-in delay-3">
            <h1 className="fw-bold mb-3 display-5">
              <span style={{ color: "var(--accent-color)" }}>About</span> Me
            </h1>
            {dataabout.aboutme.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-3" style={{ fontSize: '1.1rem', color: "var(--text-secondary)", lineHeight: '1.6' }}>
                {paragraph}
              </p>
            ))}

            {/* Skills Icons Only */}
            <div className="skills-icon-container d-flex flex-wrap gap-3 mt-4">
              {skills.map((data, i) => {
                const icon = getSkillIcon(data.name);
                if (!icon) return null; // only render ones with icons we defined
                return (
                  <div key={i} className="skill-pill d-flex align-items-center justify-content-center px-4 py-3 rounded text-white fw-semibold" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(5px)' }}>
                    {React.cloneElement(icon, { style: { ...icon.props.style, fontSize: '1.5rem', marginRight: '10px' } })}
                    <span>{data.name}</span>
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
