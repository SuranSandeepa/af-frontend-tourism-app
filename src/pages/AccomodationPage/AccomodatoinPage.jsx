import AccomodationItem from "@components/Accomodation/Accomodation";
import Dropdown from "@components/Dropdown/Dropdown";
import RangeSlider from "@components/RangeSlider/DoubleRangeSlider";
import React from "react";

function AccomodationPage() {
  const roomChoices = {
    single_bed: {
      name: "Single Bed",
    },
    double_bed: {
      name: "Double Bed",
    },
  };

  const shopItems = new Array(10).fill({
    id: "",
    seller: "From Air BNB",
  });

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
      <div className="flex flex-col gap-2">
        <Dropdown mainTitle={"Room type"} choices={roomChoices} />
        <div className="px-9 py-4 flex flex-row justify-between border-gray-400 border-[3px]">
          <div>
            <div className="text-base">Price Range</div>
            <RangeSlider className="w-80 h-5" defaultValue={[25, 75]} />
          </div>
          <button class="justify-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Apply
          </button>
        </div>
      </div>
      <div>
        <div className="p-4">Showing 33 of 33 Shop results</div>
        <div className="w-full grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 px-6 py-4">
          {shopItems.map((item, i) => (
            <AccomodationItem item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccomodationPage;
