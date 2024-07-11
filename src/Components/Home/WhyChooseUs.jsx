import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faClock, faHeadset, faDollarSign, faShieldAlt, faTruck, faHandshake } from '@fortawesome/free-solid-svg-icons';
import img5 from '../../assets/double-iphone.webp';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="container-fluid my-5">
      <div className='line d-flex'>
        <div className='left my-4'>
          <img src={img5} alt="Double iPhone" className="responsive-image" />
        </div>
        <div className="right">
          <h2>Why Choose Us</h2>
          <ul>
            <li><FontAwesomeIcon icon={faCheckSquare} className='fa-icons' /> <h5>Connects you to Verified and Trained Technicians.</h5></li>
            <li><FontAwesomeIcon icon={faClock} className='fa-icons' /> <h5>Saves Your Time through an easy and efficient booking process.</h5></li>
            <li><FontAwesomeIcon icon={faHeadset} className='fa-icons' /> <h5>Offers Impeccable Customer Support.</h5></li>
            <li><FontAwesomeIcon icon={faDollarSign} className='fa-icons' /> <h5>Ensures Cost-effectiveness.</h5></li>
            <li><FontAwesomeIcon icon={faShieldAlt} className='fa-icons' /> <h5>Provides High-quality, Reliability, and Safety.</h5></li>
            <li><FontAwesomeIcon icon={faTruck} className='fa-icons' /> <h5>Promises Doorstep Services, saves travelling costs.</h5></li>
            <li><FontAwesomeIcon icon={faHandshake} className='fa-icons' /> <h5>Guarantees Secure Transactions.</h5></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
