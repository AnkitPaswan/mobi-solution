// import react from "react";
import { FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Payment from "../../assests/payments.png";

import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Mobi-Solution</div>
          <div className="text">
            Designed and built with all the love in the world by the Mobi-Solution team with the help of our contributors.We are Best Mobile Phone Spare Parts Provider for all popular brands of mobile phones.
          </div>
        </div>
        <div className="col">
          <div className="title">contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">G.T road Malout, sri mukhthar sahib , Punjab</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">7903814815</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">mobisolution @gamil.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Temper glass</span>
          <span className="text">Display</span>
          <span className="text">Battery</span>
          <span className="text">Back Panel</span>
          <span className="text">Charger</span>
        </div>
        <div className="col"> <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy policy</span>
          <span className="text">Term & Condition</span>
          <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottam-bar">
        <div className="bottam-bar-content">
          <div className="text">
            Copyright &copy; 2023, MOBI-SOLUTION.COM, All Rights Reserved
          </div>
          <img src={Payment} alt=" " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
