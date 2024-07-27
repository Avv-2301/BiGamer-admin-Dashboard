import React from 'react'
import Card from '../core/Card'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";

const AdminDashboard = () => {
  return (
    <div>
      <div className='pl-5 flex flex-col mb-5 mt-3'>
        <div className='text-xl text-[3.5rem] text-black font-bold mb-5'>
          Admin
        </div>
        <div className='text-sm font-mono'>
          Hi, Avv. Welcome Back To BiGamer Admin
        </div>
      </div>
      <div className='lg:flex p-4 space-x-20'>
        <Card
        title={"Total users"}
        data={100}
        icon={<FaRegUser size={30}/>}
        />
        <Card
        title={"Total users"}
        data={100}
        icon={<MdOutlineEditCalendar size={30}/>}
        />
        <Card
        title={"Total users"}
        data={100}
        icon={<FaRegUser size={30}/>}
        />
        <Card
        title={"Total users"}
        data={100}
        icon={<FaRegUser size={30}/>}
        />
    </div>
    </div>
      
  )
}

export default AdminDashboard