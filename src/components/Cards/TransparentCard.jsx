import React from "react";

const TransparentCard = (props) => {
  return (
    <div className="py-4 px-3" style={{ backgroundColor: "white" }}>
      <img src={props.img} alt="img" style={{ height: "160pt" }} />

      <h4 className="font-400 my-4 px-3">{props.title}</h4>
      <p className="font-200">{props.desc}</p>
    </div>
  );
};

export default TransparentCard;
