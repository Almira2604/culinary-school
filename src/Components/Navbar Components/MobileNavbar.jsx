import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const MobileNavbar = ({ setIsNavbarOpen, navItems }) => {
return (
    <div className='lg:hidden block fixed  w-full z-50 inset-0 bg-zinc-200 bg-opacity-20 backdrop-blur-lg h-screen'>
        <div className='flex flex-col justify-center items-center mt-52 space-y-8'>
            {
                navItems.map((item, index) => {
                    return <NavLink onClick={() => setIsNavbarOpen(false)} className={({ isActive }) => `uppercase font-medium text-3xl ${isActive ? "text-app-red" : "text-zinc-600"}`} key={index} to={item.href}>
                        <p>
                            {item.name}
                        </p>
                    </NavLink>
                })
            }
        </div>
        <div className='mt-40 flex items-center justify-center'>
            <button onClick={() => setIsNavbarOpen(false)} className='text-6xl'><IoMdCloseCircleOutline /></button>
        </div>
    </div>
)
}

export default MobileNavbar