import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="w-full text-white flex bg-slate-500 justify-between items-center h-20 px-8">
      <div className="flex w-full justify-evenly bg-red-200 items-center gap-8">
        <IoMenu className="text-4xl" />
        <Link href="/" className="">
          Ropa
        </Link>
      </div>
      {/* <div className="flex justify-evenly items-center gap-20 h-full">
        <Link href="/shop" className="">
          Shop
        </Link>
        <Link href="/contact" className="">
          Contact
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
