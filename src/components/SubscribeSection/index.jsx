import react from "react";
import './index.css';
import LeftImage from "./images/sectionLeftImg.svg"
import RightImage from "./images/sectionRightImg.svg"

function SubscribeSection() {
    return (
        <div className="subscribe_section">
            <div className="section_container">
                <div className="section_content-container">
                    <div className="section_left_image_container">
                        <img className="left_image" src={LeftImage} alt="" />
                    </div>
                    <div className="section_title_container">
                        <h1 className="section_title">Lets Connect !</h1>
                        <h3 className="section_subtitle">Stay Upto Date With Restaurants Around You. Subscribe With Email.</h3>
                    </div>
                    <div className="section_input_container">
                        <input placeholder="Your Email Address" type="email" class="section_search_box" value=""></input>
                        <button className="section_input_button">
                            <svg class="section_button_icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon">
                                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                        </button>
                    </div>
                    <div className="section_right_image_container">
                        <img className="right_image" src={RightImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscribeSection;