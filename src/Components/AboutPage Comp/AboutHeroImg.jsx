import React from 'react'
import pancakes from '../../assets/pancakes.jpg'
import pastry1 from '../../assets/pastry1.jpg'
import student from '../../assets/student.jpg'
import student2 from  '../../assets/students2.jpg'



const AboutHeroImg = () => {
  return (
    <div className='mt-28 hidden lg:block'>
         <div className='flex space-x-7'>
          <img src={pancakes} alt="pancakes-img" className='w-[10rem] h-[10rem] rounded-lg' />
          <img src={student} alt="student-img" className='w-[25rem] h-[15rem] rounded-lg' />
         </div>
         <div className='flex space-x-7'>
          <img src={pastry1} alt="pastry1-img" className='w-[10rem] h-[20rem] rounded-lg' />
          <img src={student2} alt="student2-img" className='w-[25rem] h-[15rem] rounded-lg mt-10' />
         </div>
    </div>
  )
}

export default AboutHeroImg