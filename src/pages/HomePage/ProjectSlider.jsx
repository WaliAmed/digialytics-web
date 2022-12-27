import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
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

const ProjectSlider = (props) => {
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
    autoplaySpeed: 4000,
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

  const products = [];
  products[0] = {
    createdAt: "2022-12-01T14:13:46.043Z",
    title: "Personality assessment toolkit",
    description:
      "A revolutionary ML-based personality assessment solution to bridge the gap between end users and target users using LinkedIn data using text data provided on their website",
    image: "1_V7bMlFm3Y6fYnNwAkgjdAtW5XjSeliN",
    overview:
      "Voltaire.ai joined hands with our team to develop a leading personality assessment tool, connecting end users and target users to efficiently deal each other. Offering a Machine Learning based system to detect ‘Myers Briggs’ personality types of people using text data provided on their LinkedIn profile, it would assist salespeople in their marketing campaigns.",
    solution:
      "LinkedIn profiles were scraped via a custom scrapper, and transformer based was used to predict accurate personality types of users. Using information such as location, school, organization and their personality types were saved in a database. The users email was checked in the database and if the person was found, they displayed information of the targets personality along with recommendations on how to deal with them along with additional information about events in their cities, financial and Google news about the organization they work in are also displayed. If the email is not in the database, then program would ask for their LinkedIn profile links, scrape all the data, find the personality type and news and display the rest of data. Python was used as the backend language, mainly due to the ML module assisted with the waterfall methodology.",
    the_challenge:
      "Our client approached us with the vision of a revolutionary personality assessment tool that would bridge the gap between end users and target users. Providing us with emails of users, our responsibility was to develop a system that bridges the gap between target users and end users.",
    updatedAt: "2022-12-01T14:13:46.043Z",
    _id: "e8b2f4a4-f8d5-4dd0-b7de-cbeadff628bd",
  };
  products[1] = {
    _id: "398cb4c8-f12d-4105-9908-3c2cc74c6cd4",
    title: "License plate recognition",
    image: "1XsgR_scDI-t9A1jN85ypXMEA8i-q2b0c",
    description:
      "Detection and recognition of diverse vehicular license plates made possible through pattern recognition, image processing and Computer Vision showing through live video image ",
    overview:
      "Our fast growth team specializes in a variety of applications ranging from safety systems to collective areas, and from parking admission and traffic control to government organizations. Our team created a license plate recognition system that localized license plates given in the live video/image and then recognized the license plate number to match with the information saved in the database.",
    the_challenge:
      "Our client approached us with the vision of a license plate recognition model that targets the challenge of detecting and recognizing license plates of their citizens’ vehicles. The task proved a challenge due to the diversity of plate formats and non-uniform outdoor conditions such as fixed illumination, limited vehicle speed, designated routes and stationary backgrounds.",
    solution:
      "Our License recognition method aims at finding regions where the plate is located. This task is related to techniques such as pattern recognition, image processing and computer vision. HOG (Histogram of Oriented Gradients), a feature descriptor, is used to characterize objects through their shapes. HOG is the best choice in this case as the number plates are usually in rectangular basic shape. It is indeed important to note that the license plates do come in different shapes and sizes making it harder to detect them. In our solution, a license plate localization method based on an approach using HOG descriptors and a linear SVM classifier is used. Different HOG setups are evaluated aiming at identifying the specific configuration that best performs for (for example) Pakistani license plates.",
    createdAt: "2022-12-01T15:01:55.413+00:00",
    updatedAt: "2022-12-01T15:01:55.413+00:00",
  };
  products[2] = {
    _id: "282ef965-489c-4941-a19e-278184bea191",
    title: "Suggestion Mining",
    image: "1xMMMy9YVWcxmwE_DB69Okt8_Q49Kumrn",
    description:
      "Our solution to a 'suggestion mining' problem - extracting sentences and presenting them as suggestions on interaction-based platforms to meet the changing demands of consumers",
    overview:
      "Meeting the changing demands of consumers is a continuous and never-ending cycle. Suggestion mining is a relatively new task which deals with extraction of sentences, from given opinionated text, which reflect suggestions. Our contribution lays the basis of this mining task, that is binary classification of given sentences into suggestion or non-suggestion.",
    the_challenge:
      "Our client approached us with the problem of said suggestion mining.  The problem of suggestion mining is very young; hence hand labeled data is not available in sufficient amount for identification of suggestions from a large unstructured text, therefore, what we are working with serves as a basis of suggestion mining which deals with binary classification of sentences in suggestion or non-suggestion classes, where the test dataset will belong to the same domain as the training and development datasets, i.e. suggestion forum for windows platform developers. .",
    solution:
      "Due to it being a relatively young problem, we are working with the data provided by organizers of SemEval 2019 Task 9. There are 1987 suggestions whereas the number of non-suggestions is much higher i.e. 6066. We worked with raw data which includes website addresses, punctuations etc. We apply Naïve Bayes, Word2vec, random forest, SVM and neural network along with combinations of lower case, accented, punctuation removal, stop word removal, stemming and lemmatization as preprocessing, and compare their results. Best results were achieved on gradient boosted random forest with accent removal and lower case as preprocessing.",
    createdAt: "2022-12-01T15:01:56.490+00:00",
    updatedAt: "2022-12-01T15:01:56.490+00:00",
  };
  products[3] = {
    _id: "282ef965-489c-4941-a19e-278184bea192",
    title: "Mobile Application Ratings Deciphered",
    image: "10eHtTf9aYYtG7_2kebG0sWDCrPsr88Lg",
    description:
      "Analysis of appropriate attributes for identifying authentic user ratings using ML abd NLP tech to filter out false mobile ratings                                               ",
    overview:
      "Our specialist team enables businesses to stand out from the crowd. The center is planning and developing a framework to extract useful information from mobile application reviews to determine the effect of review text on user ratings. Analysis of appropriate attributes for identifying appropriate class ratings. ",
    the_challenge:
      "Our client approached us with the problem of text analysis. Automating the process of analyzing individual comments is a challenging task. Enabling developers and stakeholders to understand sentiments of their customers, our framework provides detailed analysis of customer reviews, user demands and constructive feedback, which also includes determining the factors which cause low rating, and the features loved by individuals resulting in higher ratings.",
    solution:
      "In order to study how words contribute towards the ratings, we find correlations between review text and the user ratings. For this reason, we find words which mostly define the sentiments of the user. These rating-based lexicons enable us to determine what are the specific terms users use when giving a specific user rating. Using 0.2 million reviews related with drones scrapped from Google Play Store, we prepared our dataset. Utilizing Machine Learning and Natural Language Processing techniques, we deduced the top 500 most occurring non-repetitive words through vector embeddings. Our analysis enabled developers to determine features liked by the customers as well as the problem faced by them. This enables stakeholders to improve their products through a customer-centric approach based on customer feedback and suggestions. Because good business is a result of customer satisfaction and user-centered approach only.",
    createdAt: "2022-12-01T15:01:56.490+00:00",
    updatedAt: "2022-12-01T15:01:56.490+00:00",
  };
  products[4] = {
    _id: "282ef965-489c-4941-a19e-278184bea193",
    title: "Online Child Abuse Detection",
    image: "1b3QQcYYDy-X4VvzTk-XNeP-BlKj2QnHb",
    description:
      "In the domain of Computer Forensics and Cybersecurity, detecting online child abuse using ML and NLP to keep social media platforms free from all sorts of hate speech           ",
    overview:
      "With a rapidly expanding social network and user base, and thus to efficiently keep up with user expectations, it is important to cater hate speech and online abuse. In the quest to make social media platforms free from any and all sorts of hate speech and online abuse, our team focuses to detect online child abuse on Twitter using NLP (Natural Language Processing). ",
    the_challenge:
      "Our dedicated team joined hands with CHAEF- Children’s Health And Education Fund, a non-government organization to build the solutions roadmap for their successful digital transformation aimed at protecting children online. Our framework meets Computer Forensics and Cybersecurity aims, which is all about making the internet safe. Developing an extensive NLP-based tool which would perform lexicon-based analysis of each piece of text to determine if it involves any sort of inappropriate content is a tough task, as children are more fragile and sensitive in terms of negative remarks. In order to make Twitter a better social media platform for children, efforts for child abuse detection are made, to promote better mental health for children of all ages.",
    solution:
      "Taking “sentiment analysis” as the basis of the project, we detected hate speech and abusive comments especially directed towards young boys and girls, and children on social media. NLP techniques and methods were used at the core for data cleaning and gathering purposes. Machine Learning based classification and Information Extractor Algorithms were incorporated to understand sentence structures and accuracy measurement. We used the NLTK word-to-vector model to generate word embeddings and word vectorization for detecting hate speech. This framework focused on detecting hate speech and abuse against children specifically.",
    createdAt: "2022-12-01T15:01:56.490+00:00",
    updatedAt: "2022-12-01T15:01:56.490+00:00",
  };
  products[5] = {
    _id: "282ef965-489c-4941-a19e-278184bea194",
    title: "Student Loan Prediction",
    image: "13t2-xRsfawG7WWHoAOncDT-7ZAtPDJZR",
    description:
      "Our regression model was created to forecast the repayment rate of student loans based on boosted decision tree regression, whilst keeping students' data safe and secure",
    overview:
      "Our specialist team partnered with JND financial to develop a student loan prediction system for the Loan Lending company. Our developed model involved the detailed analysis made over the degree of the student, median household income of the city and state and involved several other key factors necessary to determine if lending the loan was risky or not.",
    the_challenge:
      "The key concept involves protecting the rights of individuals to decide how their personal information is used while ensuring that predictive models are based on representative data.",
    solution:
      "We use permutation feature importance to determine the most optimal features for training our models and providing best possible accuracy for our predictive model. We use a regression model in order to forecast repayment rates. We tested the logistic model and boosted the decision tree model to determine which model produced minimal error while training the model. Our regression model was created to predict the repayment rate based on boosted decision tree regression. ",
    createdAt: "2022-12-01T15:01:56.490+00:00",
    updatedAt: "2022-12-01T15:01:56.490+00:00",
  };
  products[6] = {
    _id: "282ef965-489c-4941-a19e-278184bea195",
    title: "Car Prices Prediction",
    image: "1ZustS-62NbuUkZ24sRwUsT9iE_JyoLHX",
    description:
      "Combining multiple machine learning algorithms to form accurate price prediction mechanisms for used cars, keeping in mind all the attributes and features                       ",
    overview:
      "We partnered with PakWheels - the largest online marketplace for car shoppers and sellers in Pakistan. Our car prices prediction model predicted the prices of the new data points, given a dataset of several car attributes and prices. Gave excellent accuracies and helped companies like PakWheels and KBB to help their customers determine the almost perfect accurate price of their used cars.",
    the_challenge:
      "Finding a fair estimated price of a used car is important as well as challenging. So, there is a need for accurate price prediction mechanisms for used cars. Inductive and deductive prediction techniques of machine learning are used in order to determine and predict accurate prices of used cars.",
    solution:
      "Car price prediction can be a challenging task due to the high number of attributes that should be considered for the accurate prediction. Our ensemble method combines multiple machine learning algorithms in the first experiment as single classifiers,  SVM, ANN and RF. RF serves as a meta estimator as it fits a number of decision tree classifiers on various sub-samples of dataset and controls over-fitting by using average and also to improve predictive accuracy. The features used for building the model are parking sensors, xenon, remote unlock, seat heat, cruise control, asr abs, esp, panorama roof and other features.",
    createdAt: "2022-12-01T15:01:56.490+00:00",
    updatedAt: "2022-12-01T15:01:56.490+00:00",
  };
  let navigate = useNavigate();

  return (
    <Slider {...settings}>
      {products?.map((items, index) => {
        return (
          <div style={{ width: "100%" }} key={index}>
            <div
              className="card-wrapper"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/our-products/" + items._id)}
            >
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=" + items.image
                }
                alt="img"
                // style={{ height: "130pt" }}
              />

              <h5
                className="font-700"
                style={{
                  marginTop: "12pt",
                  marginBottom: "8pt",
                  fontSize: "19px",
                }}
              >
                {items.title}
              </h5>

              <p className="font-300" style={{ fontSize: "12px" }}>
                {items.description}
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default ProjectSlider;
