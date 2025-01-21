import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'; // Import Bootstrap components
import { FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import social media icons from react-icons
//import Footer from '../styles/Footer.css';
// The Footer component
const Footer = () => {
  return (
    <div className="footer-container" style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <Container>
        <Row className="text-center">
          {/* Developer Info */}
          <Col md={4}>
            <h5>Developer</h5>
            <p>Phathushedzo</p>
            <p className="developer-message">"Crafting innovative solutions with passion and precision."</p>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5>Contact</h5>
            <p>Limpopo, Venda</p>
            <p>Phone: <a href="tel:+27797262269" style={{ textDecoration: 'none' }}>0797262269</a></p>
          </Col>

          {/* Social Media Links */}
          <Col md={4}>
            <h5>Follow Me</h5>
            <Nav className="justify-content-center">
              <Nav.Link href="https://www.facebook.com/phathutshedzodanies.tshidaisa" target="_blank" style={{ textDecoration: 'none' }}>
                <FaFacebook size={24} style={{ marginRight: '10px' }} />
                Facebook
              </Nav.Link>
              <Nav.Link href="www.linkedin.com/in/phathutshedzo-tshidaisa-39b64969" target="_blank" style={{ textDecoration: 'none' }}>
                <FaLinkedin size={24} style={{ marginRight: '10px' }} />
                LinkedIn
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
