import React from 'react'
import meatBroccoli from '../assets/Meatbroccoli.jpg'
import CourseDetails from '../Components/Course components/CourseDetails components/CourseDetails'

const ProfessionalGrill = () => {

  
    const courseData = [
      {
        courseImg: meatBroccoli,
        imageText: "Professional Grill Program",
        classTime: [
          {
            period: "Morning",
            time: "9:00AM - 1:00PM"
          },
          {
            period: "Afternoon",
            time: "1:00PM - 4:30PM"
          },
          {
            period: "Evening",
            time: "5:00PM - 7:30PM"
          },
        ],
        locations: [
          {
            center: "Excellent Centre",
            state: "Lagos"
          },
          {
            center: "Creative Centre",
            state: "Port Harcourt"
          }
        ],
        price: "270,000",
        aboutTheCourse: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
        est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Curabitur sed augue consequat, auctor ipsum ac, consectetur odio.
 Aenean eu urna tempor, semper arcu id, posuere magna.
Pellentesque feugiat elit eget ligula finibus, sed ullamcorper arcu molestie.
 Nunc ac purus dignissim, vestibulum leo non, finibus justo.
 Donec a leo posuere, tincidunt ligula at, finibus nib  Nullam sit amet sapien at nulla maximus facilisis at sed dolor.`,
        requirements: [
          "Resume", "Passport photo (2 copies)",
          "Application letter",
          "Any proof of prior education",
          "Admission fee N10,000"
        ], 
        admissionFee: [
          "Admission letter.",
          "Complete chef gear.",
          "Course Handouts.",
          "School provides all materials needed for training except during student's test and exam."
        ],
        certification: "testing"
      }
    ]
  

  return (
    <div className='min-h-screen'>
      {
        courseData.map((data) => (
          <CourseDetails
            key={data.id}
            courseImg={data.courseImg}
            imageText={data.imageText}
            classTime={data.classTime}
            locations={data.locations}
            price={data.price}
            aboutTheCourse={data.aboutTheCourse}
            requirements={data.requirements}
            admissionFee={data.admissionFee}
          />
        ))
      }
    </div>
  )
}

export default ProfessionalGrill