import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import HomePage from "../pages/HomePage/HomePage";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurDomain from "../pages/OurDomain/OurDomain";
import OurSolutionsOutLet from "../pages/OurSolutions/OurSolutionsOutLet";
import OurSolutions from "../pages/OurSolutions/OurSolutions";
import NLP from "../pages/OurSolutions/SubPages/NLP";
import ComputerVision from "../pages/OurSolutions/SubPages/ComputerVision";
import Forecasting from "../pages/OurSolutions/SubPages/Forecasting";
import DevOps from "../pages/OurSolutions/SubPages/DevOps";
import AdvancedAnalytics from "../pages/OurSolutions/SubPages/AdvancedAnalytics";
import MobileWebDevelopment from "../pages/OurSolutions/SubPages/MobileWebDevelopment";
import ContactUs from "../pages/ContactUs/ContactUs";
import OurProjects from "../pages/OurProjects/OurProjects";

//Components
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";

//Package
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoutesPage = () => {
  return (
    <Router>
      {/*Toast Mesasge*/}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/*Nav Bar*/}
      <Navbar />

      {/*Routes*/}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about-us" exact element={<AboutUs />} />
        <Route path="our-domain" exact element={<OurDomain />} />
        <Route path="our-projects" exact element={<OurProjects />} />
        <Route path="our-solutions" element={<OurSolutionsOutLet />}>
          <Route index element={<OurSolutions />} />
          <Route path="natural-language-processing" element={<NLP />} />
          <Route path="computer-vision" element={<ComputerVision />} />
          <Route path="forecasting" element={<Forecasting />} />
          <Route path="dev-ops" element={<DevOps />} />
          <Route path="advanced-analytics" element={<AdvancedAnalytics />} />
          <Route
            path="mobile-and-web-development"
            element={<MobileWebDevelopment />}
          />
        </Route>
        <Route path="contact-us" exact element={<ContactUs />} />
      </Routes>

      {/*Footer*/}
      <Footer />
    </Router>
  );
};

export default RoutesPage;
