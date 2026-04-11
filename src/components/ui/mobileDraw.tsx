
import { useNavigate } from "react-router-dom";
import { assets } from "@/assets/assets";

const MobileDraw = () => {
  const navigate = useNavigate();

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const cards = [
    {
      id: 1,
      title: "Mega Jackpot",
      prize: "₹20,50,000",
      time: ["00", "01", "00"],
      date: getCurrentDate(),
    },
    {
      id: 2,
      title: "Mega Jackpot",
      prize: "₹20,50,000",
      time: ["00", "45", "00"],
      date: getCurrentDate()
    },
  ];




  return (
    <div className="min-h-screen bg-black text-white">



      {/* 🟡 SUB   */}
      <div className="bg-primary   text-black px-4 py-3 flex items-center gap-3 font-semibold">
        <button onClick={() => navigate(-1)} className="text-2xl">
          ←
        </button>
        Royal Lotto
      </div>

      {/* 🎴 CARDS */}
      <div className="p-4 space-y-4">


        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative border border-primary   rounded-lg p-4 bg-black/70`}
          >
            {/* DATE */}
            <div className="absolute top-2 right-2 border border-amber-300 bg-black/70 text-[10px] px-2 py-1  z-10">
              {card.date}
            </div>

            {/* CONTENT */}
            <div className="flex flex-row items-start gap-3">

              {/* ICON */}
              <div>
                <div className="flex flex-row gap-2">
                  <img src={assets.MegaJackpot} className="h-10" />

                  {/* TEXT */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-sm">{card.title}</h2>
                  </div>
                </div>
                <div className=" flex flex-row gap-4">
                  <div className="flex gap-2 items-center mt-1">
                    <span className="text-gray-400 text-xs">Mega Prize :</span>
                    <span className="font-bold">{card.prize}</span>
                  </div>

                  {/* ⏱ TIMER */}
                  <div className="mt-3 text-center">
                    <div className="text-[9px] text-gray-400 flex justify-center gap-6">
                      <span>Hours</span>
                      <span>Minutes</span>
                      <span>Seconds</span>
                    </div>

                    <div className="flex justify-center gap-2 mt-1">
                      {card.time.map((t, i) => (
                        <div
                          key={i}
                          className="bg-white text-black px-2 py-1 rounded text-xs font-mono"
                        >
                          {t}
                        </div>

                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute left-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
              style={{
                backgroundImage: `url(${assets.HeroDesign})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />

            {/* 🔻 BOTTOM LINE */}
            <div
              className={`h-1 w-full mt-3 ${card.id === 1
                ? "bg-linear-to-r from-black to-red-500"
                : "bg-linear-to-r from-black to-green-500"
                }`}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default MobileDraw;