import React, { useState } from "react";

//Packages
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "../../Css/style.css";

const NavbarComponent = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const { host, hostname, href, origin, pathname, port, protocol, search } =
    window.location;

  return (
    <Navbar
      fixed="top"
      className="navBar"
      expand="lg"
      style={{
        paddingBottom: "10pt",
        paddingTop: "35pt",
        backgroundColor: "rgba(255, 255, 255, 0.877)",
      }}
    >
      <Container fluid="md" id="navnav">
        <Navbar.Brand href="/">
          <img
            id="WebLogo"
            src="assets/Digitalytics2.png"
            alt="logo"
            style={{ height: "30pt" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navitems">
            {/* <Nav.Link className="animated-border" href="/about-us">
              About Us
            </Nav.Link> */}
            <Nav.Link
              className={`animated-border ${
                pathname === "/our-domain" ? "activeNav" : ""
              }`}
              // href="#our-domain-section"
              href="/our-domain"
            >
              Our Domain
            </Nav.Link>
            <Nav.Link
              className={`animated-border ${
                pathname === "/our-solutions" ? "activeNav" : ""
              }`}
              // href="#our-solution-section"
              href="/our-solutions"
            >
              Our Solutions
            </Nav.Link>
            <Nav.Link
              className="animated-border"
              href="#our-projects-section"
              // href="/our-projects"
            >
              Our Projects
            </Nav.Link>
            <Nav.Link
              className={`animated-border ${
                pathname === "/blog" ? "activeNav" : ""
              }`}
              // href="#our-projects-section"
              href="/blog"
            >
              Blog
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
            <Nav.Link
              className="nav-bar-contactus"
              onClick={() => {
                window.location = "/#contact-us-section";
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
