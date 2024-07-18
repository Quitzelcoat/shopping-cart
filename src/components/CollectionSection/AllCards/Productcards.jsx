import { Link } from "react-router-dom";
import styles from "./Productcards.module.css";
import useFetchProducts from "../../Apiproducts/ApiProducts";
import LoadingSpinner from "../../LoadingSpinner/LoadSpinner";

const Productcards = () => {
  const { products, error, loading } = useFetchProducts();

  if (loading) return <LoadingSpinner />;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.productCardsContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.eachProdCards}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
          <Link to={`/description/${product.id}`} className={styles.prodDesc}>
            <p className={styles.prodCatagory}>{product.category}</p>
            <p>{product.title}</p>
            <div>${product.price}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Productcards;
