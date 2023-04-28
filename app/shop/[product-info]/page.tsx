import Image from "next/image";
import hoodie from "@/images/HOODIEPrueba1.webp";
import Talles from "@/components/subcomponents/Talles";
import Footer from "@/components/Footer";

const ProductInfo = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <Image src={hoodie} alt="Hoodie" className="w-full" />
        <div className="flex flex-col gap-2">
          <h2 className="text-md">HOODIE (UNDEFINED AND CONFUSED) I</h2>
          <p className="text-xs font-bold">$40000</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Talle</p>
        <Talles />
      </div>
      <button className="bg-black text-white w-full py-4 mt-8 text-xs">
        AGREGAR AL CARRITO
      </button>
      <Footer />
    </div>
  );
};

export default ProductInfo;
