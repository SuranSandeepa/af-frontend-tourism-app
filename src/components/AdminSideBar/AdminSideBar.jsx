import { useNavigate } from "react-router-dom";
import React from "react";

function AdminSideBar({ className = "" }) {
  const navigate = useNavigate();

  return (
    <div
      className={`h-full flex flex-col items-start gap-3 px-2 pt-2 border-r-2 ${className}`}
    >
      <button
        onClick={() => {
          navigate("/admin/" + "accommodations");
        }}
        className="text-center w-full p-3 rounded bg-red-300 text-white font-bold"
      >
        Accommodation Management
      </button>
      <button
        onClick={() => {
          navigate("/admin/" + "shops");
        }}
        className="text-center w-full p-3 rounded bg-red-300 text-white font-bold"
      >
        Shop Management
      </button>
      <button
        onClick={() => {
          navigate("/admin/" + "restaurants");
        }}
        className="text-center w-full p-3 rounded bg-red-300 text-white font-bold"
      >
        Restaurant Management
      </button>
      <button
        onClick={() => {
          navigate("/admin/" + "tours");
        }}
        className="text-center w-full p-3 rounded bg-red-300 text-white font-bold"
      >
        Tour Management
      </button>
      <button
        onClick={() => {
          navigate("/admin/" + "accommodations");
        }}
        className="text-center w-full p-3 rounded bg-blue-300 text-white font-bold mt-8"
      >
        Settings
      </button>
    </div>
  );
}

export default AdminSideBar;
