import { useState } from 'react';
import { assets } from '@/assets/assets';
import { useNavigate } from "react-router-dom"
import type { Draw } from '@/types/index';


type Screen = 'list' | 'details';



const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};



const draws: Draw[] = [
  {
    id: '1',
    image: assets.MegaJackpot,
    name: 'Mega Jackpot',
    prize: '₹20,50,000',
    date: getCurrentDate(),
  },
  {
    id: '2',
    image: assets.MegaJackpot,
    name: 'Mega Jackpot',
    prize: '₹20,50,000',
    date: getCurrentDate(),
  },
];

const MobileLotto: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('list');
  const [selectedDraw] = useState<Draw | null>(null);
  const navigate = useNavigate()

  const handleSelectDraw = (draw: Draw) => {
    navigate(`/draw/${draw.id}`)
  };

  return (
    <div className=" bg-[rgb(10,10,10)] text-white mt-3">

      {/*   */}
      <div className="w-full flex items-center justify-between pb-5 ">

        {/* LEFT TITLE / BACK */}
        {screen === 'details' ? (
          <button
            onClick={() => setScreen('list')}
            className="flex items-center gap-2 text-[#d4af37] font-semibold"
          >
            ← Royal Lotto
          </button>
        ) : (
          <h1 className="bg-linear-to-r from-[#d4af37] to-[#f5e6a3] bg-clip-text text-transparent font-bold text-2xl ml-7">
            Royal Lotto
          </h1>
        )}

        {/* RIGHT BUTTONS (only in list) */}
        {screen === 'list' && (
          <div className="flex flex-col items-end gap-1">

            {/* TOP ROW */}
            <div className="flex gap-2">
              <button className="border border-[#d4af37] text-white text-xs px-3 py-1 rounded-full bg-black">
                Winners
              </button>
              <button className="border border-[#d4af37] text-white text-xs px-3 py-1 rounded-full bg-black" onClick={() => navigate("./MobileDraw")}>
                View All Draws
              </button>
            </div>

            {/* BOTTOM ROW */}
            <button className="border border-[#d4af37] text-white text-xs px-3 py-1 mt-1 rounded-full text-center bg-black">
              Prizes & Info
            </button>

          </div>

        )}
      </div>

      {/* ================= LIST SCREEN ================= */}
      {screen === 'list' && (
        <div
          style={{
            backgroundImage: `url(${assets.mobileLotto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 80
          }}>
          <div className="flex gap-3 px-2 mt-4">

            {draws.map((draw) => (
              <div
                key={draw.id}
                onClick={() => handleSelectDraw(draw)}
                className="relative w-[50%] h-30 overflow-hidden border border-[#d4af37] cursor-pointer"

              >

                {/* DARK OVERLAY (for readability) */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

                {/* DATE TOP RIGHT */}
                <div className="absolute -top-2 -right-2 border border-amber-300 bg-black/70 text-[10px] px-2 py-1  z-10">
                  {draw.date}
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-3 flex flex-col justify-between ">

                  <div>
                    <div className='flex'>
                      <img src={draw.image} className='h-5' />
                      <h2 className="text-sm font-semibold">{draw.name}</h2>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <p className="text-[11px] text-gray-300 mt-1">Mega Prize </p>
                      <p className="text-md font-semibold ">{draw.prize}</p>
                    </div>
                  </div>

                  {/* TIMER */}
                  <div>
                    <div className='flex justify-center text-[8px] ' >Hours minutes seconds</div>
                    <div className="flex justify-center gap-1 mt-2">
                      {['00', '01', '00'].map((t, i) => (
                        <div key={i} className="bg-white text-black px-1.5 py-1 rounded text-[10px] font-mono">
                          {t}
                        </div>
                      ))}
                    </div>

                    {/* BOTTOM GRADIENT BAR */}
                    <div className=" h-1 w-full bg-linear-to-r from-black to-red-500  mt-4 " />
                  </div>

                </div>

              </div>

            ))}
          </div>
        </div>
      )}

      {/* ================= DETAILS SCREEN ================= */}
      {screen === 'details' && selectedDraw && (
        <div className="p-4">

          <p className="text-sm mb-2 text-gray-300">SELECTED NUMBERS:</p>

          <div className="flex gap-2 flex-wrap mb-3">
            {[4, 16, 22, 30, 38].map((n) => (
              <div key={n} className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black text-sm">
                {n}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-sm">
              26
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <button className="bg-white text-black px-4 py-1 rounded text-sm">
              Clear ✕
            </button>
            <button className="bg-yellow-500 text-black px-4 py-1 rounded text-sm">
              Auto select 🔁
            </button>
          </div>

          <h3 className="mb-2 font-semibold">Main Ball</h3>
          <div className="grid grid-cols-7 gap-2 bg-white p-3 rounded text-black">
            {Array.from({ length: 69 }).map((_, i) => (
              <div key={i} className="w-8 h-8 flex items-center justify-center border text-sm">
                {i + 1}
              </div>
            ))}
          </div>

          <h3 className="mt-4 mb-2 font-semibold">Mega ball</h3>
          <div className="grid grid-cols-7 gap-2 bg-white p-3 rounded text-black">
            {Array.from({ length: 26 }).map((_, i) => (
              <div key={i} className="w-8 h-8 flex items-center justify-center border text-sm">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="bg-yellow-500 text-black px-4 py-2 rounded">
              Entry ₹40
            </div>

            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold">
              Add To Cart
            </button>
          </div>
        </div>
      )}
      <div className='mb-5'></div>
    </div>
  );
};

export default MobileLotto;