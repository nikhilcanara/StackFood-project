import react from "react";
import './index.css';

function FooterHeader(props) {
    return (
        <div className="footer_link_section">
            <div className="footer_media_links">
                <div><MediaBtn image={props.InstaIcon} /></div>
                <div className="mediabtn"><MediaBtn image={props.FbIcon} /></div>
                <div className="mediabtn"><MediaBtn image={props.TwitIcon} /></div>
                <div className="mediabtn"><MediaBtn image={props.LinkedInIcon} /></div>
                <div className="mediabtn"><MediaBtn image={props.PinterestIcon} /></div>
            </div>
            <div className="footer_help_links">
                <h5 className="help_links_title">Become A Restaurant Owner</h5>
                <h5 className="help_links_titles">Become A Delivery Man</h5>
                <h5 className="help_links_titles">Profile</h5>
                <h5 className="help_links_titles">Help & Support</h5>
            </div>
        </div>
    )
}
export default FooterHeader;

function MediaBtn({ image }) {
    return (
        <button className="footer_media_button">
            <div className="footer_media_image_container">
                <img className="footer_media_image" src={image} alt="" />
            </div>
        </button>
    )
}