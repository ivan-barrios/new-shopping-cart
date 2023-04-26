import Image from "next/image";
import hoodieImg from "@/images/HOODIEPrueba.webp";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartProduct = () => {
  return (
    <div className="flex justify-evenly items-center gap-4 w-full h-[150px] p-2">
      <Image
        src={hoodieImg}
        alt="Hoodie"
        className=" object-contain max-w-[100px] max-h-full"
      />
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center gap-8">
          <h2 className=" w-2/3">HOODIE (AND CONFUSED) I (XL)</h2>
          <BsFillTrash3Fill className="cursor-pointer text-2xl" />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[12px]">
            <h3>CANTIDAD: 1</h3>
            {/* Buttons to increase-decrease */}
          </div>
          <h3>$40.000</h3>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
