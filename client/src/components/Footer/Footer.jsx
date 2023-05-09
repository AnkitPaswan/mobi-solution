// import react from "react";
import { FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Payment from "../../assests/payments.png";

import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque modi atque eum sapiente a id sit dolores provident repudiandae.
          </div>
        </div>
        <div className="col">
        <div className="title">contact</div>
        <div className="c-item">
        <FaLocationArrow />
        <div className="text">c.t marg gannipur muzaffurpur, Bihar</div>
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
        <span className="text">Headphones</span>
        <span className="text">Smart watches</span>
        <span className="text">Bluetooth speakers</span>
        <span className="text">Wireless earbuds</span>
        <span className="text">Home theater</span>
        <span className="text">Projectors</span>
        </div>
        <div className="col"> <div className="title">Pages</div>
        <span className="text">Home</span>
        <span className="text">About</span>
        <span className="text">Privacy policy</span>
        <span className="text">Return</span>
        <span className="text">Term & Condition</span>
        <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottam-bar">
        <div className="bottam-bar-content">
            <div className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, officia?
            </div>
            <img src={Payment} alt=" "/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
