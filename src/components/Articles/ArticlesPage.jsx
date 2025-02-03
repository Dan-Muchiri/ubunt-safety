import { useState } from "react";
import { articles, categories } from "./articledata";
import styles from "./ArticlesStyles.module.css";

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  // Find the article of the week (you could define this based on a flag or pick one)
  const articleOfTheWeek = articles.find((article) => article.isFeatured);

  return (
    <div className={styles.articlesContainer}>
      {/* Article of the Week Section */}
      {articleOfTheWeek && (
        <div className={styles.articleOfTheWeek}>
          <h2>Article of the Week</h2>
          <div className={styles.articleCard}>
            <img
              src={articleOfTheWeek.image}
              alt={articleOfTheWeek.title}
              className={styles.articleImage}
            />
            <h3 className={styles.articleTitle}>{articleOfTheWeek.title}</h3>
            <p className={styles.articleSummary}>{articleOfTheWeek.summary}</p>
            <a
              href={articleOfTheWeek.file}
              download
              className={styles.downloadButton}
            >
              Download Article
            </a>
          </div>
        </div>
      )}

      <h1 className={styles.pageTitle}>Weekly Safety Articles</h1>

      {/* Category Filter */}
      <div className={styles.categoryButtons}>
        <button
          className={`${styles.categoryButton} ${
            selectedCategory === "All" ? styles.active : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className={styles.articlesGrid}>
        {filteredArticles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <img
              src={article.image}
              alt={article.title}
              className={styles.articleImage}
            />
            <h2 className={styles.articleTitle}>{article.title}</h2>
            <p className={styles.articleSummary}>{article.summary}</p>
            <a
              href={article.file}
              download
              className={styles.downloadButton}
            >
              Download Article
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
