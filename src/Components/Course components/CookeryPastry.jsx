import React from 'react'
import studentcmk from '../../assets/studentcmk.jpg'
import studentchef from '../../assets/studentchef.jpg'
import prochef from '../../assets/prochef.jpg'
import CourseCard from './CourseCard'

const CookeryPastry = () => {
 const cardData = [
           {
                   id: 1,
                   cardImage: studentcmk,
                   cardTitle: "Diploma In Culinary Arts",
                   coursePrice: "N2,700,000",
                   courseDuration: "9 Month",
                  coursePageLink: "/diploma-in-culinary-art"
               },

        {
            id: 2,
            cardImage: studentchef,
            cardTitle: "Professional Culinary Art",
            coursePrice: "N1,550,000",
            courseDuration: "6 Month",
          coursePageLink: "/professional-culinary-art"
        },

        {
            id: 3,
            cardImage: prochef,
            cardTitle: "Pro Chef",
            coursePrice: "N750,000",
            courseDuration: "3 Month",
          coursePageLink: "/pro-chef"
        },
    ]

  return (
    <div>
      <div className='mt-5'>
        <p className='text-gray-600 text-xl text-right'>COOKERY&PASTRY</p>
        <hr className='mt-3' />
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-10 font-font-play'>
        {
          cardData.map((data) => (
            <CourseCard
              key={data.id}
              cardTitle={data.cardTitle}
              cardImage={data.cardImage}
              courseDuration={data.courseDuration}
              coursePageLink={data.coursePageLink}
              coursePrice={data.coursePrice}
            />
          ))
        }
      </div>
    </div>
  )
}

export default CookeryPastry