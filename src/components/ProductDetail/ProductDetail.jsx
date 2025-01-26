import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetailStyles.module.css";

const ProductDetailsPage = ({ products }) => {
  const { id } = useParams(); // Extract product ID from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically
  const product = products.find((item) => item.id.toString() === id); // Find product by ID

  if (!product) {
    return <p className={styles.notFound}>Product not found.</p>;
  }

  // WhatsApp message template
  const whatsappMessage = `Hi, I would like to order ${product.name}. Please let me know how to proceed.`;

  return (
    <div className={styles.productDetails}>
      <div className={styles.imageSection}>
        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles.infoSection}>
        <h1>{product.name}</h1>
        <div className={styles.description}>
          {product.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <button
          className={styles.whatsappButton}
          onClick={() =>
            window.open(
              `https://wa.me/254723807031?text=${encodeURIComponent(
                whatsappMessage
              )}`,
              "_blank"
            )
          }
        >
          Order via WhatsApp
        </button>

        <button
          className={styles.backButton}
          onClick={() => navigate(-1)} // Navigate back to the previous page
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
