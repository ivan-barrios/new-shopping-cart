import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full text-white flex bg-slate-500 justify-between items-center h-20 px-8">
      <Link href="/" className="">
        Shopping Cart
      </Link>
      <div className="flex justify-evenly items-center gap-20 h-full">
        <Link href="/shop" className="">
          Shop
        </Link>
        <Link href="/contact" className="">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
