import { Inter } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import Image from "next/image";
import img1 from "@/images/img1.webp";
import PopularProducts from "@/components/PopularProducts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="h-[calc(100vh-5rem)] bg-black text-white">
        <Image src={img1} alt="MainImage" className="object-cover h-full" />
        <div className="w-full absolute flex flex-col items-center bottom-2 gap-2 text-center">
          <SlArrowDown className="text-4xl" />
          <p className="text-sm">
            ENTREGAS A TODO EL MUNDO // COMPRÁ CON <br /> SEGURIDAD
          </p>
        </div>
      </div>
      <PopularProducts />
    </div>
  );
}
