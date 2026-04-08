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
    { id: "New lotto 1", name: "Mega Jackpot", prize: "₹5,00,00,000", date: "Tuesday, July 9, 2024", image: assets.MegaJackpot },
    { id: "New lotto 2", name: "Super Jackpot", prize: "₹2,50,00,000", date: "Wednesday, July 10, 2024", image: assets.MegaJackpot },
    { id: "New lotto 3", name: "Royal Jackpot", prize: "₹1,00,00,000", date: "Thursday, July 11, 2024", image: assets.MegaJackpot }
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
      price: TICKET_PRICE,
    }));

    alert("Ticket added to cart!");
  };

  const handlePrevDraw = () => {
    setActiveDrawIndex((prev) => (prev === 0 ? availableDraws.length - 1 : prev - 1));
  };

  const handleNextDraw = () => {
    setActiveDrawIndex((prev) => (prev === availableDraws.length - 1 ? 0 : prev + 1));
  };


  return (
    <>
      <div className='block lg:hidden'> <MobileLotto /></div>
      <div className="hidden lg:flex min-h-screen bg-black text-white font-sans relative overflow-hidden flex-col items-center py-8 md:py-12 px-2 md:px-8">


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

          <h1 className="text-3xl md:text-5xl font-bold text-[#d4af37] mb-8 z-10 drop-shadow-lg text-center">
            Royal Lotto
          </h1>


          <div className="w-full max-w-300 bg-linear-to-r from-[#D0A549] via-[#8c6721] to-black p-4 md:p-6 mb-8 flex items-center relative shadow-2xl z-10 overflow-hidden rounded-2xl">
            
            {/* Left Button */}
            <button onClick={handlePrevDraw} className="absolute left-4 z-20 p-2 border-2 border-black rounded-full hover:bg-black/10 transition text-black bg-white/20">
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            {/* Viewport for Slider */}
            <div className="overflow-hidden w-full ml-10">
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
                          <p className="text-sm font-bold opacity-80 text-black">Ticket Price:<span className='text-white drop-shadow-[0_1px_1px_rgba(0,0,0,1)]'> ₹{TICKET_PRICE}</span></p>
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

              <button className="bg-linear-to-r from-[#e3ba5c] to-[#c99c3a] text-black font-medium text-[13px] tracking-[0.02em] px-7 py-2.5 mb-8 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:brightness-110 transition whitespace-nowrap leading-none flex items-center justify-center">
                Pick Any 6 Number
              </button>

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

          <div className="hidden lg:block w-full max-w-300 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden relative z-10">
            <div className="p-4 md:p-8 flex flex-col xl:flex-row gap-6 md:gap-8">


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


            <div className="px-4 md:px-8 pb-4">
              <div className="border border-gray-200 rounded-lg p-4 md:p-5 flex flex-col xl:flex-row items-center justify-between bg-white">

               

          {/* ✅ Selected Numbers Bar */}
          <div className="px-8 pb-4">
            <div className=" rounded-xl p-5 flex items-center justify-between bg-white">

              {/* Selected balls — clickable to remove */}
              <div className="flex items-center gap-50">
                <span className="text-[#2b3a55] font-semibold text-sm whitespace-nowrap">Selected numbers:</span>
                <div className="flex items-center gap-2">
                  {/* Main balls — 5 slots */}
                  {Array.from({ length: MAX_MAIN_BALLS }).map((_, i) => (
                    <button
                      key={`sel-main-${i}`}
                      onClick={() => selectedMain[i] && toggleMainBall(selectedMain[i])}
                      title={selectedMain[i] ? `Remove ${selectedMain[i]}` : ''}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                        ${selectedMain[i]
                          ? 'bg-[#dfb850] text-white shadow-md hover:scale-110 hover:brightness-90 cursor-pointer'
                          : 'bg-transparent border border-gray-200 cursor-default'
                        }`}
                    >
                      {selectedMain[i] ? formatNumber(selectedMain[i]) : ''}
                    </button>
                  ))}

                  {/* Mega ball slot */}
                  <button
                    onClick={() => selectedMega && toggleMegaBall(selectedMega)}
                    title={selectedMega ? `Remove ${selectedMega}` : ''}
                    className={`w-10 h-10  rounded-full flex items-center justify-center text-sm font-bold transition-all ml-1
                      ${selectedMega
                        ? 'bg-red-500 text-white shadow-md hover:scale-110 hover:brightness-90 cursor-pointer'
                        : 'bg-transparent border border-gray-200 cursor-default'
                      }`}
                  >
                    {selectedMega ? formatNumber(selectedMega) : ''}
                  </button>
                </div>
              </div>
              </div>
              </div>

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


            <div className="mt-4 mb-6 md:mb-8 px-4 md:px-8 flex items-center justify-between w-full">
              {/* Entry Box (Not full rounded) */}
              <div className="bg-[#dfb850] text-black font-bold text-sm md:text-base px-6 md:px-10 py-3 rounded-r-lg shadow-sm -ml-4 md:-ml-8">
                Entry ₹{TICKET_PRICE}
              </div>

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