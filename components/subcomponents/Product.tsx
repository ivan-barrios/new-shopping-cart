import Image from "next/image";
import Link from "next/link";

const Product = ({ imgSrc }) => {
  return (
    <Link
      href={`/shop/HOODIE(ANDCONFUSED)I
    `}
      className="max-w-full cursor-pointer"
    >
      <Image src={imgSrc} alt="hoodie" className="max-w-full" />
      <p className="font-bold text-sm text-center">HOODIE (AND CONFUSED) I</p>
      <p className="text-xs text-center">$30000</p>
    </Link>
  );
};

export default Product;
