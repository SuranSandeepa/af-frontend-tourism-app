import React from "react";

function Carousel({ className, imageURLs }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="absolute w-full h-full">
        {imageURLs?.map((value) => {
          return <div key={value} className="bg-black w-full h-full">Image 1</div>;
        })}
      </div>
    </div>
  );
}

export default Carousel;
