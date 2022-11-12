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
    <div className="container-fluied main-bg Footer px-4 text-white">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "75%",
          }}
        >
          <div>
            <Row>
              <Col id="footerLogoSection" sm="auto" lg={6}>
                <div>
                  <h5 className="font-300">Digitalytics</h5>
                </div>
              </Col>
              <Col id="footerLogoSection" sm="auto" lg={6}>
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
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
            </Row>

            <hr className="hr" />
          </div>

          <div className="mt-4">
            <Row>
              <Col id="footerListSection" sm={12} lg={2}>
                <div>
                  <ul className="footer-ul">
                    <li className="font-300 mb-4" style={{ color: "white" }}>
                      Home
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                </div>
              </Col>
              <Col id="footerListSection" sm={12} lg={2}>
                <div>
                  <ul className="footer-ul">
                    <li className="font-300 mb-4" style={{ color: "white" }}>
                      About Us
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                </div>
              </Col>
              <Col id="footerListSection" sm={12} lg={2}>
                <div>
                  <ul className="footer-ul">
                    <li className="font-300 mb-4" style={{ color: "white" }}>
                      Our Domain
                    </li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                  </ul>
                </div>
              </Col>

              <Col id="footerListSection" sm={12} lg={2}>
                <div>
                  <div>
                    <ul className="footer-ul">
                      <li className="font-300 mb-4" style={{ color: "white" }}>
                        Our Projects
                      </li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col id="footerListSection" sm={12} lg={4}>
                <div>
                  <div>
                    <ul className="footer-ul">
                      <li className="font-300 mb-4" style={{ color: "white" }}>
                        Our Solutions
                      </li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                      <li>Lorem</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="mt-5">
              <hr className="hr" />
            </div>
          </div>

          <div>
            <Row>
              <Col lg={6}>
                <div id="NewsLetterTitle">
                  <h5 className="font-300">Signup for our Newsletter</h5>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  id="NewsLetterCol"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="me-5" style={{ width: "100%" }}>
                    <input className="newsletter" placeholder="Email Id" />
                  </div>

                  <div>
                    <ButtonLight title="Submit" />
                  </div>
                </div>
              </Col>
            </Row>

            <hr className="hr" />
          </div>

          <div>
            <Row>
              <Col sm="auto" lg={12}>
                <div
                  id="PrivacyConditions"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <a
                    className="link-text font-200"
                    style={{ color: "grey", fontSize: "0.7rem" }}
                    href="/"
                  >
                    Privacy Policy
                  </a>

                  <a
                    className="link-text font-200 ms-4"
                    style={{ color: "grey", fontSize: "0.7rem" }}
                    href="/"
                  >
                    Terms & Conditions
                  </a>
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
