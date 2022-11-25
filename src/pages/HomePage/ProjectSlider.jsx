import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

//image
import toolkit from "../../assets/images/image1.png";
import LicensePlate from "../../assets/images/licenseplate.png";
import SuggestionMining from "../../assets/images/suggestion.png";
import FalseRating from "../../assets/images/falserating.png";
import ChildAbuse from "../../assets/images/childabuse.png";
import StudentLoan from "../../assets/images/studentloan.png";
import CarPrice from "../../assets/images/car.jpeg";

//Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProjectSlider = () => {
  const isMobileScreen = useMediaQuery({ query: "(min-width: 480px)" });

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
        className={className}
        style={{
          ...style,
          display: "block",
          color: "grey",
          height: "100pt",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
        className={className}
        style={{
          ...style,
          display: "block",
          color: "grey",
          height: "100pt",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: isMobileScreen === true ? true : false,
    className: isMobileScreen === true ? "centerSlide" : "",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let projects = [
    {
      img: toolkit,
      title: "Personality assessment toolkit",
      desc: "A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data",
    },
    {
      img: LicensePlate,
      title: "License plate recognition for vehicles",
      desc: "Detection and recognition of diverse vehicular license plates made possible through pattern recognition, image processing and Computer Vision.",
    },
    {
      img: SuggestionMining,
      title: "Suggestion Mining",
      desc: "Our solution to a 'suggestion mining' problem - extracting sentences and presenting them as suggestions on interaction-based platforms to meet the changing demands of consumers",
    },
    {
      img: FalseRating,
      title: "False Ratings: Mobile Application Ratings Deciphered",
      desc: "Analysis of appropriate attributes for identifying authentic user ratings using ML and NLP tech to filter out false mobile ratings",
    },
    {
      img: ChildAbuse,
      title: "Online Child Abuse Detection",
      desc: "In the domain of Computer Forensics and Cybersecurity, detecting online child abuse using ML and NLP to keep social media platforms free from all sorts of hate speech.",
    },
    {
      img: StudentLoan,
      title: "Student Loan Prediction",
      desc: "none",
    },
    {
      img: CarPrice,
      title: "Car Prices Prediction",
      desc: "none",
    },
  ];

  return (
    <Slider {...settings}>
      {projects.map((items, index) => {
        return (
          <div style={{ width: "100%" }} key={index}>
            <div className="card-wrapper">
              <img src={items.img} alt="img" style={{ height: "130pt" }} />

              <h5
                className="font-400"
                style={{ marginTop: "12pt", marginBottom: "8pt" }}
              >
                {items.title}
              </h5>

              <p className="font-300">{items.desc}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ProjectSlider;
