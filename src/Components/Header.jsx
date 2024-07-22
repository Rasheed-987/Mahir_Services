import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/mahir_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({user,onLogout}) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       
        <Link className="navbar-brand" to="/"   >     <img src={logo} height="50px"  alt="" />               ahir</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faUser}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
          
        {
          user?(
            <>
             <li className='nav-item'></li>
          <li className="nav-item" id='new'>
            <Link className="nav-link"  onClick={onLogout}>Logout</Link>
            </li>
            <li className='nva-item ' id='new1'>
            <FontAwesomeIcon icon={faUser}/>
            </li>
           </>
           ):(<>
            <li className="nav-item">
            <Link className="nav-link"  to="/SignIn">SignIn</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/SignUp">SignUp</Link>
          </li>
          </>)
        }

          </ul>
        </div>
      </div>
    </nav>
        </>
  );
};

export default Header;
