import "./footer.scss";
import logo from "../../resources/okofoteelogo.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerwrapper">
        <ul className="fList">
          <li className="fListItem">
            <img src={logo} alt="Logo" className="logo" />
          </li>
        </ul>
        <ul className="fList">
          <h2 className="title">Okofo Tee Hostels Limited</h2>
          <li className="fListItem">Tantra Hills, Accra, Ghana</li>
          
          <li className="fListItem">Regions</li>
        </ul>
        <ul className="fList">
          <h2 className="title">For Students</h2>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">Enquiries</li>
          <li className="fListItem">Refer a friend</li>
        </ul>
      </div>
      <div className="copyright">Copyright &copy; 2022 Designed by Isaac</div>
    </div>
  );
};

export default Footer;
