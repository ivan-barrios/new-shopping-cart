import Image from "next/image";
import hoodie from "@/images/HOODIEPrueba1.webp";
import Talles from "@/components/subcomponents/Talles";
import Footer from "@/components/Footer";

const ProductInfo = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <Image src={hoodie} alt="Hoodie" className="w-full md:w-[300px]" />
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-col gap-2">
            <h2 className="text-md">HOODIE (UNDEFINED AND CONFUSED) I</h2>
            <p className="text-xs font-bold">$40000</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Talle</p>
            <Talles />
          </div>
          <button className="bg-black hover:bg-stone-800 text-white w-full py-4 mt-8 text-xs transition-all duration-500 md:w-[300px]">
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInfo;
