import Search from "@components/Search/Search";
import AccomodationItem from "@components/Accomodation/Accomodation";
import Dropdown from "@components/Dropdown/Dropdown";
import RangeSlider from "@components/RangeSlider/DoubleRangeSlider";
import React from "react";
import axios from "axios";
import { API_ENDPOINT } from "../../config";
import { useQuery } from "react-query";

function AccomodationPage() {
  const roomChoices = {
    single_bed: {
      name: "Single Bed",
    },
    double_bed: {
      name: "Double Bed",
    },
  };
  const { isLoading, error, data } = useQuery("rooms", () =>
    axios.get(`${API_ENDPOINT}/api/rooms`)
  );

  console.log(data);

  const shopItems =  data?.data ? data.data : [];

  return (
    <div>
      <div className="w-full relative h-[calc(50vh+15em)] bg-black">
        <img
          src="https://www.visitsingapore.com/singapore-hotels/_jcr_content/par-carousel/carousel_with_video/carousel/item0.thumbnail.carousel-img.1400.500.jpg"
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
            <Dropdown mainTitle={"Room type"} choices={roomChoices} />
            <div className="px-9 py-4 flex flex-row justify-between border-gray-400 border-[3px]">
              <div className="pr-3">
                <div className="text-base">Price Range</div>
                <RangeSlider className="w-80 h-5" defaultValue={[25, 75]} />
              </div>
              <button className="justify-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Apply
              </button>
            </div>
            <div className="flex w-full justify-center items-center">
              <Search className="w-[40rem]" />
            </div>
          </div>
        </div>
        <div className="flex-[0.9]">
          <div className="p-4">Showing {data?.data?.length || 0} of 33 Shop results</div>
          <div className="w-full grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 px-6 py-4">
            {shopItems.map((item, i) => (
              <AccomodationItem item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccomodationPage;
