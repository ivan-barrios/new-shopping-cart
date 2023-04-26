import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import CartProdcut from "./subcomponents/CartProduct";

const Cart = ({ collapse, setCollapse }) => {
  return (
    <div
      className={`fixed ${
        collapse ? "right-0" : "right-[-100vw]"
      } right-0 top-0 w-full bg-white h-screen transition-all ease-in-out duration-400 md:w-[40vw]`}
    >
      <div>
        <h1>Carrito de compras</h1>
        <TfiClose
          onClick={() => setCollapse(false)}
          className="cursor-pointer text-4xl hover:text-gray-600"
        />
      </div>
      <div>
        <CartProdcut />
      </div>
      <div>
        <div>
          <h2>SUBTOTAL:</h2>
          <h2>$15.900</h2>
        </div>
        <div>CALCULAR ENVIO</div>
        <div>
          <h2>Total:</h2>
          <h2>$15.900</h2>
        </div>
        <Link href="/">INICIAR COMPRA</Link>
      </div>
      <Link href="/shop">Ver más productos</Link>
    </div>
  );
};

export default Cart;
