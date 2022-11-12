import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./button.css";
import FormApi from "../../Api/FormApi";
import { ThreeDots } from "react-loader-spinner";
import NewsLetterApi from "../../Api/NewsLetterApi";

const SharedButtonLight = (props) => {
  const [ButtonHover, setButtonHover] = useState(false);
  if (props.setLoader) {
    return (
      <Button
        onClick={() => {
          props.setLoader(true);
          NewsLetterApi(
            props.email,
            props.setLoader,
            props.setNewsLetterBtnLoader
          );
        }}
        className="ApiButtonLight"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        {props.title === "true" ? (
          <ThreeDots
            height="20"
            width="20"
            color={ButtonHover ? "white" : "var(--main-color)"}
          />
        ) : (
          props.title
        )}
      </Button>
    );
  } else {
    return <Button className="shared-btn-light">{props.title}</Button>;
  }
};

export default SharedButtonLight;
