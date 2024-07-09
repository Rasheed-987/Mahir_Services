import React from 'react';
import './Ui/Card.css';
import ServiceCard from './Ui/Card';

const ServiceList = ({ services }) => {
  return (
    <div className="services-list d-flex flex-wrap">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          image={service.image}
          name={service.name}
          description={service.description}
          price={service.price}
          rating={service.rating}
          action={service.action}
        />
      ))}
    </div>
  );
};

export default ServiceList;
