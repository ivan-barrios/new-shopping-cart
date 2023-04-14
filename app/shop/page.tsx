import Footer from "@/components/Footer";
import Product from "@/components/subcomponents/Product";
import hoodie from "@/images/HOODIEPrueba1.webp";

const Shop = () => {
  return (
    <div className="bg-white text-black xl:px-[15%]">
      <h2 className="ml-4 pt-12 pb-4 font-bold text-xl">PRODUCTS</h2>
      <div className="grid grid-cols-2 gap-8 px-8 md:grid-cols-3 md:px-16 xl:grid-cols-4">
        {/* Show all products */}
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
        <Product imgSrc={hoodie} />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
