import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { assets } from "@/assets/assets";
import type { LoginCardProps } from "@/types";

const LoginCard: React.FC<LoginCardProps> = ({
  showPassword,
  setShowPassword,
  navigate,
}) => {
  return (
    <div className="w-full bg-black border border-[#d4af37]/40 rounded-xl px-6 sm:px-8 py-6 shadow-[0_0_40px_rgba(212,175,55,0.08)]">
      
      {/* Logo */}
      <img
        src={assets.logo1}
        className="h-10 mx-auto mb-5 object-contain"
        alt="Royal Mega"
      />

      <div className="space-y-4 text-gray-300 text-sm">
        
        {/* Email */}
        <div className="space-y-1">
          <label className="block text-gray-400 text-[10px] uppercase tracking-widest">
            Email or mobile *
          </label>
          <input
            className="w-full px-4 py-2.5 rounded-full bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition"
            placeholder="Enter your email or mobile"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-gray-400 text-[10px] uppercase tracking-widest">
              Password *
            </label>
            <span className="text-[#e63946] text-xs cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <div className="relative">
            <input
              className="w-full px-4 py-2.5 rounded-full bg-white text-black pr-12 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Code */}
        <div className="space-y-1">
          <label className="block text-gray-400 text-[10px] uppercase tracking-widest">
            Code (optional)
          </label>
          <input
            className="w-full px-4 py-2.5 rounded-full bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60 transition"
            placeholder="Enter your code"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-linear-to-r from-[#E3BA5D]/80 via-[#FFDEAC] to-[#D4AC54] py-2.5 mt-2 rounded-full text-black font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:opacity-90 active:scale-[0.98] transition">
          Login
        </button>

        {/* Register */}
        <p className="text-center text-xs text-gray-400 mt-3">
          Not registered yet?{" "}
          <span
            className="text-[#d4af37] cursor-pointer hover:underline font-medium"
            onClick={() => navigate("/register")}
          >
            Create an Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;