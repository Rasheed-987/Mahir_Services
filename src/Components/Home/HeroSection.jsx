import React from 'react';
import img1 from 'public/assets/img1.jpg';
import './HeroSection.css';
// import img2 from 'src/assets/76b69a4a-fa1e-43f7-be8b-6c2aa7d2c018.jpg';
// import img3 from 'src/assets/aebf5ef0-8a27-468e-8c9d-84d2e756b22f.jpg';
// import img4 from 'src/assets/da5edcd4-7840-4c2b-a74d-643185bf372d.jpg';

// const HeroSection = () => {
  return (
    <div className="container-fluid w-100 h-75 ">

      <section className="line d-flex flex-row " >
        <div className="cl-left w-50 m-5 border-1">

            <h1 className="banner-heading">Home Maintenance Made Easy!!</h1>
            <p className="banner-details" >Connecting customers and technicians for quick, safe, and affordable bookings.</p>
                <button className='my_button'>Book Now</button>
                <img src={img1.jpg} alt="" />     
        
        </div>
        <div className="cl-right">
          {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
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
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>*/}
                      </div>
                  </section>
                </div> 
            
              );
            };
            
            export default HeroSection;
