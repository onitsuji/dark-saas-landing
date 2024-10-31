import ArrowIcon from "@/assets/icons/arrow-w.svg";
import cursorImg from "@/assets/images/cursor.png";
import messageImg from "@/assets/images/message.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip sm:py-[96px]">
      <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-96px)] h-[600px] w-[750px] rounded-[100%]  border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:w-[1536px] sm:h-[750px] sm:top-[calc(100%-120px)] lg:w-[2100px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span>
              Read more <ArrowIcon className="inline-block" />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex relative">
            <h1 className="text-7xl font-bold tracking-tighter text-center mt-8 inline-flex sm:text-9xl">
              One Task <br />
              at a Time
            </h1>
            <Image
              src={cursorImg}
              alt="cursor icon"
              height={200}
              width={200}
              className="hidden absolute left-[490px] top-[58px] sm:flex"
            />
            <Image
              src={messageImg}
              alt="message icon"
              height={200}
              width={200}
              className="hidden absolute -left-[185px] top-[108px] sm:flex"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate your accomplishments with an app designed to track,
            motivate and celebrate success.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-2 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
