import react from "react";
import './index.css';

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
                        <div className="app_download_appstore_section">
                            <div className="appstore_container">
                                <img className="appstore_image" src={props.GooglePlayStoreImg} alt="GooglePlayStoreImg" />
                            </div>
                            <div className="appstore_container">
                                <img className="appstore_image" src={props.AppStoreImg} alt="AppStoreImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppSection;