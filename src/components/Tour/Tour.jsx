import React from "react";
import { AiFillCalendar, AiFillWarning } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

function Tour({ tour }) {
  const getIcon = (type) => {
    switch (type) {
      case "type":
        return <AiFillCalendar />;
      case "duration":
        return <MdAccessTimeFilled />;
      case "meetingPoint":
        return <HiLocationMarker />;
      case "info":
        return <AiFillWarning />;
    }
  };

  console.log(tour.features);
  return (
    <div className="bg-gray-100 px-4">
      <div className="relative h-[10em]">
        {/* Image and tag */}
        <div className="absolute top-0 left-0 bg-red-500 text-white p-1">
          {tour?.tag}
        </div>
      </div>
      <div className="p-4">
        <div>{tour?.title}</div>
        <div>
          {tour?.desc} <span className="text-red-500">less</span>
        </div>
        <div className="flex flex-col ml-2 mt-2">
          {Object.entries(tour.features).map((values) => {
            return (
              <div key={values[0]} className="flex flex-row items-center">
                <div className="pr-3">{getIcon(values[0])}</div> {values[1]}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-end pb-4">
            <button class="justify-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Book now
            </button>
          </div>
      </div>
    </div>
  );
}

export default Tour;
