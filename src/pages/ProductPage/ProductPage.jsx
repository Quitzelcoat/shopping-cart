import styles from "./ProductPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Image from "../../assets/images/lamp.jpg";
import BackgroundSection from "../../components/BackgroundSec/BackgroundSec";
import Productcards from "../../components/CollectionSection/AllCards/Productcards";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <BackgroundSection image={Image}>
        <div className={styles.contentContainer}>
          <Productcards />
        </div>
      </BackgroundSection>
    </div>
  );
};

export default ProductPage;
