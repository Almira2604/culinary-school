import React from 'react'
import logo2 from '../../assets/logo2.svg'

const Footer = () => {
    return (
        <div>
            <div className='inline-flex flex-1'>
                <img src={logo2} alt="logo2-img" className=' w-32' />

                <p className='text-sm font-bold leading-relaxed'>Celebrity Mobile Kitchen <br /> <span className='text-gray-500 text-sm'> Culinary institute</span></p>


            </div>

            <div className='text-gray-600 mt-5'>
                <p>Whatsapp: +234 803-578-245</p>
                <p>Lagos: +243 702-660-0011</p>
                <p>Port-Hacourt: +234 702-660-0012</p>
            </div>

            

        </div>
    )
}

export default Footer