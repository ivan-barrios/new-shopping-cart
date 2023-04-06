import Image from "next/image";

const Product = ({ imgSrc }) => {
  return (
    <div className="max-w-full">
      <Image src={imgSrc} alt="hoodie" className="max-w-full" />
      <p className="font-bold text-sm text-center">HOODIE (AND CONFUSED) I</p>
      <p className="text-xs text-center">$30000</p>
    </div>
  );
};

export default Product;
