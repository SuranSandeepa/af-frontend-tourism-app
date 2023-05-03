import React from "react";
import { BsChevronDown } from "react-icons/bs";

function Dropdown({ choices, mainTitle, onApplyButtonClick, noApply }) {
  return (
    <div className="border-[3px] border-gray-400">
      <div className="px-9 py-4 text-base flex justify-between bg-gray-200">
        <div>{mainTitle}</div>
        <BsChevronDown size={20} />
      </div>
      {choices && <div className="grid auto-cols-auto gap-1 p-2">
        {Object.values(choices).map((value) => {
          return (
            <div key={value.name} className="px-6 py-1">
              <label htmlFor="" className=" text-lg">
                <input type="checkbox" className="mr-2" />
                {value.name}
                {value.desc && <div className=" text-base">{value.desc}</div>}
              </label>
            </div>
          );
        })}
      </div>}
      {!noApply && <div className="px-9 flex flex-row justify-end pb-4">
        <button onClick={onApplyButtonClick} class="justify-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Apply
        </button>
      </div>}
    </div>
  );
}


export default Dropdown;