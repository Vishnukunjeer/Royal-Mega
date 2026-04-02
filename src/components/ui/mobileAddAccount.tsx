import { Link ,useNavigate} from "react-router-dom";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { Search } from "lucide-react";
import MobileFooter from "@/layouts/Mobile";



export const Addaccount =()=>{
    const [menuOpen,setMenuOpen] = useState(false)
    const [activeTab,setActiveTab]= useState("Profile")
    const menu = [
    { name: "Profile"}, { name: "Wallet"}, { name: "Bet History" }, { name: "Account"}, { name: "Settings" }]
    const navigate =useNavigate()
return(
<div>
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
            <div className="flex items-center gap-3 bg-[#D4AC54] text-black px-4 py-3 rounded mt-2">
        <button onClick={() => navigate(-1)}>←</button>
        <h1 className="font-semibold"> Bank details</h1>

        
      </div>
      <div className="m-5 flex flex-col gap-2">
      <div>
                      
                    <select className=" w-full mt-1 p-3 bg-white rounded text-gray-500"> 
  <option value="">Select Bank Name</option>
  <option value="sbi">SBI</option>
  <option value="hdfc">HDFC</option>
  <option value="icici">ICICI</option>
</select>
                  </div>
                  {/* Last Name */}
                  <div>
                    
                    <input
                      placeholder="User"
                     required
                      className=" w-full mt-1 p-3 bg-white rounded text-gray-900"
                    />
                  </div>
                  
                  <div>
                    
                    <input
                      placeholder="Account number"
                      
                      required
                      className=" w-full mt-1 p-3 bg-white rounded text-gray-900"
                    />
                  </div>
                 
                  <div>
                    
                    <div className="flex mt-1">
                      
                     <input
        type="text"
        placeholder="IFSC Code*"
       className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg bg-white text-gray-900 outline-none"
      />

      {/* Icon Button */}
      <button
        className="bg-[#D4AC54] px-4 flex items-center justify-center rounded-r-lg"
      >
        <Search size={18} color="black" />
      </button>
                    </div>
                  </div>
                  </div>
                <p className="text-[10px] text-white mt-44">For Security Reasons, Withdrawal Is Only Allowed Account Owner. If You Have Any Issues, Do Not Hesitate To Contact Our <span className="text-red-500">Customer Service</span> </p>  
                <div className="flex gap-4 justify-between mt-1">
                  <button className="bg-black text-white px-8 py-2 rounded border ml-2 border-[#D4AC54] text-sm">
                    Reset
                  </button>

                  <button className="bg-linear-to-r  px-20 from-[#D4AC54] to-[#E3BA5D] text-black  py-2 rounded text-sm border border-white">
                    Add Account
                  </button>
                </div>
                <MobileFooter/> 
</div>
)
}