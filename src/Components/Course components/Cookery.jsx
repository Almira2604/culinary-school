import React from 'react'
import cmkChef from '../../assets/CMK_chef.jpg'
import meatBroccoli from '../../assets/Meatbroccoli.jpg'
import jollofChicken from '../../assets/jollofchicken.jpg'
import steak from '../../assets/steak.jpg'
import sushi from '../../assets/sushi.jpeg'
import CourseCard from './CourseCard'

const Cookery = () => {
    const cardData = [
        {
            id: 1,
            cardImage: cmkChef,
            cardTitle: "8320 hours professional certification of chefs",
            coursePrice: "N270,000",
            courseDuration: "1 Month",
            coursePageLink: "/courses/8320-hours-professional-certification-of-chefs"
        },
        {
            id: 2,
            cardImage: meatBroccoli,
            cardTitle: "Professional Grill",
            coursePrice: "N360,000",
            courseDuration: "3 Weeks",
            coursePageLink: "/courses/professional-grill"
        },
        {
            id: 3,
            cardImage: jollofChicken,
            cardTitle: "Nigeria Cookery",
            coursePrice: "N480,000",
            courseDuration: "1 Month",
            coursePageLink: "/courses/nigeria-cookery"
        },
        {
            id: 4,
            cardImage: meatBroccoli,
            cardTitle: "Level 1 Cookery",
            coursePrice: "N380,000",
            courseDuration: "1 Month",
            coursePageLink: "/courses/level-1-cookery"
        },
        {
            id: 5,
            cardImage: steak,
            cardTitle: "Diploma in Cookery",
            coursePrice: "N920,000",
            courseDuration: "5 Months",
            coursePageLink: "/courses/diploma-in-cookery"
        },
        {
            id: 6,
            cardImage: sushi,
            cardTitle: "Professional Cookery",
            coursePrice: "N820,000",
            courseDuration: "4 Months",
            coursePageLink: "/courses/professional-cookery"
        },
    ]
    return (
        <div>
            <div className='mt-5'>
                <p className='text-gray-600 text-xl text-right'>COOKERY</p>
                <hr className='mt-3' />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-10 font-font-play'>
                {
                    cardData.map((data) => (
                        <CourseCard
                        key={data.id} 
                        cardTitle = {data.cardTitle}
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

export default Cookery