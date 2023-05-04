import ShopItem from "@components/ShopItem/ShopItem";
import React from "react";

function Shop() {
  const shopItems = new Array(10).fill({
    id: "",
    seller: "Ran souvenirs",
    name: "Wooden Yaka Mask"
  });
  
  return (
    <div>
      <div className="w-full relative h-[calc(50vh+15em)] bg-black">
        <img
          src="https://www.visitsingapore.com/content/dam/vs/made-with-passion/homepage/signpost-1670x940.png"
          alt="image"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 text-white font-black text-4xl mb-[2em] px-10 drop-shadow-lg">
          Explore and shop the world - discover unique treasures for your
          travels with us!
        </div>
      </div>
      <div className="flex flex-col">
        <div></div>
        <div></div>
      </div>
      <div className="w-full grid sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-5 px-6 py-4">
        {shopItems.map((item, i) => (
          <ShopItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
