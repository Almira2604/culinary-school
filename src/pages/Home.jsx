import React from 'react'
import HeroImage from '../Components/HomePage Comp/HeroImage'
import HeroText from '../Components/HomePage Comp/HeroText'
import WelcomeText from '../Components/HomePage Comp/WelcomeText'
import WelcomeDetails from '../Components/HomePage Comp/WelcomeDetails'
import Testimonial from '../Components/HomePage Comp/Testimonial'
import TestimonialCarousel from '../Components/HomePage Comp/TestimonialCarousel'




const Home = () => {

  
  return (
    <div>
      <div className='flex lg:flex-row flex-col justify-between lg:items-start lg:space-y-0 items-center space-y-6'>
        <HeroText />
        <HeroImage />
      </div>

      <div className='lg:mt-20 mt-14 flex md:flex-row flex-col  justify-between'>
        <WelcomeText />
        <WelcomeDetails />
      </div>
      <div><Testimonial /></div>
      <div >
        <TestimonialCarousel />
      </div>
   
    </div>

  )
}

export default Home