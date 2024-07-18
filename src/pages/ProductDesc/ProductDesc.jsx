import Image from "../../assets/images/shroom.jpg";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundSection from "../../components/BackgroundSec/BackgroundSec";
import ProdDetail from "../../components/ProdDetail/ProdDetail";
import styles from "./ProductDesc.module.css";

const ProductDesc = () => {
  return (
    <>
      <BackgroundSection image={Image} className={styles.ProdDetailPage}>
        <Navbar />
        <ProdDetail />
      </BackgroundSection>
    </>
  );
};

export default ProductDesc;
