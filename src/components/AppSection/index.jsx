import react from "react";
import './index.css';
import AppStoreImage from '@/components/AppSection/AppStoreImage';
function AppSection(props) {
    return (
        <div className="app_section_container">
            <div className="app_section_container_content">
                <div className="app_section_image_section">
                    <div className="app_section_image_container">
                        <img className="app_download_image" src={props.AppDownloadImg} alt="AppDownloadImg" />
                    </div>
                </div>
                <div className="app_download_container">
                    <div className="app_download_title_section">
                        <p className="app_download_title">{props.AppDownloadTitle}</p>
                        <p className="app_download_subtitle">{props.AppDownloadSubtitle}</p>
                        <p className="app_download_discription">{props.AppDownloadDiscription}</p>
                        <AppStoreImage image1={props.GooglePlayStoreImg} image2={props.AppStoreImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppSection;


