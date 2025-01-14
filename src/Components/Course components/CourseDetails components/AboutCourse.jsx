import React from 'react'

const AboutCourse = (props) => {
    return (
        <div>
            <div className='space-y-3'>
                <h3 className='font-bold lg:text-4xl text-2xl'>About this course</h3>
                <div>
                    <p className='text-[#424242]'>{props.aboutTheCourse}</p>
                </div>
            </div>
            <div className='mt-8'>
                <h4 className='font-bold'>Requirements for enrolment:</h4>
                <div className='mt-4'>
                    {
                        props.requirements.map((req, index) => (
                            <li key={index} className='text-[#424242]'>{req}</li>
                        ))
                    }
                </div>
            </div>
            <div className='mt-8'>
                <h4 className='font-bold'>Admission fee covers the following:</h4>
                <div className='mt-4'>
                    {
                        props.admissionFee.map((fee, index) => (
                            <li key={index} className='text-[#424242]'>{fee}</li>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutCourse