import React from 'react'

const Topbar = () => {
  return (
    <div className='flex space-x-2'>
      <div className='px-20 mt-8'>
        <input type='search' placeholder='Search'className='h-[2.8rem] w-[20rem] p-4 border-0 shadow hover:shadow-lg'/>
      </div>
    </div>
  )
}

export default Topbar;