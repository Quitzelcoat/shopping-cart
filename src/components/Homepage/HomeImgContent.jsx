import { Link } from "react-router-dom";
import styles from "./HomeImg.module.css";

const HomeImgContent = () => {
  return (
    <div className={styles.mainPageText}>
      <div>
        <h1>The Echo</h1>
        <p>
          A whisper of what was wanted, now Forgotten. A hollow vessel,
          resonating with the ghost of Desire, echoing the ache of emptiness.
        </p>
      </div>
      <Link to="/products">
        <button>New Arival</button>
      </Link>
    </div>
  );
};

export default HomeImgContent;
