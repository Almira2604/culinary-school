import React from 'react'
import CHEF2  from '../../assets/chef2.jpeg'

const Instructors = () => {
  return (
      <div className='lg:ml-20'>
        <div>
              <p className='font-font-play text-dark-blue lg:text-5xl text-3xl font-bold mt-20'>Meet your instructors</p>
        </div>
        <div>
            <img src={CHEF2} alt="chef2-img"  className='w-[20rem] h-[15rem] mt-10'/>
           <div className='ml-4'>
                  <p className=' text-dark-blue text-xl mt-6 font-semibold font-serif'>Chef Anselyn</p>
                  <p className='text-dark-blue text-base '>CUISINE/PASTRY CHEF</p>
                  <p className='mt-6 text-sm text-gray-600'>Chef Anselyn aka Chef Ans is certified by <br className='hidden lg:block' /> America Culinary Fedration, Gastronomic <br className='hidden lg:block' /> Culinary School Miami, USA, and RAW <br className='hidden lg:block' /> culinary academy south Africa. He is a <br className='hidden lg:block' /> Recipe Developer, Kitchen consultant,<br className='hidden lg:block' /> Cooking Show judge, and culinary content <br className='hidden lg:block' /> creator. He is also the organizer and <br className='hidden lg:block' /> conveyor of Culinary Over Sucide (C0S) <br className='hidden lg:block' /> and AprilFood.</p>
           </div>
        </div> 
    </div>
  )
}

export default Instructors