import React, { useState } from "react";
import styles from "./ContactStyles.module.css";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  const [formValid, setFormValid] = useState(true);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
    service: false,
    projectDetails: false
  });

  const handleFocus = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const isValid = form.checkValidity();
    setFormValid(isValid);

    if (isValid) {
      form.submit();
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* Contact Us Form */}
      <section id="contact" className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.titleBlock}>
              <h2>Get In Touch</h2>
              <p className={styles.leftP}>We’d love to hear from you!</p>
              <p className={styles.leftP1}>Whether you’re looking for advice or a custom solution, we’re here to help.</p>
            </div>
          </div>

          <div className={styles.right}>
            <form
              action=""
              method="post"
              className={styles.formContainer}
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Name<span className={styles.required}>*</span></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  className={touchedFields.name && !document.getElementById('name').value ? styles.invalid : ''}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email<span className={styles.required}>*</span></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  className={touchedFields.email && !document.getElementById('email').value ? styles.invalid : ''}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number<span className={styles.required}>*</span></label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  onFocus={() => handleFocus('phone')}
                  onBlur={() => handleBlur('phone')}
                  className={touchedFields.phone && !document.getElementById('phone').value ? styles.invalid : ''}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">What service are you looking for?<span className={styles.required}>*</span></label>
                <select
                  name="service"
                  id="service"
                  required
                  onFocus={() => handleFocus('service')}
                  onBlur={() => handleBlur('service')}
                  className={touchedFields.service && !document.getElementById('service').value ? styles.invalid : ''}
                >
                  <option value="" disabled selected>Please Select</option>
                  <option value="Health and Safety Audits">Health and Safety Audits</option>
                  <option value="Safety Product">Safety Product</option>
                  <option value="Training Programs">Training Programs</option>
                  <option value="Emergency Planning">Emergency Planning</option>
                  <option value="Environmental Impact Assessments">Environmental Impact Assessments</option>
                  <option value="Fire Safety">Fire Safety</option>
                  <option value="Other">Other</option>
                </select>
              </div>


              <div className={styles.formGroup}>
                <label htmlFor="projectDetails">How can we help you:<span className={styles.required}>*</span></label>
                <textarea
                  name="projectDetails"
                  id="projectDetails"
                  required
                  onFocus={() => handleFocus('projectDetails')}
                  onBlur={() => handleBlur('projectDetails')}
                  className={touchedFields.projectDetails && !document.getElementById('projectDetails').value ? styles.invalid : ''}
                ></textarea>
              </div>

              <input className={styles.subButton} type="submit" value="Submit" />
              {!formValid && <p className={styles.errorMessage}>Please fill out the required fields.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
