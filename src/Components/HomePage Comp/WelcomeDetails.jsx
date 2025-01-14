import React from 'react'

const WelcomeDetails = () => {
  return (
    <div className='lg:w-[50%] w-full lg:mt-0 mt-4'>
      <p className=''>
        We know what young, aspirant chefs and entrepreneurs need to succeed in the ever-expanding
         global hospitality environment. CMK's state-of-the-art institution are fully equipped with 
         training kitchens, administration, air-conditioned office for relaxation:
      </p>
      <div className='flex lg:space-x-32 space-x-10 mt-5'>
        <div>
          <p className='text-gray-600 text-3xl font-bold'> 01. </p>
          <p className='text-gray-600 lg:text-xl text-lg font-bold'>Excellent Centre</p>
          <p>LAGOS</p>
        </div>

        <div>
          <p className='text-gray-600 text-3xl font-bold'>  02.</p>
          <p className='text-gray-600 lg:text-xl text-lg font-bold'>Creative Centre</p>
          <p>PORT HARCOURT</p>
        </div>
      </div>

    </div>



  )
}

export default WelcomeDetails