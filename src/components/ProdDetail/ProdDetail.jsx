import { useParams } from "react-router-dom";
import { useContext } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadSpinner";
import useFetchProductDetail from "./FetchProdDetail";
import { CartContext } from "../CartContext/CartContext";
import styles from "./ProdDetail.module.css";

const ProdDetail = () => {
  const { productId } = useParams();
  const { product, error, loading } = useFetchProductDetail(productId);
  const { addToCart } = useContext(CartContext);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.prodDetailContainer}>
      <div>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div>
        <h1>{product.title}</h1>
        <div className={styles.productPrice}>Price: ${product.price}</div>
        <p>{product.description}</p>
        <button className={styles.cartBtn} onClick={() => addToCart(product)}>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProdDetail;
