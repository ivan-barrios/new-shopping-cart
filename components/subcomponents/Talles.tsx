"use client";

import { useState } from "react";

const Talles = () => {
  const [selectedXS, setSelectedXS] = useState(false);
  const [selectedS, setSelectedS] = useState(false);
  const [selectedM, setSelectedM] = useState(true);
  const [selectedL, setSelectedL] = useState(false);
  const [selectedXL, setSelectedXL] = useState(false);
  const [selectedXXL, setSelectedXXL] = useState(false);

  return (
    <div className="flex gap-4">
      <div
        className={`${
          selectedXS ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center cursor-pointer border-[1px] border-black`}
        onClick={() => {
          setSelectedXS(true);
          setSelectedS(false);
          setSelectedM(false);
          setSelectedL(false);
          setSelectedXL(false);
          setSelectedXXL(false);
        }}
      >
        <p>XS</p>
      </div>
      <div
        className={`${
          selectedS ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center cursor-pointer border-[1px] border-black`}
        onClick={() => {
          setSelectedXS(false);
          setSelectedS(true);
          setSelectedM(false);
          setSelectedL(false);
          setSelectedXL(false);
          setSelectedXXL(false);
        }}
      >
        <p>S</p>
      </div>
      <div
        className={`${
          selectedM ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center cursor-pointer border-[1px] border-black`}
        onClick={() => {
          setSelectedXS(false);
          setSelectedS(false);
          setSelectedM(true);
          setSelectedL(false);
          setSelectedXL(false);
          setSelectedXXL(false);
        }}
      >
        <p>M</p>
      </div>
      <div
        className={`${
          selectedL ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center cursor-pointer border-[1px] border-black`}
        onClick={() => {
          setSelectedXS(false);
          setSelectedS(false);
          setSelectedM(false);
          setSelectedL(true);
          setSelectedXL(false);
          setSelectedXXL(false);
        }}
      >
        <p>L</p>
      </div>
      <div
        className={`${
          selectedXL ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center cursor-pointer border-[1px] border-black`}
        onClick={() => {
          setSelectedXS(false);
          setSelectedS(false);
          setSelectedM(false);
          setSelectedL(false);
          setSelectedXL(true);
          setSelectedXXL(false);
        }}
      >
        <p>XL</p>
      </div>
      <div
        className={`${
          selectedXXL ? "bg-black text-white" : ""
        } w-8 h-8 text-xs flex justify-center items-center cursor-pointer border-[1px] border-black`}
        onClick={() => {
          setSelectedXS(false);
          setSelectedS(false);
          setSelectedM(false);
          setSelectedL(false);
          setSelectedXL(false);
          setSelectedXXL(true);
        }}
      >
        <p>XXL</p>
      </div>
    </div>
  );
};

export default Talles;
