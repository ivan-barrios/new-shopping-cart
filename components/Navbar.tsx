"use client";
import NavMenu from "@/components/subcomponents/NavMenu";
import Cart from "./Cart";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const [collapseCart, setCollapseCart] = useState(false);

  return (
    <nav className="w-full text-black flex sticky top-0 bg-white items-center h-16 px-4 z-50">
      <NavMenu
        collapseMenu={collapseMenu}
        setCollapseMenu={setCollapseMenu}
        setCollapseCart={setCollapseCart}
      />
      <Cart collapseCart={collapseCart} setCollapseCart={setCollapseCart} />
      <div className="flex w-full items-center text-3xl">
        <div className="flex gap-4">
          <IoMenu
            onClick={() => {
              setCollapseMenu(true);
              setCollapseCart(false);
            }}
            className="cursor-pointer"
          />
          <Link href="/" className="text-3xl" legacyBehavior>
            Undefined
          </Link>
        </div>
        <div className="flex items-center justify-end w-full">
          <IoSearchOutline
            onClick={() => {}}
            className="mr-4 cursor-pointer md:mr-12"
          />
          <IoCartOutline
            onClick={() => {
              setCollapseCart(true);
              setCollapseMenu(false);
            }}
            className="cursor-pointer"
          />
          <span className="text-xs">(0)</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
