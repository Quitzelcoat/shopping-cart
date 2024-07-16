import Navbar from "../../components/Navbar/Navbar";
import Image from "../../assets/images/wether.jpg";
import BackgroundSection from "../../components/BackgroundSec/BackgroundSec";
import Productcards from "../../components/CollectionSection/AllCards/Productcards";

const ProductPage = () => {
  return (
    <>
      <BackgroundSection image={Image}>
        <Navbar />
        <Productcards />
      </BackgroundSection>
    </>
  );
};

export default ProductPage;
