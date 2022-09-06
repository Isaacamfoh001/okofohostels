import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./secondSection.scss";
import {
  faUtensils,
  faCamera,
  faSchool,
  faBed,
} from "@fortawesome/free-solid-svg-icons";
const SecondSection = () => {
  return (
    <div className="secondsection">
      <div className="secondsection-wrapper">
        <div className="firstcard">
          <FontAwesomeIcon className="cafe" icon={faUtensils} />
          <span>Cafetaria</span>
        </div>
        <div className="secondcard">
          <FontAwesomeIcon className="camera" icon={faCamera} />
          <span>24/7 Security</span>
        </div>
        <div className="thirdcard">
          <FontAwesomeIcon className="school" icon={faSchool} />
          <span>On campus</span>
        </div>
        <div className="fourthcard">
          <FontAwesomeIcon className="bed" icon={faBed} />
          <span>Spacious rooms</span>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
