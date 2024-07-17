import PropTypes from "prop-types";
import styles from "./BackgroundSec.module.css";

const BackgroundSection = ({ image, children, className }) => (
  <section
    style={{
      backgroundImage: `url(${image})`,
    }}
    className={`${styles.BackImgDisplay} ${className}`}
  >
    {children}
  </section>
);

BackgroundSection.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default BackgroundSection;
