import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../../components/Button/Button";

const HomePage = () => {
  return (
    <Container
      style={{
        padding: "30pt 40pt",
      }}
    >
      {/*Hero*/}
      <Row>
        <Col>
          <h2 className="font-500">INNOVATION.</h2>
          <h2 className="font-500">EXCELLENCE. RELIABILITY.</h2>

          <p style={{ width: "65%", marginBottom: "25pt" }}>
            We can solve problems which cannot be solved via traditional
            software development. We can integrate AI and ML to your programs to
            improve the efficiency and quality of your product.
          </p>

          <SharedButton title="GET STARTED" />
        </Col>
      </Row>

      {/*About Us*/}
      <Row className="mt-5">
        <Col className="about-us-section text-center p-5">
          <h2 className="font-300">About Us.</h2>
          <h2 className="mt-3 font-500">You Imagine it. We Deliver it.</h2>

          <Row className="mt-5">
            <Col sm="auto" lg={5}>
              <p className="text-start py-5">
                You imagine it, We will build it. This is our motto. Our best
                quality is our work ethic, here at Digitalytics.in We provide
                the best service with utmost transparency and honesty. Our goal
                is to make sure our clients have no complaints regarding our
                work.
              </p>
            </Col>

            <Col sm="auto" lg={7}>
              <img src="assets/img.png" alt="img" style={{ height: "300px" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
