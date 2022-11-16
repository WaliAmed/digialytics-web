import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../Css/style.css";

//Icons
import TickIconSmall from "../../assets/icons/TickIconSmall";

const OurSolutions = () => {
  return (
    <div
      className="OurSolutionsPage pb-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(251.06deg, #004C3F 0%, #002419 83.97%)",
      }}
    >
      <Row
        className="text-center"
        id="SolutionHeading"
        style={{ paddingTop: "60pt", marginBottom: "70pt" }}
      >
        <Col lg={12} sm={12}>
          <h2 className="font-300 text-white">OUR SOLUTIONS</h2>
        </Col>
      </Row>

      <Row
        style={{
          marginBottom: "100pt",
        }}
        id="SolutionRow"
      >
        <Col lg={5} style={{ marginBottom: "10pt" }}>
          <div
            className="p-4"
            style={{ height: "100%", backgroundColor: "white" }}
          >
            <h5 className="font-400" style={{ fontSize: "22px" }}>
              Language Manipulation
            </h5>
            <small style={{ fontSize: "14px" }}>
              <b>Tags: NLP (Natural Language Processing)</b>
            </small>
            <p style={{ fontSize: "14px" }}>
              With the recent advancements in the field of NLP, we build
              artificially intelligent systems which surpass humans in
              comprehension of text data. Some of the services we provide are:
            </p>
            <ul className="solution-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Text generation
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Translation
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Text summarization
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Chat-bots
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Topic modeling
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Context capturing
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Sentiment analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Recommendation systems
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Transcription
              </li>
            </ul>
          </div>
        </Col>
        <Col
          lg={7}
          style={{
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "10pt",
          }}
        >
          <div
            id="TransparentDGLogo"
            style={{ position: "absolute", margin: "-2.5% -50% 10% 13%" }}
          >
            <img
              src="assets/DGLogo.png"
              alt="logo"
              style={{ height: "470px" }}
            />
          </div>
          <div
            id="SmallBoxes"
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "49%",
            }}
            className="text-white"
          >
            <div className="small-box" style={{ width: "49.5%" }}>
              <h5 className="font-400" style={{ fontSize: "22px" }}>
                Text generation
              </h5>
              <p className="font-200" style={{ fontSize: "13px" }}>
                Text generation is a subfield of NLP. Through AI and
                computational linguistics, our models automatically generate
                natural language texts. This can satisfy certain communicative
                requirements.
              </p>
            </div>
            <div className="small-box" style={{ width: "49.5%" }}>
              <h5 className="font-400" style={{ fontSize: "22px" }}>
                Chat-bots
              </h5>
              <p className="font-200" style={{ fontSize: "13px" }}>
                To make the experience as human as possible, we implement NLP
                models and provide chat-bots - a computer program designed to
                simulate conversation withour customers over the internet.
              </p>
            </div>
          </div>
          <div
            id="SmallBoxes"
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "49%",
            }}
            className="text-white"
          >
            <div className="small-box" style={{ width: "49.5%" }}>
              <h5 className="font-400" style={{ fontSize: "22px" }}>
                Sentiment analysis
              </h5>
              <p className="font-200" style={{ fontSize: "13px" }}>
                Because tone is important, right? We use NLP techniques to
                determine whether data is positive, negative or neutral.
                Sentiment analysis or opinion mining is implemented to
                understand user needs.
              </p>
            </div>
            <div className="small-box" style={{ width: "49.5%" }}>
              <h5 className="font-400" style={{ fontSize: "22px" }}>
                Recommendation systems
              </h5>
              <p className="font-200" style={{ fontSize: "13px" }}>
                Different recommendation algorithms are build to understand user
                interest and requirements through our NLP models to optimize
                browsing and reach, which is critical for the growth of your
                business.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row
        id="SolutionRow"
        style={{
          marginBottom: "100pt",
        }}
      >
        <Col lg={5} style={{ marginBottom: "10pt" }}>
          <div
            className="p-4"
            style={{ height: "100%", backgroundColor: "white" }}
          >
            <h5 className="font-400" style={{ fontSize: "22px" }}>
              Media Recognition
            </h5>
            <small style={{ fontSize: "14px" }}>
              <b>Tags: CV (Computer Vision)</b>
            </small>
            <p style={{ fontSize: "14px" }}>
              Build a solution that best suits your problem using latest CV
              technology
            </p>
            <ul className="solution-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Face recognition
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Object detection
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Image segmentation
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Image classification
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Video analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Medical imaging
              </li>
            </ul>
          </div>
        </Col>
        <Col
          lg={7}
          style={{
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "10pt",
          }}
        >
          <div
            id="TransparentDGLogo"
            style={{ position: "absolute", margin: "-4% -50% 10% 13%" }}
          >
            <img
              src="assets/DGLogo.png"
              alt="logo"
              style={{ height: "470px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "49%",
            }}
            className="text-white"
          >
            <div className="small-box2" style={{ width: "100%" }}>
              <h5 className="font-400" style={{ fontSize: "22px" }}>
                Video analysis
              </h5>
              <p className="font-200" style={{ fontSize: "13px" }}>
                Achieve the capability of automatically analyzing a video to
                detect and determine small details or critical events that might
                get missed without this feature.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "49%",
            }}
            className="text-white"
          >
            <div className="small-box2" style={{ width: "100%" }}>
              <h5 className="font-400" style={{ fontSize: "22px" }}>
                Medical imaging
              </h5>
              <p className="font-200" style={{ fontSize: "13px" }}>
                We provide our customers with one of the most important advanced
                medical tech. which is medical imaging of the interior body. We
                implement different CV techniques in different processes as per
                client needs.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row
        id="SolutionRow"
        style={{
          marginBottom: "70pt",
        }}
      >
        <Col lg={4} style={{ marginBottom: "10pt" }}>
          <div
            id="SolutionBigCard"
            className="SolutionBigCardClass1 pt-5 p-4"
            style={{ backgroundColor: "white", height: "370pt" }}
          >
            <h5 className="font-400" style={{ fontSize: "22px" }}>
              Forecasting / Time series
            </h5>
            <small style={{ fontSize: "14px" }}>
              <b>Tags: ML (Machine Learning)</b>
            </small>
            <p style={{ fontSize: "14px", marginBottom: "40pt" }}>
              We provide our customers with the best forecasting results. Based
              on past and current data, following values’ predictions can be
              made to optimize costs and results
            </p>
            <ul className="solution-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Sales
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Risks
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Value of product
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Market trends
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Stock market behavior
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Crypto-currency trends
              </li>
            </ul>
          </div>
        </Col>

        <Col lg={4} style={{ marginBottom: "10pt" }}>
          <div
            id="SolutionBigCard"
            className="SolutionBigCardClass2 pt-5 p-4"
            style={{ backgroundColor: "white", height: "370pt" }}
          >
            <h5 className="font-400" style={{ fontSize: "22px" }}>
              Data Analysis
            </h5>
            <small style={{ fontSize: "14px" }}>
              <b>Tags: ML (Machine Learning), AI (Artificial Intelligence)</b>
            </small>
            <p style={{ fontSize: "14px", marginBottom: "40pt" }}>
              When it comes to visualizing data on screens, user experience is
              very important. And to improve user’s visual experience, perfect
              representation of data is crucial. We can create interactive
              dashboards, visualize all forms of tabular and textual data, while
              also providing following insights to our customers
            </p>
            <ul className="solution-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Hypothesis generation
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Hypothesis confirmation
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Descriptive analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Exploratory data analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Predictive analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Causal analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Inferential analysis
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                User segmentation
              </li>
            </ul>
          </div>
        </Col>

        <Col lg={4} style={{ marginBottom: "10pt" }}>
          <div
            id="SolutionBigCard"
            className="SolutionBigCardClass3 pt-5 p-4"
            style={{ backgroundColor: "white", height: "370pt" }}
          >
            <h5 className="font-400" style={{ fontSize: "22px" }}>
              Hardware Programming
            </h5>
            <small style={{ fontSize: "14px" }}>
              <b>Tags: ML (Machine Learning), AI (Artificial Intelligence)</b>
            </small>
            <p style={{ fontSize: "14px", marginBottom: "40pt" }}>
              AI and ML have revolutionized the field of hardware programming in
              the past few years. Keeping its importance in today’s world in
              mind, we provide services in the following popular areas
            </p>
            <ul className="solution-list">
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Robotics
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                IOT Computing
              </li>
              <li className="font-400">
                <i className="tick-icon">
                  <TickIconSmall />
                </i>
                Edge Computing
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurSolutions;
