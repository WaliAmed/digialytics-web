import React from "react";
import { Button } from "react-bootstrap";
import "./button.css";

const SharedButtonLight = (props) => {
  return <Button className="shared-btn-light">{props.title}</Button>;
};

export default SharedButtonLight;
