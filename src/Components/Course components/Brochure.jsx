import React from 'react'
import { FaArrowUpFromBracket } from "react-icons/fa6";

const Brochure = () => {
  return (
    <div className='mt-40 bg-red-50 rounded-xl my-8 p-12 font-semibold'>
        <div>
            <p className='text-3xl font-bold'>Need a spark?</p>
             
        </div>
        <div className='lg:flex justify-between '>
              <p className='mt-4 text-gray-600'>Download CMK's brochure that contains insightful <br className='hidden lg:block' /> information about the briefs, values, culture, courses,<br className='hidden lg:block'/> questions and schedule about Culinary Institute</p>
              <div>
                  <button className='flex gap-2 bg-app-red text-white lg:p-5 p-3 m-3 '><FaArrowUpFromBracket /> <span>See brochure</span></button></div>
        </div>
    </div>
  )
}

export default Brochure