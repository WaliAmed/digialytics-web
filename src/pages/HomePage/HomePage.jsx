import React from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//Components
import SharedButton from "../../components/Button/Button";
import BorderedCard from "../../components/Cards/BorderedCard";
import ProjectSlider from "./ProjectSlider";

//Icons
import ResearchIcon from "../../assets/icons/ResearchIcon";
import SoftwareDevelopment from "../../assets/icons/SoftwareDevelopment";
import Automation from "../../assets/icons/Automation";
import SharedButtonLight from "../../components/Button/ButtonLight";
import SharedCard from "../../components/Cards/Card";

const HomePage = () => {
  return (
    <div className="container-fluied">
      {/*Hero*/}
      <Row className="md-container mt-5" style={{ marginBottom: "80pt" }}>
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
      <Row className="mt-5 md-container">
        <Col className="about-us-section text-center p-5">
          <h2 className="font-300">About Us</h2>
          <h2 className="mt-3 font-500">You Imagine it. We Deliver it.</h2>

          <Row className="mt-5">
            <Col sm="auto" lg={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <p
                  className="text-start pt-5"
                  style={{
                    width: "70%",
                  }}
                >
                  You imagine it, We will build it. This is our motto. Our best
                  quality is our work ethic, here at Digitalytics.in We provide
                  the best service with utmost transparency and honesty. Our
                  goal is to make sure our clients have no complaints regarding
                  our work.
                </p>
              </div>
            </Col>

            <Col sm="auto" lg={6} className="text-start">
              <img src="assets/img.png" alt="img" style={{ height: "300px" }} />
            </Col>
          </Row>
        </Col>
      </Row>

      {/*Our Domain*/}
      <Row className="mt-5 md-container">
        <Col className="text-center mb-5">
          <h2 className="font-300">Our Domain</h2>
        </Col>
        <Row>
          <Col lg={4} sm={"auto"} className="text-center">
            <Row className="mb-3">
              <ResearchIcon />
            </Row>
            <h5 className="font-400">Research</h5>
            <p className="px-5">
              Our team analyses the problem, looks for the best possible
              solution and then implements it. If there is no solution
              available, our team has the capability to innovate new solutions
              tailor-made to clients’ requirements.
            </p>
          </Col>
          <Col lg={4} sm={"auto"} className="text-center">
            <Row className="mb-3">
              <SoftwareDevelopment />
            </Row>
            <h5 className="font-400">Software Development</h5>
            <p className="px-5">
              We provide B2B products to our clients. We can provide Web
              Applications, Android and IOS Applications as per requirement. We
              have a team of software developers who can take any task head-on.
            </p>
          </Col>
          <Col lg={4} sm={"auto"} className="text-center">
            <Row className="mb-3">
              <Automation />
            </Row>
            <h5 className="font-400">Automation</h5>
            <p className="px-5">
              If you have an existing system that needs automation or you want
              to integrate Machine Learning to your program, we can help you
              build such a solution.
            </p>
          </Col>
        </Row>
        <Row>
          <div className="text-center mt-5">
            <a href="/" className="link-text">
              <small>Learn More</small>
            </a>
          </div>
        </Row>
      </Row>

      {/*Separator*/}
      <Row className="my-5">
        <div
          className="text-center main-bg py-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "75%" }}>
            <p className="text-white">
              We can solve problems which cannot be solved via traditional
              software development. We can integrate AI and ML to your programs
              to improve the efficiency and quality of your product.
            </p>
          </div>
        </div>
      </Row>

      {/*Our Projects*/}
      <Row className="my-5 py-5">
        <Col className="text-center mb-5">
          <h2 className="font-300">Our Projects</h2>
        </Col>

        <Row>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "75%" }}>
              <ProjectSlider />
            </div>
          </div>
        </Row>
      </Row>

      {/*Our Top Stories*/}
      <div className="container-fluied main-bg" style={{ padding: "60pt 0pt" }}>
        <Container style={{ width: "75%" }}>
          <Row>
            <Col lg={10} className="mb-5">
              <h2 className="font-300 text-white">Our top Stories</h2>
              <small className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </small>
            </Col>
            <Col lg={2}>
              <div className="mt-2 text-end">
                <SharedButtonLight title="View All" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4} sm={"auto"}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <BorderedCard
                  timeToRead="5 min read"
                  title="Our Favorite Productive Thing Is Stratos"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  link="/"
                  linkText="Read more"
                />
              </div>
            </Col>

            <Col lg={4} sm={"auto"}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <SharedCard
                  timeToRead="5 min read"
                  title="Young Startups With Stratos In Full Throttle"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  link="/"
                  linkText="Read more"
                />
              </div>
            </Col>

            <Col lg={4} sm={"auto"}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <BorderedCard
                  timeToRead="5 min read"
                  title="Our Favorite Productive Thing Is Stratos"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  link="/"
                  linkText="Read more"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*Contact*/}
      <Container
        style={{ width: "75%", marginTop: "80pt", marginBottom: "60pt" }}
      >
        <Row className="my-5">
          <Col lg={6}>
            <h2 className="font-300">
              Have a question? <br />
              We are here to help.
            </h2>
          </Col>
          <Col lg={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Form style={{ width: "100%" }}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={3} placeholder="Message" />
                </Form.Group>

                <div className="text-end mt-4">
                  <SharedButton title="Submit" />
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
