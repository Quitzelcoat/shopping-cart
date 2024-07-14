import { v4 as uuidv4 } from "uuid";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navItems = [
    "Home",
    "New Arivals",
    "Shirts",
    "Pants",
    "Shoes",
    "Hats",
    "Toys",
  ];

  return (
    <nav className={styles.navbar}>
      <div>Logo</div>
      <ul className={styles.navbarList}>
        {navItems.map((item) => (
          <li key={uuidv4()} className={styles.navbarItem}>
            {item}
          </li>
        ))}
      </ul>
      <div>Cart</div>
    </nav>
  );
};

export default Navbar;
