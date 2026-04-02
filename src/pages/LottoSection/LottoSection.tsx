import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { Calendar, ChevronLeft, ChevronRight, X, RefreshCw } from 'lucide-react';
import { assets } from '@/assets/assets';
import MobileLotto from '@/components/ui/mobileLotto';

const formatNumber = (num: number) => num.toString().padStart(2, '0');

export default function LottoSection() {
  const dispatch = useDispatch();
  
  const [selectedMain, setSelectedMain] = useState<number[]>([4, 16, 22, 30, 38]);
  const [selectedMega, setSelectedMega] = useState<number | null>(6);
  const [activeDrawIndex, setActiveDrawIndex] = useState(0);

  // Timer State
  const [timeLeft, setTimeLeft] = useState(3660);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = formatNumber(Math.floor(timeLeft / 3600));
  const minutes = formatNumber(Math.floor((timeLeft % 3600) / 60));
  const seconds = formatNumber(timeLeft % 60);

  const MAX_MAIN_BALLS = 5;
  const TOTAL_MAIN_NUMBERS = 69;
  const TOTAL_MEGA_NUMBERS = 26;
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

  const toggleMainBall = (num: number) => {
    if (selectedMain.includes(num)) {
      setSelectedMain(selectedMain.filter((n) => n !== num));
    } else if (selectedMain.length < MAX_MAIN_BALLS) {
      setSelectedMain([...selectedMain, num].sort((a, b) => a - b));
    }
  };

  const toggleMegaBall = (num: number) => {
    setSelectedMega(selectedMega === num ? null : num);
  };

  const clearSelection = () => {
    setSelectedMain([]);
    setSelectedMega(null);
  };

  const autoSelect = () => {
    const newMain = new Set<number>();
    while (newMain.size < MAX_MAIN_BALLS) {
      newMain.add(Math.floor(Math.random() * TOTAL_MAIN_NUMBERS) + 1);
    }
    setSelectedMain(Array.from(newMain).sort((a, b) => a - b));
    setSelectedMega(Math.floor(Math.random() * TOTAL_MEGA_NUMBERS) + 1);
  };

  const handleAddToCart = () => {
    if (selectedMain.length !== 5 || !selectedMega) {
      alert("Please select 5 Main balls and 1 Mega ball!");
      return;
    }

    dispatch(addToCart({
      drawName: availableDraws[activeDrawIndex].id,
      sequence: { main: selectedMain, mega: selectedMega },
      price: TICKET_PRICE ,
    }));
    
    alert("Ticket added to cart!");
  };

  const handlePrevDraw = () => {
    setActiveDrawIndex((prev) => (prev === 0 ? availableDraws.length - 1 : prev - 1));
  };

  const handleNextDraw = () => {
    setActiveDrawIndex((prev) => (prev === availableDraws.length - 1 ? 0 : prev + 1));
  };

  const currentDraw = availableDraws[activeDrawIndex];

  return (
    <>
    <div className='block lg:hidden'> <MobileLotto /></div>
    <div className="hidden lg:flex min-h-screen bg-black text-white font-sans relative overflow-hidden flex-col items-center py-8 md:py-12 px-2 md:px-8">
     
      {/* <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30" 
        style={{ backgroundImage: `url(${assets.Design2})`, backgroundRepeat: 'repeat', backgroundSize: '200px' }}
      ></div> */}
      <div className='hidden sm:block'>
      {/* Half Circle Background */}
      <div className="absolute right-0 bottom-0 md:bottom-0 md:right-0 w-75 md:w-112.5 opacity-35 pointer-events-none z-0">
         <img src={assets.mask} alt="Mask Background" className="w-full h-full object-contain" />
      </div>

      {/* 4 Background Balls (2 Left, 2 Right) */}
      <img src={assets.ball1} alt="Ball" className="absolute top-[1%] left-[1%] w-16 h-12 md:h-16 object-contain z-0 drop-shadow-xl" />
      <img src={assets.ball2} alt="Ball" className="absolute top-[6%] left-[5%] w-20 h-16 md:h-20 object-contain z-0 drop-shadow-xl" />
      <img src={assets.ball2} alt="Ball" className="absolute bottom-[1%] right-[1%] w-20 h-16 md:h-20 object-contain z-0 drop-shadow-xl" />
      <img src={assets.ball1} alt="Ball" className="absolute bottom-[7%] right-[6%] w-16 h-12 md:h-16 object-contain z-0 drop-shadow-xl" />
      
      

      {/* --- FOREGROUND CONTENT (Z-10) --- */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#d4af37] mb-8 z-10 drop-shadow-lg text-center">
        Royal Lotto
      </h1>

      {/* BANNER AREA */}
      <div className="w-full max-w-300 bg-linear-to-r from-[#D0A549] via-[#8c6721] to-black p-4 md:p-6 mb-8 flex flex-col xl:flex-row items-center justify-between gap-5 relative shadow-2xl z-10 overflow-hidden rounded-2xl">
        
        {/* LEFT ARROW */}
        <button onClick={handlePrevDraw} aria-label='prev' className="hidden xl:flex p-2 border-2 border-black rounded-full hover:bg-black/10 transition shrink-0 text-black z-10">
          <ChevronLeft size={20} strokeWidth={2.5} 
  
          />
        </button>

        {/* GOLD CARD */}
        <div className="w-full xl:max-w-[48%] bg-linear-to-r from-[#e1bb58] via-[#d1a646] to-[#b98d35] rounded-xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between border border-white/20 relative z-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
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

        {/* RIGHT BUTTONS (Exact Replica) */}
        {/* --- EXACT UI FROM YOUR PNG --- */}
        <div className="flex items-center gap-3 shrink-0 z-10 mt-4 xl:mt-0 ml-auto">
          
          {/* Main Gold Button - Exact Capsule Shape (Height matched via padding) */}
          <button className="bg-linear-to-r from-[#e3ba5c] to-[#c99c3a] text-black font-medium text-[13px] tracking-[0.02em] px-7 py-2.5 mb-8 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:brightness-110 transition whitespace-nowrap leading-none flex items-center justify-center">
            Pick Any 6 Number
          </button>
          
          {/* Stacked Black Buttons - 'flex-col' keeps them stacked exactly one above another */}
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

      {/* --- MAIN SELECTION CARD --- */}
      <div className="hidden lg:block w-full max-w-300 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden relative z-10">
        <div className="p-4 md:p-8 flex flex-col xl:flex-row gap-6 md:gap-8">
          
          {/* MAIN BALLS GRID */}
          <div className="flex-[2.5]">
            <h3 className="text-black font-bold text-lg md:text-xl mb-4 md:mb-5">Main Ball</h3>
            <div className="border border-gray-200 rounded-lg p-4 md:p-6 grid grid-cols-7 sm:grid-cols-10 md:grid-cols-12 gap-2 md:gap-3 bg-white">
              {Array.from({ length: TOTAL_MAIN_NUMBERS }).map((_, i) => {
                const num = i + 1;
                const isSelected = selectedMain.includes(num);
                return (
                  <button
                    key={`main-${num}`}
                    onClick={() => toggleMainBall(num)}
                    className={`
                      w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all
                      ${isSelected 
                        ? 'bg-[#dfb850] text-white border-none shadow-md' 
                        : 'bg-white text-gray-500 border border-gray-300 hover:border-[#dfb850] hover:text-[#dfb850]'}
                    `}
                  >
                    {formatNumber(num)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MEGA BALL GRID */}
          <div className="flex-1">
            <h3 className="text-black font-bold text-lg md:text-xl mb-4 md:mb-5">Mega Ball</h3>
            <div className="border border-gray-200 rounded-lg p-4 md:p-6 grid grid-cols-5 gap-2 md:gap-3 bg-white">
              {Array.from({ length: TOTAL_MEGA_NUMBERS }).map((_, i) => {
                const num = i + 1;
                const isSelected = selectedMega === num;
                return (
                  <button
                    key={`mega-${num}`}
                    onClick={() => toggleMegaBall(num)}
                    className={`
                      w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all
                      ${isSelected 
                        ? 'bg-red-500 text-white border-none shadow-md' 
                        : 'bg-white text-gray-500 border border-gray-300 hover:border-red-400 hover:text-red-500'}
                    `}
                  >
                    {formatNumber(num)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* SELECTED NUMBERS FOOTER (Exact Image Match) */}
        <div className="px-4 md:px-8 pb-4">
          <div className="border border-gray-200 rounded-lg p-4 md:p-5 flex flex-col xl:flex-row items-center justify-between bg-white">
            
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full xl:w-auto mb-4 xl:mb-0">
              <span className="text-[#2b3a55] font-semibold text-sm md:text-base">Selected numbers:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: MAX_MAIN_BALLS }).map((_, i) => (
                  <div 
                    key={`sel-main-${i}`} 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm shadow-sm
                      ${selectedMain[i] ? 'bg-[#dfb850] text-black font-bold' : 'bg-transparent border border-gray-200 text-transparent'}
                    `}
                  >
                    {selectedMain[i] ? formatNumber(selectedMain[i]) : ''}
                  </div>
                ))}

                <div 
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm shadow-sm ml-1 md:ml-2
                    ${selectedMega ? 'bg-red-500 text-white font-bold' : 'bg-transparent border border-gray-200 text-transparent'}
                  `}
                >
                  {selectedMega ? formatNumber(selectedMega) : ''}
                </div>
              </div>
            </div>

            {/* Clear and Auto Select Buttons with Icons */}
            <div className="flex gap-3 w-full sm:w-auto justify-center">
              <button onClick={clearSelection} className="flex items-center gap-1.5 border border-gray-300 text-gray-500 text-xs md:text-sm font-medium px-4 md:px-5 py-2 rounded-full hover:bg-gray-50 transition">
                Clear <X size={14} />
              </button>
              <button onClick={autoSelect} className="flex items-center gap-1.5 border border-gray-300 text-gray-500 text-xs md:text-sm font-medium px-4 md:px-5 py-2 rounded-full hover:bg-gray-50 transition">
                Auto select <RefreshCw size={14} />
              </button>
            </div>

          </div>
        </div>

        {/* BOTTOM ACTION BAR (Exact Image Match) */}
        <div className="mt-4 mb-6 md:mb-8 px-4 md:px-8 flex items-center justify-between w-full">
          {/* Entry Box (Not full rounded) */}
          <div className="bg-[#dfb850] text-black font-bold text-sm md:text-base px-6 md:px-10 py-3 rounded-r-lg shadow-sm -ml-4 md:-ml-8">
            Entry ₹{TICKET_PRICE}
          </div>
          
          {/* Add To Cart Pill */}
          <button 
            onClick={handleAddToCart}
            className="bg-[#dfb850] text-black font-bold text-sm md:text-base px-8 md:px-12 py-3 rounded-full shadow-md hover:brightness-110 transition-all"
          >
            Add To Cart
          </button>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}