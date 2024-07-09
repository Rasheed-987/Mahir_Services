import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/" className="nav-link px-2 ">Home</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link px-2 ">Features</Link></li>
          <li className="nav-item"><Link to="/WhyChooseUs" className="nav-link px-2 ">FAQs</Link></li>
          <li className="nav-item"><Link to="/About" className="nav-link px-2 ">About</Link></li>
        </ul>
        <p className="text-center text-body-secondary">&copy; 2024 Mahir Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;
