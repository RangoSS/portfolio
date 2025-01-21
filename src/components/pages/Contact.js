import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Footer from "../footer/Footer";
import "../styles/Contact.css";
import sendEmail from "./EmailService";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    from_name: "", // Match EmailJS variable
    email_id: "", // Match EmailJS variable
    message: "", // Match EmailJS variable
  });
  const [submitted, setSubmitted] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const result = await sendEmail(e.target); // Send email with form data

    if (result.success) {
      setSubmitted(true);
      setAlertMessage("Thank you for contacting me! I truly appreciate your message.");
    } else {
      setAlertMessage("Something went wrong. Please try again later.");
    }

    // Reset form after submission
    setContactInfo({
      from_name: "",
      email_id: "",
      message: "",
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Container className="contact-container">
        <h2>Contact Me</h2>
        <p>I'm glad you're here! Please reach out to me by filling out the form below.</p>

        <Row className="mt-5">
          <Col md={6} className="contact-form">
            <h3>Send Me a Message</h3>
            {alertMessage && (
              <Alert variant={submitted ? "success" : "danger"}>{alertMessage}</Alert>
            )}
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="from_name" // Match EmailJS template variable
                  value={contactInfo.from_name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email_id" // Match EmailJS template variable
                  value={contactInfo.email_id}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message here"
                  name="message" // Match EmailJS template variable
                  value={contactInfo.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6} className="social-links">
            <h3>Connect with Me</h3>
            <Button
              variant="info"
              href="www.linkedin.com/in/phathutshedzo-tshidaisa-39b64969"
              target="_blank"
              className="social-button"
            >
              <FaLinkedin /> LinkedIn
            </Button>
            <Button
              variant="primary"
              href="https://www.facebook.com/phathutshedzodanies.tshidaisa"
              target="_blank"
              className="social-button"
            >
              <FaFacebook /> Facebook
            </Button>

            <div className="contact-info mt-4">
              <h3>Contact Me</h3>
              <p><strong>Feel free to reach out!</strong></p>
              <p><strong>Email:</strong> tshidaisa@gmail.com</p>
              <p><strong>Phone:</strong> (079) 726-2269</p>
              <p>
                I'm always happy to connect with others! Whether you have a question, feedback, or just want to chat, don't hesitate to get in touch. I look forward to hearing from you!
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <p>
              I'm incredibly grateful for your message! I will get back to you as soon as possible.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
