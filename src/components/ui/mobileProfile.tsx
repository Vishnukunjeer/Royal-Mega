import { Link } from "react-router-dom";
import { assets } from "@/assets/assets";
import { useState } from "react";
import MobileFooter from "@/layouts/Mobile";
import { useNavigate } from "react-router-dom";
import { Landmark } from "lucide-react";


export const MobileProfile = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeTab,setActiveTab]= useState("Profile")

     const menu = [
    { name: "Profile"}, { name: "Wallet"}, { name: "Bet History" }, { name: "Account"}, { name: "Settings" }]
      
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}")
  const user = {
    name: storedUser?.email?.split("@")[0] || "User",
    email: storedUser?.email || "user@gmail.com",
  }
  const navigate = useNavigate()
  function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

const historyData = [
  {
    game: "Royal Lotto",
    ticket: "15646874",
    draw: "New lotto 1",
    amount: 20,
    date: "12-01-23, 4:55 PM",
    status: "Loss",
    numbers: [1, 9, 13, 17, 18, 16],
  },
  {
    game: "Royal Lotto",
    ticket: "15646874",
    draw: "New lotto 1",
    amount: 20,
    date: "12-01-23, 4:55 PM",
    status: "Won",
    numbers: [1, 9, 13, 17, 18, 16],
  },
];

    
  return (
    <>
    <nav className="bg-black border-b border-[#D4AC54] lg:hidden sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link to="/">
                <img src={assets.logo} className="w-32 h-8 object-contain" alt="logo" />
              </Link>
    
              <button
                className="text-[#D4AC54] text-2xl focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
    
            {/* DROPDOWN MENU */}
            <div
              className={`absolute left-0 w-full bg-[#111] border-b border-[#D4AC54]/50 transition-all duration-300 ease-in-out overflow-hidden ${
                menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
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
                      className={`flex items-center gap-4 px-6 py-4 hover:bg-white transition-colors ${
                        activeTab === item.name ? "text-[#D4AC54] bg-white/5" : "text-gray-500"
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

            <div className="flex-1 min-w-0  overflow-y-auto bg-black z-30">
            {/* ================= PROFILE ================= */}
            {activeTab === "Profile" && (
              <>
                {/* HEADER */}
                <div className="flex items-center gap-3 bg-[#D4AC54] text-black px-4 py-3 rounded">
        <button onClick={() => navigate(-1)}>←</button>
        <h1 className="font-semibold">User Profile</h1>
      </div>
      <div className="p-6 pb-24 -mt-5">
                <div className="flex justify-between items-center mb-6 ">
                  <h2 className="text-xl font-semibold hidden sm:block">User Profile</h2>
                </div>
                {/* USER */}
                <div className="flex justify-between items-center pb-6 border-b border-white/20">
                  {/* LEFT (IMAGE + INFO) */}
                  <div className="flex items-center gap-4">
                    <img
                      alt="avatar"
                      src="https://i.pravatar.cc/70?img=3"
                      className="w-20  rounded-full"
                    />
                    <div>
                      <p className="text-lg text-white font-extrabold">{user.name}</p>
                      <p className="text-white text-md">{user.email}</p>
                    </div>
                  </div>
                  {/* RIGHT (BUTTONS) */}
                 
                </div>
                {/* FORM */}
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* First Name */}
                  <div>
                    <label className="text-xs text-gray-400 font-bold">First Name</label>
                    <input
                      placeholder="User Name"
                      value={user.name}
                      disabled
                      className=" w-full mt-1 p-3 bg-white rounded text-gray-500"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className="text-xs text-gray-400 font-bold">Last Name</label>
                    <input
                      placeholder="SurName"
                      disabled
                      className=" w-full mt-1 p-3 bg-white rounded text-gray-500"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="text-xs text-gray-400 font-bold">Email</label>
                    <input
                      placeholder="email"
                      value={user.email}
                      disabled
                      className=" w-full mt-1 p-3 bg-white rounded text-gray-500"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="text-xs text-gray-400 font-bold">Phone</label>
                    <div className="flex mt-1">
                      <span className="bg-white px-3 flex items-center rounded-l text-gray-400">
                        +91
                      </span>
                      <input
                        placeholder="975491111"
                        disabled
                        className="w-full p-3 bg-white rounded-r text-gray-500"
                      />
                    </div>
                  </div>
                  {/* DOB */}
                  <div>
                    <label className="text-xs text-gray-400 font-bold">DOB</label>
                    <input
                      placeholder="Date"
                      type="date"
                      disabled
                      className="w-full mt-1 p-3 bg-white rounded text-gray-500 mb-8"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                    
                    <button className="bg-white text-black px-10 py-2 rounded text-sm font-medium">
                      Edit
                    </button>
                    <button className="bg-linear-to-r from-[#D4AC54] to-[#E3BA5D] text-black px-10 py-2 rounded text-sm font-medium">
                      Save
                    </button>
                  </div>
                </div>
                 
              </>
            )}
            {activeTab === "Wallet" && (
                
                <>
                <div className="flex items-center gap-3 bg-[#D4AC54] text-black px-4 py-3 rounded pb-5">
        <button onClick={() => navigate(-1)}>←</button>
        <h1 className="font-semibold">Wallet</h1>
      </div>

      <img src={assets.WalletWallpaper} alt="Wallet" className="absolute h-60 rounded w-100 p-2 pt-4" />
      
                <h2 className=" relative text-2xl m-7 text-white">Wallet</h2>

              <div className="relative">

                <p className="text-black font-semibold">Current Balance</p>
                <p> ₹5,22,850</p>
                <div className="flex justify-between pl-3 pr-3">
                <button className="border border-black  bg-white rounded-2xl px-5 py-1 my-1 font-semibold">Withdraw Balance</button>
                <button className="flex border border-white bg-[#D4AC54] px-5 py-2  m-1 rounded-2xl font-semibold gap-1"><button className="rounded-full border border-black size-5 pb-0.5 ">+</button>Add Balance</button>
              </div>
              <div className="border-2 border-[#D4AC54]">
                <button className="bg-[#D4AC54]">Transaction</button>
              <button>
    
                Payments</button>
              </div>
              </div>

            
              </>
                
            )}
            {activeTab === "Bet History" && (
  <div className="min-h-screen bg-[#0b0b0b] text-white mb-15">

    {/* Header */}
    <div className="flex items-center gap-3 bg-[#D4AC54] text-black px-4 py-3">
      <button onClick={() => navigate(-1)}>←</button>
      <h1 className="font-semibold">History</h1>
    </div>

    {/* Content */}
    <div className="p-4 space-y-4">

      {/* Filters */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
        Game Type
        <select className="bg-transparent border border-yellow-600 rounded-md p-2 text-sm">
          <option>All </option>
        </select>
        </div>
        <div className="flex flex-col"> 
        Draw Name
        <select className="bg-transparent border border-yellow-600 rounded-md p-2 text-sm">
          <option>All</option>
          
        </select>
        </div>
              Date
        <input
          className="col-span-2 bg-transparent border border-yellow-600 rounded-md p-2 text-sm"
          value="20/06/2024 - 25/06/2024"
          readOnly
        />
          Status
        <select className="col-span-2 bg-transparent border border-yellow-600 rounded-md p-2 text-sm">
          <option> All</option>
        </select>
      </div>

      {/* Cards */}
      {historyData.map((item, i) => (
  
        <div key={i} className="border-r border-[#D4AC54] bg-white text-black rounded-xl pt-4 pb-4 space-y-2 pr-1 pl-">
          
          <div className="grid grid-cols-2">
          <div className="flex justify-between text-sm font-medium">
            <span>S.No.</span>
            <span>{i + 1}</span>
            </div>
            <div className="flex justify-between">
            <span className="text-sm">Game Type</span>
            <span className="text-sm">{item.game}</span>
          </div>

          <Row label="Ticket ID" value={item.ticket} />
          <Row label="Draw Name" value={item.draw} />
          <Row label="Ticket Amount" value={`₹${item.amount}`} />
          <Row label="Date" value={item.date} />

          <div className="flex justify-between text-sm">
            <span>Status</span>
            <span className={`font-semibold ${
              item.status === "Loss"
                ? "text-red-500"
                : item.status === "Won"
                ? "text-green-600"
                : "text-yellow-500"
            }`}>
              {item.status}
            </span>
          </div>
          </div>
          

              <div className=" flex justify-between"><span>Selection</span>
          <div className="flex flex-wrap gap-2 pt-2">
            
            {item.numbers.map((n, idx) => (
              <div key={idx} className="border border-yellow-600 rounded-md px-2 py-1 text-xs">
                {n}
              </div>
              
            ))}
          </div>
          </div>

        </div>
       
      ))}
    </div>
  </div>
)}
            {activeTab === "Account" &&(
              <div className="bg-black">
              <div className="flex items-center gap-3 mt-2 bg-[#D4AC54] text-black px-4 py-3 rounded pb-5">
        <button onClick={() => navigate(-1)}>←</button>
        <h1 className="font-semibold">Bank Details</h1>
      </div>
      <button className="text-black border bg-[#D4AC54] flex flex-row font-bold ml-5 px-28 py-4 rounded mt-5" onClick={()=>navigate("/AddAccount")}>
        <Landmark/>
        Add Account</button>
              </div>
            )}

            {activeTab === "Settings" && (
              <>
              <div className="flex items-center gap-3 bg-[#D4AC54] text-black px-4 py-3 rounded pb-5">
        <button onClick={() => navigate(-1)}>←</button>
        <h1 className="font-semibold text-xl">Setting</h1>
      </div>

                {/* 🔹 FORM */}
              
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

                  {/* EMPTY (to keep layout same as design) */}
             

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
                  <button className="bg-black text-white px-6 py-2 rounded border border-[#D4AC54] text-sm" onClick={()=>navigate("/change-password")}>
                    Change password
                  </button>

                  <button className="bg-linear-to-r  px-20 from-[#D4AC54] to-[#E3BA5D] text-black  py-2 rounded text-sm">
                    Save
                  </button>
                </div>
              
              </>
            )}
         </div>
         

            <MobileFooter/>
            </>
  )
}
