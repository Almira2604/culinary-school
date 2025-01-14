import React from 'react'
import { Link } from 'react-router-dom'


const HeroText = () => {
    return (
        <div className='space-y-14'>
            <div className='text-dark-blue space-y-6'>
                <h1 className='font-extrabold lg:text-8xl text-5xl font-font-play'>
                    Professional <br className='hidden lg:block'/> Culinary School
                </h1>
                <p className='text-xl lg:w-1/2 w-full'>
                    Learn Culinary arts from an award winning culinary
                    institution. We teach every kind of culinary arts
                    to people like you
                </p>
            </div>
            <button type='button' className='bg-app-red text-slate-50 px-14 py-5 font-semibold'>
                <Link to="/courses">View courses</Link>
            </button>

        </div>
    )
}

export default HeroText