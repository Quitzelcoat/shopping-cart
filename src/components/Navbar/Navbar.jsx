import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navItems = [
    { id: uuidv4(), title: "Home", path: "/" },
    { id: uuidv4(), title: "Products", path: "/products" },
  ];

  return (
    <nav className={styles.navbar}>
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
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
