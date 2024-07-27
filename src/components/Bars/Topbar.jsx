import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";


const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg pl-20">
      <input
        type="text"
        placeholder="Search Here"
        className="w-full max-w-xl p-2 rounded-full bg-white outline-none pl-6"
      />
      <div className="flex space-x-7 ml-[90px]">
        <FaRegBell size={45} style={{ fill: 'teal' }} className="shadow hover:shadow-lg rounded-lg border-0 p-3 bg-[#cffafe]"/>   
        <FaRegMessage size={45} style={{ fill: 'teal' }} className="shadow hover:shadow-lg rounded-lg border-0 p-3 bg-[#cffafe]"/>
        <IoSettingsSharp size={45} style={{ fill: 'red' }} className="shadow hover:shadow-lg rounded-lg border-0 p-3 bg-[#fee2e2]"/>
      </div>
      <hr className="lg:h-[50px] border-x-2 bg-[#6b7280]ml-[80px]"></hr>
      <div className="mr-[100px] flex space-x-6">
        Hello, <strong>Avv</strong>
        <img src={""} alt="user" className="rounded-full h-8 w-8 bg-black"/>
      </div>
    </div>
  );
};

export default Topbar;
