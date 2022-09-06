import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="telephone-container">
        <FontAwesomeIcon icon={faPhone} />
        <span className="telephone"> +233504116699</span>
      </div>
      <div className="mail-container">
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="mail">tantrahill2021@gmail.com</span>
      </div>
    </div>
  );
};

export default Header;
