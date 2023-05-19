import React from "react";

function Tag({ title, color }) {
  return (
    <div
      className="text-xs font-bold px-2 py-1 rounded-2xl uppercase"
      style={{
        backgroundColor: color || "blue",
        color: "white"
      }}
    >
      {title}
    </div>
  );
}

export default Tag;
