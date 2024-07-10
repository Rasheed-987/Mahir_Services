import React from 'react'
 import HeroSection from '../Components/Home/HeroSection'
 import Services from './Services'
 import Footer from '../Components/Footer'
//  import WhyChooseUs from '../Components/Home/WhyChooseUs'
const Home = () => {
  return (
    <div>
      <HeroSection/>
    <Services/>
    {/* <WhyChooseUs/> */}
    <Footer/>
    </div>
  )
}

export default Home
