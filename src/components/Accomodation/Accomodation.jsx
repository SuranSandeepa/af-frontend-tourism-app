import { useNavigate } from "react-router-dom";
import React from "react";

function AccomodationItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className="h-[34rem] bg-gray-200 rounded overflow-hidden">
      <div className="w-full h-[60%]">
        <img
          src={item?.images && item.images[0]}
          alt="Preview image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full p-3 h-[40%] bg-gray-200 flex flex-col">
        <div className=" uppercase pb-2 font-semibold">
          FROM {item?.provider}{" "}
        </div>
        <div className="flex-grow">
          <div className="truncate">{item.name}</div>
          {item.address}, {item.country}
          <div>200 kilometers away</div>
          <div>{item.dateRange}</div>
        </div>
        <div>
          <span className="font-bold">{item.price}</span> per day
        </div>
        <button
          onClick={() => {
            navigate("/rooms/" + item._id);
          }}
          className=" self-end bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Book now
        </button>
      </div>
    </div>
  );
}

export default AccomodationItem;
