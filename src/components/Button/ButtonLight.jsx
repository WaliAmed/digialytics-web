import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./button.css";
import FormApi from "../../Api/FormApi";
import { ThreeDots } from "react-loader-spinner";
import NewsLetterApi from "../../Api/NewsLetterApi";
import { toast } from "react-toastify";

const SharedButtonLight = (props) => {
  const [ButtonHover, setButtonHover] = useState(false);
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (props.setLoader) {
    return (
      <Button
        onClick={() => {
          props.setLoader(true);
          if (props.email === "") {
            toast.error("Please enter your email address.");
            props.setLoader(false);
          } else if (!filter.test(props.email)) {
            toast.error("Please enter a valid email address.");
            props.setLoader(false);
          } else {
            NewsLetterApi(
              props.email,
              props.setLoader,
              props.setNewsLetterBtnLoader,
              props.setNewsLetterEmail
            );
          }
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
