import "./firstSection.scss";
import backgroundimage from "../../resources/mariahostel.webp";
const FirstSection = () => {
  return (
    <div className="firstSection">
      <div className="image-section">
        <img src={backgroundimage} alt="background" className="backgroundimg" />
      </div>
    </div>
  );
};

export default FirstSection;
