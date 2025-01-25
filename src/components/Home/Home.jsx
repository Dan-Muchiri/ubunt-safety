import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeStyles.module.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Your Safety, Our Priority</h1>
          <p>Explore Our Comprehensive Range of Safety Solutions, Tailored for Every Need</p>
          <div className={styles.ctaButtons}>
            <Link to="/products" className={styles.ctaBtn}>Shop Now</Link>
            <Link to="/contact" className={styles.ctaBtn}>Contact Us</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/Ubuntu safety logo.png" alt="Safety Solutions" />
        </div>
      </section>

      {/* Product Overview Section */}
      <section className={styles.productOverview}>
        <h2>Explore Our Products</h2>
        <div className={styles.productCategories}>
          {/* Footwear Category */}
          <Link to="/products/footwear" className={styles.productCategory}>
            <img src="/footwear.png" alt="Footwear" className={styles.categoryImage} />
            <h3>Footwear</h3>
            <ul>
              <li>Safety Working Shoes</li>
              <li>Security Shoes</li>
              <li>Social Safety Shoes</li>
              <li>Boots</li>
            </ul>
          </Link>

          {/* Gloves Category */}
          <Link to="/products/gloves" className={styles.productCategory}>
            <img src="/gloves.png" alt="Gloves" className={styles.categoryImage} />
            <h3>Gloves</h3>
            <ul>
              <li>Puncture Resistant Gloves</li>
              <li>Nitrile Gloves</li>
              <li>Latex Gloves</li>
              <li>Knitted Gloves</li>
              <li>Disposable Gloves</li>
            </ul>
          </Link>

          {/* Protective Gear Category */}
          <Link to="/products/protective-gear" className={styles.productCategory}>
            <img src="/gear.png" alt="Protective Gear" className={styles.categoryImage} />
            <h3>Protective Gear</h3>
            <ul>
              <li>Safety Jackets</li>
              <li>Rain Suits</li>
              <li>Paint Suits</li>
              <li>Coveralls</li>
            </ul>
          </Link>

          {/* Head and Eye Protection Category */}
          <Link to="/products/head-eye-protection" className={styles.productCategory}>
            <img src="/head&eye.png" alt="Head and Eye Protection" className={styles.categoryImage} />
            <h3>Head, Eye and Ear Protection</h3>
            <ul>
              <li>Safety Helmets and Caps</li>
              <li>FFP1 Respirators</li>
              <li>Welding Masks</li>
              <li>Faceshields</li>
              <li>Eye Protection</li>
              <li>Ear Protection</li>
            </ul>
          </Link>

          {/* Other Safety Gear Category */}
          <Link to="/products/other-safety-gear" className={styles.productCategory}>
            <img src="/other.png" alt="Other Safety Gear" className={styles.categoryImage} />
            <h3>Other Safety Gear</h3>
            <ul>
              <li>Road Safety Gear</li>
              <li>First Aid Kits</li>
              <li>Ladders</li>
              <li>Fall Protection</li>
              <li>Disposable Wear</li>
            </ul>
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonialSlider}>
          <div className={styles.testimonial}>
            <p>"Ubuntu Safety Solutions provided top-quality products that keep our workers safe and comfortable. Their customer service is exceptional, and we always receive our orders on time."</p>
            <cite>- John Mwangi, Safety Manager</cite>
          </div>

          <div className={styles.testimonial}>
            <p>"We’ve been using their safety gear for years, and it has never let us down. The quality and comfort of their boots and gloves are outstanding!"</p>
            <cite>- Jane Ogutu, HR Director</cite>
          </div>

          <div className={styles.testimonial}>
            <p>"Thanks to Ubuntu Safety, our teams feel more secure on the job. The range of safety gear available is unbeatable."</p>
            <cite>- Mark Juma, Construction Supervisor</cite>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
