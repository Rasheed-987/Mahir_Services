
import PropTypes from 'prop-types';

// Ui/Card.jsx
import React from 'react';
import './Card.css';

const ServiceCard = ({ image, name, description, price, rating, action }) => {
  return (
    <div className="bacground-image">

    <div className="service-card d-flex flex-row">
      <img src={image} alt={name} className="service-image" />
      <div className="service-details d-flex  flex-column justify-content-between">
        <div className="service-info">
          <span className="service-name">{name}</span>
          <span className="service-description">{description}</span>
          <span className="service-price">{price}</span>
        </div>
        <div className="button-info">

          <span className="service-rating">Rating: {rating}</span>
        <button className="service-action">{action}</button>
        </div>
      </div>
    </div>
    </div>
  );
};



ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  action: PropTypes.string.isRequired,
};

export default ServiceCard;
