import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";
import FormApi from "../../Api/FormApi";
import "./button.css";

const SharedButton = (props) => {
  const [ButtonHover, setButtonHover] = useState(false);
  if (props.setLoader) {
    return (
      <div>
        <Button
          onClick={() => {
            props.setLoader(true);
            FormApi(props.data, props.setLoader, props.setFormData);
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
    return <Button className="shared-btn">{props.title}</Button>;
  }
};

export default SharedButton;
