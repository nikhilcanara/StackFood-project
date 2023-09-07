import react from "react";
import './index.css';

function FoodCards(props) {
    return (
        <div className="global-container">
            <div className="global_image_container">
                <img className="global_image" src={props.title} alt="" />
            </div>
            <div className="global_image_container">
                <img className="global_image" src={props.img2} alt="" />
            </div>
            <div className="global_image_container">
                <img className="global_image" src={props.img3} alt="" />
            </div>
        </div>
    );
}

export default FoodCards;