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
        className="w-full max-w-md p-2 rounded-full bg-white outline-none pl-6"
      />
      <div className="flex space-x-7 ml-4 p-4">
        <FaRegBell size={45} style={{ fill: 'teal' }} className="shadow hover:shadow-lg rounded-lg border-0 p-3 bg-[#cffafe]"/>   
        <FaRegMessage size={45} style={{ fill: 'teal' }} className="shadow hover:shadow-lg rounded-lg border-0 p-3 bg-[#cffafe]"/>
        <IoSettingsSharp size={45} style={{ fill: 'red' }} className="shadow hover:shadow-lg rounded-lg border-0 p-3 bg-[#fee2e2]"/>
      </div>
    </div>
  );
};

export default Topbar;
