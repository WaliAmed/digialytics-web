import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  let navigate = useNavigate();
  return (
    <div
      className="productCard"
      style={{
        background: "linear-gradient(180deg, #38786A 0%, #002419 100%)",
        borderRadius: "6.3px",
        padding: "19px 19px 19px 19px",
        minHeight: "100%",
      }}
      onClick={() => navigate("/our-products/" + props.link)}
    >
      <img
        src={props.img}
        alt="img"
        style={{ height: "150px", width: "100%", borderRadius: "6.3px" }}
      />
      <h6
        className="text-white pt-2 pb-3"
        style={{ fontWeight: "700", fontSize: "15px" }}
      >
        {props.title}
      </h6>
      <p className="text-white m-0 font-200" style={{ fontSize: "11px" }}>
        {props.desc}
      </p>
      <div style={{ textAlign: "end", marginTop: "5pt" }}>
        <a
          href={"/our-products/" + props.link}
          className="text-white font-200"
          style={{ fontSize: "9px", textDecoration: "none" }}
        >
          Read more <BsArrowRightShort size={14} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
