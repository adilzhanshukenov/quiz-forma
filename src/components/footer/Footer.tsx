import logo2 from "../../assets/ozat-logo2.png";
import logo4 from "../../assets/logo4.png";
//import phone from "../../assets/phone.png";
import whatsapp from "../../assets/whatsapp-b.png";
import instagram from "../../assets/instagram.png";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <img id="logo-laptop-footer" src={logo2} style={{ height: "45px" }} />
      <img src={logo4} id="logo-footer" />
      <div style={{ display: "flex", gap: "10px" }}>
        {/* <a href="tel:+77759427762">
          <img src={phone} style={{ height: "35px" }} />
        </a> */}
        <a
          href="https://wa.me/77759427762"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} style={{ height: "35px" }} />
        </a>
        <a
          href="https://www.instagram.com/ozat.optics.clinic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} style={{ height: "35px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
