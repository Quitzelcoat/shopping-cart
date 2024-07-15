import Navbar from "../../components/Navbar/Navbar";
import Image from "../../assets/images/wether.jpg";
import BackgroundSection from "../../components/BackgroundSec/BackgroundSec";

const ProductPage = () => {
  return (
    <>
      <BackgroundSection image={Image}>
        <Navbar />
        <div>something</div>
      </BackgroundSection>
    </>
  );
};

export default ProductPage;
