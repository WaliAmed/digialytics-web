import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

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
      img: "assets/img.png",
      title: "Project Name",
      desc: "We can add tangible value to your business. Automation and using Machine learning can increase your profits as much as 10X.",
    },
    {
      img: "assets/img.png",
      title: "Project Name",
      desc: "We can improve customers’ experience with our skillset. We can automate existing solutions and also build new solutions from scratch for better user experience.",
    },
    {
      img: "assets/img.png",
      title: "Project Name",
      desc: "We can add tangible value to your business. Automation and using Machine learning can increase your profits as much as 10X.",
    },
    {
      img: "assets/img.png",
      title: "Project Name",
      desc: "We can add tangible value to your business. Automation and using Machine learning can increase your profits as much as 10X.",
    },
    {
      img: "assets/img.png",
      title: "Project Name",
      desc: "We can add tangible value to your business. Automation and using Machine learning can increase your profits as much as 10X.",
    },
    {
      img: "assets/img.png",
      title: "Project Name",
      desc: "We can add tangible value to your business. Automation and using Machine learning can increase your profits as much as 10X.",
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
