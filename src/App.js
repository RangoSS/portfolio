import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Container, Nav ,Badge } from 'react-bootstrap';

// Import your components
import Home from './components/pages/Home';
import About from './components/pages/About';  // Check the path to About.js
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home'); // Track active page

  const goToPage = (page) => {
    setActivePage(page); // Change the active page
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar expand="lg" className="bg-body-tertiary fixed-top navba-style">
          <Container>
            <Navbar.Brand href="/">Phathu<Badge bg="success">.</Badge></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => goToPage('home')}>Home</Nav.Link>
                <Nav.Link onClick={() => goToPage('about')}>About</Nav.Link>
                <Nav.Link onClick={() => goToPage('portfolio')}>Portfolio</Nav.Link>
                <Nav.Link onClick={() => goToPage('contact')}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Page Content */}
        <div className="page-container">
          {/* Home Page */}
          <div className={`page ${activePage === 'home' ? 'slide-in' : ''}`}>
            <Home />
          </div>

          {/* About Page */}
          <div className={`page ${activePage === 'about' ? 'slide-in' : ''}`}>
            <About />
          </div>

          {/* Portfolio Page */}
          <div className={`page ${activePage === 'portfolio' ? 'slide-in' : ''}`}>
            <Portfolio />
          </div>

          {/* Projects Page */}
          <div className={`page ${activePage === 'contact' ? 'slide-in' : ''}`}>
            <Contact />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
