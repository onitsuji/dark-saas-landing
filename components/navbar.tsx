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
          <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg">
            <MenuIcon className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
