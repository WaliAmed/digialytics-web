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
    <Navbar expand="lg" style={{ paddingTop: "20pt", paddingBottom: "20pt" }}>
      <Container fluid="md">
        <Navbar.Brand href="/">Digialytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/our-domain">Our Domain</Nav.Link>
            <Nav.Link href="/our-projects">Our Projects</Nav.Link>
            <NavDropdown
              onClick={() => navigate("our-solutions")}
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              title="OUR SOLUTIONS"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/our-solutions/natural-language-processing">
                NLP (Natural Language Processing)
              </NavDropdown.Item>

              <NavDropdown.Item href="/our-solutions/computer-vision">
                CV (Computer Vision)
              </NavDropdown.Item>

              <NavDropdown.Item href="/our-solutions/forecasting">
                Forecasting/ Time Series
              </NavDropdown.Item>

              <NavDropdown.Item href="/our-solutions/dev-ops">
                Dev Ops
              </NavDropdown.Item>

              <NavDropdown.Item href="/our-solutions/advanced-analytics">
                BI &amp; Advanced Analytics
              </NavDropdown.Item>

              <NavDropdown.Item href="/our-solutions/mobile-and-web-development">
                Mobile App&amp; Web Development
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-bar-contactus" href="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
