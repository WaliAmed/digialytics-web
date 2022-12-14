import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import HomePage from "../pages/HomePage/HomePage";
// import Blog from "../pages/Blog/Blog";
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
import OurProducts from "../pages/OurProducts/OurProducts";
import OurProductsSpc from "../pages/OurProducts/OurProductsSpc";

//Components
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import WhiteBGFooter from "../components/Footer/WhiteBGFooter";

//Package
import { ToastContainer } from "react-toastify";
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
        {/* <Route path="blog" exact element={<Blog />} /> */}
        <Route path="our-domain" exact element={<OurDomain />} />
        <Route path="our-products" exact element={<OurProducts />} />
        <Route path="our-products/:id" exact element={<OurProductsSpc />} />
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
      {window.location.pathname !== "/our-solutions" && <Footer />}
      {window.location.pathname === "/our-solutions" && <WhiteBGFooter />}
    </Router>
  );
};

export default RoutesPage;
