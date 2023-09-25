import react from "react";
import './index.css';
import FooterHeader from '@/components/Footer/FooterHeader';
import InstaIcon from '@/components/Footer/images/InstaIcon.png'
import FbIcon from '@/components/Footer/images/FbIcon.png'
import TwitIcon from '@/components/Footer/images/TwitIcon.png'
import LinkedInIcon from '@/components/Footer/images/LinkedInIcon.png'
import PinterestIcon from '@/components/Footer/images/PinterestIcon.png'
import Stacklogo from '@/components/Footer/images/StackFoodlogo.png';
import AppStoreImage from '@/components/AppSection/AppStoreImage';
import GooglePlayStoreImg from '@/components/AppSection/images/GooglePlayImg.png';
import AppStoreImg from '@/components/AppSection/images/AppleStoreImg.png';
const FooterProps = {
    InstaIcon: InstaIcon,
    FbIcon: FbIcon,
    TwitIcon: TwitIcon,
    LinkedInIcon: LinkedInIcon,
    PinterestIcon: PinterestIcon,
}

function FooterSection(props) {
    return (
        <div className="footer_section">
            <div className="footer_section_container">
                <FooterHeader {...FooterProps} />
                <div className="footer_info_section">
                    <div className="footer_info_container">
                        <div className="footer_info_container_content">
                            <div className="footer_info_logo_container">
                                <div className="footer_logo_container">
                                    <img className="footer_logo_image" src={Stacklogo} alt="" />
                                </div>
                                <p className="logo_container_subtitle">is Best Delivery Service Near You</p>
                                <div className="footer_info_address_container">
                                    <div className="footer_info_address_content">
                                        <svg className="footer_svg_icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ApartmentIcon"><path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></svg>
                                        <p className="info_container_subtitle">House: 00, Road: 00, City-0000, Country</p>
                                    </div>
                                    <div className="footer_info_address_contents">
                                        <svg className="footer_svg_icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MailIcon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                                        <p className="info_container_subtitle">admin@gmail.com</p>
                                    </div>
                                    <div className="footer_info_address_contents">
                                        <svg className="footer_svg_icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalPhoneIcon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                                        <p className="info_container_subtitle">01700000000</p>
                                    </div>
                                </div>
                                <div className="footer_info_logo_container_content2">
                                    <AppStoreImage image1={GooglePlayStoreImg} image2={AppStoreImg} />
                                </div>
                            </div>
                            <div className="footer_info_container_quick_links">
                                <div className="footer_info_links_container">
                                    <p className="info_quick_links_title">Quick Links</p>
                                    <p className="info_quick_links_subtitle">Loyalty Points</p>
                                    <p className="info_quick_links_subtitle">My Wallet</p>
                                    <p className="info_quick_links_subtitle">About Us</p>

                                </div>
                            </div>
                            <div className="footer_info_container_other_links">
                                <div className="footer_info_links_container">
                                    <p className="info_quick_links_title">Quick Links</p>
                                    <p className="info_quick_links_subtitle">Popular Restaurants</p>
                                    <p className="info_quick_links_subtitle">Best Reviewed Foods</p>
                                    <p className="info_quick_links_subtitle">New Restaurants</p>
                                </div>
                            </div>
                            <div className="footer_info_container_other_links">
                                <div className="footer_info_links_container">
                                    <p className="info_quick_links_title">Other</p>
                                    <p className="info_quick_links_subtitle">Privacy Policy</p>
                                    <p className="info_quick_links_subtitle">Term & Conditions</p>
                                    <p className="info_quick_links_subtitle">Refund Policy</p>
                                    <p className="info_quick_links_subtitle">Cancellation Policy</p>
                                    <p className="info_quick_links_subtitle">Shipping Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_copyright_section">
                    <div className="footer_copyright_content">
                        <h5 className="footer_copyright_subtitle">Copyright Ⓒ Copyright 2023</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;

