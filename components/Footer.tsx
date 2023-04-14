import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="h-[80vh] flex flex-col items-center justify-evenly xl:px-[15%]"
    >
      <h1 className="mt-12 text-6xl text-center">UNDEFINED</h1>
      <p className="text-xs">atencionalcliente@undefinedba.com</p>
      <div className="w-full flex justify-evenly text-gray-400">
        <Link href="#">INSTAGRAM</Link> <Link href="#">DISCORD</Link>
      </div>
      <form className="w-full flex flex-col items-center gap-4">
        <label
          htmlFor="email"
          className="text-center text-sm text-gray-400 w-56"
        >
          SUSCRIBITE A NUESTRO NEWSLETTER Y ENTERATE DE TODAS LAS NOVEDADES
        </label>
        <div className="flex gap-2">
          <input
            placeholder="MAIL"
            type="email"
            id="email"
            className="p-2 border-b-[1px] border-black w-44"
          />
          <button type="submit" className="bg-black text-white p-2 text-xs">
            ENVIAR
          </button>
        </div>
      </form>
      <p className="text-[10px]">UNDEFINED © COPYRIGHT © ALL RIGHTS RESERVED</p>
    </footer>
  );
};

export default Footer;
