import React from 'react'
import CourseTime from './CourseTime'
import AboutCourse from './AboutCourse'

const CourseDetails = (props) => {
    
    return (
        <div className='mt-6'>
            <h1 className='lg:text-5xl text-2xl text-dark-blue font-font-play font-bold mb-10'>Course Details</h1>
            <div className='relative'>
                <img src={props.courseImg} alt="img" className='lg:h-[30rem] w-full' />
                <div className='bg-black/40 absolute inset-0 ml-auto backdrop-blur-sm text-center w-1/2 flex justify-center items-center'>
                    <p className='text-white font-bold font-font-play lg:text-5xl text-xl capitalize'>{props.imageText}</p>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col-reverse lg:space-x-10 my-20'>
                <CourseTime
                    classTime={props.classTime}
                    locations={props.locations}
                    price={props.price}
                />
                <AboutCourse
                    aboutTheCourse={props.aboutTheCourse}
                    requirements={props.requirements}
                    admissionFee={props.admissionFee}
                />
            </div>
        </div>
    )
}

export default CourseDetails