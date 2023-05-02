import Tour from "@/components/Tour/Tour";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

function TourPage() {
  const choices = {
    action_seeker: {
      name: "Action seeker",
      desc: "Find fun and thrills",
    },
    collector: {
      name: "Collector",
      desc: "Shop and set trends",
    },
    culture_sharper: {
      name: "Culture Sharper",
      desc: "Uncover arts and culture",
    },
    explorer: {
      name: "Explorer",
      desc: "Discover hidden wonders",
    },
    foodie: {
      name: "Socialiser",
      desc: "Meet and mingle",
    },
  };

  let tours = new Array(5).fill({
    id: "1",
    tag: "Culture Sharper",
    title: "Sketch and the city",
    desc: "Doodle and draw your way around Singapore in this immersive and fun urban sketching experience. Pick up the basics of travel sketching as you explore Chinatown’s quirky streets. Capture Singapore from a different perspective as you fill the pages of your sketchbook with the neighbourhood’s vibrant streetscapes, breathtaking architecture and beautiful facades. You’ll also sample some local coffee and snacks before you start exploring.",
    features: {
      type: "appointment",
      duration: "2 hours",
      meetingPoint: "Meeting point:\nExit B, Outram Park MRT Station",
      info: "Booking required upon request",
    },
    image: "https://www.visitsingapore.com/content/dam/desktop/global/singapore-tours/culture-shapers/sketch-and-the-city-1000x1000.jpg"
  });

  return (
    <div>
      <div className="w-full h-[calc(50vh+15em)] bg-black">
        {/* <img src="image" alt="image" className="w-full h-full object-cover" /> */}
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-[3px] border-gray-400">
          <div className="px-9 py-4 text-base flex justify-between bg-gray-200">
            <div>Show me only</div>
            <BsChevronDown size={20} />
          </div>
          <div className="grid auto-cols-auto gap-1 p-2">
            {Object.values(choices).map((value) => {
              return (
                <div key={value.name} className="px-6 py-1">
                  <label htmlFor="" className=" text-lg">
                    <input type="checkbox" className="mr-2" />
                    {value.name}
                    <div className=" text-base">{value.desc}</div>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="px-9 flex flex-row justify-end pb-4">
            <button class="justify-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Apply
            </button>
          </div>
        </div>
        <div className="border-[3px] border-gray-400">
          <div className="px-9 py-4 text-base flex justify-between bg-gray-200">
            <div>Show me only</div>
            <BsChevronDown size={20} />
          </div>
        </div>
      </div>
      <div>
        <div className="p-4">Showing 33 of 33 Passion Tours</div>
        <div className="w-full flex flex-col gap-2">
          {tours.map((tour, i) => (
            <Tour tour={tour} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TourPage;
