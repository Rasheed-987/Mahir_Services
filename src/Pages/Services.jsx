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
  { name: 'AC Services', path: '/service/ac', icon: acIcon },
  { name: 'Plumber', path: '/service/plumber', icon: plumberIcon },
  { name: 'Electrician', path: '/service/electrician', icon: electricianIcon },
  { name: 'Handyman', path: '/service/handyman', icon: handymanIcon },
  { name: 'Carpenter', path: '/service/carpenter', icon: carpenterIcon },
  { name: 'Painter', path: '/service/painter', icon: painterIcon },
];

const Services = () => {
  return (
    <div className="container text-center">
      <h1 className='my-heading' >Services</h1>
      <h6 style={{color:"#9D9E9A"}} className="my-4">Choose from our wide range of services</h6>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-6 col-md-2 mx-auto my-2 service-button">
            <Link to={service.path} style={{ textDecoration: 'none', color: 'inherit' }}>
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
