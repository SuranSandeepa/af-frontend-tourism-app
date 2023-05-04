import { useNavigate } from "react-router-dom";
import React from "react";

function AccomodationItem({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="h-[28rem] bg-gray-200 rounded overflow-hidden"
    >
      <div className="w-full h-[60%]">
        <img
          src="https://www.visitsingapore.com/singapore-hotels/_jcr_content/par/content_signpost_car/signpost/item0.thumbnail.image.326.183.jpg"
          alt="Preview image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full p-3 h-[40%] bg-gray-200 flex flex-col">
        <div className=" uppercase pb-2 font-semibold">{item?.seller} </div>
        <div className="flex-grow">
          Tangalle, Sri Lanka
          <div>145 kilometers away</div>
          <div>4-9 May</div>
        </div>
        <div>
          <span className="font-bold">$1200</span> night
        </div>
        <button onClick={() => { navigate("/rooms/1") }} class=" self-end bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
          Book now
        </button>
      </div>
    </div>
  );
}

export default AccomodationItem;
