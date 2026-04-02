import Header from "@/layouts/Header"

import Footer from "@/layouts/Footer"
import { assets } from "@/assets/assets"
import { Calendar, ChevronLeft, ChevronRight, } from 'lucide-react';
import { useState, useEffect ,useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  'swiper/css';
import 'swiper/css/navigation';
import MobileFooter from "@/layouts/Mobile";
import {Link} from "react-router-dom"

const Result = () => {

    const [activeDrawIndex, setActiveDrawIndex] = useState(0);
    const swiperRef = useRef<any>(null);

  const numbers = [1,2,3,4,5,6,7,8,9,10];
  
    // Timer State
    const [timeLeft, setTimeLeft] = useState(3660);

     const hours = (Math.floor(timeLeft / 3600));
  const minutes = (Math.floor((timeLeft % 3600) / 60));
  const seconds = (timeLeft % 60);

   const menu = [
    { name: "Lottery" }]

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Result")
  
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
  
  const currentDraw = availableDraws[activeDrawIndex];

  
  return (
    <div className="bg-black text-white">

      <Header className="hidden sm:block" />
    <div className=" hidden sm:block bg-black text-white relative overflow-hidden py-10">
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
      <div
              className="absolute left-0 top-0 w-[40%] h-full opacity-60 pointer-events-none"
              style={{
                backgroundImage: `url(${assets.HeroDesign})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
            <div
              className="absolute right-0 top-0 w-[40%] h-full opacity-60 pointer-events-none"
              style={{
                backgroundImage: `url(${assets.HeroDesign})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                transform: "scaleX(-1)",
              }}
            />

      {/* 🔶 BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#d4af37,transparent_40%)]" />

      {/* 🔶 MAIN CONTAINER */}
      <div className="relative grid grid-cols-12 items-center px-6 py-4 h-80">

        {/* 🔹 LEFT SIDEBAR (Pagination Style) */}
        <div className="flex flex-col items-center justify-center">

      {/* 🔼 PREVIOUS BUTTON */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="mb-3 px-4 py-1 bg-[#d4af37] text-black rounded-md text-sm font-medium"
      >
        ← Previous
      </button>

      {/* 🎰 SWIPER */}
      <Swiper
        direction="vertical"
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        spaceBetween={15}
        
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-37.5"
      >
        {[...numbers, ...numbers, ...numbers].map((num, index) => (
          <SwiperSlide key={index}>
            <div className="w-10 h-10 flex items-center justify-center text-white text-lg">
              {num}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔽 NEXT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="mt-3 px-4 py-1 bg-[#d4af37] text-black rounded-md text-sm font-medium"
      >
        Next →
      </button>
    </div>

        {/* 🔹 CENTER CONTENT */}
        <div className="col-span-5 pl-6">

          <h1 className="text-2xl font-semibold mb-3">
            Lottery
          </h1>

          <p className="text-gray-400 text-sm max-w-md">
            Join the excitement with Royal Mega’s Lottery games, offering you
            the chance to turn dreams into reality with every ticket.
            Whether you're playing for fun or aiming for a life-changing win,
            our easy-to-play lotteries bring you closer to incredible prizes.
            Try your luck today and see if fortune favours you!
          </p>

        </div>

        {/* 🔹 RIGHT CONTENT (PRIZE + BUTTON + IMAGE) */}
        <div className="col-span-3 flex flex-col items-center justify-center">

          {/* 💰 PRIZE */}
            <h2 className="text-4xl font-bold mb-3">
              ₹<span className="text-6xl">5</span>cr
            </h2>

            <button className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded flex items-center gap-2">
              ▶ Buy Tickets
            </button>
          </div>

          {/* 🎱 IMAGE */}
          <div className="col-span-3 flex justify-center">
            <img
              src={assets.snooker_logo} // 🔁 replace with your image path
              alt="Lottery Balls"
              className="w-[320px]"
            />
          </div>

      </div>
    </div>

    <div className="mt-2  bg-[#D0A549] text-black font-bold mb-5 p-3 lg:hidden" >
     Most Recent Winners
    </div>
<div className="hidden sm:block">
    <div className="border-b border-[#D0A549]"></div>
      {/* 🔶 ALL LOTTERIES TITLE */}
      <div className="text-center mt-16 mb-2.5">
        <p className="text-xs tracking-widest text-gray-400">ALL LOTTERIES</p>
        <img src={assets.line} alt="line" className="mx-auto"/>
        <h2 className="text-3xl text-[#d4af37] font-bold mt-2">Royal Lotto</h2>
      </div>
        
        <div className="w-full max-w-5xl mx-auto bg-linear-to-r from-[#D0A549] via-[#8c6721] to-black p-4 md:p-6 mb-8 flex flex-col xl:flex-row items-center justify-between gap-5 relative shadow-2xl z-10 overflow-hidden rounded-2xl">
        
        {/* LEFT ARROW */}
        <button onClick={handlePrevDraw} aria-label='prev' className="hidden xl:flex p-2 border-2 border-black rounded-full hover:bg-black/10 transition shrink-0 text-black z-10">
          <ChevronLeft size={20} strokeWidth={2.5} 
  
          />
        </button>

        {/* GOLD CARD */}
        <div className="xl:max-w-1/2 bg-linear-to-r from-[#e1bb58] via-[#d1a646] to-[#b98d35] rounded-xl p-4 md:p-5 flex flex-row md:flex-row items-center justify-between border border-white/20 relative z-10 shadow-lg">
          <div className="  flex flex-row md:flex-row items-center gap-4 w-full">
            <div className="shrink-0 mb-2 md:mb-0">
              <img src={currentDraw.image} alt="jackpot-ball" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-xl" />
            </div>

            <div className="flex-1 text-black text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-black mb-1 text-gray-900 leading-tight">{currentDraw.name}</h2>
              <div className="flex flex-col sm:flex-row items-center md:justify-start gap-1 sm:gap-2 mb-1">
                <span className="text-[13px] font-semibold text-gray-800">Mega Prize:</span>
                <span className="text-lg md:text-xl font-black text-white" style={{ WebkitTextStroke: '1px black' }}>
                  {currentDraw.prize}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-[13px] font-semibold text-gray-800">Ticket Price:</span>
                <span className="text-[15px] font-black text-white" style={{ WebkitTextStroke: '0.5px black' }}>
                  ₹{TICKET_PRICE}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-[11px] font-semibold text-gray-900">
                <Calendar size={12} className="mr-1.5" /> {currentDraw.date}
              </div>
            </div>

            {/* LIVE TIMER */}
            <div className="flex flex-col items-center justify-center shrink-0 mt-4 md:mt-0 md:mr-2">
              <span className="text-[9px] font-bold text-gray-800 mb-1 tracking-widest uppercase">Timer</span>
              <div className="flex gap-1.5 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] text-gray-800 mb-0.5">Hours</span>
                  <div className="bg-white px-2 py-0.5 rounded text-black font-mono font-bold text-sm">{hours}</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8px] text-gray-800 mb-0.5">Minutes</span>
                  <div className="bg-white px-2 py-0.5 rounded text-black font-mono font-bold text-sm">{minutes}</div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8px] text-gray-800 mb-0.5">Seconds</span>
                  <div className="bg-white px-2 py-0.5 rounded text-black font-mono font-bold text-sm">{seconds}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-1.5 w-16 bg-[#ff4d4d] rounded-br-xl rounded-tl-lg shadow-inner"></div>
        </div>
        
        {/* SLIDER TEXT */}
        <div className="hidden xl:flex items-center shrink-0 z-10 pl-2">
          <span className="text-[8px] text-white/60 tracking-[0.25em] font-medium" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            SLIDE FOR MORE DRAWS
          </span>
        </div>

        {/* RIGHT ARROW (Middle Positioned as per screenshot) */}
        <button onClick={handleNextDraw} className="hidden xl:flex p-1.5 border-[1.5px] border-white rounded-full hover:bg-white/10 transition shrink-0 text-white z-10 mr-4" aria-label='Next-draw'>
          <ChevronRight size={18} strokeWidth={2.5}
           />
        </button>

        <div className="flex items-center gap-3 shrink-0 z-10 mt-4 xl:mt-0 ml-auto">
          
          {/* Stacked Black Buttons - 'flex-col' keeps them stacked exactly one above another */}
          <div className="flex gap-2">
            <button className="bg-[#c99c3a] border border-black text-black font-medium text-[13px] tracking-[0.03em] px-6 py-2 rounded-full hover:bg-[#c99c3a]/20 transition whitespace-nowrap shadow-md leading-none flex items-center justify-center">
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

      <div className="absolute  right-0 bottom-0 md:bottom-0 md:right-10 w-75 md:w-112.5 opacity-40 pointer-events-none z-0">
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