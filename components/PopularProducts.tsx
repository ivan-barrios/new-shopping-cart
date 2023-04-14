import PopularCard from "./subcomponents/PopularCard";

const PopularProducts = () => {
  return (
    <div
      id="popularProducts"
      className="bg-white text-black w-full xl:px-[15%]"
    >
      <h2 id="popular" className="ml-4 pt-20 pb-10">
        UNDEFINED AND CONFUSED
      </h2>
      <div className="flex justify-center max-w-full min-w-[300px] px-4 md:max-w-full">
        <PopularCard />
      </div>
    </div>
  );
};

export default PopularProducts;
