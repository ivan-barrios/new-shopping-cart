import { Inter } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import img1 from "@/images/img1.webp";
import img2 from "@/images/img2.webp";
import PopularProducts from "@/components/PopularProducts";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="h-[calc(100vh-4rem)] bg-black text-white">
        {/* Image for mobile */}
        <Image
          src={img1}
          alt="MainImage"
          className="object-cover h-full sm:hidden"
          priority
        />
        {/* Image for Tablet and Desktop */}
        <Image
          src={img2}
          alt="MainImage"
          className="hidden object-cover object-top h-full sm:block"
          priority
        />
        <div className="w-full absolute flex flex-col items-center bottom-2 gap-2 text-center">
          <SlArrowDown className="text-4xl" />
          <p className="text-sm">
            ENTREGAS A TODO EL MUNDO // COMPRÁ CON <br /> SEGURIDAD
          </p>
        </div>
      </div>
      <PopularProducts />
      <Products />
      <Footer />
    </div>
  );
}
