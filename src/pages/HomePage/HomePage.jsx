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
import BorderedCard from "../../components/Cards/BorderedCard";
import ProjectSlider from "./ProjectSlider";

//Icons
import ResearchIcon from "../../assets/icons/ResearchIcon";
import SoftwareDevelopment from "../../assets/icons/SoftwareDevelopment";
import Automation from "../../assets/icons/Automation";
import SharedButtonLight from "../../components/Button/ButtonLight";
import SharedCard from "../../components/Cards/Card";
import TransparentCard from "../../components/Cards/TransparentCard";
import FormApi from "../../Api/FormApi";

const HomePage = () => {
  const [Loader, setLoader] = useState(false);
  const [FormData, setFormData] = useState([
    {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  ]);

  const getFormData = (text, field) => {
    let DataArray = [...FormData];
    DataArray[0][field] = text;

    setFormData(DataArray);
  };

  return (
    <div className="container-fluied">
      {/*Hero*/}
      <Row
        id="hero-section"
        className="md-container mt-5"
        style={{ marginBottom: "80pt" }}
      >
        <Col sm={12} lg={8} className="hero-left">
          <h2 className="font-500">INNOVATION.</h2>
          <h2 className="font-500">EXCELLENCE. RELIABILITY.</h2>

          <p style={{ width: "100%", marginBottom: "25pt" }}>
            We can solve problems which cannot be solved via traditional
            software development. We can integrate AI and ML to your programs to
            improve the efficiency and quality of your product.
          </p>

          <SharedButton title="GET STARTED" />
        </Col>

        <Col sm={12} lg={4} className="hero-right">
          <img src="assets/person.png" alt="img" style={{ height: "270pt" }} />
        </Col>
      </Row>

      {/*About Us*/}
      <Row className="mt-5 md-container">
        <Col className="about-us-section text-center p-5">
          <h2 className="font-300">About Us</h2>
          <h2 className="mt-3 font-500">You Imagine it. We Deliver it.</h2>

          <Row className="mt-5">
            <Col id="aboutUsCol" sm="auto" lg={6}>
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
              <img
                id="aboutUsImg"
                className="about-us-img"
                src="assets/img.png"
                alt="img"
                style={{ height: "300px" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {/*Separator*/}
      <Row className="my-5">
        <div
          className="text-center py-5"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "var(--main-bg)",
          }}
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

      {/*Our Solutions*/}
      <div id="our-solution-section" className="my-5 py-5">
        <Row className="mb-3">
          <Col className="text-center mb-3">
            <h2 className="font-300">What we do?</h2>
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row id="ourSolutionRow" style={{ width: "65%" }}>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                bg-color="#F8F9FA"
                img={"assets/img1.png"}
                title="Increase your business"
                desc="We can add tangible value to your business. Automation and using Machine learning can increase your profits as much as 10X."
              />
            </Col>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                bg-color="rgba(0, 128, 128, 0.1)"
                img={"assets/img2.png"}
                title="Give a better experience to users"
                desc="We can improve customers’ experience with our skillset. We can automate existing solutions and also build new solutions from scratch for better user experience."
              />
            </Col>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                bg-color="#F8F9FA"
                img={"assets/img3.png"}
                title="Solve problems"
                desc="We can solve problems which cannot be solved via traditional software development. We can integrate AI and ML to your programs to improve the efficiency and quality of your product."
              />
            </Col>
          </Row>
        </div>
      </div>

      {/*Separator*/}
      <div id="our-domain-section"></div>
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

      {/*Our Domain*/}
      <Row className="mt-5 md-container">
        <Col className="text-center mb-5">
          <h2 className="font-300">Our Domain</h2>
        </Col>
        <Row>
          <Col id="ourDomainCol" lg={4} sm={"auto"} className="text-center">
            <Row className="mb-3">
              <ResearchIcon />
            </Row>
            <h5 className="font-400">Research</h5>
            <p className="px-5" id="ourDomainDesc">
              Our team analyses the problem, looks for the best possible
              solution and then implements it. If there is no solution
              available, our team has the capability to innovate new solutions
              tailor-made to clients’ requirements.
            </p>
          </Col>
          <Col id="ourDomainCol" lg={4} sm={"auto"} className="text-center">
            <Row className="mb-3">
              <SoftwareDevelopment />
            </Row>
            <h5 className="font-400">Software Development</h5>
            <p className="px-5" id="ourDomainDesc">
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
            <p className="px-5" id="ourDomainDesc">
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
      <div id="our-projects-section"></div>
      <Row className="my-5 py-5">
        <Col className="text-center mb-3">
          <h2 className="font-300">Our Projects</h2>
        </Col>

        <Row>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "75%" }}>
              <ProjectSlider />
            </div>
          </div>
        </Row>

        <Row>
          <div className="text-center mt-4">
            <a href="/" className="link-text">
              <small>Learn More</small>
            </a>
          </div>
        </Row>
      </Row>

      {/*Our Top Stories*/}
      <div className="container-fluied main-bg" style={{ padding: "60pt 0pt" }}>
        <Container style={{ width: "75%" }}>
          <Row>
            <Col id="ourTopStoriesCol" lg={10} sm={12} className="mb-5">
              <h2 className="font-300 text-white">Our top Stories</h2>
              <small className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </small>
            </Col>
            <Col id="ourTopStoriesCol" lg={2} sm={12}>
              <div className="mt-2 text-end">
                <SharedButtonLight title="View All" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col
              id="ourTopStoriesCol2"
              className="ourTopStoriesCol2A"
              lg={4}
              sm={12}
            >
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

            <Col
              id="ourTopStoriesCol2"
              className="ourTopStoriesCol2A"
              lg={4}
              sm={12}
            >
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

            <Col id="ourTopStoriesCol2" lg={4} sm={12}>
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
      <div id="contact-us-section"></div>
      <Container
        style={{ width: "75%", marginTop: "80pt", marginBottom: "60pt" }}
      >
        <Row className="my-5">
          <Col id="FormText" sm={12} lg={6}>
            <h2 className="font-300">
              Have a question? <br />
              We are here to help.
            </h2>
          </Col>
          <Col lg={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Form style={{ width: "100%" }}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => getFormData(e.target.value, "name")}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(e) => getFormData(e.target.value, "email")}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  {/* <Form.Control type="number" placeholder="Phone" /> */}
                  <PhoneInput
                    country={"us"}
                    onChange={(e) => getFormData(e, "phone_number")}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    onChange={(e) => getFormData(e.target.value, "message")}
                  />
                </Form.Group>

                <div className="text-end mt-4">
                  <SharedButton
                    title={Loader === true ? "---" : "Submit"}
                    data={FormData[0]}
                    setLoader={setLoader}
                  />
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
