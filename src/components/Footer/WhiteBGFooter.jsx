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

const WhiteFooter = () => {
  return (
    <div
      id="Footer"
      className="container-fluied  pb-4 text-black"
      style={{
        paddingTop: "60pt",
        background: "white",
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
            width: "90%",
          }}
        >
          <div>
            <Row>
              <Col id="footerLogoSection" sm="auto" lg={3}>
                <img
                  id="FooterLogo"
                  src="assets/Digitalytics2.png"
                  alt="logo"
                  style={{ height: "20pt" }}
                />
              </Col>

              <Col
                id="footerCol"
                sm={12}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <small
                    className="font-200"
                    style={{ marginRight: "8pt", fontSize: "0.7rem" }}
                  >
                    Follow for more:
                  </small>
                  <a href="/" className="footer-icon">
                    <FaLinkedin size={20} color={"black"} />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaInstagram size={20} color={"black"} />
                  </a>
                  <a href="/" className="footer-icon">
                    <FaFacebookSquare size={20} color={"black"} />
                  </a>
                  <a href="/" className="footer-icon m-0">
                    <FaTwitterSquare size={20} color={"black"} />
                  </a>
                </div>
              </Col>

              <Col
                id="footerCol"
                sm="auto"
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div>
                  <small
                    className="font-200"
                    style={{ marginRight: "8pt", fontSize: "0.7rem" }}
                  >
                    Contact:
                  </small>
                  <a href="/" className="footer-icon">
                    <FiPhone size={20} color={"black"} />
                  </a>
                  <a href="/" className="footer-icon">
                    <FiMail size={20} color={"black"} />
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
                    fontSize: "0.7rem",
                    paddingLeft: "10pt",
                  }}
                  href="/"
                >
                  Terms & Conditions
                </p>

                <p
                  className="font-200 m-0"
                  style={{
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
                    style={{ fontSize: "0.5rem" }}
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

export default WhiteFooter;