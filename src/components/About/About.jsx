import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutStyles.module.css";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Your Partner in Safety and Environmental Solutions</h1>
          <p>Innovative. Effective. Trusted since 2020.</p>
          <Link to="/products" className={styles.ctaButton}>Shop with us</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={styles.aboutSection}>
        <h2>About Ubuntu Safety Solution</h2>
        <p>
          Founded in 2020, Ubuntu Safety Solution has grown to become a trusted
          name in the safety industry. Our team of experienced professionals is
          dedicated to delivering high-quality safety services tailored to meet
          the unique needs of each client.
        </p>
        <p>
          Our mission is to ensure the safety and well-being of employees,
          clients, and the community through innovative and effective safety
          practices.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className={styles.visionMissionSection}>
        <h2>Vision and Mission</h2>
        <div className={styles.visionMissionContent}>
          <div className={styles.vision}>
            <h3>Vision</h3>
            <p>
              To be the foremost provider of safety solutions, creating safer
              workplaces and communities.
            </p>
          </div>
          <div className={styles.mission}>
            <h3>Mission</h3>
            <p>
              To empower organizations with the knowledge and tools necessary to
              maintain the highest standards of health, safety, and
              environmental protection.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUsSection}>
        <h2>Why Choose Us?</h2>
        <ul className={styles.benefitsList}>
          <li>Expertise in comprehensive safety and environmental solutions.</li>
          <li>Experienced professionals dedicated to high-quality service.</li>
          <li>Customizable solutions tailored to client needs.</li>
          <li>Proven results and trusted reputation since 2020.</li>
          <li>Commitment to community well-being.</li>
        </ul>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Health and Safety Audits</h3>
            <p>Comprehensive assessments to identify and mitigate risks.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Training Programs</h3>
            <p>Customized training sessions on various safety topics.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Emergency Planning</h3>
            <p>
              Development and implementation of emergency response plans.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Environmental Impact Assessments</h3>
            <p>
              Evaluations to ensure compliance with environmental regulations.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Fire Safety</h3>
            <p>Fire risk assessments and protection plans.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Build a Safer Future?</h2>
        <p>Contact us today to learn how we can assist your organization.</p>
        <Link to="/contact" className={styles.ctaButton}>Get in Touch</Link>
      </section>
    </div>
  );
};

export default AboutUsPage;
