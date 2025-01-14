import React from 'react'
import creamhand from '../../assets/creamhand.jpg'
import creamspoon from '../../assets/creamspoon.jpg'

const HeroImage = () => {
    return (
        <div className='hidden lg:block'>
            <img src={creamhand} alt="cream-hand" className='lg:w-[15rem] lg:h-[15rem] w-[8rem] h-[10rem] absolute' />
            <img src={creamspoon} alt="cream-spoon" className='lg:w-[15rem] lg:h-[15rem] w-[8rem] h-[10rem] relative lg:top-32 lg:right-32' />
        </div>
    )
}

export default HeroImage