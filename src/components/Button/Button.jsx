import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import FormApi from "../../Api/FormApi";
import "./button.css";

import { BsArrowRightShort } from "react-icons/bs";

const SharedButton = (props) => {
  const [ButtonHover, setButtonHover] = useState(false);
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (props.setLoader) {
    return (
      <div>
        <Button
          onClick={() => {
            props.setLoader(true);
            if (props.data.name === "") {
              props.getError("name", "Please enter your name.");
              props.setLoader(false);
            } else if (props.data.email === "") {
              props.getError("email", "Please enter your email address.");
              props.setLoader(false);
            } else if (!filter.test(props.data.email)) {
              props.getError("email", "Please enter a valid email address.");
              props.setLoader(false);
            } else if (props.data.phone_number === "") {
              props.getError("phone_number", "Please enter your phone number.");
              props.setLoader(false);
            } else if (props.data.message === "") {
              props.getError("message", "Please enter your message.");
              props.setLoader(false);
            } else {
              FormApi(
                props.data,
                props.setLoader,
                props.setFormData,
                props.getError
              );
            }
          }}
          className="ApiButton"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          {props.title === "true" ? (
            <ThreeDots
              height="20"
              width="20"
              color={ButtonHover ? "var(--main-color)" : "white"}
            />
          ) : (
            props.title
          )}
        </Button>
      </div>
    );
  } else {
    return (
      <Button className="shared-btn">
        {props.title}{" "}
        {props.arrow === true ? <BsArrowRightShort size={23} /> : ""}
      </Button>
    );
  }
};

export default SharedButton;
