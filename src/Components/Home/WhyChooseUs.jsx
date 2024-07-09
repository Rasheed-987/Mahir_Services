import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faClock, faHeadset, faDollarSign, faShieldAlt, faTruck, faHandshake } from '@fortawesome/free-solid-svg-icons';
import img5 from '../../assets/double-iphone.webp';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="container-fluid my-5">
      <div className='line d-flex'>
        <div className='left w-50 my-4'>
          <img src={img5} alt="Double iPhone" className="responsive-image" />
        </div>
        <div className="right w-50">
          <h2>Why Choose Us</h2>
          <ul>
            <li><FontAwesomeIcon icon={faCheckSquare} /> Connects you to <strong>Verified and Trained Technicians</strong>.</li>
            <li><FontAwesomeIcon icon={faClock} /> <strong>Saves Your Time</strong> through an easy and efficient booking process.</li>
            <li><FontAwesomeIcon icon={faHeadset} /> Offers <strong>Impeccable Customer Support</strong>.</li>
            <li><FontAwesomeIcon icon={faDollarSign} /> Ensures <strong>Cost-effectiveness</strong>.</li>
            <li><FontAwesomeIcon icon={faShieldAlt} /> Provides   <strong>  High-quality, Reliability, and Safety</strong>.</li>
            <li><FontAwesomeIcon icon={faTruck} /> Promises <strong>Doorstep Services</strong>, saves travelling costs.</li>
            <li><FontAwesomeIcon icon={faHandshake} /> Guarantees <strong>Secure Transactions</strong>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
