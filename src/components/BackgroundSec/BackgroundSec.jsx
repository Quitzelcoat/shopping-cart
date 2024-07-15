import PropTypes from "prop-types";

const BackgroundSection = ({ image, children }) => (
  <section
    style={{
      backgroundImage: `url(${image})`,
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {children}
  </section>
);

BackgroundSection.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackgroundSection;
