import React, { useState } from "react";
import ListItems from "./ListItems";
const Accordian = ({ title, open, setOpen }) => {

  const showItemList = () => {
    setOpen();
  }

  return (
    <div className="my-1 shadow-md border-gray-200 px-4 py-2 w-64">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <button
          onClick={showItemList}
          className="bg-black text-white px-2 rounded-md cursor-pointer">Show</button>
      </div>
      {
        open && <ListItems />
      }
    </div>
  );
};

export default Accordian;