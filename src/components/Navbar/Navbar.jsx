import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState, useContext } from "react";
import styles from "./Navbar.module.css";
import { CartContext } from "../CartContext/CartContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useContext(CartContext);

  const navItems = [
    { id: uuidv4(), title: "Home", path: "/" },
    { id: uuidv4(), title: "Products", path: "/products" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} `}>
      <div>
        <Link to="/" className={styles.navLinkStyle}>
          Logo
        </Link>
      </div>

      <ul className={styles.navbarList}>
        {navItems.map((item) => (
          <li key={uuidv4()} className={styles.navbarItem}>
            <Link to={item.path} className={styles.navLinkStyle}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <Link to="/cart" className={styles.navLinkStyle}>
          Cart
          <span>{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
