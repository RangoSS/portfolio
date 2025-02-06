import React from 'react';
import { Button, Container } from 'react-bootstrap';

import '../styles/home.css'; // Custom CSS for styling
import Footer from '../footer/Footer';

const Home = () => {

  

  const downloadResume = () => {
    const resumeUrl = '/PhathuExpMlab.pdf'; // Path to the PDF file in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'PhathuExpMlab.pdf'; // Set the downloaded file's name
    link.click();
  };
  

  return (
    <div>
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
            
              
            
            <Button variant="primary" size="lg" onClick={downloadResume}>Download Resume</Button>
          </div>

          {/* Computer Image */}
          <div className="image-container">
            <img src="/computer1.jpg" alt="Computer" className="computer-image" />
            {/* Background Image (dot5.png) */}
            <div className="background-image-container">
              <img src="/dot5.png" alt="Dot" className="background-image" />
            </div>
          </div>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
