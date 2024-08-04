import React from 'react'
import Button from '../components/core/Button'

const Category = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full p-10'>
      <div className='w-1/3 shadow-lg border rounded-md h-[250px] flex flex-col bg-[#f1f5f9] ml-8'>
        <p className='mt-3 ml-4 font-mono font-bold text-2xl'>
          Add Category
        </p>
        <div className='ml-4 mt-8 flex flex-col'>
            <label>
              Category Name
            </label>
            <input
            type='text'
            id='category'
            placeholder='Category Name'
            className='mt-3 h-10 w-[300px] border rounded-md p-2 outline-none'
            />
        </div>
        <div className='flex items-center justify-center mt-6'>
            <Button active={true}>
              Add Category
            </Button>
        </div>
      </div>
      <div className='w-[340px] border h-[450px] rounded-lg bg-[#f1f5f9] flex flex-col overflow-y-auto mr-8'>
        <p className='m-4 font-mono text-2xl font-bold'>Avaliable Categories</p>
        <hr></hr>
        <div className='flex flex-col m-6 w-[280px] h-[40px] shoadow-lg border p-2 rounded-md pl-4 bg-[#9ca3af]'>
          <p className='font-semibold'>Shooting</p>
        </div>
      </div>
    </div>
  )
}

export default Category