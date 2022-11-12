import React from "react";
import { Button } from "react-bootstrap";
import FormApi from "../../Api/FormApi";
import "./button.css";

const SharedButton = (props) => {
  if (props.setLoader) {
    return (
      <Button
        className="shared-btn"
        onClick={() => {
          props.setLoader(true);
          FormApi(props.data, props.setLoader);
        }}
      >
        {props.title}
      </Button>
    );
  } else {
    return <Button className="shared-btn">{props.title}</Button>;
  }
};

export default SharedButton;
