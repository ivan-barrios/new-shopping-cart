import Link from "next/link";
import {
  IoMenu,
  IoCartOutline,
  IoSearchOutline,
  IoCartSharp,
} from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full text-black flex sticky bg-white items-center h-16 px-4">
      <div className="flex w-full items-center text-3xl">
        <div className="flex gap-4">
          <IoMenu />
          <Link href="/" className="text-3xl">
            Undefined
          </Link>
        </div>
        <div className="flex items-center gap-2 justify-end w-full md:gap-8">
          <IoSearchOutline />
          <IoCartOutline />
          <span className="text-xs">(0)</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
