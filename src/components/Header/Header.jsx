import React from "react";

const headerElements = {
    "Eat and Drink": "/eat-drink",
    "Shop":"",
    "Stay": ""
}

function Header() {
    
    return (
        <div className="grid auto-cols-min grid-flow-col grid-rows-1 whitespace-nowrap">
            {Object.entries(headerElements).map(value => (
                <a key={value[0]} href={value[1]} className="p-4 font-bold uppercase hover:bg-slate-100">
                    {value[0]}
                </a>
            ))}
        </div>
    )
}

export default Header;