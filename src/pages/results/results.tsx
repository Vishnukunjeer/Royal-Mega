import Header from "@/layouts/Header"

import Footer from "@/layouts/Footer"
import { assets } from "@/assets/assets"
import { Calendar, ChevronLeft, ChevronRight, } from 'lucide-react';
import { useState, useEffect } from 'react';
import MobileFooter from "@/layouts/Mobile";
import {Link} from "react-router-dom"
import Hero from "../Hero/Hero";

const Result = () => {

    const [activeDrawIndex, setActiveDrawIndex] = useState(0);
    

  
    // Timer State
    const [timeLeft, setTimeLeft] = useState(3660);

     const hours = (Math.floor(timeLeft / 3600));
  const minutes = (Math.floor((timeLeft % 3600) / 60));
  const seconds = (timeLeft % 60);


    const [menuOpen, setMenuOpen] = useState(false);
    
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
  
    const TICKET_PRICE = 40.00; 
  
    const availableDraws = [
      {
        id: "New lotto 1",
        name: "Mega Jackpot",
        prize: "₹5,00,00,000",
        date: "Tuesday, July 9, 2024",
        image: assets.MegaJackpot
      },
      {
        id: "New lotto 2",
        name: "Super Jackpot",
        prize: "₹2,50,00,000",
        date: "Wednesday, July 10, 2024",
        image: assets.MegaJackpot 
      }
    ];
    const winners = [
  {
    name: "Richard william",
    time: "2 minutes ago",
    payout: "$536.25",
    numbers: ["01","25","34","43","55","02"],
    img: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Rebecca Gaby",
    time: "13 minutes ago",
    payout: "$235.02",
    numbers: ["10","22","30","47","53","10"],
    img: "https://i.pravatar.cc/100?img=5"
  },
  {
    name: "Rebecca Gaby",
    time: "13 minutes ago",
    payout: "$235.02",
    numbers: ["10","22","30","47","53","10"],
    img: "https://i.pravatar.cc/100?img=6"
  }
];
  const lotterywinners = [
    {
      name: "Richard william",
      time: "2 minutes ago",
      payout: "₹536.25",
      numbers: ["A","J","1","2","3","6","8","6"],
      img: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Rebecca Gaby",
      time: "13 minutes ago",
      payout: "₹325.02",
      numbers: ["A","J","1","2","3","6","8","6"],
      img: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Rebecca Gaby",
      time: "13 minutes ago",
      payout: "₹325.02",
      numbers: ["A","J","1","2","3","6","8","6"],
      img: "https://i.pravatar.cc/100?img=6"
    }
  ];



     const handlePrevDraw = () => {
    setActiveDrawIndex((prev) => (prev === 0 ? availableDraws.length - 1 : prev - 1));
  };

  const handleNextDraw = () => {
    setActiveDrawIndex((prev) => (prev === availableDraws.length - 1 ? 0 : prev + 1));
  };
  

  
  return (
    <div className="bg-black text-white">

      <Header className="hidden sm:block" />
    <div className=" hidden sm:block bg-black text-white relative overflow-hidden ">
    <nav className="bg-black border-b border-[#d4af37] lg:hidden sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <img src={assets.logo} className="w-32 h-8 object-contain" alt="logo" />
          </Link>

          <button
            className="text-[#d4af37] text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* DROPDOWN MENU */}
        <div
          className={`absolute left-0 w-full bg-[#111] border-b border-[#d4af37]/50 transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          
        </div>
      </nav>
      </div>

        {/* 🔹 LEFT SIDEBAR (Pagination Style) */}
        <div className="hidden sm:block">
        <Hero/>
        </div>

     

    <div className="mt-2  bg-[#D0A549] text-black font-bold mb-5 p-3 lg:hidden" >
     Most Recent Winners
    </div>
<div className="hidden sm:block">
    <div className="border-b border-[#D0A549]"></div>
      
      <div className="text-center mt-16 mb-2.5">
        <p className="text-xs tracking-widest text-gray-400">ALL LOTTERIES</p>
        <img src={assets.line} alt="line" className="mx-auto"/>
        <h2 className="text-3xl text-[#d4af37] font-bold mt-2">Royal Lotto</h2>
      </div>
        
       <div className="w-250 ml-60 max-w-300 bg-linear-to-r from-[#D0A549] via-[#8c6721] to-black  md:p-6 mb-8 flex items-center relative shadow-2xl z-10 overflow-hidden rounded-2xl">
            
            {/* Left Button */}
            <button onClick={handlePrevDraw} className="absolute left-4 z-20 p-2 border-2 border-black rounded-full hover:bg-black/10 transition text-black bg-white/20">
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            {/* Viewport for Slider */}
            <div className="overflow-hidden w-150 ml-10">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeDrawIndex * 100}%)` }}
              >
                {availableDraws.map((draw) => (
                  <div key={draw.id} className="min-w-full flex justify-center px-4">
                    <div className="w-full max-w-2xl bg-linear-to-r from-[#e1bb58] via-[#d1a646] to-[#b98d35] rounded-xl p-5 flex items-center justify-between border border-white/20 relative shadow-lg text-black">
                      <div className="flex items-center gap-4 flex-1">
                        <img src={draw.image} alt="jackpot" className="w-20 h-20 object-contain drop-shadow-xl" />
                        <div>
                          <h2 className="text-2xl font-black leading-tight">{draw.name}</h2>
                          <p className="font-semibold">Mega Prize: <span className="text-xl text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">{draw.prize}</span></p>
                          <p className="text-sm font-bold opacity-80 text-black">Ticket Price:<span className='text-white'> ₹{TICKET_PRICE}</span></p>
                          <div className="flex items-center text-[11px] mt-1 font-bold">
                            <Calendar size={12} className="mr-1" /> {draw.date}
                          </div>
                        </div>
                      </div>

                      {/* Timer */}
                      <div className="flex flex-col items-center border-l border-black/10 pl-4">
                        <span className="text-[15px] uppercase tracking-widest pb-6">Timer</span>
                        <div className='flex gap-3'>
                        <p className='text-[9px]'>hours</p>
                          <p className='text-[9px]'>minutes</p>
                          <p className='text-[9px]'>seconds</p>
                          </div>
                        <div className="flex flex-row">
                          
                          <div className='flex gap-2'>
                          {[hours, minutes, seconds].map((unit, i) => (
                            <div key={i} className="bg-white px-2 py-1 rounded text-black font-mono font-bold text-sm shadow-sm">{unit}</div>
                          ))}
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          
        <div className="hidden xl:flex items-center shrink-0 z-10 pr-15">
          <span className="text-[8px] text-white/60 tracking-[0.25em] font-medium" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            SLIDE FOR MORE DRAWS
          </span>
          <button onClick={handleNextDraw} className=" z-20 p-2 ml-2 border-2 border-white rounded-full hover:bg-white/10 transition text-white bg-black/20">
              <ChevronRight size={24} strokeWidth={3} />
            </button>
        </div>
                      <div className="flex items-center gap-3 shrink-0 z-10 mt-4 xl:mt-0 ml-auto">

              <div className="flex flex-col gap-2">
                <button className="bg-black border border-[#c99c3a] text-[#f8f8f8] font-medium text-[13px] tracking-[0.03em] px-6 py-1.75 rounded-full hover:bg-[#c99c3a]/20 transition whitespace-nowrap shadow-md leading-none flex items-center justify-center">
                  Winners
                </button>
                <button className="bg-black border border-[#c99c3a] text-[#f8f8f8] font-medium text-[13px] tracking-[0.03em] px-6 py-1.75 rounded-full hover:bg-[#c99c3a]/20 transition whitespace-nowrap shadow-md leading-none flex items-center justify-center">
                  Prizes & Info
                </button>
              </div>

            </div>
          </div>
          </div>


          
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-5xl mx-auto">

      {/* 🔹 TITLE */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Most Recent Winners
      </h2>

      {/* 🔥 CARDS */}
      <div className="grid md:grid-cols-2 gap-6">

        {winners.map((winner, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center shadow-sm"
          >

            {/* 👤 IMAGE */}
            <img
              src={winner.img}
              alt="user"
              className="w-14 h-14 rounded-full object-cover"
            />

            {/* 📄 CONTENT */}
            <div className="flex-1">

              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[#b58a2c]">
                  {winner.name}
                </span>{" "}
                has won {winner.time}.
              </p>

              <p className="text-sm text-gray-500 mt-1">
                • Payout :{" "}
                <span className="text-[#2a9d8f] font-semibold">
                  {winner.payout}
                </span>
              </p>

              {/* 🔢 NUMBERS */}
              <div className="flex gap-2 mt-3 flex-wrap">
                {winner.numbers.map((num, idx) => (
                  <span
                    key={idx}
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-xs border 
                    ${
                      idx === winner.numbers.length - 1
                        ? "border-orange-400 text-orange-500"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {num}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* 🔘 BUTTON */}
      <div className="flex justify-end mt-8">
        <button className="bg-[#d4af37] hover:bg-[#c49b2f] text-black px-7 py-3 rounded-full text-sm font-medium shadow-md flex items-center gap-2 transition">
          <span>See Full Table</span> <ChevronRight size={18} className="mt-px" />
        </button>
      </div>

      <div className="absolute right-0 -bottom-175 md:right-10 w-75 md:w-112.5 opacity-40 pointer-events-none z-0 hidden sm:block">
         <img src={assets.mask} alt="Mask Background" className="w-full h-full object-contain" />
      </div>

     

    </div>
     <div className="border-b border-[#D0A549] mb-10 pb-12"></div>
        <div className="hidden sm:block">
      <div className="text-center mt-16">
        <img src={assets.line} alt="line" className="mx-auto"/>
        <h2 className="text-3xl text-[#d4af37] font-bold mt-2">Lottery</h2>
      </div>
       <div className="min-h-screen bg-black p-6">

      {/* 🔶 TOP HEADER */}
      <div className="w-full h-full max-w-6xl m-6 p-8 bg-linear-to-r from-[#d4af37] via-[#a07a2c] to-black mx-auto rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.3)]">

      <div className="bg-linear-to-r from-[#d4af37] via-[#a07a2c] to-black rounded-2xl p-6 mb-6 hidden sm:block">

        <div className="flex justify-between items-center flex-wrap gap-4">

          <h1 className="text-3xl font-bold text-black">
           <u> Lottery
           </u>
          </h1>

          {/* 🔘 TABS */}
          <div className="flex gap-3">
            <button className="bg-[#d4af37] text-black px-5 py-2 rounded-full text-sm font-medium">
              Winners
            </button>

            <button className="bg-black text-white px-5 py-2 rounded-full text-sm border border-white/20">
              Prizes & Info
            </button>

            <button className="bg-black text-white px-5 py-2 rounded-full text-sm border border-white/20">
              View All Cards
            </button>
          </div>

        </div>
      </div>

      {/* 🔳 MAIN CARD */}
      <div className="bg-white rounded-2xl p-8 md:p-12 pb-16 max-w-6xl mx-auto">

        {/* 🔹 TITLE */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Most Recent Winners
        </h2>

        {/* 🔥 CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {lotterywinners.map((winner, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 items-center"
            >

              {/* 👤 IMAGE */}
              <img
                src={winner.img}
                alt="user"
                className="w-14 h-14 rounded-full object-cover"
              />

              {/* 📄 CONTENT */}
              <div className="flex-1">

                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#b58a2c]">
                    {winner.name}
                  </span>{" "}
                  has won {winner.time}.
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  • Payout :{" "}
                  <span className="text-[#2a9d8f] font-semibold">
                    {winner.payout}
                  </span>
                </p>

                {/* 🔢 NUMBERS */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {winner.numbers.map((num, idx) => (
                    <span
                      key={idx}
                      className="w-7 h-7 flex items-center justify-center rounded-full text-xs border border-gray-300 text-gray-600"
                    >
                      {num}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* 🔘 BUTTON */}
        <div className="flex justify-end mt-8">
        <button className="bg-[#d4af37] hover:bg-[#c49b2f] text-black px-7 py-3 rounded-full text-sm font-medium shadow-md flex items-center gap-2 transition">
          <span>See Full Table</span> <ChevronRight size={18} className="mt-px" />
        </button>
      </div>
        </div>
      </div>
    </div>
          </div>
    
      {/* 🟡 CTA */}
      <div className="hidden sm:block">
      <div className="bg-[#dfb354] mt-20 py-4 text-center">

        <h2 className="text-black text-2xl mb-4 ">
          If you have any query about lottery or anything!
        </h2>

        <button className="border border-black px-6 py-2 rounded-full">
          Contact Us
        </button>

      </div>
      </div>

      <Footer className=" hidden sm:block md:block"/>
      <MobileFooter className="block lg:hidden "/>
    </div>
  )
}

export default Result;