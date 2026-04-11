import { assets } from "@/assets/assets"
import MobileFooter from "@/layouts/Mobile"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const MobilePassword = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Profile")
  const navigate = useNavigate()
  const menu = [
    { name: "Profile" }, { name: "Wallet" }, { name: "Bet History" }, { name: "Account" }, { name: "Settings" }]
  return (
    <>

      <nav className="bg-black border-b border-primary   lg:hidden sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={assets.logo} className="w-32 h-8 object-contain" alt="logo" />
          </Link>

          <button
            className="text-primary   text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* DROPDOWN MENU */}
        <div
          className={`absolute left-0 w-full bg-[#111] border-b border-primary  /50 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col py-2">
            {menu.map((item) => {

              return (
                <div
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center gap-4 px-6 py-4 hover:bg-white transition-colors ${activeTab === item.name ? "text-primary   bg-white/5" : "text-gray-500"
                    }`}
                >

                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
      <div
        className="absolute left-0  w-full h-[50%] opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url(${assets.HeroDesign})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}


      />
      <div className="flex items-center gap-3 bg-primary   text-black px-4 py-3 rounded pb-5">
        <button onClick={() => navigate(-1)}>←</button>
        <h1 className="font-semibold text-xl">Change Password</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Password */}
        <div className="relative">
          <label className="text-lg text-gray-400 font-bold">Current Password</label>

          <input
            type="password"
            placeholder="********"
            className="w-full mt-1 p-3 bg-white rounded text-gray-700"
          />
        </div>

        {/* New Password */}
        <div className="relative">
          <label className="text-lg text-gray-400 font-bold">New Password</label>

          <input
            type="password"
            placeholder="********"
            className="w-full mt-1 p-3 bg-white rounded text-gray-700"
          />


        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="text-lg text-gray-400" font-bold >Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            className="w-full mt-1 p-3 bg-white rounded text-gray-700"
          />


        </div>


      </div>
      <div className="flex gap-4 justify-between mt-40">
        <button className="bg-black text-white px-8 py-2 rounded border ml-2 border-primary   text-sm">
          Cancel
        </button>

        <button className="bg-linear-to-r  px-25 from-primary   to-[#E3BA5D] text-black  py-2 rounded text-sm border border-white">
          Save
        </button>
      </div>
      <MobileFooter />
    </>
  )
}