import React from 'react';
import './HeroSection.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="container-fluid w-100 h-75 p-0">
      <section className="line d-flex flex-row flex-wrap">
        <div className="cl-left col-md-6 col-12 m-0 p-3 d-flex flex-column justify-content-center align-items-center">
          <h1 className="banner-heading">Home Maintenance Made Easy!!</h1>
          <p className="banner-details">
            Connecting customers and technicians for quick, safe, and affordable bookings.
          </p>
          <div className='d-flex justify-content-md-start justify-content-center'>
            <Link to="/Services" className="my_button btn btn-primary" style={{ color: 'white' }}>
              Book Now
            </Link>
          </div>
        </div>
        <div className="cl-right col-md-6 col-12 m-0 p-3">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={img1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img2} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img3} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={img4} alt="Fourth slide" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
