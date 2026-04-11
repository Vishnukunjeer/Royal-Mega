import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TOTAL_MAIN = 69;
const TOTAL_MEGA = 26;
const MAX_MAIN = 5;

const LottoDetails = () => {
  const [mainBalls, setMainBalls] = useState<number[]>([4, 16, 22, 30, 38]);
  const [megaBall, setMegaBall] = useState<number | null>(26);

  // 🎯 SELECT / REMOVE MAIN BALL
  const toggleMain = (num: number) => {
    if (mainBalls.includes(num)) {
      setMainBalls(mainBalls.filter((n) => n !== num)); // ❌ remove
    } else if (mainBalls.length < MAX_MAIN) {
      setMainBalls([...mainBalls, num].sort((a, b) => a - b)); // ✅ add
    }
  };

  const navigate = useNavigate()

  // 🔴 MEGA BALL
  const toggleMega = (num: number) => {
    setMegaBall(megaBall === num ? null : num);
  };

  // 🧹 CLEAR
  const clearAll = () => {
    setMainBalls([]);
    setMegaBall(null);
  };

  // 🔁 AUTO SELECT
  const autoSelect = () => {
    const set = new Set<number>();
    while (set.size < MAX_MAIN) {
      set.add(Math.floor(Math.random() * TOTAL_MAIN) + 1);
    }

    setMainBalls(Array.from(set).sort((a, b) => a - b));
    setMegaBall(Math.floor(Math.random() * TOTAL_MEGA) + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/*   */}
      <div className="bg-primary   text-black px-4 py-3 flex items-center gap-3 font-semibold ">
        <button onClick={() => navigate("/")} className="text-3xl"> ← </button> Add Royal Lotto
      </div>

      {/* SELECTED NUMBERS */}
      <div className="p-4">
        <p className="text-sm mb-2 text-gray-300">SELECTED NUMBERS:</p>

        <div className="flex flex-wrap gap-2 items-center">

          {mainBalls.map((n) => (
            <div
              key={n}
              className="w-8 h-8 rounded-full bg-primary   flex items-center justify-center text-black text-sm font-bold cursor-pointer"
              onClick={() => toggleMain(n)}
            >
              {n}
            </div>
          ))}

          {megaBall && (
            <div
              className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold cursor-pointer"
              onClick={() => setMegaBall(null)}
            >
              {megaBall}
            </div>
          )}

          {/* BUTTONS */}
          <button
            onClick={clearAll}
            className="bg-white text-black px-3 py-1 rounded text-sm ml-2"
          >
            Clear ✕
          </button>

          <button
            onClick={autoSelect}
            className="bg-primary   text-black px-3 py-1 rounded text-sm"
          >
            Auto select 🔁
          </button>

        </div>
      </div>

      {/* MAIN BALL */}
      <div className="px-4">
        <h3 className="mb-2 font-semibold">Main Ball</h3>

        <div className="grid grid-cols-7 gap-2 bg-white p-3 rounded text-black">
          {Array.from({ length: TOTAL_MAIN }).map((_, i) => {
            const num = i + 1;
            const selected = mainBalls.includes(num);

            return (
              <div
                key={num}
                onClick={() => toggleMain(num)}
                className={`w-8 h-8 flex items-center justify-center border text-sm cursor-pointer
                  ${selected ? "bg-primary   text-black font-bold" : ""}
                `}
              >
                {num}
              </div>
            );
          })}
        </div>
      </div>

      {/* MEGA BALL */}
      <div className="px-4 mt-4">
        <h3 className="mb-2 font-semibold">Mega ball</h3>

        <div className="grid grid-cols-7 gap-2 bg-white p-3 rounded text-black">
          {Array.from({ length: TOTAL_MEGA }).map((_, i) => {
            const num = i + 1;
            const selected = megaBall === num;

            return (
              <div
                key={num}
                onClick={() => toggleMega(num)}
                className={`w-8 h-8 flex items-center justify-center border text-sm cursor-pointer
                  ${selected ? "bg-red-500 text-white font-bold" : ""}
                `}
              >
                {num}
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center p-4 mt-4">
        <div className="bg-primary   text-black px-4 py-2 rounded font-bold">
          Entry ₹40
        </div>

        <button className="bg-primary   text-black px-6 py-2 rounded-full font-bold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default LottoDetails;