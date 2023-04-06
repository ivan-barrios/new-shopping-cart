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
      <div className="flex w-full items-center gap-8 text-5xl">
        <IoMenu />
        <Link href="/" className="w-full text-3xl">
          Undefined
        </Link>
        <IoSearchOutline />
        <IoCartOutline />
      </div>
    </nav>
  );
};

export default Navbar;
