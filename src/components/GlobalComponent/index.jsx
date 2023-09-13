import './index.css';
import FoodCards from "@/components/FoodCards";
import CardImg1 from '@/components/FoodCards/images/CardImg1.png';
import CardImg3 from '@/components/FoodCards/images/CardImg3.png';
import RegistrationCard from '@/components/RegistrationCard';
import RestaurantImage from '@/components/RegistrationCard/images/RestaurantImage.png';
import DeliveryImage from '@/components/RegistrationCard/images/DeliveryImage.png';
import DiscountBanner from "@/components/DiscountBanner";
import BannerImage from '@/components/DiscountBanner/images/bannerImage.png';
import AppSection from '@/components/AppSection';
import AppDownloadImg from '@/components/AppSection/images/AppDownloadImg.png';
import GooglePlayStoreImg from '@/components/AppSection/images/GooglePlayImg.png';
import AppStoreImg from '@/components/AppSection/images/AppleStoreImg.png';
import DeliveryTrack from '@/components/DeliveryTrack';
import TrackImage from '@/components/DeliveryTrack/images/TrackImage.png';
import ScooterImage from '@/components/DeliveryTrack/images/ScooterImage.png';
import ServiceImage from '@/components/DeliveryTrack/images/ServiceImage.png';

const FoodProps = {
    CardImg1: CardImg1,
    CardImg3: CardImg3,
    title: 'BEST TACOS AROUND',
    subtitle: 'Fast Home Delivery'
}

const RegisterProps = {
    RestaurantImg: RestaurantImage,
    DeliveryImg: DeliveryImage,
    title: 'Open your own restaurant',
    subtitle: 'Register as seller and open shop to start your business',
    btnText: 'Register',
    DelTitle: 'Become a Delivery Man',
    DelSubtitle: 'Register as delivery man and earn money'
}

const DiscountBannerProps = {
    BannerImage: BannerImage
}

const AppSectionProps = {
    AppDownloadImg: AppDownloadImg,
    AppDownloadTitle: 'Download app to enjoy more!',
    AppDownloadSubtitle: 'All the best restaurants are one click away',
    AppDownloadDiscription: 'Download our app from google play store & app store.',
    GooglePlayStoreImg: GooglePlayStoreImg,
    AppStoreImg: AppStoreImg
}

const DeliveryTrackProps = {
    TrackImg: TrackImage,
    ScooterImg: ScooterImage,
    ServiceImg: ServiceImage,
    TrackTitle: 'Order Online',
    TrackSubtitle: 'Order in for yourself or for the group, with no restrictions on order value',
    ScooterTitle: 'Fast Delivery',
    ServiceTitle: 'Enjoy Fresh Food',
}

function GlobalComponent(props) {
    return (
        <div className="global">
            <DeliveryTrack {...DeliveryTrackProps} />
            <FoodCards {...FoodProps} />
            <RegistrationCard {...RegisterProps} />
            <DiscountBanner {...DiscountBannerProps} />
            <AppSection {...AppSectionProps} />
        </div>
    );
}

export default GlobalComponent; 