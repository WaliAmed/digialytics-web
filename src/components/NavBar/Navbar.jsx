import React, { useState } from "react";

//Packages
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <Navbar
      className="navBar"
      expand="lg"
      style={{ paddingTop: "20pt", paddingBottom: "20pt" }}
    >
      <Container fluid="md">
        <Navbar.Brand href="/">Digialytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/* <Nav.Link className="animated-border" href="/about-us">
              About Us
            </Nav.Link> */}
            <Nav.Link
              className="animated-border"
              href="#our-domain-section"
              // href="/our-domain"
            >
              Our Domain
            </Nav.Link>
            <Nav.Link
              className="animated-border"
              href="#our-projects-section"
              // href="/our-projects"
            >
              Our Projects
            </Nav.Link>
            <Nav.Link
              className="animated-border"
              href="#our-solution-section"
              // href="/our-projects"
            >
              Our Solutions
            </Nav.Link>
            {/* <NavDropdown
              onClick={() => navigate("our-solutions")}
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              title="OUR SOLUTIONS"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="animated-border"
                href="/our-solutions/natural-language-processing"
              >
                NLP (Natural Language Processing)
              </NavDropdown.Item>

              <NavDropdown.Item
                className="animated-border"
                href="/our-solutions/computer-vision"
              >
                CV (Computer Vision)
              </NavDropdown.Item>

              <NavDropdown.Item
                className="animated-border"
                href="/our-solutions/forecasting"
              >
                Forecasting/ Time Series
              </NavDropdown.Item>

              <NavDropdown.Item
                className="animated-border"
                href="/our-solutions/dev-ops"
              >
                Dev Ops
              </NavDropdown.Item>

              <NavDropdown.Item
                className="animated-border"
                href="/our-solutions/advanced-analytics"
              >
                BI &amp; Advanced Analytics
              </NavDropdown.Item>

              <NavDropdown.Item
                className="animated-border"
                href="/our-solutions/mobile-and-web-development"
              >
                Mobile App&amp; Web Development
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link className="nav-bar-contactus" href="#contact-us-section">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
