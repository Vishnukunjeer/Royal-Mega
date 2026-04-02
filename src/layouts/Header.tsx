import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ShoppingBag, ChevronDown } from "lucide-react"
import { useSelector } from "react-redux"
import { assets } from "../assets/assets"
import type { RootState } from "@/store/store"

type HeaderProps = {
  className ? : string
}


const Header: React.FC<HeaderProps> = ({className}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const isAuth = localStorage.getItem("isAuth")
  const user = JSON.parse(localStorage.getItem("user") || "{}")
  const username = user?.email?.split("@")[0] || "User"

  const cartItems = useSelector((state: RootState) => state?.cart?.items || [])
  const cartItemCount = cartItems.length
  //navitem
  const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Results", path: "/result" },
]

  const handleLogout = () => {
    localStorage.removeItem("isAuth")
    localStorage.removeItem("user")
    navigate("/login")
  }

  const handleCartClick = () => {
    if (isAuth === "true") {
      navigate("/cart")
    } else {
      navigate("/login", { state: { from: "/cart" } })
    }
  }

  return (
    <nav className= {`bg-black border-b-2 border-[#d4af37] ${className}`}>
   <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            className="w-40 h-10 object-contain"
            aria-label='logo'
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 text-sm text-gray-300 uppercase">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-[#d4af37]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-6">

          {/* 👤 PROFILE */}
          {isAuth === "true" ? (
            <div className="relative">

              {/* Profile Button */}
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer text-white"
              >
                <img
                  src= "https://i.pravatar.cc/150?img=3"
                  className="w-9 h-9 rounded-full border border-[#d4af37]"
                  aria-label="profile"
                />

                <div className="flex flex-col text-xs leading-tight">
                  <span>{username}</span>
                </div>

                <ChevronDown size={16} />
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-black border border-[#d4af37]/40 rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#111]"
                  >
                    Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#111]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/register")}
                className="px-6 py-2 rounded-full border border-[#d4af37] text-white"
              >
                Register
              </button>

              <button
                onClick={() => navigate("/login")}
                className="px-8 py-2 rounded-full bg-linear-to-r from-[#E3BA5D] via-[#FFDEAC] to-[#D4AC54] text-black font-bold"
              >
                Log in
              </button>
            </>
          )}

          {/* 🛒 CART (LAST) */}
          <div
            onClick={handleCartClick}
            className="relative cursor-pointer text-white hover:text-white"
          >
            <ShoppingBag size={26} />

            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-[#d4af37]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden px-6 py-4 bg-black border-t border-[#d4af37]/30 space-y-4">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Cart */}
          <button
            onClick={handleCartClick}
            className="w-full flex items-center justify-center gap-2 bg-[#333] text-white py-2 rounded"
          >
            <ShoppingBag size={18} />
            Cart ({cartItemCount})
          </button>

          {/* Auth */}
          {isAuth === "true" ? (
            <button
              onClick={handleLogout}
              className="w-full text-red-400"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/register")}
                className="w-full border border-[#d4af37] py-2 text-white rounded"
              >
                Register
              </button>

              <button
                onClick={() => navigate("/login")}
                className="w-full bg-linear-to-r from-[#E3BA5D] via-[#FFDEAC] to-[#D4AC54] py-2 text-black font-bold rounded"
              >
                Login
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Header