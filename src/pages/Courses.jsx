import React from 'react'
import CourseHeroText from '../Components/Course components/CourseHeroText'
import Cookery from '../Components/Course components/Cookery'
import Bakery from '../Components/Course components/Bakery'
import Brochure from '../Components/Course components/Brochure'
import CookeryPastry from '../Components/Course components/CookeryPastry'


const Courses = () => {
  return (
    <div className='min-h-screen'>
      <div> 
        <CourseHeroText />
        </div>
<div>
<Cookery />
</div>

<div>
  <Bakery />
</div>

<div>
  <CookeryPastry />
</div>

<div>
  <Brochure />
</div>
        
    </div>
  )
}

export default Courses