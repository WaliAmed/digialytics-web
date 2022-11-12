import React from "react";

const TransparentCard = (props) => {
  return (
    <div className="py-4 px-3" style={{ backgroundColor: props["bg-color"] }}>
      <img src={props.img} alt="img" style={{ height: "160pt" }} />

      <h6 className="font-400 my-4 px-3">{props.title}</h6>

      <p className="font-300">{props.desc}</p>

      <div className="text-center mt-4">
        <a href="/" className="link-text">
          <small style={{ color: "var(--main-color)" }}>Learn More</small>
        </a>
      </div>
    </div>
  );
};

export default TransparentCard;
