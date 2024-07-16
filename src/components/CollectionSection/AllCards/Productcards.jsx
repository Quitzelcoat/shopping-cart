import styles from "./Productcards.module.css";

const Productcards = () => {
  return (
    <div>
      <div className={styles.eachProdCards}>
        <p>Product Title</p>
        <p>Product text</p>
        <div>Price: $669</div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Productcards;
