import Image from "next/image";
import hoodieImg from "@/images/HOODIEPrueba.webp";

const ProductCard = () => {
  return (
    <div className="">
      <Image alt="Hoodie" src={hoodieImg} className="h-full w-full" />
      <div className="text-center">
        <div className=" font-bold">HOODIE (AND CONFUSED)II</div>
        <p className="bg-white text-xs">$30.000</p>
      </div>
    </div>
  );
};

export default ProductCard;
