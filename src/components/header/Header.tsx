import whatsapp from "../../assets/whatsapp.png";
import logo from "../../assets/ozat-logo1.png";
//import phone from "../../assets/phone-black.png";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} style={{ height: "35px", cursor: "pointer" }} />
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <div className="whatsapp-button">
          <a
            href="https://wa.me/77759427762"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "none",
              color: "black",
              padding: "0px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src={whatsapp}
              alt="whatsapp icon"
              style={{ width: "35px", height: "35px" }}
            />
            <p id="whatsapp-word">WhatsApp</p>
          </a>
        </div>
        {/* <a id="phone-word" href="tel:+77759427762" className="call-button">
          Позвонить
        </a> */}
        {/* <a id="call-button-icon">
          <img style={{ height: "35px" }} src={phone} alt="phone icon" />
        </a> */}
      </div>
    </div>
  );
};

export default Header;
