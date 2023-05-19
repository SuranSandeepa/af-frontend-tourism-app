import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const headerElements = {
  "Eat and Drink": "/eat-drink",
  Shop: "/shop",
  Stay: "/stay",
  Tours: "/tours",
};

function AdminHeader() {
  return (
    <div className="grid justify-between auto-cols-min grid-flow-col grid-rows-1 whitespace-nowrap bg-blue-500">
      <div className="p-4 font-bold uppercase hover:bg-gray-800 text-white">
        Admin
      </div>

      <div className="flex items-center p-4 font-bold uppercase hover:bg-gray-800 text-white">
        Logged in as Dehemi.Weerakkody
        <div className="pl-2 stroke-5">
          <AiOutlineUser className="stroke-5" size={25}/>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
