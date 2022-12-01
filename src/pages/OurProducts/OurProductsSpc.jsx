import React, { useEffect, useState } from "react";
import "../../Css/style.css";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

//image
import toolkit from "../../assets/images/image1.png";
import LicensePlate from "../../assets/images/licenseplate.png";
import SuggestionMining from "../../assets/images/suggestion.png";
import FalseRating from "../../assets/images/falserating.png";
import ChildAbuse from "../../assets/images/childabuse.png";
import StudentLoan from "../../assets/images/studentloan.png";
import CarPrice from "../../assets/images/car.jpeg";
import ArticleBg from "../../assets/images/product-article-bg.png";

//Icons
import { IoIosArrowForward } from "react-icons/io";

//Apis
import FetchAllProducts from "../../Api/fetchAllProducts";

//Package
import { MutatingDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const OurProductsSpc = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [ProductLoader, setProductLoader] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    FetchAllProducts(setAllProducts, setProductLoader);
    console.log("Hello => ", id);
  }, []);

  const Products = [
    {
      title: "Personality assessment toolkit",
      overview:
        "Voltaire.ai joined hands with our team to develop a leading personality assessment tool, connecting end users and target users to efficiently deal each other. Offering a Machine Learning based system to detect ‘Myers Briggs’ personality types of people using text data provided on their LinkedIn profile, it would assist salespeople in their marketing campaigns.",
      the_challenge:
        "Our client approached us with the vision of a revolutionary personality assessment tool that would bridge the gap between end users and target users. Providing us with emails of users, our responsibility was to develop a system that bridges the gap between target users and end users.",
      solution:
        "LinkedIn profiles were scraped via a custom scrapper, and transformer based was used to predict accurate personality types of users. Using information such as location, school, organization and their personality types were saved in a database. The users email was checked in the database and if the person was found, they displayed information of the targets personality along with recommendations on how to deal with them along with additional information about events in their cities, financial and Google news about the organization they work in are also displayed. If the email is not in the database, then program would ask for their LinkedIn profile links, scrape all the data, find the personality type and news and display the rest of data. Python was used as the backend language, mainly due to the ML module assisted with the waterfall methodology.",
      image: toolkit,
    },
    {
      title: "License plate recognition for vehicles",
      overview:
        "Our fast growth team specializes in a variety of applications ranging from safety systems to collective areas, and from parking admission and traffic control to government organizations. Our team created a license plate recognition system that localized license plates given in the live video/image and then recognized the license plate number to match with the information saved in the database.",
      the_challenge:
        "Our client approached us with the vision of a license plate recognition model that targets the challenge of detecting and recognizing license plates of their citizens’ vehicles. The task proved a challenge due to the diversity of plate formats and non-uniform outdoor conditions such as fixed illumination, limited vehicle speed, designated routes and stationary backgrounds.",
      solution:
        "Our License recognition method aims at finding regions where the plate is located. This task is related to techniques such as pattern recognition, image processing and computer vision. HOG (Histogram of Oriented Gradients), a feature descriptor, is used to characterize objects through their shapes. HOG is the best choice in this case as the number plates are usually in rectangular basic shape. It is indeed important to note that the license plates do come in different shapes and sizes making it harder to detect them. In our solution, a license plate localization method based on an approach using HOG descriptors and a linear SVM classifier is used. Different HOG setups are evaluated aiming at identifying the specific configuration that best performs for (for example) Pakistani license plates.",
      image: LicensePlate,
    },
    {
      title: "Suggestion Mining",
      overview:
        "Meeting the changing demands of consumers is a continuous and never-ending cycle. Suggestion mining is a relatively new task which deals with extraction of sentences, from given opinioned text, which reflect suggestions. Our contribution lays the basis of this mining task, that is binary classification of given sentences into suggestion or non-suggestion.",
      the_challenge:
        "Our client approached us with the problem of said suggestion mining.  The problem of suggestion mining is very young; hence hand labeled data is not available in sufficient amount for identification of suggestions from a large unstructured text, therefore, what we are working with serves as a basis of suggestion mining which deals with binary classification of sentences in suggestion or non-suggestion classes, where the test dataset will belong to the same domain as the training and development datasets, i.e. suggestion forum for windows platform developers.",
      solution:
        "Due to it being a relatively young problem, we are working with the data provided by organizers of SemEval 2019 Task 9. There are 1987 suggestions whereas the number of non-suggestions is much higher i.e. 6066. We worked with raw data which includes website addresses, punctuations etc. We apply Naïve Bayes, Word2vec, random forest, SVM and neural network along with combinations of lower case, accented, punctuation removal, stop word removal, stemming and lemmatization as preprocessing, and compare their results. Best results were achieved on gradient boosted random forest with accent removal and lower case as preprocessing.",
      image: SuggestionMining,
    },
    {
      title: "False Ratings: Mobile Application Ratings Deciphered",
      overview:
        "Our specialist team enables businesses to stand out from the crowd. The center is planning and developing a framework to extract useful information from mobile application reviews to determine the effect of review text on user ratings. Analysis of appropriate attributes for identifying appropriate class ratings.",
      the_challenge:
        "Our client approached us with the problem of text analysis. Automating the process of analyzing individual comments is a challenging task. Enabling developers and stakeholders to understand sentiments of their customers, our framework provides detailed analysis of customer reviews, user demands and constructive feedback, which also includes determining the factors which cause low rating, and the features loved by individuals resulting in higher ratings.",
      solution:
        "In order to study how words contribute towards the ratings, we find correlations between review text and the user ratings. For this reason, we find words which mostly define the sentiments of the user. These rating-based lexicons enable us to determine what are the specific terms users use when giving a specific user rating. Using 0.2 million reviews related with drones scrapped from Google Play Store, we prepared our dataset. Utilizing Machine Learning and Natural Language Processing techniques, we deduced the top 500 most occurring non-repetitive words through vector embeddings. Our analysis enabled developers to determine features liked by the customers as well as the problem faced by them. This enables stakeholders to improve their products through a customer-centric approach based on customer feedback and suggestions. Because good business is a result of customer satisfaction and user-centered approach only.",
      image: FalseRating,
    },
    {
      title: "Online Child Abuse Detection",
      overview:
        "With a rapidly expanding social network and user base, and thus to efficiently keep up with user expectations, it is important to cater hate speech and online abuse. In the quest to make social media platforms free from any and all sorts of hate speech and online abuse, our team focuses to detect online child abuse on Twitter using NLP (Natural Language Processing).",
      the_challenge:
        "Our dedicated team joined hands with CHAEF- Children’s Health And Education Fund, a non-government organization to build the solutions roadmap for their successful digital transformation aimed at protecting children online. Our framework meets Computer Forensics and Cybersecurity aims, which is all about making the internet safe. Developing an extensive NLP-based tool which would perform lexicon-based analysis of each piece of text to determine if it involves any sort of inappropriate content is a tough task, as children are more fragile and sensitive in terms of negative remarks. In order to make Twitter a better social media platform for children, efforts for child abuse detection are made, to promote better mental health for children of all ages.",
      solution:
        "Taking “sentiment analysis” as the basis of the project, we detected hate speech and abusive comments especially directed towards young boys and girls, and children on social media. NLP techniques and methods were used at the core for data cleaning and gathering purposes. Machine Learning based classification and Information Extractor Algorithms were incorporated to understand sentence structures and accuracy measurement. We used the NLTK word-to-vector model to generate word embeddings and word vectorization for detecting hate speech. This framework focused on detecting hate speech and abuse against children specifically.",
      image: ChildAbuse,
    },
    {
      title: "Student Loan Prediction",
      overview:
        "Our specialist team partnered with JND financial to develop a student loan prediction system for the Loan Lending company. Our developed model involved the detailed analysis made over the degree of the student, median household income of the city and state and involved several other key factors necessary to determine if lending the loan was risky or not.",
      the_challenge:
        "The key concept involves protecting the rights of individuals to decide how their personal information is used while ensuring that predictive models are based on representative data.",
      solution:
        "We use permutation feature importance to determine the most optimal features for training our models and providing best possible accuracy for our predictive model. We use a regression model in order to forecast repayment rates. We tested the logistic model and boosted the decision tree model to determine which model produced minimal error while training the model. Our regression model was created to predict the repayment rate based on boosted decision tree regression.",
      image: StudentLoan,
    },
    {
      title: "Car Prices Prediction",
      overview:
        "We partnered with PakWheels - the largest online marketplace for car shoppers and sellers in Pakistan. Our car prices prediction model predicted the prices of the new data points, given a dataset of several car attributes and prices. Gave excellent accuracies and helped companies like PakWheels and KBB to help their customers determine the almost perfect accurate price of their used cars.",
      the_challenge:
        "Finding a fair estimated price of a used car is important as well as challenging. So, there is a need for accurate price prediction mechanisms for used cars. Inductive and deductive prediction techniques of machine learning are used in order to determine and predict accurate prices of used cars.",
      solution:
        "Car price prediction can be a challenging task due to the high number of attributes that should be considered for the accurate prediction. Our ensemble method combines multiple machine learning algorithms in the first experiment as single classifiers,  SVM, ANN and RF. RF serves as a meta estimator as it fits a number of decision tree classifiers on various sub-samples of dataset and controls over-fitting by using average and also to improve predictive accuracy. The features used for building the model are parking sensors, xenon, remote unlock, seat heat, cruise control, asr abs, esp, panorama roof and other features.",
      image: CarPrice,
    },
  ];

  return ProductLoader === true ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
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
    allProducts
      .filter((fl) => fl._id === id)
      .map((items) => {
        return (
          <div style={{ marginTop: "120pt" }}>
            <Row style={{ paddingLeft: "40pt" }}>
              <Col lg={12} sm="auto">
                <div style={{ display: "flex" }}>
                  <p
                    onClick={() => navigate("/our-products")}
                    className="our-product-small-txt"
                    style={{ fontSize: "12px", marginRight: "4px" }}
                  >
                    Our Products <IoIosArrowForward />
                  </p>
                  <p style={{ fontSize: "12px" }}>{items.title}</p>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center py-4"
              style={{
                marginBottom: "20pt",
              }}
            >
              <Col lg={12} sm="auto">
                <h2 className="font-300">{items.title}</h2>
              </Col>
            </Row>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="article-bg"
                style={{ paddingTop: "70pt", paddingBottom: "70pt" }}
              >
                <div
                  className="text-center"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div style={{ width: "70%" }}>
                    <Row>
                      <Col lg={12}>
                        <img
                          id="prd-img"
                          src={
                            "https://drive.google.com/uc?export=view&id=" +
                            items.image
                          }
                          alt="img"
                          style={{ height: "300px", borderRadius: "6.33px" }}
                        />
                      </Col>
                    </Row>

                    <Row className="pt-5">
                      <Col lg={12} style={{ marginBottom: "15pt" }}>
                        <h2 className="font-300">Overview</h2>
                        <p>{items.overview}</p>
                      </Col>

                      <Col lg={12} style={{ marginBottom: "15pt" }}>
                        <h2 className="font-300">The Challenges</h2>
                        <p>{items.the_challenge}</p>
                      </Col>

                      <Col lg={12} style={{ marginBottom: "15pt" }}>
                        <h2 className="font-300">Solution</h2>
                        <p>{items.solution}</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
  );
};

export default OurProductsSpc;
