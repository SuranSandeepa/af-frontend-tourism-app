import React from "react";

const headerElements = {
    "Eat and Drink": "/eat-drink",
    "Shop":"/shop",
    "Stay": "/stay",
    "Tours":"/tours"
}

function Header() {
    return (
        <div className="grid auto-cols-min grid-flow-col justify-center grid-rows-1 whitespace-nowrap sticky top-0 bg-white z-[999]">
            <div className="py-1 w-64 flex justify-center items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg" alt="logo" className="mr-2 w-20" />
                <div className=" text-sm font-bold">Sri Lankan<br /> Toursim</div>
            </div>
            {Object.entries(headerElements).map(value => (
                <a key={value[0]} href={value[1]} className="p-4 font-bold uppercase hover:bg-slate-100">
                    {value[0]}
                </a>
            ))}
        </div>
    )
}

export default Header;