import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import { useState } from "react"
import { assets } from "@/assets/assets"
import { Calendar, CircleUser, Wallet, ScrollText, Settings } from "lucide-react"
import MobileFooter from "@/layouts/Mobile"
import { MobileProfile } from "@/components/ui/mobileProfile"

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Profile")
  const menu = [
    { name: "Profile", icon: CircleUser }, { name: "Wallet", icon: Wallet }, { name: "Bet History", icon: ScrollText }, { name: "Account", icon: Wallet }, { name: "Settings", icon: Settings }]

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}")
  const user = {
    name: storedUser?.email?.split("@")[0] || "admin",
    email: storedUser?.email || "admin@gmail.com",
  }

  return (
    <>
      <div className="lg:hidden md:hidden">
        <MobileProfile />
      </div>
      <div className="bg-black text-white min-h-screen hidden sm:block">

        <Header className="hidden sm:block" />
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
        <div>

        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 flex min-h-screen bg-black/25">
          <div className="border border-[#d4af37]/40 rounded-xl flex overflow-hidden min-h-175 w-full">

            {menuOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setMenuOpen(false)}
              />
            )}
            <div
              className={`border border-[#d4af37]/40  h-full w-64 bg-black z-50 transform transition-transform duration-300
  ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
  sm:translate-x-0 sm:static sm:block`}
            ><div className="border-b border-[#d4af37]/40 mb-2">
                <div className="flex flex-col items-center m-6">
                  <img src={assets.logo1} alt="logo" className="w-50 m-2" />
                </div>
              </div>

              <div className="space-y-3 text-sm">
                {menu.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`px-4 py-2 rounded-full cursor-pointer -ml-4 mr-2 whitespace-nowrap flex flex-row  ${activeTab === item.name
                        ? "bg-[#D4AC54] text-black font-semibold"
                        : "hover:bg-[#111]"
                        }`}
                    >
                      <Icon className="w-4 h-4 ml-5 mr-1" />
                      {item.name}
                    </div>
                  )
                })}
              </div>
            </div>
            {/* 🔷 RIGHT CONTENT */}
            <div className="flex-1 min-w-0 p-8 overflow-hidden bg-black z-30">

              {activeTab === "Profile" && (
                <>

                  <div className="flex justify-between items-center mb-6 ">
                    <h2 className="text-xl font-semibold hidden sm:block">User Profile</h2>
                  </div>

                  <div className="flex justify-between items-center pb-6 border-b border-white/20">

                    <div className="flex items-center gap-4">
                      <img
                        alt="avatar"
                        src="https://i.pravatar.cc/70?img=3"
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-lg">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                    {/* RIGHT (BUTTONS) */}
                    <div className="flex flex-col gap-3">
                      <button className="bg-linear-to-r from-[#D4AC54] to-[#E3BA5D] text-black px-10 py-2 rounded-full text-sm font-medium hidden sm:block">
                        Save
                      </button>
                      <button className="bg-white text-black px-10 py-2 rounded-full text-sm font-medium hidden sm:block">
                        Edit
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">

                    <div>
                      <label className="text-xs text-gray-400">First Name</label>
                      <input
                        placeholder="User Name"
                        value={user.name}
                        disabled
                        className=" w-full mt-1 p-3 bg-[#222] rounded text-gray-300"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Last Name</label>
                      <input
                        placeholder="Patel"
                        disabled
                        className=" w-full mt-1 p-3 bg-[#222] rounded text-gray-300"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Email</label>
                      <input
                        placeholder="email"
                        value={user.email}
                        disabled
                        className=" w-full mt-1 p-3 bg-[#222] rounded text-gray-300"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Phone</label>
                      <div className="flex mt-1">
                        <span className="bg-[#222] px-3 flex items-center rounded-l text-gray-400">
                          +1
                        </span>
                        <input
                          placeholder="975491111"
                          disabled
                          className="w-full p-3 bg-[#222] rounded-r text-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">DOB</label>
                      <input
                        placeholder="Date"
                        type="date"
                        disabled
                        className="w-full mt-1 p-3 bg-[#222] rounded text-gray-300"
                      />
                    </div>
                  </div>
                </>
              )}

              {activeTab === "Wallet" && (
                <>
                  <h2 className="text-xl mb-6">Wallet</h2>

                  <div className="bg-[#111] p-6 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="text-gray-400">Balance</p>
                      <h1 className="text-3xl text-[#d4af37]">₹12,500</h1>
                    </div>

                    <button className="bg-[#d4af37] text-black px-5 py-2 rounded-full">
                      Add Money
                    </button>
                  </div>
                </>
              )}

              {/* ================= HISTORY ================= */}
              {activeTab === "Bet History" && (
                <div className="bg-[#111] p-5 rounded-xl border border-[#d4af37]/30">

                  {/* 🔹 TITLE */}
                  <h2 className="text-lg mb-5 border-b border-[#d4af37] pb-2 text-white">
                    History
                  </h2>


                  <div className="flex flex-wrap gap-4 mb-6 text-xs text-gray-400">

                    <div className="flex flex-col">
                      <label className="mb-1">Game</label>
                      <select className="bg-[#111] border border-[#d4af37] px-3 py-1.5 rounded text-xs text-white" aria-label="game">
                        <option>All</option>
                        <option>Royal Lotto</option>
                        <option>Lottery</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-1">Draw Name</label>
                      <select className="bg-[#111] border border-[#d4af37] px-3 py-1.5 rounded text-xs text-white" aria-label="DrawName">
                        <option>All</option>
                      </select>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-col items-start relative">
                        <label className="mb-1">Date</label>
                        <input
                          aria-label="Date"
                          type="text"
                          value="20/06/2024 - 25/06/2024"
                          readOnly
                          className="bg-[#111] border border-[#d4af37] px-3 py-1.5 rounded text-xs text-white w-50"
                        />
                        <p className="absolute right-2 top-6"><Calendar className="size-4.5 text-white
        " /></p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-1">Status</label>
                      <select className="bg-[#111] border border-[#d4af37] px-3 py-1.5 rounded text-xs text-white" aria-label="Status">
                        <option>All</option>
                        <option>Won</option>
                        <option>Loss</option>
                        <option>Pending</option>
                      </select>
                    </div>

                  </div>


                  <div className="border border-[#d4af37]/40 rounded-xl overflow-x-auto scrollbar-hide max-w-full">


                    <div className="bg-linear-to-r from-[#d4af37] to-[#a07a2c] text-black text-xs font-semibold flex min-w-212.5 px-3 py-2 rounded-t-xl">

                      <div className="w-10">S.N.</div>
                      <div className="w-27.5">Ticket ID</div>
                      <div className="w-35">Date/Time</div>
                      <div className="w-27.5">Game Type</div>
                      <div className="w-30">Draw Name</div>
                      <div className="w-37.5">Selection</div>
                      <div className="w-20 text-right">Amount</div>
                      <div className="w-25 text-right">Status</div>

                    </div>


                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                      <div
                        key={i}
                        className="flex min-w-212.5 px-3 py-2 border-t border-gray-800 items-center text-xs text-white hover:bg-white/5 transition"
                      >

                        <div className="w-10">{i}</div>

                        <div className="w-27.5">
                          {Math.floor(100000000 + Math.random() * 900000000)}
                        </div>

                        <div className="w-35">12-01-23, 4:55 PM</div>

                        <div className="w-27.5">
                          {i % 2 === 0 ? "Lottery" : "Royal Lotto"}
                        </div>

                        <div className="w-30">
                          New lotto {i}
                        </div>


                        <div className="w-37.5 flex gap-1">
                          {[1, 9, 13, 17, 18, 16].map((n) => (
                            <span
                              key={n}
                              className="w-5 h-5 bg-[#f1e3c1] text-black text-[10px] flex items-center justify-center rounded"
                            >
                              {n}
                            </span>
                          ))}
                        </div>

                        <div className="w-20 text-right">
                          ${i * 10}
                        </div>

                        <div className="w-25 text-right">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-medium
              ${i % 3 === 0
                                ? "bg-green-500"
                                : i % 2 === 0
                                  ? "bg-yellow-400 text-black"
                                  : "bg-red-500"
                              }`}
                          >
                            {i % 3 === 0 ? "Won" : i % 2 === 0 ? "Pending" : "Loss"}
                          </span>
                        </div>

                      </div>
                    ))}

                  </div>


                  <div className="flex justify-end gap-2 mt-5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        className={`w-7 h-7 border border-[#d4af37] rounded text-xs ${n === 1 ? "bg-[#d4af37] text-black" : "text-white"
                          }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>

                </div>
              )}


              {activeTab === "Account" && (
                <>
                  <h2 className="text-xl mb-6">Bank Details</h2>
                  <button className="bg-[#d4af37] text-black px-5 py-2 rounded">
                    + Add Account
                  </button>
                </>
              )}


              {activeTab === "Settings" && (
                <>
                  {/* 🔹 HEADER */}
                  <div className="flex justify-between items-center border-b border-[#d4af37] pb-4 mb-6">
                    <h2 className="text-xl font-semibold">Change Password</h2>


                  </div>

                  {/* 🔹 FORM */}
                  <div className="flex gap-4 justify-end">
                    <button className="bg-white text-black px-6 py-2 rounded-full text-sm">
                      Change password
                    </button>

                    <button className="bg-linear-to-r from-[#D4AC54] to-[#E3BA5D] text-black px-6 py-2 rounded-full text-sm">
                      Save
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">



                    {/* Current Password */}
                    <div className="relative">
                      <label className="text-xs text-gray-400">Current Password</label>

                      <input
                        type="password"
                        placeholder="********"
                        className="w-full mt-1 p-3 bg-white rounded text-gray-700"
                      />


                    </div>



                    {/* New Password */}
                    <div className="relative">
                      <label className="text-xs text-gray-400">New Password</label>

                      <input
                        type="password"
                        placeholder="********"
                        className="w-full mt-1 p-3 bg-white rounded text-gray-700"
                      />


                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                      <label className="text-xs text-gray-400">Confirm Password</label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full mt-1 p-3 bg-white rounded text-gray-700"
                      />


                    </div>

                  </div>
                </>
              )}

            </div>

          </div>

        </div>
        <div className="lg:hidden">
          <MobileFooter />
        </div>
        <Footer className=" hidden sm:block md:block" />

      </div>
    </>
  )
}

export default Profile