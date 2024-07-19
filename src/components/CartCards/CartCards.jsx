import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CartContext } from "../CartContext/CartContext";
import styles from "./CartCards.module.css";

const CartCards = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const handleIncrement = (item) => {
    updateCartQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateCartQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item.id);
  };

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
                  <div className={styles.productsCount}>
                    <p onClick={() => handleDecrement(item)}>-</p>
                    <span>{item.quantity}</span>
                    <p onClick={() => handleIncrement(item)}>+</p>
                  </div>
                </div>

                <div className={styles.removeDesign}>
                  <p onClick={() => handleRemove(item)}>x</p>
                  <div>Total: ${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.totalPrice}>
        Total: $
        {cart
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    </>
  );
};

export default CartCards;
