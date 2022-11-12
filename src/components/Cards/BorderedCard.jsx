import React from "react";
import Card from "react-bootstrap/Card";
import "./cards.css";

const BorderedCard = (props) => {
  return (
    <Card style={{ width: "20rem" }} id="bordered-card">
      <Card.Img variant="top" src="assets/laptop-img.png" />
      <Card.Body>
        <div className="mb-2">
          <small className="text-white" style={{ fontSize: "0.6rem" }}>
            {props.timeToRead}
          </small>
        </div>

        <Card.Title className="text-white">{props.title}</Card.Title>
        <Card.Text className="text-white desc" style={{ fontSize: "0.8rem" }}>
          {props.desc}
        </Card.Text>

        <div className="mt-3">
          <a href={props.link} className="link-text">
            <small
              style={{
                fontSize: "0.7rem",
                color: "white",
              }}
            >
              {props.linkText} <span className="ms-2">{">"}</span>
            </small>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BorderedCard;
