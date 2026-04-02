import React, { useState } from "react";
import { CirclePlay, Eye, EyeOff } from "lucide-react";
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import type {LoginCardProps} from "@/types/index";

const Hero: React.FC = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  

  return (
    
    <section className="relative w-full bg-black-100 text-white border-b-2 border-[#d4af37] overflow-hidden">
      
      <div
        className="absolute left-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${assets.HeroDesign})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div
        className="absolute right-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${assets.HeroDesign})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          transform: "scaleX(-1)",
        }}
      />

      <div className="flex
  flex-row
  items-center 
  justify-between
 px-4 sm:px-6 lg:px-10 
  py-6
  
">
        
        {/* LEFT — Text */}
        <div className="w-[57%] sm:w-[45%] lg:w-[30%] space-y-2">
          <h1 className="text-[#f8dc65] text-lg lg:text-3xl sm:text-xl font-bold ">
            Royal Lotto
          </h1>
          <p className="text-gray-300 text-[8px] sm:text-xs lg:text-sm leading-snug">
            Join the excitement with Royal Mega's Lottery games, offering you the chance to turn dreams into reality with every ticket. Whether you're playing for fun or aiming for a life-changing win, our easy-to-play lotteries bring you closer to incredible prizes.
          </p>
        </div>

        {/* CENTER — Prize + Button + Image */}
        <div className="flex flex-col items-center gap-2 w-[25%]">
          <div className="flex items-end gap-1">
            <span className="text-sm sm:text-lg lg:text-3xl font-bold">₹</span>
            <span className="text-xl sm:text-2xl lg:text-5xl font-bold">5</span>
            <span className="text-sm sm:text-lg lg:text-3xl font-bold">cr</span>
          </div>
          <button className="flex items-center gap-1 
  bg-red-600 
  px-3 py-1.5 
  text-[6px] sm:text-xs lg:text-sm 
  rounded ">
            <CirclePlay className="w-2 h-2 sm:w-2 sm:h-2 lg:w-7 lg:h-7"/>
            Buy Tickets
          </button>
        </div>

        {/* CHANGE: max-w badha diya aur scale-110 xl:scale-125 add kiya taki image layout chota hone ke bawajood badi dikhe */}
        <div className="w-[45%] h-full flex justify-end items-center">
          <img
            src={assets.snooker_logo}
            className="w-full h-full
    sm:w-30 
    lg:w-100 
    max-w-120
    object-contain"
    scale-125 sm:scale-110 lg:scale-100
            alt="Snooker"
          />
        </div>

        {/* RIGHT — Login Card */}
        <div className="hidden lg:block flex-none w-[320px] xl:w-90 2xl:w-100">
          <LoginCard showPassword={showPassword} setShowPassword={setShowPassword} navigate={navigate}/>
        </div>
      </div>
    </section>
  );
};



const LoginCard: React.FC<LoginCardProps> = ({ showPassword, setShowPassword ,navigate })=> (
  // CHANGE: padding py-8 se py-6 aur gap space-y-5 se space-y-4 kiya card ko thoda chota dikhane ke liye
  <div className="w-full bg-black border border-[#d4af37]/40 rounded-xl px-6 sm:px-8 py-6 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
    
    {/* Logo */}
    <img
      src={assets.logo1}
      className="h-10 mx-auto mb-5 object-contain"
      alt="Royal Mega"
    />

    <div className="space-y-4 text-gray-300 text-sm">
      
      <div className="space-y-1">
        <label className="block text-gray-400 text-[10px] uppercase tracking-widest">
          Email or mobile *
        </label>
        <input
          className="w-full px-4 py-2.5 rounded-full bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition"
          placeholder="Enter your email or mobile"
        />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-gray-400 text-[10px] uppercase tracking-widest">Password *</label>
          <span className="text-[#e63946] text-xs cursor-pointer hover:underline">Forgot Password?</span>
        </div>
        <div className="relative">
          <input
            className="w-full px-4 py-2.5 rounded-full bg-white text-black placeholder:text-gray-400 pr-12 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>


      <div className="space-y-1">
        <label className="block text-gray-400 text-[10px] uppercase tracking-widest">
          Code (optional)
        </label>
        <input
          className="w-full px-4 py-2.5 rounded-full bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition"
          placeholder="Enter your code"
        />
      </div>

 
      <button className="w-full bg-linear-to-r from-[#E3BA5D]/80 via-[#FFDEAC] to-[#D4AC54] py-2.5 mt-2 rounded-full text-black font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:opacity-90 active:scale-[0.98] transition">
        Login
      </button>

      <p className="text-center text-xs text-gray-400 mt-3">
        Not registered yet?{" "}
        <span className="text-[#d4af37] cursor-pointer hover:underline font-medium" 
        onClick={() => navigate("/register")}>
          Create an Account
        </span>
      </p>
    </div>
  </div>
);

export default Hero;