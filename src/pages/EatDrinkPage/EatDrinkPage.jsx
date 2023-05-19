import React from "react";
import ShopItem from "@components/ShopItem/ShopItem";
import Dropdown from "@components/Dropdown/Dropdown";
import Search from "@components/Search/Search";

function EatDrinkPage() {
  let rand = (a) => {
    let ra = Math.random();
    let index = Math.trunc(ra * a.length);
    return a[index];
  };

  let shopItems = new Array(10).fill(null).map((value) => {
    let tags = ["traditional", "popular", "local"];
    const food = [
      {
        name: "Rice and curry",
        desc: "A staple dish made with boiled rice served with a variety of curries, such as chicken, fish, beef, or vegetarian.",
      },
      {
        name: "Hoppers",
        desc: "A popular breakfast food, hoppers are bowl-shaped pancakes made with rice flour and coconut milk.",
      },
      {
        name: "Kottu roti",
        desc: "A famous street food made with chopped roti bread, vegetables, and meat or egg, all stir-fried together.",
      },
      {
        name: "Pol sambol",
        desc: "A spicy condiment made with grated coconut, chili, onion, and lime juice, often served with rice and curry.",
      },
      {
        name: "Lamprais",
        desc: "A Dutch-influenced dish consisting of rice boiled with meat or vegetables, wrapped in a banana leaf and baked.",
      },
      {
        name: "Fish ambul thiyal",
        desc: "A tangy and spicy fish curry made with a blend of roasted spices and tamarind.",
      },
      {
        name: "Wambatu moju",
        desc: "A sweet and sour pickle made with eggplant and spices, often served as a side dish.",
      },
      {
        name: "Kiribath",
        desc: "A special dish of milk rice, often served for breakfast or on special occasions like the Sinhala and Tamil New Year.",
      },
      {
        name: "Gotu kola sambol",
        desc: "A salad made with gotu kola leaves, onions, tomatoes, and grated coconut, dressed with lime juice.",
      },
      {
        name: "Konda kavum",
        desc: "A sweet Sri Lankan snack made with rice flour, coconut, and treacle, often served during festive occasions.",
      },
      {
        name: "Thalaguli",
        desc: "A traditional sweet made with rice flour, coconut, and jaggery, often served during festive occasions.",
      },
      {
        name: "Kokis",
        desc: "A crispy and savory deep-fried snack made with rice flour and coconut milk, often served during festive occasions.",
      },
      {
        name: "Achcharu",
        desc: "A spicy and sour fruit salad made with a mix of tropical fruits, such as mango, pineapple, and papaya.",
      },
    ];

    let f = rand(food);
    return {
      id: "",
      seller: "Ran souvenirs",
      name: f.name,
      desc: f.desc,
      tag: [rand(tags)],
    };
  });

  console.log(shopItems);
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

  const data = "";
  return (
    <div>
      <div className="w-full relative h-[calc(50vh+15em)] bg-black">
        <img
          src="https://www.visitsingapore.com/dining-drinks-singapore/_jcr_content/par-carousel/carousel_with_video/carousel/item1.thumbnail.carousel-img.1400.500.jpg"
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
              <ShopItem item={item} key={i} food />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EatDrinkPage;
