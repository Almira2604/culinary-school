import React from 'react'
import { Link } from 'react-router-dom'

const Footer3 = () => {
  return (
    <div>
          <div>
              <p className='text-sm font-bold leading-relaxed'>Quick links</p>
              <ul>
                  <li className='space-y-1 mt-4 text-sm text-gray-600'>
                      <p><Link>About CMK</Link></p>
                      <p>    <Link>Admission</Link></p>
                      <p> <Link>Courses</Link></p>
                  </li>
              </ul>
          </div>
    </div>
  )
}

export default Footer3