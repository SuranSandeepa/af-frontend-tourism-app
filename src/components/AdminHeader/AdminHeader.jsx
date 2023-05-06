import React from "react";

const headerElements = {
  "Eat and Drink": "/eat-drink",
  Shop: "/shop",
  Stay: "/stay",
  Tours: "/tours",
};

function AdminHeader() {
  return (
    <div className="grid auto-cols-min grid-flow-col grid-rows-1 whitespace-nowrap bg-blue-500">
      <div
        className="p-4 font-bold uppercase hover:bg-gray-800 text-white"
      >
        Admin
      </div>
    </div>
  );
}

export default AdminHeader;
