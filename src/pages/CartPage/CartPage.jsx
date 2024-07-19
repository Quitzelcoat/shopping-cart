import Image from "../../assets/images/rain.jpg";
import BackgroundSection from "../../components/BackgroundSec/BackgroundSec";
import Navbar from "../../components/Navbar/Navbar";
import CartCards from "../../components/CartCards/CartCards";

const CartPage = () => {
  return (
    <>
      <BackgroundSection image={Image}>
        <Navbar />
        <CartCards />
      </BackgroundSection>
    </>
  );
};

export default CartPage;
