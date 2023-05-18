import Dropdown from "@components/Dropdown/Dropdown";
import Tour from "@components/Tour/Tour";
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
    title: "Explore the Best Places",
    desc: `Sigiriya is a fascinating historical and cultural site located in central Sri Lanka. This UNESCO World Heritage Site is renowned for its stunning rock fortress, which sits atop a massive rock plateau that rises 200 meters above the surrounding jungle.\nVisitors to Sigiriya can explore the ancient ruins of the fortress, which date back to the 5th century AD. The fortress was built by King Kasyapa as a palace and fortress, and it is adorned with intricate frescoes, elaborate water gardens, and sophisticated engineering marvels.`,
    features: {
      duration: "8 hours",
      meetingPoint: "Meeting point:\nExit B, Outram Park MRT Station",
      info: "Booking required upon request",
    },
    image:
      "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__2350bp/public/live_banner/Sigiriya.jpg",
  });

  return (
    <div>
      <div className="w-full relative h-[calc(50vh+15em)] bg-black">
        <img
          src="https://www.visitsingapore.com/singapore-tours/_jcr_content/par-carousel/carousel_with_video/carousel/item_1.thumbnail.carousel-img-sq.640.640.jpg"
          alt="image"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 text-white font-black text-4xl mb-[2em] px-10 drop-shadow-lg">
          Explore and shop the world - discover unique treasures for your
          travels with us!
        </div>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-[0.2] lg:px-4 lg:py-2 relative">
          <div className="flex flex-col gap-2 sticky top-[10px]">
            <Dropdown choices={choices} mainTitle="Categories" noApply />
          </div>
        </div>
        <div className="flex-[0.8]">
          <div className="p-4">Showing 33 of 33 Tours</div>
          <div className="w-full flex flex-col gap-3">
            {tours.map((tour, i) => (
              <Tour tour={tour} key={i} className="max-h-[80vh]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPage;
