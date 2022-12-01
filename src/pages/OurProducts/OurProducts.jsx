import React, { useEffect, useState } from "react";
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

//Apis
import FetchAllProducts from "../../Api/fetchAllProducts";

//Package
import { MutatingDots } from "react-loader-spinner";

const OurProducts = () => {
  const [ProductLoader, setProductLoader] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    FetchAllProducts(setAllProducts, setProductLoader);
  }, []);

  return (
    <div style={{ marginTop: "120pt" }}>
      <Row
        className="text-center py-4"
        style={{
          marginBottom: "30pt",
          background: "white",
        }}
      >
        <Col lg={12} sm="auto">
          <h2 className="font-300">OUR PRODUCTS</h2>
        </Col>
      </Row>

      {ProductLoader === true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50pt",
            marginBottom: "50pt",
          }}
        >
          <MutatingDots
            height="100"
            width="100"
            color={"var(--main-color-2)"}
            secondaryColor="black"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div
          id="product-wrapper"
          style={{ paddingLeft: "40px", paddingRight: "40px" }}
        >
          <Row
            id="ourDomainRow"
            className="px-5 our-pr"
            style={{ marginBottom: "90pt" }}
          >
            {allProducts.map((items) => {
              return (
                <Col
                  id="allprjs"
                  className="ourPrCol"
                  lg={3}
                  sm={12}
                  style={{ marginTop: "30pt" }}
                >
                  <ProductCard
                    img={
                      "https://drive.google.com/uc?export=view&id=" +
                      items.image
                    }
                    title={items.title}
                    link={items._id}
                    desc={items.description}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </div>
  );
};

export default OurProducts;
