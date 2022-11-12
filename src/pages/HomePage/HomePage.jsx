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
import ButtonLight from "../../components/Button/ButtonLight";

//Icons
import ResearchIcon from "../../assets/icons/ResearchIcon";
import SoftwareDevelopment from "../../assets/icons/SoftwareDevelopment";
import Automation from "../../assets/icons/Automation";
import SharedButtonLight from "../../components/Button/ButtonLight";
import SharedCard from "../../components/Cards/Card";
import TransparentCard from "../../components/Cards/TransparentCard";

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

  const [NewsLetterBtnLoader, setNewsLetterBtnLoader] = useState(false);
  const [NewsLetterEmail, setNewsLetterEmail] = useState("");

  return (
    <div className="container-fluied">
      {/*Hero*/}
      <Row
        id="hero-section"
        className="md-container mt-5"
        style={{ marginBottom: "80pt" }}
      >
        <Col sm={12} lg={7} className="hero-left">
          <h2 className="font-500">INNOVATION. EFFICIENCY. RELIABILITY.</h2>

          <p style={{ width: "100%", marginBottom: "25pt" }}>
            Providing customers all around the globe with the best computer
            software solutions. Developing algorithms and methodologies for your
            problems using advanced software techniques, like Artificial
            Intelligence and Machine Learning, to improve the efficiency and
            quality of your product.
          </p>

          <SharedButton title="SUBSCRIBE" />
        </Col>

        <Col sm={12} lg={5} className="hero-right">
          <img src="assets/Laptop.png" alt="img" style={{ height: "270pt" }} />
        </Col>
      </Row>

      {/*About Us*/}
      <Row
        className="my-5 py-5 text-white"
        style={{ background: "var(--main-bg)" }}
      >
        <Col lg={12} className="text-center py-4">
          <h2 className="font-300">About Us</h2>
          <h2 className="mt-3 font-500">You Imagine it. We Deliver it.</h2>
        </Col>
        <Col lg={12} className="text-center pb-4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              className="font-300"
              style={{
                width: "70%",
              }}
            >
              We solve software problems which cannot be solved via traditional
              software development. We use advanced tech methodoligies in our
              solutions by integrating AI (Artificial intelligence) , ML
              (machine learning), NLP (Natural Language Programming) and CV
              (computer vision) techniques to your programs to improve the
              efficiency and quality of your product.
            </p>
          </div>
        </Col>
      </Row>

      {/* About Us
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
      </Row> */}

      {/*Separator*/}
      {/* <Row className="my-5">
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
      </Row> */}

      {/*WHY HIRE US?*/}
      <div id="our-solution-section" className="my-5 py-5">
        <Row className="mb-3">
          <Col className="text-center mb-3">
            <h2 className="font-300">WHY HIRE US?</h2>
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row id="ourSolutionRow" style={{ width: "70%" }}>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                bg-color="#F8F9FA"
                img={"assets/img1.png"}
                title="Build and Operate a Cloud Native Platform"
                desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </Col>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                bg-color="rgba(0, 128, 128, 0.1)"
                img={"assets/img2.png"}
                title="Increase your business"
                desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </Col>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                bg-color="#F8F9FA"
                img={"assets/img3.png"}
                title="Secure the Hybrid Workforce"
                desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              />
            </Col>
          </Row>
        </div>
      </div>

      {/*WHAT WE DO*/}
      <Row id="our-domain-section" className="mt-5 md-container">
        <Col className="text-center mb-5">
          <h2 className="font-300">WHAT WE DO</h2>
        </Col>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row style={{ width: "90%" }}>
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
                Applications, Android and IOS Applications as per requirement.
                We have a team of software developers who can take any task
                head-on.
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
        </div>

        <Row>
          <div className="text-center mt-5">
            <a href="/" className="link-text">
              <small>Learn More</small>
            </a>
          </div>
        </Row>
      </Row>

      {/*News Letter*/}
      <Row
        className="py-5 text-white"
        style={{
          // borderRadius: "0 0 50%/100px 100px",
          background: "linear-gradient(360deg, #002419 0%, #004C3F 100%)",
          marginTop: "100pt",
        }}
      >
        <Col lg={12} className="text-center pt-4">
          <h2 className="mt-3 font-500">Want the latest news and offers?</h2>
        </Col>
        <Col lg={12} className="text-center py-4">
          <p className="font-300 m-0">
            Sign-up FREE and subscribe to our latest news, information blogs,
            offers and discounts.
          </p>
          <p className="font-300 m-0">NO CREDIT CARD REQUIRED!</p>
        </Col>
        <Col lg={12} className="text-center pb-4">
          <div
            id="newsLetterCol"
            className="mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div id="newsLetterInput" className="me-5" style={{ width: "30%" }}>
              <input
                className="newsletter"
                placeholder="Email Id"
                value={NewsLetterEmail}
                onChange={(e) => setNewsLetterEmail(e.target.value)}
              />
            </div>

            <div id="NewsLetterButton">
              <ButtonLight
                title={NewsLetterBtnLoader === true ? "true" : "Submit"}
                setLoader={setNewsLetterBtnLoader}
                setNewsLetterBtnLoader={setNewsLetterBtnLoader}
                email={NewsLetterEmail}
              />
            </div>
          </div>
        </Col>
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
        id="ContactUsRow"
        style={{ width: "75%", marginTop: "80pt", marginBottom: "60pt" }}
      >
        <Row className="my-5">
          <Col id="FormText" sm={12} lg={6}>
            <h2 className="font-300">
              Have a question? <br />
              We are here to help.
            </h2>
            <p className="contactUsP font-300 pe-5">
              Mention your email and/or contact number followed by your query in
              the message box. Our support team will get back to you swiftly
              with the answers you need!
            </p>
          </Col>
          <Col lg={6}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Form style={{ width: "100%" }}>
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
