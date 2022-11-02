import React from "react";
import { Button } from "react-bootstrap";
import "./button.css";

const SharedButton = (props) => {
  return <Button className="shared-btn">{props.title}</Button>;
};

export default SharedButton;
