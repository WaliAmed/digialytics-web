import React from "react";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

//Components
import ButtonLight from "../Button/ButtonLight";

//Icons
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import Logo from "../../assets/images/Digitalytics-white.png";

const Footer = () => {
  return (
    <div id="Footer" className="container-fluied pb-4 text-white">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "90%",
          }}
        >
          <div>
            <Row>
              <Col id="footerLogoSection" sm="auto" lg={3}>
                <img
                  id="FooterLogo"
                  src={Logo}
                  alt="logo"
                  style={{ height: "30pt" }}
                />
              </Col>

              <Col
                id="footerCol"
                sm={12}
                lg={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <small
                    className="font-200"
                    style={{ marginRight: "8pt", fontSize: "0.8rem" }}
                  >
                    Follow for more:
                  </small>
                  <a href="/" className="footer-icon">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaInstagram size={24} />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaFacebookSquare size={24} />
                  </a>
                  <a href="/" className="footer-icon m-0">
                    <FaTwitterSquare size={24} />
                  </a>
                </div>
              </Col>

              <Col
                id="footerCol"
                sm="auto"
                lg={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <small
                    className="font-200"
                    style={{ marginRight: "8pt", fontSize: "0.8rem" }}
                  >
                    Contact:
                  </small>
                  <a href="/" className="footer-icon">
                    <FiPhone size={24} />
                  </a>
                  <a href="/" className="footer-icon">
                    <FiMail size={24} />
                  </a>
                </div>
              </Col>

              <Col
                id="footerLogoSection"
                sm="auto"
                lg={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row-reverse",
                }}
              >
                <p
                  className="font-200 m-0"
                  style={{
                    color: "white",
                    fontSize: "0.8rem",
                    paddingLeft: "10pt",
                  }}
                  href="/"
                >
                  Terms & Conditions
                </p>

                <p
                  className="font-200 m-0"
                  style={{
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                  href="/"
                >
                  Privacy Policy
                </p>
              </Col>
            </Row>

            <hr id="hr" />
          </div>

          <div className="mb-4">
            <Row>
              <Col sm="auto" lg={12}>
                <div id="PrivacyConditions" className="text-center">
                  <small
                    className="font-200 ms-4"
                    style={{ color: "white", fontSize: "0.7rem" }}
                    href="/"
                  >
                    Copyright © 2021 Digitalytics - All Rights Reserved
                  </small>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
