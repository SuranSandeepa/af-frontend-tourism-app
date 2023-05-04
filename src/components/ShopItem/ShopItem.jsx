import { useNavigate } from "react-router-dom";
import React from "react";

function ShopItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className="h-[20rem] bg-gray-200 rounded overflow-hidden">
      <div className="w-full h-[67%]">
        <img
          src="https://www.visitsingapore.com/singapore-hotels/_jcr_content/par/content_signpost_car/signpost/item0.thumbnail.image.326.183.jpg"
          alt="Preview image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full p-3 h-[33%] bg-gray-200 flex flex-col">
        <div className="font-semibold">{item.name}</div>
        <div className=" uppercase text-xs pb-2 font-semibold">
          Sold by {item?.seller}
        </div>
        <div className="flex justify-between">
          <div>
            <span className="font-bold">1200 Rs</span>
          </div>
          <button
            onClick={() => {
              navigate("/products/1");
            }}
            class=" self-end bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            Buy it
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
