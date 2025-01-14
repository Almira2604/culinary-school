import React from 'react'
import CHEF1 from '../../assets/chef1.jpg'

const Instructor2 = () => {
  return (
    <div className='mt-32'>
          <img src={CHEF1} alt="chef1-img" className='w-[20rem] h-[15rem] mt-10' />
          <div className='ml-4'>
              <p className=' text-dark-blue text-xl mt-6 font-semibold font-serif'>Chef Diya</p>
              <p className='text-dark-blue text-base '>PASTRY CHEF</p>
              <p className='mt-6 text-sm text-gray-600'>
                  Amarachi Anselyn was born in the <br className='hidden lg:block' /> Republic of Benin. A passionate self-<br className='hidden lg:block' />trained pastry chef with high intuition for <br className='hidden lg:block' /> desserts. Living in a French-speaking <br className='hidden lg:block' /> country, brad fascinated her love for <br className='hidden lg:block' /> pastry. Once a student but now head of <br className='hidden lg:block' /> pastisserie department at CMK culinary. 
              </p>
          </div>
    </div>
  )
}

export default Instructor2