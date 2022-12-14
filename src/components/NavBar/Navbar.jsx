import React, { useState } from "react";

//Packages
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Css/style.css";
import Logo from "../../assets/images/Digitalytics2.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useMediaQuery } from "react-responsive";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const NavbarComponent = () => {
  const { pathname } = window.location;
  const isMobileScreen = useMediaQuery({ query: "(min-width: 480px)" });
  const isBurgerIcon = useMediaQuery({ query: "(min-width: 991px)" });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      fixed="top"
      className="navBar"
      expand="lg"
      style={{
        paddingBottom: "10pt",
        paddingTop: `${isMobileScreen === false ? "10pt" : "30pt"}`,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "0px 4px 18px 0px rgba(255, 255, 255, 0.6)",
      }}
    >
      <Container fluid="md" id="navnav">
        <Navbar.Brand href="/" style={{ marginLeft: "-25px" }}>
          <img id="WebLogo" src={Logo} alt="logo" style={{ height: "30pt" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleShow}
          aria-controls={`offcanvasNavbar-expand-md`}
        />
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          // id="offcanvasNavbar-expand-md"
          id={`${isBurgerIcon === false ? "" : "offcanvasNavbar-expand-md"}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          // placement={`${isMobileScreen === false ? "start" : "end"}`}
          placement="start"
          style={{
            marginRight: `${isMobileScreen && "-40px"}`,
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <a href="/">
                <img
                  id="WebLogo"
                  src={Logo}
                  alt="logo"
                  style={{ height: "30pt" }}
                />
              </a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="navitems"
              style={{
                display: `${isBurgerIcon === true ? "" : "flex"}`,
                alignItems: `${isBurgerIcon === true ? "" : "center"}`,
                textAlign: `${isBurgerIcon === true ? "" : "center"}`,
              }}
            >
              <Nav.Link
                className="animated-border"
                onClick={() => {
                  window.location = "/#about-us-section";
                  handleClose();
                }}
              >
                About Us
              </Nav.Link>
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
                className={`animated-border ${
                  pathname === "/our-products" ? "activeNav" : ""
                }`}
                // href="#our-projects-section"
                href="/our-products"
              >
                Our Products
              </Nav.Link>
              {/* <Nav.Link
                className={`animated-border ${
                  pathname === "/blog" ? "activeNav" : ""
                }`}
                // href="#our-projects-section"
                href="/blog"
              >
                Blog
              </Nav.Link> */}
              <Nav.Link
                className="nav-bar-contactus"
                onClick={() => {
                  window.location = "/#contact-us-section";
                  handleClose();
                }}
                style={{
                  marginTop: `${isBurgerIcon === false ? "20pt" : ""}`,
                }}
              >
                Contact Us
              </Nav.Link>
            </Nav>

            {!isBurgerIcon && (
              <Row style={{ marginTop: "45vh" }}>
                <Col
                  lg={12}
                  style={{
                    padding: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <a href="/" className="canvas-icon">
                    <FaLinkedin size={24} color={"#002419"} />
                  </a>

                  <a
                    href="/"
                    className="canvas-icon"
                    style={{ marginRight: "5pt", marginLeft: "10pt" }}
                  >
                    <FaInstagram size={24} color={"#002419"} />
                  </a>

                  <a
                    href="/"
                    className="canvas-icon"
                    style={{ marginLeft: "5pt", marginRight: "10pt" }}
                  >
                    <FaFacebookSquare size={24} color={"#002419"} />
                  </a>

                  <a href="/" className="canvas-icon">
                    <FaTwitterSquare size={24} color={"#002419"} />
                  </a>
                </Col>
              </Row>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          style={{ marginRight: "-25px" }}
        >
          <Nav className="navitems">
            <Nav.Link
              className="animated-border"
              onClick={() => {
                window.location = "/#about-us-section";
              }}
            >
              About Us
            </Nav.Link>
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
              className={`animated-border ${
                pathname === "/our-products" ? "activeNav" : ""
              }`}
              // href="#our-projects-section"
              href="/our-products"
            >
              Our Products
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
            <Nav.Link
              className="nav-bar-contactus"
              onClick={() => {
                window.location = "/#contact-us-section";
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
