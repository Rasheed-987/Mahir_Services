import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import acIcon from '../assets/ac.svg';
import plumberIcon from '../assets/plumber.svg';
import electricianIcon from '../assets/electrician.svg';
import handymanIcon from '../assets/handyman.svg';
import carpenterIcon from '../assets/carpenter.svg';
import painterIcon from '../assets/painter.svg';

const services = [
  { name: 'AC Services', path: '../Components/Services/Ac', icon: acIcon },
  { name: 'Plumber', path: '../Components/Services/Plumber', icon: plumberIcon },
  { name: 'Electrician', path: '../Components/Services/Electrician', icon: electricianIcon },
  { name: 'Handyman', path: '../Components/Services/Handyman', icon: handymanIcon },
  { name: 'Carpenter', path: '../Components/Services/Carpenter', icon: carpenterIcon },
  { name: 'Painter', path: '../Components/Services/Painter', icon: painterIcon },
];

const Services = () => {
  return (
    <div className="container text-center">
      <h2 className="my-4">Choose from our wide range of services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-6 col-md-2 mx-auto my-2 service-button">
            <Link to={service.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              {console.log(service.path)}
              <img src={service.icon} alt={service.name} className="service-icon" />
              <p>{service.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
