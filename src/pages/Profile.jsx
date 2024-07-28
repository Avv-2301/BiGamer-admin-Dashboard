import React from 'react';
import Button from '../components/core/Button';
import ProfilePhoto  from '../assets/images/Akshat.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col justify-center items-center w-11/12 mt-1'>
      <p className='font-bold text-[2rem] mb-4 font-mono'>Admin Profile</p>
      <div className='flex flex-col shadow-lg border lg:w-[35%] lg:h-[420px] items-center justify-center hover:shadow-xl rounded-xl bg-[#e2e8f0] transition-all duration-200 hover:scale-105'>
        <img 
        src={ProfilePhoto}
        alt='Profile'
        className='mt-2.5 rounded-full w-24 h-24 mb-3'
        />
        <p className='font-mono font-bold text-[1.8rem] mb-2'>Akshat Vijayvergiya</p>
        <div className='flex flex-row'>
          <p>akshatvijayvergiya64@gmail.com</p>
        </div>
        <div className='flex flex-row mt-8 gap-x-6'>
          <Button active={true}>
            Upload Picture
          </Button>
          <Button active={false} linkto={"/forgot-password"}>
            Change Password
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile;