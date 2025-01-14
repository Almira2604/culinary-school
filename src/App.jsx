import React from 'react'
import Navbar from './Components/Navbar Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Footer from './Components/Footer/Footer'
import Footer2 from './Components/Footer/Footer2'
import Footer3 from './Components/Footer/Footer3'
import Footer4 from './Components/Footer/Footer4'
import ProfessionalCertificationOfChefs from './pages/ProfessionalCertificationOfChefs'
import ProfessionalGrill from './pages/ProfessionalGrill'
import NigeriaCookery from './pages/NigeriaCookery'
import LevelOneCookery from './pages/LevelOneCookery'
import DiplomaInCookery from "./pages/DiplomaInCookery"
import ProfessionalCookery from "./pages/ProfessionalCookery"
import LevelOneBaking from './pages/LevelOneBaking'
import DiplomaPastry from './pages/DiplomaPastry'
import ProfessionalBakery from './pages/ProfessionalBakery'
import DiplomaCulinaryArt from './pages/DiplomaCulinaryArt'
import ProfessionalCulinaryArt from './pages/ProfessionalCulinaryArt'
import ProChef from './pages/ProChef'


function App() {
  return (
    <>
      <Router>
        <div className='lg:mx-10 mx-5'>
          <div className='lg:mb-32 mb-24'>
            <Navbar />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/8320-hours-professional-certification-of-chefs' element={<ProfessionalCertificationOfChefs />} />
            <Route path='/courses/professional-grill' element={<ProfessionalGrill />} />
            <Route path='/courses/nigeria-cookery' element={<NigeriaCookery />} />
            <Route path='/courses/level-1-cookery' element={<LevelOneCookery />} />
            <Route path='/courses/diploma-in-cookery' element={<DiplomaInCookery />} />
            <Route path='/courses/professional-cookery' element={<ProfessionalCookery />} />
            <Route path='/level-1-baking-and-pastry' element={<LevelOneBaking />} />
            <Route path='/diploma-patisserie' element={<DiplomaPastry />} />
            <Route path='/professional-bakery-and-pastry' element={<ProfessionalBakery />} />
            <Route path='/diploma-in-culinary-art' element={<DiplomaCulinaryArt />} />
            <Route path='/professional-culinary-art' element={<ProfessionalCulinaryArt />} />
            <Route path='/pro-chef' element={<ProChef />} />

          
          </Routes>
        </div>
        <div className='bg-gray-100 lg:flex flex-row lg:space-x-20 space-y-10 lg:space-y-0  lg:p-10 p-8 '>
          <Footer />
          <Footer2 />
          <Footer3 />
          <Footer4 />
        </div>
      </Router>
    </>
  )
}

export default App


