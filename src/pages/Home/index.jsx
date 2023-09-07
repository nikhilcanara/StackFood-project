import { DiscountBanner, SubscribeSection, GlobalComponent } from '@/components/index.jsx';
import '@/pages/Home/index.css';
function Home() {
  return (
    <>
      <DiscountBanner />
      <SubscribeSection />
      <GlobalComponent />
    </>
  );
}

export default Home;
