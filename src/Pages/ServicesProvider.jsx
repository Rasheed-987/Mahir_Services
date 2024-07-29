import React, { useState } from 'react';
import acIcon from '../assets/ac.svg';
import plumberIcon from '../assets/plumber.svg';
import electricianIcon from '../assets/electrician.svg';
import handymanIcon from '../assets/handyman.svg';
import carpenterIcon from '../assets/carpenter.svg';
import painterIcon from '../assets/painter.svg';
import './ServicesProvider.css';

export default function ServicesProvider() {
  const services = [
    { name: 'AC Services', icon: acIcon },
    { name: 'Plumber', icon: plumberIcon },
    { name: 'Electrician', icon: electricianIcon },
    { name: 'Handyman', icon: handymanIcon },
    { name: 'Carpenter', icon: carpenterIcon },
    { name: 'Painter', icon: painterIcon }
  ];
  
  const [activeInput, setActiveInput] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleClick = (service) => {
    if (activeInput === service.name) {
      setActiveInput('');
    } else {
      setActiveInput(service.name);
      setInputValue('');
    }
  };

  return (
    <div className='main-container'>
      {services.map((service, index) => (
        <div className='service-container' key={index}>
          <div className='service-header d-flex' onClick={() => handleClick(service)}>
            <h4>{service.name}</h4>
            <img src={service.icon} alt={service.name} className="service-icon" />
          </div>
          {activeInput === service.name && (
          <div className="input-container">


           <input
              type='text'
              value={inputValue}
              className='service-input'
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Enter details for ${service.name}`}
              />
             
              <button className='submit-button' >Submit</button>
              </div>
                )        }
        </div>
      ))}
    </div>
  );
}
