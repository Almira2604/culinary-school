import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    return (
        <div className='bg-white  min-h-[38rem]  drop-shadow-xl p-3 rounded-lg relative'>
            <div>
                <img src={props.cardImage} alt="card-img" className='w-full h-[18rem] rounded-lg drop-shadow-lg' />
            </div>
            <div className='mt-8'>
                <h3 className='font-bold text-3xl text-dark-blue capitalize'>{props.cardTitle}</h3>
                <div className='flex space-x-10 mt-5'>
                    <div>
                        <p className='text-sm'>PRICE</p>
                        <p className='font-semibold text-xl'>{props.coursePrice}</p>
                    </div>
                    <div>
                        <p className='text-sm'>DURATION</p>
                        <p className='font-semibold text-xl'>{props.courseDuration}</p>
                    </div>
                </div>
                <div className='pt-10 absolute bottom-2 right-5'>
                    <Link to={props.coursePageLink}>
                        <span className='flex justify-end text-app-red items-center gap-2 text-lg'>
                            <span>Learn more</span>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard