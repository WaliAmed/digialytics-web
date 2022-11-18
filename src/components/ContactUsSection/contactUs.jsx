import React, { useState } from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//Packages
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//Components
import SharedButton from "../../components/Button/Button";

const ContactUsSection = () => {
  const getFormData = (text, field) => {
    let DataArray = [...FormData];
    DataArray[0][field] = text;

    setFormData(DataArray);
  };

  const [Loader, setLoader] = useState(false);
  const [FormData, setFormData] = useState([
    {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  ]);

  return (
    <Container
      id="ContactUsRow"
      style={{ width: "75%", marginTop: "80pt", marginBottom: "90pt" }}
    >
      <Row className="my-5">
        <Col id="FormText" sm={12} lg={7}>
          <h2 className="font-300">
            Have a question? <br />
            We are here to help.
          </h2>
          <p className="contactUsP font-300">
            Mention your email and/or contact number followed by your query in
            the message box. Our support team will get back to you swiftly with
            the answers you need!
          </p>
        </Col>
        <Col lg={5} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Form style={{ width: "90%" }}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => getFormData(e.target.value, "name")}
                value={FormData[0].name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => getFormData(e.target.value, "email")}
                value={FormData[0].email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Control type="number" placeholder="Phone" /> */}
              <PhoneInput
                country={"us"}
                onChange={(e) => getFormData(e, "phone_number")}
                value={FormData[0].phone_number}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                onChange={(e) => getFormData(e.target.value, "message")}
                value={FormData[0].message}
              />
            </Form.Group>

            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <SharedButton
                title={Loader === true ? "true" : "Submit"}
                data={FormData[0]}
                setLoader={setLoader}
                setFormData={setFormData}
              />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsSection;
