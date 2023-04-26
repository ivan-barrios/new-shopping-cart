"use-client";
import Link from "next/link";
import { TfiClose, TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import CartProdcut from "./subcomponents/CartProduct";
import { useState } from "react";

const Cart = ({ collapseCart, setCollapseCart }) => {
  const [arrowDown, setArrowDown] = useState(true);

  return (
    <div
      className={`fixed ${
        collapseCart ? "right-0" : "right-[-100vw]"
      } right-0 top-0 w-full bg-gray-100 h-screen transition-all ease-in-out duration-400 md:w-[400px] lg:w-[500px]`}
    >
      <div className="flex justify-between items-center w-full h-[70px] p-4">
        <h1 className="text-xl">CARRITO DE COMPRAS</h1>
        <TfiClose
          onClick={() => setCollapseCart(false)}
          className="cursor-pointer text-2xl hover:text-gray-600"
        />
      </div>
      <div className="h-[calc(100%-300px-70px)] px-8">
        <div className="w-full h-full overflow-y-scroll">
          <CartProdcut />
          <CartProdcut />
          <CartProdcut />
          <CartProdcut />
        </div>
      </div>
      <div className="absolute w-full h-[250px] flex flex-col justify-evenly items-center bottom-0 p-4 mb-8">
        <div className="flex justify-between items-center w-full p-4 border-b-[1px]">
          <h2>SUBTOTAL:</h2>
          <h2>$40.000</h2>
        </div>
        <div
          onClick={() => setArrowDown(!arrowDown)}
          className="flex justify-between items-center w-full p-4 border-b-[1px] cursor-pointer"
        >
          <h1>CALCULAR ENVIO</h1>
          {arrowDown ? <TfiAngleDown /> : <TfiAngleUp />}
          {/* Codigo postal y calcular ? */}
        </div>
        <div className="flex justify-between items-center w-full px-4 py-8 border-b-[1px] text-xl font-medium">
          <h2>Total:</h2>
          <h2>$40.800</h2>
        </div>
        <Link
          href="/"
          className="bg-black text-white w-full text-center text-sm py-2"
        >
          INICIAR COMPRA
        </Link>
        <Link href="/shop" className="text-xs mt-4">
          Ver más productos
        </Link>
      </div>
    </div>
  );
};

export default Cart;
