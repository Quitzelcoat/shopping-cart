import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import styles from "./AllCards.module.css";

const AllCards = () => {
  const cardData = [
    { id: uuidv4(), title: "Twilight Threads" },
    { id: uuidv4(), title: "Silent Songs" },
    { id: uuidv4(), title: "Faded Dreams" },
    { id: uuidv4(), title: "Whispering Winds" },
    { id: uuidv4(), title: "Haunted Hearts" },
    { id: uuidv4(), title: "Ephemeral Echos" },
  ];

  return (
    <div className={styles.AllCardsSet}>
      {cardData.map((card) => (
        <Link key={card.id} to="/products" className={styles.navLinkStyle}>
          <div className={styles.cardsDisplay}>
            <p>{card.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCards;
