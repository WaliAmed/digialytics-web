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
              title={"Personality assessment toolkit"}
              link="/our-products/1"
              desc="A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data"
            />
          </Col>

          <Col className="ourPrCol" lg={3} sm={12}>
            <ProductCard
              img={SuggestionMining}
              title={"Personality assessment toolkit"}
              link="/our-products/2"
              desc="A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data"
            />
          </Col>

          <Col className="ourPrCol" lg={3} sm={12}>
            <ProductCard
              img={FalseRating}
              title={"Personality assessment toolkit"}
              link="/our-products/3"
              desc="A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data"
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
              title={"Personality assessment toolkit"}
              link="/our-products/4"
              desc="A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data"
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
              title={"Personality assessment toolkit"}
              link="/our-products/5"
              desc="A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data"
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
              title={"Personality assessment toolkit"}
              link="/our-products/6"
              desc="A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OurProducts;
