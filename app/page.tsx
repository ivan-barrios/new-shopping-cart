import { Inter } from "next/font/google";
import Image from "next/image";
import img1 from "../images/img1.webp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black">
        <Image src={img1} alt="MainImage" className="object-cover h-full" />
      </div>
    </main>
  );
}
