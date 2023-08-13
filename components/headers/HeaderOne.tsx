import React from "react";
import { BiUserCircle } from "react-icons/bi";
import {
  BsLayoutSidebarInset,
  BsLayoutSidebarInsetReverse,
} from "react-icons/bs";

export const HeaderOne = ({ isSidebarOpen, handleIsSidebarOpen }: any) => {
  return (
    <div className="border-b-[1px] flex justify-between px-10 py-5">
      <div>
        {isSidebarOpen ? (
          <BsLayoutSidebarInsetReverse
            className="w-6 h-6 cursor-pointer"
            onClick={() => handleIsSidebarOpen(!isSidebarOpen)}
          />
        ) : (
          <BsLayoutSidebarInset
            className="w-6 h-6 cursor-pointer"
            onClick={() => handleIsSidebarOpen(!isSidebarOpen)}
          />
        )}
      </div>
      <div className="flex items-center space-x-2">
        <p>Emran Ibn Shayed</p>
        <BiUserCircle className="w-6 h-6" />
      </div>
    </div>
  );
};
