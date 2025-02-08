import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to capture URL params
import { serviceData } from "./ServicesData"; 
import styles from "./ServicesStyles.module.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();  // Destructure the serviceId from URL params
  const [selectedServiceId, setSelectedServiceId] = useState(parseInt(serviceId));  // Initialize with the URL param

  // Ensure the service ID changes when the URL changes
  useEffect(() => {
    setSelectedServiceId(parseInt(serviceId)); 
  }, [serviceId]);

  // Function to handle dynamic rendering based on content type
  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "paragraph":
          return <p className={styles.paragraph} key={index}>{item.text}</p>;
        case "section-title":
          return <h2 className={styles.sectionTitle} key={index}>{item.text}</h2>;
        case "list":
          return (
            <ul className={styles.list} key={index}>
              {item.items.map((listItem, idx) => (
                <li className={styles.listItem} key={idx}>{listItem}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  // Get the selected service data based on the ID
  const currentService = serviceData[selectedServiceId];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {/* Dynamically create navigation for all services */}
        {Object.values(serviceData).map((service) => (
          <button 
            key={service.id} 
            onClick={() => setSelectedServiceId(service.id)}  // Manually change service on click
            className={styles.navButton}
          >
            {service.name}
          </button>
        ))}
      </nav>

      <div className={styles.content}>
        <h1 className={styles.title}>{currentService.name}</h1>
        {renderContent(currentService.content)}  {/* Render content dynamically */}
      </div>
    </div>
  );
};

export default ServiceDetail;
