import React from 'react'

function Navbar() {
  return (
    <div className='w-full container flex flex-row bg-black'>
       <div className='logo text-blue-500 font-bold text-xl my-auto '>iTask</div>
       <div><img src="https://todolist.surajsingh.online/logo.ico" alt="" className='logoimage'  
    /></div>
       <div className='text-blue-500 font-bold mt-7 right'><ul><li>Home</li>
       </ul></div>
    </div>
  )
}

 export default Navbar
