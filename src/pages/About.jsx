import React from 'react'
import AboutHeroText from '../Components/AboutPage Comp/AboutHeroText'
import AboutHeroImg from '..//Components/AboutPage Comp/AboutHeroImg'
import WhatWeDoImg from '../Components/AboutPage Comp/WhatWeDoImg'
import WhatWeDoTextImg from '../Components/AboutPage Comp/WhatWeDoTextImg'
import Vision from '../Components/AboutPage Comp/Vision'
import Instructors from '../Components/AboutPage Comp/Instructors'
import Instructor2 from '../Components/AboutPage Comp/Instructor2'
import FrequentQuestions from '../Components/AboutPage Comp/FrequentQuestions'
import FrequentTouchDown from '../Components/AboutPage Comp/FrequetAccordion'

const About = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <AboutHeroText />
        <AboutHeroImg />
      </div>
      
      <div className='lg:flex lg:justify-center lg:space-x-20'>
        <WhatWeDoImg />
        <WhatWeDoTextImg />
      </div>
      <div>
        <Vision />
      </div>
      <div className='lg:flex'>
        <Instructors />
        <Instructor2 />
      </div>
      <div className='md:flex justify-between mt-20 my-10'>
        <FrequentQuestions />
        <FrequentTouchDown />
      </div>
    </div>
  )
}

export default About