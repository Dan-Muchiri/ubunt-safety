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

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goNext, 4000); // Auto-change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.blackFriday}>
      <h2>Black Friday Deals</h2>
      <div className={styles.offerContainer}>
        <button className={styles.navButton} onClick={goPrev}>‹</button>
        <img
          src={images[currentIndex]}
          alt={`Black Friday Offer ${currentIndex + 1}`}
          className={styles.offerImage}
        />
        <button className={styles.navButton} onClick={goNext}>›</button>
      </div>
    </section>
  );
};

export default BlackFridayOffers;
