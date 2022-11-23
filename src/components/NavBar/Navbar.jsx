import React, { useState } from "react";

//Packages
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "../../Css/style.css";
import Logo from "../../assets/images/Digitalytics2.png";

const NavbarComponent = () => {
  const { pathname } = window.location;

  return (
    <Navbar
      fixed="top"
      className="navBar"
      expand="lg"
      style={{
        paddingBottom: "10pt",
        paddingTop: "35pt",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <Container fluid="md" id="navnav">
        <Navbar.Brand href="/">
          <img id="WebLogo" src={Logo} alt="logo" style={{ height: "30pt" }} />
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
