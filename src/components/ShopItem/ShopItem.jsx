import { useNavigate } from "react-router-dom";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Tag from "@components/Tag/Tag";

function ShopItem({ item, food }) {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div
      className={`${
        food ? "h-[25rem]" : "h-[20rem]"
      } bg-gray-200 rounded overflow-hidden`}
    >
      <div className={`w-full h-[60%]`}>
        <img
          src={item?.images?.length ? item?.images[0] : "https://via.placeholder.com/500x500?text=No+Image"}
          alt="Preview image"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="w-full p-3 bg-gray-200 flex flex-col h-[40%]">
        <div className="font-semibold">{item.name}</div>
        <div className=" uppercase text-xs pb-2 font-semibold">
          {food ? "" : "From"} {food ? item?.provider : item?.providerDetails?.name}
        </div>
        <div className="flex-grow"></div>
        {food ? (
          <div className="mb-2 line-clamp-2">
            {item.desc}
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-between">
          {food ? (
            <div>
              {item?.tag?.map(value => {
                return <Tag title={value} />
              })}
            </div>
          ) : (
            <div>
              <span className="font-bold">1200 Rs</span>
            </div>
          )}
          <button
            onClick={() => {
              navigate("/shop/1");
            }}
            className="flex justify-center items-center self-end bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          >
            {food ? "Find it" : "See more"}{" "}
            <AiFillCaretRight className="mt-[3.4px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
