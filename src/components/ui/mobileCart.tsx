import React from "react";
import { Trash2 } from "lucide-react";


type Props = {
  title: string;
  date: string;
  price: number;
  numbers?: (string | number)[];
  onDelete?: () => void;
  onView?: () => void;
};

const MobileCartCard: React.FC<Props> = ({
  title,
  date,
  price,
  numbers = [],
  onDelete,
  onView,
}) => {
  const isSingleTicket = numbers.length === 1;
  const hasMultipleTickets = numbers.length > 1;
  
  return (
    <div className="pb-4 border-b border-gray-700">
      {/* 🔝 Top Row */}
      <div className="flex flex-row justify-between items-start">
        <div className="flex gap-2">
          <h2 className="font-semibold text-white">{title}</h2>
          <span className="text-[#D4AC54]">|</span>
          <p className="font-medium text-white">{date}</p>     
</div>
        <span className="font-semibold text-white">
          ₹{price.toFixed(2)}
        </span>
      </div>

      {/* 🎟️ Show ONLY if single ticket */}
      {isSingleTicket && (
        <div className="flex items-center gap-2 mt-3 relative">
          <div className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
            {numbers[0]}
          </div>

          {/* 🗑️ Delete */}
          <button
            onClick={onDelete}
            className="absolute right-0 text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}

      {hasMultipleTickets && (
        <div className="flex items-center justify-between mt-3">
          <button
            onClick={onView}
            className="w-30 bg-red-500 hover:bg-red-600 px-2 py-2 rounded-md text-sm text-white transition"
          >
            View Tickets
          </button>

         
          <button
            onClick={onDelete}
            className="ml-3 text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      )}

    </div>
  );
};

export default MobileCartCard;