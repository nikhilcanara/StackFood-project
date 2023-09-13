import react from "react";
import './index.css';

function RegistrationCard(props) {
    return (
        <div className="reg_card_container">
            <div className="reg_card_container_content">
                <RegCardContainer image={props.RestaurantImg} title={props.title} subtitle={props.subtitle} buttonText={props.btnText} />
            </div>
            <div className="reg_card_container_content">
                <RegCardContainer image={props.DeliveryImg} title={props.DelTitle} subtitle={props.DelSubtitle} buttonText={props.btnText} />
            </div>
        </div>
    );
}

export default RegistrationCard;

function RegCardContainer({ image, title, subtitle, buttonText }) {
    return (
        <div className="reg_card_restaurant_section">
            <div className="restaurant_image_container">
                <img className="restaurant_image" src={image} alt="restaurant-image" />
            </div>
            <div className="restaurant_title_container">
                <p className="restaurant_title">{title}</p>
                <p className="restaurant_subtitle">{subtitle}</p>
            </div>
            <button className="restaurant_button">
                <p className="restaurant_button_title">{buttonText}</p>
            </button>
        </div>
    )
}