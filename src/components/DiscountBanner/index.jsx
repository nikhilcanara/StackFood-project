import react from "react";
import './index.css';
import BannerImage from './images/bannerImage.png';
function DiscountBanner() {
    return (
        <div className="banner_image_container">
            <img className="banner_image" src={BannerImage} alt="" />
        </div>
    );
}

export default DiscountBanner;