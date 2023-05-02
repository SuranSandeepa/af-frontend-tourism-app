import React from "react";
import { AiFillCalendar, AiFillWarning } from "react-icons/ai";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Tour({ tour }) {
  const navigate = useNavigate();

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
  console.log(tour.image);

  console.log(tour.features);
  return (
    <div className="bg-gray-100 px-4">
      <div className="relative h-[40em]">
        {/* Image and tag */}
        <div className="absolute top-0 left-0 bg-red-500 text-white p-1">
          {tour?.tag}
        </div>
        <img
          src={tour?.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="uppercase font-semibold mb-2">{tour?.title}</div>
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
          <button onClick={() => {
            navigate("/tours/" + tour?.id)
          }} class="justify-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tour;
