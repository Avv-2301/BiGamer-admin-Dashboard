import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import { menus } from "../../data/routes";

const Sidebar = () => {

  const [confirmationModal, setConfirmationModal] = useState(null);
  

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#64748b] min-h-screen w-72 duration-500 text-[#0E0E0E] px-6 py-6`}
      >
        <div>
          {menus?.map((menu, index) => (
            <Link
              to={menu?.link}
              key={index}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#dcfce7] hover:text-[#22c55e] rounded-md`}
            >
              <div>{menu?.icon}</div>
              <h2 className={`whitespace-pre duration-500`}>{menu?.name}</h2>
              <h2
                className={` absolute left-48 bg-white font-semibold whitespace-pre text-[#111827] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <button
          onClick={() =>setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                // btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
          })      
        }
        className="px-2 py-2 text-sm font-medium text-black hover:bg-[#dcfce7] rounded-md drop-shadow-lg text-[#111827]">
           <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
