import Image from "next/image";
import hoodie from "@/images/HOODIEPrueba1.webp";
import Talles from "@/components/subcomponents/Talles";

const ProductInfo = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-2">
        <Image src={hoodie} alt="Hoodie" className="w-full" />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-md">HOODIE (UNDEFINED AND CONFUSED) I</h2>
          <p className="text-xs font-bold">$40000</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Talle</p>
        <Talles />
      </div>
    </div>
  );
};

export default ProductInfo;
