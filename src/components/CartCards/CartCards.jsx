import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { CartContext } from "../CartContext/CartContext";
import styles from "./CartCards.module.css";

const CartCards = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className={styles.cartPageContainer}>
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className={styles.cartItemList}>
            {cart.map((item) => (
              <li key={uuidv4()} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cartItemImage}
                />

                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div>Price: ${item.price}</div>
                  <div>
                    <p>-</p>
                    <p>0</p>
                    <p>+</p>
                  </div>
                </div>

                <div>
                  <p>x</p>
                  <p>Each Product Total Price</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <dov>Total Price</dov>
    </>
  );
};

export default CartCards;
