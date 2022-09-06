import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import OneInARoom from "../../components/OneInARoom/OneInARoom";
import ThirdSection from "../../components/thirdSection/ThirdSection";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faBoltLightning,
  faBroom,
  faHouseLock,
} from "@fortawesome/free-solid-svg-icons";
import "./accomodation.scss";

const Accomodations = () => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <div className="container">
        <h1 className="body">Reasons why you should join our residences </h1>
      </div>
      <div className="container2">
        <h1 className="body2">
          Enjoy a hassle-free stay with all the necessary services included!
        </h1>
      </div>
      <div className="cards">
        <div className="water">
          <FontAwesomeIcon className="waterIcon" icon={faDroplet} />
          <span>Water</span>
        </div>
        <div className="electricity">
          <FontAwesomeIcon className="powerIcon" icon={faBoltLightning} />
          <span>Electricity</span>
        </div>
        <div className="cleaningServices">
          <FontAwesomeIcon className="cleaningIcon" icon={faBroom} />
          <span>Cleaning Services</span>
        </div>
        <div className="security">
          <FontAwesomeIcon className="securityIcon" icon={faHouseLock} />
          <span> 24/7 Security</span>
        </div>
      </div>
      <ThirdSection />
      <OneInARoom />
      <Footer />
    </React.Fragment>
  );
};

export default Accomodations;
