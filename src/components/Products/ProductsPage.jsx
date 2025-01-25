import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "./ProductsStyles.module.css";

const ProductsPage = ({ products, categories }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtered products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Group products by category
  const productsByCategory = categories.reduce((acc, category) => {
    const categoryProducts = filteredProducts.filter(
      (product) => product.category === category
    );
    if (categoryProducts.length > 0) {
      acc[category] = categoryProducts;
    }
    return acc;
  }, {});

  return (
    <div className={styles.productsPage}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Our Products</h1>
        <p>Explore the best safety gear and equipment for your needs.</p>
      </div>

      {/* Search and Filter Section */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchBar}
        />

        <div className={styles.categories}>
          <button
            onClick={() => handleCategoryChange("All")}
            className={selectedCategory === "All" ? styles.active : ""}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? styles.active : ""}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products by Category */}
      {Object.keys(productsByCategory).map((category) => (
        <div key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div
            className={`${styles.productsGrid} ${
              productsByCategory[category].length > 6 ? styles.scrollable : ""
            }`}
          >
            {productsByCategory[category].map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <Link to={`/product/${product.id}`}>
                  <button className={styles.addToCart}>View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* If no products match */}
      {filteredProducts.length === 0 && (
        <p className={styles.noProducts}>No products found.</p>
      )}
    </div>
  );
};

export default ProductsPage;
