import hoodie from "@/images/HOODIEPrueba.webp";
import hoodie1 from "@/images/HOODIEPrueba1.webp";
import Product from "@/components/Product";

const Products = () => {
  return (
    <div className="bg-white text-black">
      <h2 className="ml-4 pt-20 pb-10">PRODUCTS</h2>
      <div className="grid grid-cols-2 gap-4 justify-evenly px-2">
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie1} />
        <Product imgSrc={hoodie1} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie1} />
      </div>
    </div>
  );
};

export default Products;
