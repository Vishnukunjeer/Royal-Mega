import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import type { RootState } from "@/store/store";
import { removeFromCart } from "@/store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function MobileCheckout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.cart?.items || []
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + (item?.totalPrice || 0),
    0
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 py-4">

      {/* Header */}
      <div className="flex items-center gap-3 bg-[#d4af37] text-black px-4 py-3 rounded">
        <button onClick={() => navigate(-1)}>←</button>
        <h1 className="font-semibold">Checkout</h1>
      </div>

      {/* Tickets */}
      <div className="mt-5 space-y-5">
        {cartItems.map((item) => (
          <div key={item.id} className="border-b border-gray-700 pb-4">

            {/* Top */}
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">{item.drawName}</h2>
                <p className="text-xs text-gray-400">{item.dateTime}</p>
              </div>

              <div className="flex items-center gap-3">
                <span>₹{item.totalPrice}</span>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Numbers (ALL tickets) */}
            <div className="mt-3 space-y-2">
              {item.tickets.map((ticket, idx) => (
                <div key={idx} className="flex gap-2 flex-wrap">
                  {ticket.main.map((num, i) => (
                    <div
                      key={i}
                      className="bg-white text-black px-2 py-1 rounded text-xs"
                    >
                      {num}
                    </div>
                  ))}

                  {ticket.mega && (
                    <div className="bg-white text-red-500 px-2 py-1 rounded text-xs">
                      {ticket.mega}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 border-gray-600  text-sm pt-30">
        <div className="flex justify-between text-gray-400 mb-2 pt-2 border-t">
          <span>ITEM</span>
          <span>Qty</span>
          <span>Prize</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-1">
            <span>{item.drawName}</span>
            <span>{item.tickets.length}</span>
            <span>₹{item.totalPrice}</span>
          </div>
        ))}

        <div className="flex justify-between font-bold mt-3 border-t pt-2">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>
      </div>

      {/* Pay Button */}
      <button className="mt-6 w-full bg-[#d4af37] text-black py-3 rounded font-semibold ">
        Pay Now
      </button>
    </div>
  );
}