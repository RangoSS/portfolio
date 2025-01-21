import React from 'react';
import { Button, Container } from 'react-bootstrap'; // Bootstrap components for buttons
import '../styles/home.css'; // Custom CSS for styling
import Footer from '../footer/Footer';


const Home = () => {
  return (
    <div className="home-container">
      <Container className="text-center">
        {/* Name and Description */}
        <div className="intro-section">
          <h1 className="name">Phathushedzo</h1>
          <h3 className="surname">Full Stack Developer</h3>
          <p className="description">
            I am a passionate full-stack developer with over 3 years of experience working with React and many other technologies. I specialize in building scalable, user-friendly applications and have a keen interest in learning new technologies and improving my craft.
          </p>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <Button variant="primary" className="me-3">Contact Me</Button>
          <Button variant="outline-primary">Download Resume</Button>
        </div>

        {/* Computer Image */}
        <div className="image-container">
          <img src="/computer1.jpg" alt="Computer" className="computer-image" /> {/* Use the image variable directly */}
        </div>
         {/* Footer */}
         < Footer/> {/* Imported Footer */}
      </Container>
    </div>
  );
}

export default Home;
