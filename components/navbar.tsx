import logoImage from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";

import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image src={logoImage} alt="logo" className="size-12 relative" />
          </div>
          <nav className="items-center gap-6 hidden md:flex">
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
          <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg md:hidden">
            <MenuIcon className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
