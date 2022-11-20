import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Css/style.css";
import Button from "../../components/Button/Button";

const OurProducts = () => {
  return (
    <div style={{ marginTop: "120pt" }}>
      <Row
        className="text-center py-4"
        style={{
          marginBottom: "90pt",
          background:
            "linear-gradient(90deg, #002419 0%, #00382C 20.31%, #004C3F 50.12%, #003B2E 79.69%, #002419 100%)",
        }}
      >
        <Col lg={12} sm="auto">
          <h2 className="font-300 text-white">OUR PRODUCTS</h2>
        </Col>
      </Row>

      <Container id="OurDomainContainer">
        {/*Personality assessment toolkit*/}
        <Row
          id="ourDomainRow"
          className="px-5 our-pr"
          style={{ marginBottom: "150pt" }}
        >
          <Col className="ourPrCol" lg={6} sm={12}>
            <div className="mb-3">
              <h2 className="font-500">Personality assessment toolkit</h2>
            </div>
            <div className="mb-4 domain-desc" style={{ paddingRight: "20pt" }}>
              <p className="font-300">
                Voltaire.ai joined hands with our team to develop a leading
                personality assessment tool, connecting end users and target
                users to efficiently deal each other. Offering a Machine
                Learning based system to detect ‘Myers Briggs’ personality types
                of people using text data provided on their LinkedIn profile, it
                would assist salespeople in their marketing campaigns.
              </p>
            </div>

            <a href="/our-products/0">
              <Button title="Read more" arrow={true} />
            </a>
          </Col>
          <Col
            id="DomainImage"
            lg={6}
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="d1Image"
              src="assets/Personalityassessmenttoolkit.png"
              style={{ height: "220pt", width: "100%" }}
              alt="d1"
            />
          </Col>
        </Row>

        {/*License plate recognition for vehicles*/}
        <Row
          id="ourDomainRow"
          className="px-5 our-pr"
          style={{ marginBottom: "150pt" }}
        >
          <Col
            id="DomainImage"
            lg={6}
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="d1Image"
              src="assets/licenseplate.png"
              style={{ height: "200pt", width: "100%" }}
              alt="d1"
            />
          </Col>

          <Col lg={6} sm={12}>
            <div className="ourPrCol mb-3">
              <h2 className="font-500">
                License plate recognition for vehicles
              </h2>
            </div>
            <div className="mb-4 domain-desc" style={{ paddingRight: "20pt" }}>
              <p className="font-300">
                Our fast growth team specializes in a variety of applications
                ranging from safety systems to collective areas, and from
                parking admission and traffic control to government
                organizations. Our team created a license plate recognition
                system that localized license plates given in the live
                video/image and then recognized the license plate number to
                match with the information saved in the database.
              </p>
            </div>

            <a href="/our-products/1">
              <Button title="Read more" arrow={true} />
            </a>
          </Col>
        </Row>

        {/*Suggestion Mining*/}
        <Row
          id="ourDomainRow"
          className="px-5 our-pr"
          style={{ marginBottom: "150pt" }}
        >
          <Col className="ourPrCol" lg={6} sm={12}>
            <div className="mb-3">
              <h2 className="font-500">Suggestion Mining</h2>
            </div>
            <div className="mb-4 domain-desc" style={{ paddingRight: "20pt" }}>
              <p className="font-300">
                Meeting the changing demands of consumers is a continuous and
                never-ending cycle. Suggestion mining is a relatively new task
                which deals with extraction of sentences, from given opinioned
                text, which reflect suggestions. Our contribution lays the basis
                of this mining task, that is binary classification of given
                sentences into suggestion or non-suggestion.
              </p>
            </div>

            <a href="/our-products/2">
              <Button title="Read more" arrow={true} />
            </a>
          </Col>
          <Col
            id="DomainImage"
            lg={6}
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="d1Image"
              src="assets/suggestion.png"
              style={{ height: "220pt", width: "100%" }}
              alt="d1"
            />
          </Col>
        </Row>

        {/*False Ratings: Mobile Application Ratings Deciphered*/}
        <Row
          id="ourDomainRow"
          className="px-5 our-pr"
          style={{ marginBottom: "150pt" }}
        >
          <Col
            id="DomainImage"
            lg={6}
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="d1Image"
              src="assets/falserating.png"
              style={{ height: "200pt", width: "100%" }}
              alt="d1"
            />
          </Col>

          <Col lg={6} sm={12}>
            <div className="ourPrCol mb-3">
              <h2 className="font-500">
                False Ratings: Mobile Application Ratings Deciphered
              </h2>
            </div>
            <div className="mb-4 domain-desc" style={{ paddingRight: "20pt" }}>
              <p className="font-300">
                Our specialist team enables businesses to stand out from the
                crowd. The center is planning and developing a framework to
                extract useful information from mobile application reviews to
                determine the effect of review text on user ratings. Analysis of
                appropriate attributes for identifying appropriate class
                ratings.
              </p>
            </div>

            <a href="/our-products/3">
              <Button title="Read more" arrow={true} />
            </a>
          </Col>
        </Row>

        {/*Online Child Abuse Detection*/}
        <Row
          id="ourDomainRow"
          className="px-5 our-pr"
          style={{ marginBottom: "150pt" }}
        >
          <Col className="ourPrCol" lg={6} sm={12}>
            <div className="mb-3">
              <h2 className="font-500">Online Child Abuse Detection</h2>
            </div>
            <div className="mb-4 domain-desc" style={{ paddingRight: "20pt" }}>
              <p className="font-300">
                With a rapidly expanding social network and user base, and thus
                to efficiently keep up with user expectations, it is important
                to cater hate speech and online abuse. In the quest to make
                social media platforms free from any and all sorts of hate
                speech and online abuse, our team focuses to detect online child
                abuse on Twitter using NLP (Natural Language Processing).
              </p>
            </div>

            <a href="/our-products/4">
              <Button title="Read more" arrow={true} />
            </a>
          </Col>
          <Col
            id="DomainImage"
            lg={6}
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="d1Image"
              src="assets/childabuse.png"
              style={{ height: "220pt", width: "100%" }}
              alt="d1"
            />
          </Col>
        </Row>

        {/*Student Loan Prediction*/}
        <Row
          id="ourDomainRow"
          className="px-5 our-pr"
          style={{ marginBottom: "150pt" }}
        >
          <Col
            id="DomainImage"
            lg={6}
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="d1Image"
              src="assets/studentloan.png"
              style={{ height: "250pt", width: "100%" }}
              alt="d1"
            />
          </Col>

          <Col lg={6} sm={12}>
            <div className="ourPrCol mb-3">
              <h2 className="font-500">Student Loan Prediction</h2>
            </div>
            <div className="mb-4 domain-desc" style={{ paddingRight: "20pt" }}>
              <p className="font-300">
                Our specialist team partnered with JND financial to develop a
                student loan prediction system for the Loan Lending company. Our
                developed model involved the detailed analysis made over the
                degree of the student, median household income of the city and
                state and involved several other key factors necessary to
                determine if lending the loan was risky or not.
              </p>
            </div>

            <a href="/our-products/5">
              <Button title="Read more" arrow={true} />
            </a>
          </Col>
        </Row>

        {/*Car Prices Prediction */}
        <Row
          id="ourDomainRow"
          className="px-5"
          style={{ marginBottom: "150pt" }}
        >
          <Col className="ourPrCol" lg={6} sm={12}>
            <div className="mb-3">
              <h2 className="font-500">Car Prices Prediction</h2>
            </div>
            <div className="mb-4 domain-desc" style={{ paddingRight: "20pt" }}>
              <p className="font-300">
                We partnered with PakWheels - the largest online marketplace for
                car shoppers and sellers in Pakistan. Our car prices prediction
                model predicted the prices of the new data points, given a
                dataset of several car attributes and prices. Gave excellent
                accuracies and helped companies like PakWheels and KBB to help
                their customers determine the almost perfect accurate price of
                their used cars.
              </p>
            </div>

            <a href="/our-products/6">
              <Button title="Read more" arrow={true} />
            </a>
          </Col>
          <Col
            id="DomainImage"
            lg={6}
            sm={12}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className="d1Image"
              src="assets/car.jpeg"
              style={{ height: "220pt", width: "100%" }}
              alt="d1"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurProducts;
