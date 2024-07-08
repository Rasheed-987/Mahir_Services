import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img5 from '../../assets/double-iphone.webp';
const WhyChooseUs = () => {
  return (

<div className="container-fluid my-5">
<div className='line d-flex  '>
  <div className='left w-50 my-4' >
    <img src={img5} alt="" />
  </div>
  <div className="right">
    <h2> Why Choose Us</h2>

    
        <li><FontAwesomeIcon icon="fa-thin fa-square-check" />this  </li>
        <li><FontAwesomeIcon icon="fa-thin fa-clock" /> new </li>
        <li><FontAwesomeIcon icon="fa-thin fa-award" />da</li>
        <li><FontAwesomeIcon icon="fa-thin fa-money-check-dollar" /></li>
        <li><FontAwesomeIcon icon="fa-thin fa-handshake" /></li>

    

  </div>
</div>





</div>



  )
}

export default WhyChooseUs
