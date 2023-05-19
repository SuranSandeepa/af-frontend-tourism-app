import React from "react";
import { Portal } from "react-portal";

function Overlay({ children,className }) {
  return (
    <Portal>
      <div className={`w-screen h-screen top-0 left-0 fixed bg-[#000000c4] z-[9999] ${className}`}>
        {children}
      </div>
    </Portal>
  );
}

export default Overlay;
