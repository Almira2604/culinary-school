import React from 'react'
import creamhand from '../../assets/creamhand.jpg'
import creamspoon from '../../assets/creamspoon.jpg'

const WhatWeDoImg = () => {
  return (
    <div>
          <div className='mt-20 hidden lg:block'>
    <img src={creamspoon} alt="creamspoon-img" className='rounded-2xl h-[18rem] -rotate-12' />
    <img src={creamhand} alt="creamhand-img" className='rounded-2xl h-[18rem] rotate-12' />
</div>
    </div>
  )
}

export default WhatWeDoImg