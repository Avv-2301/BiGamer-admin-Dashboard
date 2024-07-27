import React from 'react';
import {googleImg} from '../assets/images/channels4_profile.jpg'

const Login = () => {
  return (
    <div className='w-full flex flex-col justify-between items-center p-10'>
  <div className='w-1/3 shadow-lg border rounded-lg h-[80vh] p-4 flex flex-col items-left'>
    <div className='text-[1.5rem] font-semibold font-mono pb-4'>
      <span>Login to your Account</span>
    </div>
    <div className='text-sm font-mono pb-6'>
      See what is going on with your business
    </div>
    <div className='flex flex-row'>
      <img
      src=''
      alt=''
      className='h-[30px] w-[30px]'
      />
    <button>
      Continue with Google
    </button>
  </div>
  </div>
</div>

  )
}

export default Login