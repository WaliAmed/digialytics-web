import React from "react";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

//Components
import ButtonLight from "../Button/ButtonLight";

//Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="container-fluied Footer pb-4 text-white"
      style={{
        paddingTop: "60pt",
        background: "linear-gradient(180deg, #0A2920 0%, #004C3F 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "95%",
          }}
        >
          <div>
            <Row>
              <Col id="footerLogoSection" sm="auto" lg={3}>
                <img
                  src="assets/Digitalytics-white.png"
                  alt="logo"
                  style={{ height: "20pt" }}
                />
              </Col>
              <Col id="footerLogoSection" sm="auto" lg={3}>
                <div>
                  <small
                    className="font-200"
                    style={{ marginRight: "8pt", fontSize: "0.7rem" }}
                  >
                    Follow for more:
                  </small>
                  <a href="/" className="footer-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaInstagram />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaFacebookF />
                  </a>
                </div>
              </Col>

              <Col id="footerLogoSection" sm="auto" lg={3}>
                <div>
                  <small
                    className="font-200"
                    style={{ marginRight: "8pt", fontSize: "0.7rem" }}
                  >
                    Contact:
                  </small>
                  <a href="/" className="footer-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaInstagram />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaFacebookF />
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
                    fontSize: "0.7rem",
                    marginRight: "10pt",
                  }}
                  href="/"
                >
                  Terms & Conditions
                </p>

                <p
                  className="font-200 m-0"
                  style={{
                    color: "white",
                    fontSize: "0.7rem",
                  }}
                  href="/"
                >
                  Privacy Policy
                </p>
              </Col>
            </Row>

            <hr id="hr" />
          </div>

          <div>
            <Row>
              <Col sm="auto" lg={12}>
                <div id="PrivacyConditions" className="text-center">
                  <small
                    className="font-200 ms-4"
                    style={{ color: "white", fontSize: "0.5rem" }}
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
