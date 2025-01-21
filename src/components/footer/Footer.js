import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'; // Import Bootstrap components
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Add more social media icons from react-icons

// The Footer component
const Footer = () => {
  return (
    <div className="footer-container" style={{ backgroundColor: '#343a40', padding: '40px 0', color: '#fff' }}>
      <Container>
        <Row className="text-center">
          {/* Developer Info */}
          <Col md={4} sm={12} className="footer-section">
  <h5>Developer</h5>
  <p>Phathushedzo</p>
  <p className="developer-message">
    "Crafting innovative solutions with passion and precision. As a Junior Developer, I am constantly learning and growing in the field of software development. I specialize in front-end technologies like React and JavaScript, and have a solid foundation in back-end development with Node.js and Express. I am eager to work on impactful projects, collaborate with experienced developers, and continue to refine my skills to create user-friendly, scalable applications."
  </p>
  <p>
    I am committed to delivering high-quality code while focusing on clean, maintainable practices. I enjoy tackling challenges, problem-solving, and constantly improving my knowledge of the latest web development technologies. Excited to grow in this ever-evolving industry, I seek opportunities to contribute to meaningful projects and make a positive impact through technology.
  </p>
</Col>
          {/* Contact Info */}
          <Col md={4} sm={12} className="footer-section">
            <h5>Contact</h5>
            <p>Limpopo, Venda</p>
            <p>Currently in Gauteng</p>
            <p>Phone: <a href="tel:+27797262269" style={{ textDecoration: 'none', color: '#f8f9fa' }}>0797262269</a></p>
            <p>Email: <a href="mailto:tshidaisa@gmail.com" style={{ textDecoration: 'none', color: '#f8f9fa' }}>tshidaisa@gmail.com</a></p>
          </Col>

          {/* Social Media Links */}
          <Col md={4} sm={12} className="footer-section">
            <h5>Follow Me</h5>
            <Nav className="justify-content-center">
              <Nav.Link href="https://www.facebook.com/phathutshedzodanies.tshidaisa" target="_blank" style={{ textDecoration: 'none' }}>
                <FaFacebook size={30} style={{ marginRight: '15px', color: '#fff', transition: 'color 0.3s' }} />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/phathutshedzo-tshidaisa-39b64969" target="_blank" style={{ textDecoration: 'none' }}>
                <FaLinkedin size={30} style={{ marginRight: '15px', color: '#fff', transition: 'color 0.3s' }} />
              </Nav.Link>
              <Nav.Link href="https://github.com/RangoSS" target="_blank" style={{ textDecoration: 'none' }}>
                <FaGithub size={30} style={{ marginRight: '15px', color: '#fff', transition: 'color 0.3s' }} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com/phathutshedzo" target="_blank" style={{ textDecoration: 'none' }}>
                <FaTwitter size={30} style={{ marginRight: '15px', color: '#fff', transition: 'color 0.3s' }} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Copyright and Additional Links */}
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; {new Date().getFullYear()} Phathushedzo. All rights reserved.</p>
            <Nav className="justify-content-center">
              <Nav.Link href="/privacy-policy" style={{ color: '#f8f9fa', textDecoration: 'none', marginRight: '15px' }}>Privacy Policy</Nav.Link>
              <Nav.Link href="/terms-of-service" style={{ color: '#f8f9fa', textDecoration: 'none' }}>Terms of Service</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
