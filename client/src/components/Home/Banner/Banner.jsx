import "./Banner.scss";
import BannerImg from "../../../assests/banner4a.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>MOBILE
            <span>Spare Parts Hub</span>
          </h1>
          <p>
            The biggest online website for mobile phone spare parts, tools & accessories with wholesale prices at your doorstep!.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
