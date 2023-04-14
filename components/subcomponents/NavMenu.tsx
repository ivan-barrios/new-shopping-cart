import Link from "next/link";
import { TfiClose } from "react-icons/tfi";

const NavMenu = ({ collapse, setCollapse }) => {
  return (
    <div
      className={`absolute ${
        collapse ? "left-0" : "left-[-100vw]"
      } left-0 top-0 w-full bg-white h-screen transition-all ease-in-out duration-500 md:w-[40vw]`}
    >
      <div className="flex justify-end p-4">
        <TfiClose
          onClick={() => setCollapse(false)}
          className="cursor-pointer text-4xl"
        />
      </div>
      <div className="flex flex-col text-2xl items-center">
        <a
          className="p-4 bg-white w-full text-center hover:bg-slate-50"
          href="#home"
          onClick={() => setCollapse(false)}
        >
          Home
        </a>
        <a
          className="p-4 bg-white w-full text-center hover:bg-slate-50"
          href="#search"
          onClick={() => setCollapse(false)}
        >
          Search
        </a>
        <a
          className="p-4 bg-white w-full text-center hover:bg-slate-50"
          href="#cart"
          onClick={() => setCollapse(false)}
        >
          Cart
        </a>
        <a
          className="p-4 bg-white w-full text-center hover:bg-slate-50"
          href="#contact"
          onClick={() => setCollapse(false)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
