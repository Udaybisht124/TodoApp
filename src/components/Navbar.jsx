import React from 'react'

function Navbar() {
  return (
    <div className='w-full container flex flex-row bg-black'>
       <div className='logo text-blue-500 font-bold text-xl '>iTask</div>
       <div className='text-blue-500 font-bold mt-7 right'><ul><li>Home</li>
       </ul></div>
    </div>
  )
}

 export default Navbar
