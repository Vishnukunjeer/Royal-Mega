import React from "react";
import { assets } from "@/assets/assets";

const Bingo: React.FC = () => {
  return (
    <>
    <div className="w-full flex justify-center">
  <div className="w-full origin-top scale-[1] ">
    
    {/* 🔴 YOUR ORIGINAL CODE STARTS (NO CHANGE) */}
    
    <div className="relative w-full h-115 sm:h-180 overflow-hidden bg-[#49360d] flex flex-col items-center justify-start">

      {/* 🌟 Radial Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#734c2d_0%,#2A2211_80%)] opacity-80" />

      {/* 🪙 Coins Background */}
      <div
        className="absolute inset-0 z-10 bg-size-[125%] sm:bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${assets.bingo})` }}
      />

      {/* ✨ LIGHT RAYS */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="w-150 h-150 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
      </div>

      {/* 📝 TEXT */}
      <div className="relative z-20 flex flex-col items-center text-center mt-16 sm:mt-20 md:mt-24 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4af37]">
          Bingo
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white mt-3 font-bold">
          Coming soon
        </p>
      </div>

      {/* 🎱 BALLS */}
      <div className="relative z-20 flex justify-center md:-mt-10">
        <img
          src={assets.bingoball}
          alt="balls"
          className="w-70 sm:w-[320px] md:w-105 lg:w-125 object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.8)]"
        />
      </div>

    </div>

    {/* 🔴 YOUR ORIGINAL CODE ENDS */}

  </div>
</div>
    
    <div className="bg-black h-15"></div>
    </>
  );
};

export default Bingo;