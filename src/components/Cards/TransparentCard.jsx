import React, { useState } from "react";

const TransparentCard = (props) => {
  const [ButtonHover, setButtonHover] = useState(false);
  return (
    <div
      className="py-4 px-3"
      style={{ backgroundColor: `${ButtonHover ? "#f1f6ff" : "white"}` }}
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
    >
      <img src={props.img} alt="img" style={{ height: "160pt" }} />

      <h6 className="font-400 my-4 px-3">{props.title}</h6>

      <p className="font-300">{props.desc}</p>
    </div>
  );
};

export default TransparentCard;
