import React from 'react';
import './HeroSection.css';
import img1 from '../../assets/img1.jpg';
 import img2 from '../../assets/img2.jpg' ;
  import img3 from '../../assets/img3.jpg';
   import img4 from '../../assets/img4.jpg';

 const HeroSection = () => {
  return (
    <div className="container-fluid w-100 h-75 ">

      <section className="line d-flex flex-row " >
        <div className="cl-left col-md-6 col-12 w-50 m-5 border-1">

            <h1 className="banner-heading">Home Maintenance Made Easy!!</h1>
            <p className="banner-details" >Connecting customers and technicians for quick, safe, and affordable bookings.</p>
                <button className='my_button'>Book Now</button>
        
        </div>
        <div className="col-md-6 col-12">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to=""></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to=""></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to=""></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-30" src={img1} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-30" src={img2} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-30" src={img3} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-30" src={img4} alt="Fourth slide" />
              </div>
            </div>
                      </div>
                </div>
                  </section>
                </div> 
            
  )
            };
            
            export default HeroSection;
