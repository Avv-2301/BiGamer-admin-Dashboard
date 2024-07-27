import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../../data/routes";

const Sidebar = () => {

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen w-72 duration-500 text-[#f3f4f6] px-6 py-6`}
      >
        <div>
          {menus?.map((menu, index) => (
            <Link
              to={menu?.link}
              key={index}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#1f2937] rounded-md`}
            >
              <div>{menu?.icon}</div>
              <h2
                className={`whitespace-pre duration-500`}
              >
                {menu?.name}
              </h2>
              <h2
                className={` absolute left-48 bg-white font-semibold whitespace-pre text-[#111827] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
