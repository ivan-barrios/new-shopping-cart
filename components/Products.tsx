import hoodie from "@/images/HOODIEPrueba1.webp";
import Product from "@/components/subcomponents/Product";
import Link from "next/link";

const Products = () => {
  return (
    <div className="bg-white text-black xl:px-[15%]">
      <h2 className="ml-4 pt-20 pb-10">PRODUCTS</h2>
      <div className="grid grid-cols-2 gap-8 px-8 md:grid-cols-3 md:px-16 xl:grid-cols-4">
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
      </div>
      <div className="flex justify-center mt-4 text-sm w-full">
        <div className="w-[70%] p-2 border-[1px] border-black">
          <Link href="/shop" className="">
            <h2 className="text-center">VER TODOS LOS PRODUCTOS</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
