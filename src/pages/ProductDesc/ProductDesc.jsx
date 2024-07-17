import Image from "../../assets/images/shroom.jpg";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundSection from "../../components/BackgroundSec/BackgroundSec";
import ProdDetail from "../../components/ProdDetail/ProdDetail";

const ProductDesc = () => {
  return (
    <>
      <BackgroundSection image={Image}>
        <Navbar />
        <ProdDetail />
      </BackgroundSection>
    </>
  );
};

export default ProductDesc;
