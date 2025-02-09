import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { serviceData } from "./ServicesData"; 
import styles from "./ServicesStyles.module.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [selectedServiceId, setSelectedServiceId] = useState(parseInt(serviceId));

  useEffect(() => {
    setSelectedServiceId(parseInt(serviceId));
  }, [serviceId]);

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

  const currentService = serviceData[selectedServiceId];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <select 
          className={styles.dropdown} 
          value={selectedServiceId} 
          onChange={(e) => setSelectedServiceId(parseInt(e.target.value))}
        >
          {Object.values(serviceData).map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </nav>

      <div className={styles.content}>
        <h1 className={styles.title}>{currentService.name}</h1>
        {renderContent(currentService.content)}
      </div>
    </div>
  );
};

export default ServiceDetail;
