import "./thirdSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FourInARoom from "../../resources/4inaroom.webp";
import {
  faCheckToSlot,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
const ThirdSection = () => {
  return (
    <div className="thirdsection">
      <div className="head">
        <h1 className="title">Our accommodation</h1>
        <h3 className="desc">
          Designed and set up for a conducive environment to study and relax.
        </h3>
      </div>

      <div className="thirdsection-wrapper">
        <div className="info-section">
          <h1 className="title">Four in a room</h1>
          <h3 className="desc">
            This is a great option with greater room space . The single bedroom
            includes an en-suite bathroom. Located on a floor of 4 single
            en-suite bedrooms, it has a private balcony too.{" "}
          </h3>
          <h2 className="pricedetails">Price details:</h2>
          <h3 className="price">
            GHS 12,000 applicable for lease period of 10 months or more.{" "}
          </h3>
          <div className="iconsection">
            <div className="book-this-room">
              <FontAwesomeIcon icon={faCheckToSlot} />
              <span className="book">BOOK THIS ROOM</span>
            </div>
            <div className="request-a-visit">
              <FontAwesomeIcon icon={faPersonWalking} />
              <span className="request">REQUEST A VISIT</span>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img
            src={FourInARoom}
            alt="A room with four beds"
            className="fourinaroom"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
