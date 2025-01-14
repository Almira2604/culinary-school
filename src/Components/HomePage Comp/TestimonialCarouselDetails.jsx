import React, {useState} from 'react'
import BtnSlider from './BtnSlider'

const TestimonialCarouselDetails = (props) => {
  return (
    <div className=''>
{TestimonialCarouselDetails.map((obj, index)=>{
    return(
        <div>
            <img src={process.end.PUBLIC_URL + '/img/img${index + 1 props.cardImage}'} alt="#" />
        </div>


    )
})}
    </div>
  )
}

export default TestimonialCarouselDetails