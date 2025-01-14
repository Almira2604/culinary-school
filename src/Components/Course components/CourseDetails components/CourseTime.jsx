import React from 'react'

const CourseTime = (props) => {
    return (
        <div className='bg-[#f9fafb] w-full py-8 px-8 lg:mt-0 mt-10'>
            <div className='space-y-1'>
                <h4 className='font-bold'>Class Time</h4>
                <div className='text-[#5c5b5b]'>
                    {
                        props.classTime.map((timeData, index) => (
                            <div
                                key={index}
                                className='flex justify-between'>
                                <p>
                                    {timeData.period}
                                </p>
                                <p className='text-end'>
                                    {timeData.time}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-8 space-y-1'>
                <h4 className='font-bold'>Locations</h4>
                <div className='text-[#5c5b5b]'>
                    {
                        props.locations.map((locationData, index) => (
                            <p key={index} className='space-x-3'>
                                <span>{locationData.center}</span>
                                <span>-</span>
                                <span>{locationData.state}</span>
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h4 className='text-sm uppercase'>Price</h4>
                <p className='font-semibold text-3xl'>N{props.price}</p>
            </div>
            <button className='mt-10 bg-app-red text-white w-full py-5 font-semibold uppercase hover:bg-app-red/90'>Enroll Now</button>
        </div>
    )
}

export default CourseTime