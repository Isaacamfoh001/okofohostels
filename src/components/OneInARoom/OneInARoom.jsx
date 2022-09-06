import "./oneInARoom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import oneinaroom from "../../resources/oneinaroom.webp";
import {
  faCheckToSlot,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
const OneInARoom = () => {
  return (
    <div className="oneInARoomSection">
      <div className="oneInARoomSection-wrapper">
        <div className="image-section">
          <img
            src={oneinaroom}
            alt="Single room with a bed"
            className="oneinaroom"
          />
        </div>
        <div className="info-section">
          <h1 className="title">One In A Room</h1>
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
      </div>
    </div>
  );
};

export default OneInARoom;
