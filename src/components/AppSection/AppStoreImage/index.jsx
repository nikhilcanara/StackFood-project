import react from "react";
import './index.css'
function AppStoreImage({ image1, image2 }) {
    return (
        <div className="app_download_appstore_section">
            <div className="appstore_container">
                <img className="appstore_image" src={image1} alt="GooglePlayStoreImg" />
            </div>
            <div className="appstore_container">
                <img className="appstore_image" src={image2} alt="AppStoreImg" />
            </div>
        </div>
    )
}

export default AppStoreImage;