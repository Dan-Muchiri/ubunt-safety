import { useState, useEffect } from "react";
import styles from "./BlackFridayStyles.module.css";

const BlackFridayOffers = () => {
  const images = [
    "/blackfriday1.jpeg",
    "/blackfriday2.jpeg",
    "/blackfriday3.jpeg",
    "/blackfriday4.jpeg",
    "/blackfriday5.jpeg",
    "/blackfriday6.jpeg",
    "/blackfriday7.jpeg",
    "/blackfriday8.jpeg",
    "/blackfriday9.jpeg",
    "/blackfriday10.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.blackFriday}>
      <h2>Black Friday Deals</h2>
      <div className={styles.offerContainer}>
        <img
          src={images[currentIndex]}
          alt={`Black Friday Offer ${currentIndex + 1}`}
          className={styles.offerImage}
        />
      </div>
    </section>
  );
};

export default BlackFridayOffers;
