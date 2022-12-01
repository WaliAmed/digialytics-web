import React, { useState, useEffect, useRef } from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Packages
import "react-phone-input-2/lib/style.css";
import { MutatingDots } from "react-loader-spinner";

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
import ContactUsSection from "../../components/ContactUsSection/contactUs";

//Apis
import FetchAllProducts from "../../Api/fetchAllProducts";

const HomePage = () => {
  const [NewsLetterBtnLoader, setNewsLetterBtnLoader] = useState(false);
  const [NewsLetterEmail, setNewsLetterEmail] = useState("");

  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const executeScrollToAboutUs = () => myRef2.current.scrollIntoView();

  useEffect(() => {
    var currentUrlWithoutParams = window.location.href.split("?")[0];
    if (currentUrlWithoutParams.includes("#contact-us-section")) {
      executeScroll();
    }
    if (currentUrlWithoutParams.includes("#about-us-section")) {
      executeScrollToAboutUs();
    }
  }, []);

  const [ProductLoader, setProductLoader] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    FetchAllProducts(setAllProducts, setProductLoader);
  }, []);

  return (
    <div className="container-fluied">
      {/*Hero*/}
      <Container id="Starter">
        <Row id="hero-section" style={{ marginBottom: "40pt" }}>
          <Col sm={12} lg={7} className="hero-left">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <h1 className="font-500">INNOVATION. EFFICIENCY. RELIABILITY.</h1>

              <p style={{ width: "100%", marginTop: "22px" }}>
                Providing customers all around the globe with the best computer
                software solutions. Developing algorithms and methodologies for
                your problems using advanced software techniques, like
                Artificial Intelligence and Machine Learning, to improve the
                efficiency and quality of your product.
              </p>

              <a href="#news-letter">
                <SharedButton title="SUBSCRIBE" />
              </a>
            </div>
          </Col>

          <Col sm={12} lg={5} className="hero-right">
            <img
              src="assets/Laptop.png"
              alt="img"
              style={{ height: "290pt" }}
            />
          </Col>
        </Row>
      </Container>

      {/*About Us*/}
      <div id="about-us-section" ref={myRef2}></div>
      <Row
        className="text-white"
        style={{
          background: "var(--main-bg)",
          marginBottom: "90pt",
          paddingTop: "70px",
          paddingBottom: "100px",
        }}
      >
        <Col lg={12} className="text-center py-4">
          <h3 className="font-300" style={{ marginBottom: "50pt" }}>
            ABOUT US
          </h3>
          <h1 className="mt-3 font-500">You Imagine it. We Deliver it.</h1>
        </Col>
        <Col lg={12} className="text-center pb-4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              className="font-200 aboutus-text"
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

      {/*WHAT WE DO*/}
      <Row
        id="our-domain-section"
        className="md-container"
        style={{ marginBottom: "60pt" }}
      >
        <Col className="text-center" style={{ marginBottom: "32pt" }}>
          <h2 className="font-300">WHAT WE DO</h2>
        </Col>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row style={{ width: "100%" }}>
            <Col id="ourDomainCol" lg={4} sm={"auto"} className="text-center">
              <Row className="mb-3">
                <ResearchIcon />
              </Row>
              <h4 className="font-400">Research</h4>
              <p className="px-5 font-200" id="ourDomainDesc">
                Our team analyzes the problem, devises and compares different
                possible solutions, derives the best possible one, and then
                optimally implements it.
              </p>
            </Col>
            <Col id="ourDomainCol" lg={4} sm={"auto"} className="text-center">
              <Row className="mb-3">
                <SoftwareDevelopment />
              </Row>
              <h4 className="font-400">Software Development</h4>
              <p className="px-5 font-200" id="ourDomainDesc">
                Our team of software developers provide B2B products to our
                clients. We provide Web applications, Android and iOS
                applications as per requirement.
              </p>
            </Col>
            <Col lg={4} sm={"auto"} className="text-center">
              <Row className="mb-3">
                <Automation />
              </Row>
              <h4 className="font-400">Automation</h4>
              <p className="px-5 font-200" id="ourDomainDesc">
                If you have an existing system that needs automation, or whether
                you want to integrate Machine Learning to your program, we can
                help you do both.
              </p>
            </Col>
          </Row>
        </div>
      </Row>

      {/*WHY HIRE US?*/}
      <div
        id="our-solution-section"
        className="py-5"
        style={{ marginBottom: "25pt" }}
      >
        <Row className="mb-3">
          <Col className="text-center">
            <h2 className="font-300" style={{ marginBottom: "32pt" }}>
              WHY HIRE US?
            </h2>
          </Col>
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row id="ourSolutionRow" style={{ width: "80%" }}>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                img={"assets/img1.png"}
                title="Better user experience"
                desc="It’s all hands on deck to improve our clients’ experience with our exellence and skillset. Our solutions are user-centered, our main goal is to make you happy."
              />
            </Col>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                img={"assets/img2.png"}
                title="Increase your business"
                desc="We add tangible value to your business. Automation and using Machine learning can increase your profits and generate revenue upto 10 times your current value."
              />
            </Col>
            <Col id="ourSolutionCol" className="text-center" lg={4} sm={12}>
              <TransparentCard
                img={"assets/img3.png"}
                title="Work ethic"
                desc="We provide the best service with utmost security, privacy and transparency. Our goal is to make sure our clients have a complaint-free, trustworthy experience."
              />
            </Col>
          </Row>
        </div>
      </div>

      {/*News Letter*/}
      <div id="news-letter"></div>
      <Row
        id="newsLetterBg"
        className="text-white"
        style={{
          // borderRadius: "0 0 50%/100px 100px",
          // background: "linear-gradient(360deg, #002419 0%, #004C3F 100%)",
          marginBottom: "60pt",
          paddingTop: "70pt",
          paddingBottom: "30pt",
        }}
      >
        <Col lg={12} className="text-center pt-4">
          <h1 className="mt-3 font-500">Want the latest news and offers?</h1>
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
                setNewsLetterEmail={setNewsLetterEmail}
              />
            </div>
          </div>
        </Col>
      </Row>

      {/*Our Projects*/}
      <div id="our-projects-section"></div>
      <Row className="py-5" style={{ marginBottom: "90pt" }}>
        <Col className="text-center" style={{ marginBottom: "25pt" }}>
          <h2 className="font-300">OUR PRODUCTS</h2>
        </Col>

        {ProductLoader === true ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50pt",
              marginBottom: "50pt",
            }}
          >
            <MutatingDots
              height="100"
              width="100"
              color={"var(--main-color-2)"}
              secondaryColor="black"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <>
            <Row>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "75%" }}>
                  <ProjectSlider allProducts={allProducts} />
                </div>
              </div>
            </Row>

            <Row className="mt-4">
              <Col lg={12}>
                <div className="text-center">
                  <a
                    href="/our-products"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                  >
                    Show more
                  </a>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Row>

      {/*Our Top Stories*/}
      {/* <div
        id="ourstoriesBg"
        className="container-fluied"
        style={{
          padding: "60pt 0pt",
          // background: "linear-gradient(180deg, #002419 0%, #004C3F 100%)",
          marginBottom: "90pt",
        }}
      >
        <Container style={{ width: "75%" }}>
          <Row>
            <Col id="ourTopStoriesCol" lg={10} sm={12} className="mb-5">
              <h2 className="text-white">Our top Stories</h2>
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
      </div> */}

      {/*Contact*/}
      <div id="contact-us-section" ref={myRef}></div>
      <ContactUsSection />
    </div>
  );
};

export default HomePage;
