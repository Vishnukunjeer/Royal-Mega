import React from "react";
import { Trash2 } from "lucide-react";

type Props = {
  title: string;
  date: string;
  price: number;
  numbers?: (string | number)[];
  showViewButton?: boolean;
  onDelete?: () => void;
  onView?: () => void;
};

const MobileCartCard: React.FC<Props> = ({
  title,
  date,
  price,
  numbers,
  showViewButton,
  onDelete,
  onView,
}) => {
  return (
    <div className=" pb-4 h-20">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-semibold text-white">{title}</h2>
          <p className="text-xs text-gray-400">{date}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-semibold text-white">
            ₹{price.toFixed(2)}
          </span>
          
        </div>
      </div>

      {/* Numbers */}
      {numbers && (
        <div className="relative flex gap-2 mt-3">
          {numbers.map((num, i) => (
            <div
              key={i}
              className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium"
            >
              {num}
            </div>
            
          ))}
          <div className="">
          <button onClick={onDelete} className="absolute right-2 text-red-500">
            <Trash2 size={16} />
          </button>
          </div>
        </div>
      )}

      {/* Button */}
      {showViewButton && (
        <button
          onClick={onView}
          className="mt-3 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm text-white"
        >
        </button>
      )}
    </div>
  );
};

export default MobileCartCard;