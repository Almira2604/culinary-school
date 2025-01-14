import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { CgMenuHotdog } from 'react-icons/cg';
import MobileNavbar from './MobileNavbar';


const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Courses",
      href: "/courses"
    }

  ]
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  return (
    <>
      <div className='bg-white z-50 backdrop-blur-sm bg-opacity-30 lg:z-50 fixed top-0 left-0 w-full lg:px-8 px-4'>
        <div className='flex justify-between items-center py-3'>
          <div>
            <NavLink to="/" >
              <img src={logo} alt="logo-img" className='lg:w-40 w-32' />
            </NavLink>
          </div>
          <div className='lg:block hidden space-x-6'>
            {
              navItems.map((item, index) => {
                return <NavLink
                  className={({ isActive }) => `uppercase font-semibold text-lg ${isActive ? "text-app-red" : "text-zinc-600"}`}
                  key={index} to={item.href}>
                  {item.name}
                </NavLink>
              })
            }
          </div>
          <div className='lg:hidden block'>
            <button onClick={() => setIsNavbarOpen(true)} className='text-5xl text-app-red '>
              <CgMenuHotdog />
            </button>
          </div>
        </div>
     </div>
      {
        isNavbarOpen && <MobileNavbar setIsNavbarOpen={setIsNavbarOpen} navItems={navItems} />
      }
    </>
  )
}

export default Navbar