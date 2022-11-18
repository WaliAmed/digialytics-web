import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Css/style.css";

//Icons
import DollarIcon from "../../assets/icons/DollarIcon";
import RetailIcon from "../../assets/icons/RetailIcon";
import HealIcon from "../../assets/icons/HealIcon";
import LawIcon from "../../assets/icons/LawIcon";
import TickIcon from "../../assets/icons/TickIcon";
import ContactUsSection from "../../components/ContactUsSection/contactUs";

const OurDomain = () => {
  return (
    <Container id="OurDomainContainer">
      <Row className="text-center py-5" id="Starter">
        <Col lg={12} sm="auto">
          <h2 className="font-300">OUR DOMAIN</h2>
        </Col>
      </Row>

      {/*Finance*/}
      <Row id="ourDomainRow" className="px-5" style={{ marginBottom: "80pt" }}>
        <Col lg={8} sm={12}>
          <div className="mb-3">
            <DollarIcon />
          </div>
          <div className="mb-3">
            <h3 className="font-300">Finance</h3>
          </div>
          <div className="mb-3 domain-desc" style={{ paddingRight: "20pt" }}>
            <p className="font-300">
              Forecasting has definitely made life easier and beneficial. Based
              on past and current data, our different CV tech-based models are
              implemented to predict the future. This helps ample in risk
              assessment and better decision making. Values of different factors
              can be predicted, which will ultimately play significant roles in
              optimizing your business strategies and costs, and thus, fruitful
              outcomes. So, by building relative models and providing solutions,
              we help investors to make smart data driven decisions. Predictions
              like these usually are:
            </p>
          </div>
          <div>
            <ul className="domain-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Stock Market Behavior Prediction
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Market Trends Prediction
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Risk Prediction
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Value Prediction
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Value Chain Analysis
              </li>
            </ul>
          </div>
        </Col>
        <Col
          id="DomainImage"
          lg={4}
          sm={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            className="d1Image"
            src="assets/d1.png"
            style={{ height: "200pt" }}
            alt="d1"
          />
        </Col>
      </Row>

      {/*Healthcare*/}
      <Row id="ourDomainRow" className="px-5" style={{ marginBottom: "80pt" }}>
        <Col lg={8} sm={12}>
          <div className="mb-3">
            <HealIcon />
          </div>
          <div className="mb-3">
            <h3 className="font-300">HealthCare</h3>
          </div>
          <div className="mb-3 domain-desc" style={{ paddingRight: "20pt" }}>
            <p className="font-300">
              We use Computer Vision and Data Analysis to improve medical
              research and disease diagnosis. We use different techniques to
              obtain different solutions which help to view the human body, in
              order to diagnose, monitor, or treat medical conditions. Some of
              the ways we can do that:
            </p>
          </div>
          <div>
            <ul className="domain-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Cancer Detection
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Disease Diagnosis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                DNA Sequencing
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Prognosis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Gene Expression
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Gene Classification
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Genetic Distribution
              </li>
            </ul>
          </div>
        </Col>
        <Col
          id="DomainImage"
          lg={4}
          sm={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            className="d2Image"
            src="assets/d2.png"
            style={{ height: "170pt" }}
            alt="d2"
          />
        </Col>
      </Row>

      {/*Retail*/}
      <Row id="ourDomainRow" className="px-5" style={{ marginBottom: "80pt" }}>
        <Col lg={8} sm={12}>
          <div className="mb-3 retail-icon" style={{ marginLeft: "-7pt" }}>
            <RetailIcon />
          </div>
          <div className="mb-3">
            <h3 className="font-300">Retail</h3>
          </div>
          <div className="mb-3 domain-desc" style={{ paddingRight: "20pt" }}>
            <p className="font-300">
              We can use past, current and future data to help businesses
              increase their profits. Different predictions and strategies can
              be devised through different algorithms which use techniques of
              NLP, CV, ML and AI, which are implemented in our models being used
              to optimize business growth and product management. We can achieve
              this for you with the following services:
            </p>
          </div>
          <div>
            <ul className="domain-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Sales Prediction
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Customer Segmentation
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Product Analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Data Driven Marketing Strategy
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Lead Generation
              </li>
            </ul>
          </div>
        </Col>
        <Col
          id="DomainImage"
          lg={4}
          sm={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            className="d3Image"
            src="assets/d3.png"
            style={{ height: "170pt" }}
            alt="d3"
          />
        </Col>
      </Row>

      {/*Law */}
      <Row id="ourDomainRow" className="px-5" style={{ marginBottom: "80pt" }}>
        <Col lg={8} sm={12}>
          <div className="mb-3">
            <LawIcon />
          </div>
          <div className="mb-3">
            <h3 className="font-300">Law </h3>
          </div>
          <div className="mb-3 domain-desc" style={{ paddingRight: "20pt" }}>
            <p className="font-300">
              With the digitalization of case files and courts data, we can
              apply Machine Learning algorithms to perform below mentioned
              tasks. This helps lawyers and other concerned entities to
              strategize, prepare and plan risks accordingly.
            </p>
          </div>
          <div>
            <ul className="domain-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Calculate the probability of winning a lawsuit
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Help citizens know exact clauses for any offense
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIcon />
                </i>
                Giving judgments based on prior instances
              </li>
            </ul>
          </div>
        </Col>
        <Col
          id="DomainImage"
          lg={4}
          sm={12}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            className="d4Image"
            src="assets/d4.png"
            style={{ height: "160pt" }}
            alt="d4"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OurDomain;
