import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import img2 from '/assets/img2.jpg'

const Home = () => {
  return (
    <div>
      <HeroSection /> 
      <img src={img2} alt="" />
    </div>
  )
}

export default Home
