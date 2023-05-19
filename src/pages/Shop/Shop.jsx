import ShopItem from "@components/ShopItem/ShopItem";
import React from "react";
import Dropdown from "@components/Dropdown/Dropdown";
import Search from "@components/Search/Search";
import axios from "axios";
import { API_ENDPOINT } from "../../config";
import { useQuery } from "react-query";

function Shop() {
  const { isLoading, error, data } = useQuery("rooms", () =>
    axios.get(`${API_ENDPOINT}/api/shop-items`)
  );

  console.log(data);

  const shopItems = data?.data ? data.data : [];

  const foodChoices = {
    local: {
      name: "Local",
    },
    traditional: {
      name: "Traditional",
    },
    popular: {
      name: "Popular",
    },
  };

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
      <div className="flex flex-col lg:flex-row">
        <div className="flex-[0.1] lg:px-4 lg:py-2 relative">
          <div className="flex flex-col gap-2 sticky top-[10px]">
            <div className="flex flex-col w-full pt-6 justify-center items-center">
              <div className="text-xl font-bold pb-2">Search Here</div>
              <Search className="min-w-[30rem]" />
            </div>
            <Dropdown mainTitle={"Food type"} choices={foodChoices} noApply />
          </div>
        </div>
        <div className="flex-[0.9]">
          <div className="p-4">
            Showing {data?.data?.length || 0} of 33 Shop results
          </div>
          <div className="w-full grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 px-6 py-4">
            {shopItems?.map((item, i) => (
              <ShopItem item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
