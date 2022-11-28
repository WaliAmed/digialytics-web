import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Css/style.css";
import Button from "../../components/Button/Button";

import ProductCard from "../../components/ProductCard/ProductCard";

//image
import toolkit from "../../assets/images/image1.png";
import LicensePlate from "../../assets/images/licenseplate.png";
import SuggestionMining from "../../assets/images/suggestion.png";
import FalseRating from "../../assets/images/falserating.png";
import ChildAbuse from "../../assets/images/childabuse.png";
import StudentLoan from "../../assets/images/studentloan.png";
import CarPrice from "../../assets/images/car.jpeg";

const OurProducts = () => {
  return (
    <div style={{ marginTop: "120pt" }}>
      <Row
        className="text-center py-4"
        style={{
          marginBottom: "50pt",
          background: "white",
        }}
      >
        <Col lg={12} sm="auto">
          <h2 className="font-300">OUR PRODUCTS</h2>
        </Col>
      </Row>

      <div
        id="product-wrapper"
        style={{ paddingLeft: "40px", paddingRight: "40px" }}
      >
        <Row
          id="ourDomainRow"
          className="px-5 our-pr"
          style={{ marginBottom: "90pt" }}
        >
          <Col className="ourPrCol" lg={3} sm={12}>
            <ProductCard
              img={toolkit}
              title={"Personality assessment toolkit"}
              link="/our-products/0"
              desc="A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data"
            />
          </Col>

          <Col className="ourPrCol" lg={3} sm={12}>
            <ProductCard
              img={LicensePlate}
              title={"License plate recognition for vehicles"}
              link="/our-products/1"
              desc="Detection and recognition of diverse vehicular license plates made possible through pattern recognition, image processing and Computer Vision."
            />
          </Col>

          <Col className="ourPrCol" lg={3} sm={12}>
            <ProductCard
              img={SuggestionMining}
              title={"Suggestion Mining"}
              link="/our-products/2"
              desc="Our solution to a 'suggestion mining' problem - extracting sentences and presenting them as suggestions on interaction-based platforms to meet the changing demands of consumers"
            />
          </Col>

          <Col className="ourPrCol" lg={3} sm={12}>
            <ProductCard
              img={FalseRating}
              title={"False Ratings: Mobile Application Ratings Deciphered"}
              link="/our-products/3"
              desc="Analysis of appropriate attributes for identifying authentic user ratings using ML and NLP tech to filter out false mobile ratings"
            />
          </Col>

          <Col
            id="product-second-line"
            style={{ marginTop: "30pt" }}
            className="ourPrCol"
            lg={3}
            sm={12}
          >
            <ProductCard
              img={ChildAbuse}
              title={"Online Child Abuse Detection"}
              link="/our-products/4"
              desc="In the domain of Computer Forensics and Cybersecurity, detecting online child abuse using ML and NLP to keep social media platforms free from all sorts of hate speech."
            />
          </Col>

          <Col
            id="product-second-line"
            style={{ marginTop: "30pt" }}
            className="ourPrCol"
            lg={3}
            sm={12}
          >
            <ProductCard
              img={StudentLoan}
              title={"Student Loan Prediction"}
              link="/our-products/5"
              desc="Our regression model was created to forecast the repayment rate based on boosted decision tree regression, whilst keeping students' data safe"
            />
          </Col>

          <Col
            id="product-second-line"
            style={{ marginTop: "30pt" }}
            className="ourPrCol"
            lg={3}
            sm={12}
          >
            <ProductCard
              img={CarPrice}
              title={"Car Prices Prediction"}
              link="/our-products/6"
              desc="Combining multiple machine learning algorithms to form accurate price prediction mechanisms for used cars, keeping in mind all the attributes and features"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurProducts;
