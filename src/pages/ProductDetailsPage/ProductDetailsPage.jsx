import Rating from "@components/Rating/Rating";
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Comment from "@components/Comment/Comment";

function ProductDetailsPage() {
  const data = {
    imageURLs: new Array(5).fill(
      "https://cdn.shopify.com/s/files/1/0045/5478/4881/products/Sri_Lanka_1_900x.png?v=1582914118"
    ),
    name: "Sri Lanka Country Pendant (Gold)",
    freeShipping: true,
    seller: "Hello seller",
    orderCount: 999,
    rating: 4.5,
    stock: 25,
  };

  const comments = new Array(5).fill({
    user: "Dehemi",
    rating: 5,
    date: new Date(),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dictum metus. Sed sit amet dui quis purus ullamcorper ornare. Aliquam faucibus quam id sapien aliquam iaculis.",
  });

  const { imageURLs, name, seller, orderCount, freeShipping, rating, stock } =
    data;

  return (
    <div className="px-[10vw] mx-[auto] w-full">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img
              src={imageURLs?.length > 0 ? imageURLs[1] : ""}
              alt="Product"
              className="w-[40rem] object-contain"
            />
          </div>
          <div className="flex justify-center gap-3">
            {imageURLs &&
              imageURLs.map((image) => {
                return (
                  <div className="w-20 h-20">
                    <img
                      src={image}
                      alt="Product Image"
                      className="object-cover"
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="p-6 flex flex-col">
          <div className="pb-2 text-xl font-bold">{name}</div>
          <div className="flex items-center">
            <Rating className="self-start pr-2 pt-[1px]" />{" "}
            <span>
              {rating} {orderCount} Orders
            </span>
          </div>
          <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <div>
            <div className="py-3 text-sm">Quantity:</div>
            <div className="flex items-center">
              <button className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-100 flex justify-center items-center">
                <AiOutlinePlus size={13} />
              </button>
              <div className="px-2">1</div>
              <button className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-100 flex justify-center items-center">
                <AiOutlineMinus size={13} />
              </button>
              <div className="ml-2">{stock} left</div>
            </div>
          </div>
          <div className="flex-grow"></div>
          <div>
            <button
              onClick={() => {
                navigate("/rooms/1");
              }}
              className=" self-end bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Contact Seller
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {comments && comments.map((c) => <Comment comment={c} />)}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
