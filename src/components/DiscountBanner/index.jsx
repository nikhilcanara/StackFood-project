import react from "react";
import './index.css';

function DiscountBanner(props) {
    return (
        <div className="banner-container">
            <div className="banner_image_container">
                <img className="banner_image" src={props.BannerImage} alt="" />
            </div>
        </div>
    );
}

export default DiscountBanner;