
import PropTypes from 'prop-types';
import React  from 'react';
import './Card.css';

const ServiceCard = ({ image, name, description, price,handleDecrement,handleIncrement,count }) => {

  return (
    <div className="bacground-image">

    <div className="service-card d-flex flex-row">
      <img src={image} alt={name} className="service-image" />
      <div className="service-details d-flex  flex-column justify-content-between">
        <div className="service-info">
          <span className="service-name">{name}</span>
          <span className="service-description">{description}</span>
          <span className="service-price">{`Rs: ${price}` }</span>
        </div>
        <div className="button-info">

        <div className="counter-container">
      <button className="counter-button" onClick={handleDecrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={handleIncrement}>+</button>
    </div>
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
