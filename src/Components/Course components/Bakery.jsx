import React from 'react'
import cookies from '../../assets/cookies.jpg'
import Patisserie from '../../assets/Patisserie.jpeg'
import chocolatePastry from '../../assets/chocolatepastry .jpg'
import CourseCard from './CourseCard'

const Bakery = () => {
    const cardData = [
           {
                   id: 1,
                   cardImage: cookies,
                   cardTitle: "Level 1 Baking & Pastry",
                   coursePrice: "N390,000",
                   courseDuration: "1 Month",
            coursePageLink: "/level-1-baking-and-pastry"
               },

        {
            id: 2,
            cardImage: Patisserie,
            cardTitle: "Diploma patisserie",
            coursePrice: "N950,000",
            courseDuration: "5 Month",
            coursePageLink: "/diploma-patisserie"
        },

        {
            id: 3,
            cardImage: chocolatePastry,
            cardTitle: "Professional Bakery & Pastry",
            coursePrice: "N870,000",
            courseDuration: "4 Month",
            coursePageLink: "/professional-bakery-and-pastry"
        },
    ]
  return (
      <div>
          <div className='mt-5'>
              <p className='text-gray-600 text-xl text-right'>BAKERY</p>
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

export default Bakery