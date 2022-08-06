import React, { FC } from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-center bg-black rounded-b-md text-white'>
      <ul className='flex gap-5 p-2'>
        <li className='p-2 rounded-md hover:bg-[#369457] hover:text-white hover: cursor-pointer '>Home</li>
        <li className='p-2 rounded-md hover:bg-[#369457] hover:text-white hover: cursor-pointer'>Characters</li>
        <li className='p-2 rounded-md hover:bg-[#369457] hover:text-white hover: cursor-pointer'>Quotes</li>
      </ul>
    </nav>
  )
}
