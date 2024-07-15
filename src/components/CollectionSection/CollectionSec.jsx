import styles from "./CollectionSec.module.css";
import AllCards from "./AllCards/AllCards";

const CollectionSec = () => {
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.collectionHeader}>
        <h1>Where Shadows Linger</h1>
      </div>

      <div>
        <AllCards />
      </div>
    </div>
  );
};

export default CollectionSec;
