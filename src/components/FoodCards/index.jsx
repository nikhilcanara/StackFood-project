import react from "react";
import './index.css';

function FoodCards(props) {
    return (
        <div className="foodcard-container">
            <div className="foodcard_image_container">
                <img className="foodcard_image" src={props.CardImg1} alt="" />
            </div>
            <div className="foodcard_image_container">
                <div className="foodcard_image_text_container">
                    <p className="foodcard_title">{props.title}</p>
                    <p className="foodcard_subtitle">{props.subtitle}</p>
                </div>
            </div>
            <div className="foodcard_image_container">
                <img className="foodcard_image" src={props.CardImg3} alt="" />
            </div>
        </div>
    );
}

export default FoodCards;