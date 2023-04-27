"use client";

import { useState } from "react";

const Talles = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex gap-4">
      <div
        className={`${
          selected ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center border-[1px] border-black`}
      >
        <p>XS</p>
      </div>
      <div
        className={`${
          selected ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center border-[1px] border-black`}
      >
        <p>S</p>
      </div>
      <div
        className={`${
          selected ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center border-[1px] border-black`}
      >
        <p>M</p>
      </div>
      <div
        className={`${
          selected ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center border-[1px] border-black`}
      >
        <p>L</p>
      </div>
      <div
        className={`${
          selected ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center border-[1px] border-black`}
      >
        <p>XL</p>
      </div>
      <div
        className={`${
          selected ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center border-[1px] border-black`}
      >
        <p>XXL</p>
      </div>
    </div>
  );
};

export default Talles;
