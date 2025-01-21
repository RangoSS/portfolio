import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Navbar, Container, Button, Nav, Offcanvas } from 'react-bootstrap';

// Import your components
import Home from './components/pages/Home';

import About from './components/pages/About';  // Check the path to About.js

import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login'; // Import Login component
import Register from './components/pages/Register'; // Import Register component

function App() {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [activePage, setActivePage] = useState('home'); // Track active page

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const goToPage = (page) => {
    setActivePage(page); // Change the active page
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
          <Container>
            <Navbar.Brand href="/">Phathu..</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => goToPage('home')}>Home</Nav.Link>
                <Nav.Link onClick={() => goToPage('about')}>About</Nav.Link>
                <Nav.Link onClick={() => goToPage('portfolio')}>Portfolio</Nav.Link>
                <Nav.Link onClick={() => goToPage('contact')}>Contact</Nav.Link>
              </Nav>
              <Button variant="outline-primary" onClick={handleShow}>Get Started</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Offcanvas for Login/Register Forms */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{isLogin ? 'Login' : 'Register'}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {isLogin ? <Login /> : <Register />}
            <Button variant="link" onClick={toggleForm} style={{ marginTop: '10px' }}>
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </Button>
          </Offcanvas.Body>
        </Offcanvas>

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
