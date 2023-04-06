import ProductCard from "./ProductCard";

const PopularProducts = () => {
  return (
    <div className="bg-white text-black">
      <h2 id="popular" className="ml-4 pt-20 pb-10">
        UNDEFINED AND CONFUSED
      </h2>
      <div className="max-w-full h-[500px] px-4 flex flex-col gap-2">
        <ProductCard />
      </div>
    </div>
  );
};

export default PopularProducts;
