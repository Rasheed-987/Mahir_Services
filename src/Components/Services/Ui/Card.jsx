import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ image, name, description, price, rating, action }) => {
  return (
    <div className="service-card">
      <img src={image} alt={name} className="service-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>Rating: <span className="rating">{rating}</span></p>
      <button className="action-button">{action}</button>
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
