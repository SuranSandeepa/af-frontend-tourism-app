import React from "react";
import ShopItem from "@components/ShopItem/ShopItem";

function ShopPage() {
  const shopItems = new Array(10).fill({
    id: "",
    seller: "Ran souvenirs",
    name: "Wooden Yaka Mask",
  });

  return (
    <div className="relative">
      <div className="relative w-full h-[calc(20vh+16em)] bg-black flex flex-col justify-center items-center">
        <img
          src="https://ih0.redbubble.net/cover.5532921.2400x600.jpg"
          alt="Banner"
          className="w-full h-full object-cover absolute"
        />
        <div className="flex justify-center items-center flex-col z-40">
          <div className="shadow-lg w-[8rem] h-[8rem] bg-gray-400 rounded-full flex justify-center items-center">
            <div className="text-4xl font-black text-white">PB</div>
          </div>
          <div className="font-bold text-lg p-3 mt-2 rounded-lg shadow-lg bg-gray-200">
            {"paperbee.giftshop"}
          </div>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-5 px-6 py-4">
        {shopItems.map((item, i) => (
          <ShopItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
