import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import ProfilePhoto  from '../../assets/images/Akshat.jpg';


const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg pl-20">
      <input
        type="text"
        placeholder="Search Here"
        className="w-full max-w-xl p-2 rounded-full bg-white outline-none pl-6"
      />
      <div className="flex space-x-7 ml-[50px] sm:mr-[15px]">
        <FaRegBell size={45}  className="shadow hover:shadow-lg rounded-2xl border-0 p-3 bg-[#f1f5f9]"/>   
        <FaRegMessage size={45}  className="shadow hover:shadow-lg rounded-2xl border-0 p-3 bg-[#f1f5f9]"/>
        <IoSettingsSharp size={45} className="shadow hover:shadow-lg rounded-2xl border-0 p-3 bg-[#f1f5f9]"/>
      </div>
      <hr className="lg:h-[50px] border-x-2 bg-[#6b7280] ml-[10px] sm:mr-[15px]"></hr>
      <div className="mr-[80px] flex space-x-6">
        Hello,<strong className="ml-1">Akshat</strong>
        <img src={ProfilePhoto} alt="user" className="rounded-full h-8 w-8 bg-black"/>
      </div>
    </div>
  );
};

export default Topbar;
