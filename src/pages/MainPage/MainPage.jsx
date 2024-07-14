import Image from "../../assets/images/leaf.jpg";
import Images from "../../assets/images/flowers.jpg";
import Navbar from "../../components/Navbar/Navbar";
import HomeImgContent from "../../components/Homepage/HomeImgContent";
import CollectionSec from "../../components/CollectionSection/CollectionSec";
import BackgroundSection from "../../components/BackgroundSec/BackgroundSec";

const MainPage = () => {
  return (
    <div>
      <BackgroundSection image={Image}>
        <Navbar />
        <HomeImgContent />
      </BackgroundSection>
      <BackgroundSection image={Images}>
        <CollectionSec />
      </BackgroundSection>
    </div>
  );
};

export default MainPage;
