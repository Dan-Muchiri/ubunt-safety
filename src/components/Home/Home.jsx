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

      <section className={styles.services}>
  <h2>Our Services</h2>
  <p>We offer a wide range of services to ensure the safety and well-being of your team and business:</p>
  <div className={styles.serviceList}>
    <div className={styles.serviceItem}>
      <i className="fas fa-search fa-2x"></i> {/* Icon for Health and Safety Audits */}
      <h3>Health and Safety Audits</h3>
      <p>Comprehensive assessments to identify and mitigate risks, ensuring a safe working environment.</p>
    </div>
    <div className={styles.serviceItem}>
      <i className="fas fa-chalkboard-teacher fa-2x"></i> {/* Icon for Training Programs */}
      <h3>Training Programs</h3>
      <p>Customized training sessions on various safety topics, designed to educate and empower your staff.</p>
    </div>
    <div className={styles.serviceItem}>
      <i className="fas fa-exclamation-triangle fa-2x"></i> {/* Icon for Emergency Planning */}
      <h3>Emergency Planning</h3>
      <p>Development and implementation of emergency response plans, so your team is prepared for any situation.</p>
    </div>
    <div className={styles.serviceItem}>
      <i className="fas fa-leaf fa-2x"></i> {/* Icon for Environmental Impact Assessments */}
      <h3>Environmental Impact Assessments</h3>
      <p>Evaluations to ensure compliance with environmental regulations and mitigate environmental risks.</p>
    </div>
    <div className={styles.serviceItem}>
      <i className="fas fa-fire fa-2x"></i> {/* Icon for Fire Safety */}
      <h3>Fire Safety</h3>
      <p>Fire risk assessments and protection plans, ensuring the safety of your team and business from fire hazards.</p>
    </div>
  </div>
</section>


      {/* Product Overview Section */}
      <section className={styles.productOverview}>
        <h2>Explore Our Products</h2>
        <div className={styles.productCategories}>
          {/* Footwear Category */}
          <Link to="/products" className={styles.productCategory}>
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
          <Link to="/products" className={styles.productCategory}>
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
          <Link to="/products" className={styles.productCategory}>
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
          <Link to="/products" className={styles.productCategory}>
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

          {/* Safety Signages Category */}
          <Link to="/products" className={styles.productCategory}>
            <img src="/safetysigns.webp" alt="Safety Signages" className={styles.categoryImage} />
            <h3>Safety Signages</h3>
            <ul>
              <li>Labels</li>
              <li>Road and Traffic Signs</li>
              <li>Construction Signages</li>
              <li>Hazard Warning Signs</li>
              <li>Safety Posters</li>
            </ul>
          </Link>

          {/* Other Safety Gear Category */}
          <Link to="/products" className={styles.productCategory}>
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
