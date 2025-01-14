import React from 'react'
import { Link } from 'react-router-dom'

const Footer4 = () => {
  return (
           <div>
              <p className='text-sm font-bold leading-relaxed'>Socials & Enquiries</p>
              <ul>
                  <li className='space-y-1 mt-4 text-sm text-gray-600'>
                      <p><Link>Facebook</Link></p>
                      <p> <Link>Imstagram</Link></p>
                      <p><Link>Twitter</Link></p>
                  </li>
              </ul>

              <div className='mt-16 text-gray-600  '>
          Copyright © 2013-2024. CMK Culinary Institute.
      </div>
          </div>
  )
}

export default Footer4