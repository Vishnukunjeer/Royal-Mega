import React from "react";
import { assets } from "@/assets/assets";

const Casino: React.FC = () => {
  return (<>

    <section className="relative py-4 md:min-h-screen w-full overflow-hidden text-white">


      <div className="absolute inset-0 bg-[#412c1b]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35)_0%,transparent_60%)]" />

      <img
        src={assets.CardShape}
        className="absolute left-10 top-20 w-60 opacity-60"
        aria-label="CardsShape"
      />


      {/* 🎯 MAIN TITLE (BIG HERO TEXT) */}
      <div className="relative z-20 flex flex-col items-center pt-14">
        <div className="relative flex justify-center items-center">

          <img
            src={assets.line}
            alt="line"
            className="w-full max-w-75"
          />

          <img
            src={assets.dice}
            alt="dice"
            className="absolute h-17 sm:h-12 md:h-17"
          />

        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] mt-5 tracking-wide">
          Casino
        </h2>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-row items-center justify-between px-4 sm:px-6 md:px-10 mt-10 md:mt-20 gap-4 md:gap-10">

        <div className="w-1/2 space-y-2 sm:space-y-4 md:space-y-7">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight">
            The Casino
          </h1>

          <p className="text-gray-300 text-[10px] sm:text-sm md:text-lg leading-snug md:leading-relaxed">
            Step into the thrilling world of Casino games at Royal Mega, where every spin, deal, and roll brings you closer to winning big. Experience a wide range of classic and modern casino games designed to keep the adrenaline pumping. With us, every game is a chance to win and a moment to remember!
          </p>

          <button className="bg-linear-to-r from-[#f5b942] to-[#ffcf6d] text-black px-3 sm:px-5 md:px-7 py-2 md:py-3 rounded-md text-xs sm:text-sm md:text-base font-semibold shadow-lg">
            Coming soon
          </button>
        </div>

        <div className="w-1/2 flex justify-end">
          <img
            src={assets.cards}
            alt="casino"
            className="w-50 sm:w-55 md:w-125 lg:w-162.5 object-contain 
      drop-shadow-[0_40px_100px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>
    </section>
    <div className="bg-black h-20 md:h-20"></div>

    <div className="bg-[#dfb354] py-10 px-4 md:px-12 relative overflow-hidden flex flex-col md:flex-row justify-center items-center gap-6 border-b-2 border-black">
      <div className="absolute inset-0 opacity-20 bg-[radial-linear(circle_at_center,var(--tw-gradient-stops))] from-yellow-700 to-transparent"></div>

      <h2 className="text-black text-2xl md:text-3xl font-medium tracking-wide z-10 text-center">
        If you have any query about the Platform!
      </h2>
      <button className="border border-black text-black px-8 py-2.5 rounded-full hover:bg-black hover:text-[#dfb354] transition-colors duration-300 z-10 font-medium">
        Contact Us
      </button>
    </div>
    <div className="bg-black h-10 md:h-15"></div>

  </>
  );
};

export default Casino;