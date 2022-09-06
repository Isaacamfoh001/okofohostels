import { Link } from "react-router-dom";
import "./fifthSection.scss";
const FifthSection = () => {
  return (
    <div className="fifthsection">
      <Link to="/register" style={{ "text-decoration": "none" }}>
        <div className="button">Take The First Step</div>
      </Link>
    </div>
  );
};

export default FifthSection;
