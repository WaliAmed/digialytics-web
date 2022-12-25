import React from "react";

const TransparentCard = (props) => {
  return (
    <div
      id="transparent-card"
      className="pb-4 px-3"
      style={{ backgroundColor: "white" }}
    >
      <img src={props.img} alt="img" style={{ height: "160pt" }} />

      <h4
        className="font-400 my-4 px-3 mobile-title"
        id="transparent-card-title"
      >
        {props.title}
      </h4>
      <p className="font-200 mobile-p">{props.desc}</p>
    </div>
  );
};

export default TransparentCard;
