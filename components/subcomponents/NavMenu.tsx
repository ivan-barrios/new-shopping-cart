import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import { FaDiscord, FaInstagram } from "react-icons/fa";

const NavMenu = ({ collapseMenu, setCollapseMenu }) => {
  return (
    <div
      className={`fixed ${
        collapseMenu ? "left-0" : "left-[-100vw]"
      } left-0 top-0 w-full bg-white h-screen transition-all ease-in-out duration-400 md:w-[40vw]`}
    >
      <div className="flex justify-end p-4">
        <TfiClose
          onClick={() => setCollapseMenu(false)}
          className="cursor-pointer text-4xl hover:text-gray-600"
        />
      </div>
      <div className="flex flex-col gap-4 text-2xl items-center">
        <Link
          className="p-4 bg-gray-100 w-full text-center hover:bg-slate-50"
          href="/"
          onClick={() => setCollapseMenu(false)}
        >
          Home
        </Link>
        <a
          className="p-4 bg-gray-100 w-full text-center hover:bg-slate-50"
          href="#search"
          onClick={() => setCollapseMenu(false)}
        >
          Search
        </a>
        <Link
          className="p-4 bg-gray-100 w-full text-center hover:bg-slate-50"
          href="/shop"
          onClick={() => setCollapseMenu(false)}
        >
          Shop
        </Link>
        <a
          className="p-4 bg-gray-100 w-full text-center hover:bg-slate-50"
          href="#cart"
          onClick={() => setCollapseMenu(false)}
        >
          Cart
        </a>
        <a
          className="p-4 bg-gray-100 w-full text-center hover:bg-slate-50"
          href="#contact"
          onClick={() => {
            setCollapseMenu(false);
          }}
        >
          Contact
        </a>
      </div>
      <div className="relative top-[20%] flex justify-around w-full text-4xl">
        <FaInstagram className="cursor-pointer" />
        <FaDiscord className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavMenu;
