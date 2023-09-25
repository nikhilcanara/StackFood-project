import { SubscribeSection, GlobalComponent, FooterSection } from '@/components/index.jsx';
import '@/pages/Home/index.css';
function Home() {
  return (
    <>
      <GlobalComponent />
      <SubscribeSection />
      <FooterSection />
    </>
  );
}

export default Home;
