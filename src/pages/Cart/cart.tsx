// src/pages/Cart/CartPage.tsx (Aapke path ke hisab se naam adjust karein)
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, X } from 'lucide-react';
import type { RootState } from '@/store/store';
import { removeFromCart ,removeSingleTicket} from '@/store/slices/cartSlice';
import type { CartItem} from '@/store/slices/cartSlice';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import MobileFooter from '@/layouts/Mobile';
import MobileCartCard from "../../components/ui/mobileCart";
import { assets } from '@/assets/assets';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {


  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart?.items || []);
  const subtotal = cartItems.reduce((total, item) => total + (item?.totalPrice || 0), 0);
  const navigate = useNavigate()

  // Modal State
  const [selectedTicketGroup, setSelectedTicketGroup] = useState<any>(null);
  const [selectedTicket,setSelectedTicket] = useState<CartItem | null>(null);

  

  // Helper component to render a sequence of balls
  const renderSequence = (main: number[], mega: number | null, isSmall = false) => (
    <div className="flex items-center flex-wrap gap-1.5">
      {main.map((num, i) => (
        <div key={i} className={`bg-white text-black font-bold flex items-center justify-center rounded-sm shadow-sm border border-gray-200 ${isSmall ? 'w-5 h-5 text-[10px]' : 'w-7 h-7 text-xs'}`}>
          {num.toString().padStart(2, '0')}
        </div>
      ))}
      {mega && (
        <>
          <span className={`${isSmall ? 'text-[10px]' : 'text-xs'} text-gray-500 mx-0.5`}>+</span>
          <div className={`bg-white text-red-500 border border-red-200 font-bold flex items-center justify-center rounded-sm shadow-sm ${isSmall ? 'w-5 h-5 text-[10px]' : 'w-7 h-7 text-xs'}`}>
            {mega.toString().padStart(2, '0')}
          </div>
        </>
      )}
    </div>
  );
  const mergedCheckoutData = {
  tickets: cartItems.flatMap(item =>
    item.tickets.map(ticket => ({
      ...ticket,
      drawName: item.drawName,
      dateTime: item.dateTime,
      price: item.pricePerTicket,
    }))
  ),
  totalAmount: subtotal,
  totalTickets: cartItems.reduce((acc, item) => acc + item.tickets.length, 0),
};


  return (
    <>
      <Header />
      <div className=" bg-[#0a0a0a] text-white font-sans py-16 px-4 md:px-10 relative overflow-hidden hidden sm:block">
        
        {/* Background Images */}
        <div className="absolute left-0 top-0 w-[40%] h-full opacity-60 pointer-events-none" style={{ backgroundImage: `url(${assets.HeroDesign})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }} />
        <div className="absolute right-0 top-0 w-[40%] h-full opacity-60 pointer-events-none" style={{ backgroundImage: `url(${assets.HeroDesign})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", transform: "scaleX(-1)" }} />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative z-10">
          
          
          {/* LEFT COLUMN: Cart List */}
          <div className="flex-2 lg:pr-10">
            <h1 className="text-3xl font-bold mb-8 hidden sm:block">
              Your Cart
            </h1>

            

            {/* Table Headers */}
            <div className="hidden md:grid grid-cols-13 gap-4 border-b border-gray-600/50 pb-3 text-sm font-semibold text-gray-400">
              <div className="col-span-2">Draw Name</div>
              <div className="col-span-3 text-left">Date/Time</div>
              <div className="col-span-5">Your Sequence</div>
              <div className="col-span-3 text-center">PRICE</div>
            </div>

            {/* Cart Items List */}
            <div className="mt-4 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 py-10">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-13 gap-4 md:items-center  pb-6 pt-2">
                    <div className="md:col-span-2 text-sm font-bold text-[#d4af37] md:text-white">
                      {item.drawName}
                      <div className="text-xs text-gray-500 md:hidden mt-1">{item.dateTime}</div>
                    </div>
                    
                    <div className="hidden md:block col-span-3 text-sm text-gray-400">
                      {item.dateTime}
                    </div>

                    <div className="md:col-span-6 flex flex-col gap-2">
                      {/* Show ONLY the first sequence in the row for clean UI */}
                      <div className="flex items-baseline">
                         {renderSequence(item.tickets[0].main, item.tickets[0].mega)}
                         
                         <button 
                            onClick={() => setSelectedTicket(item)}
                            className="bg-[#ff4d4d] hover:bg-red-600 text-white text-[10px] font-bold px-5 py-1.5 rounded ml-4
                             shadow-md transition"
                         >
                            View Ticket
                         </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0">
                      <span className="font-bold text-lg">₹{item.totalPrice.toFixed(2)}</span>
                      <button 
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="p-2 bg-red-500/10 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
                        aria-label="Remove item from cart"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Cart Total Sidebar */}
          <div className="flex-1 mt-10 lg:mt-10 hidden sm:block">
            <div className="bg-linear-to-b from-[#e3c05e] to-[#b38b36] text-black rounded-xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl font-black mb-6">Cart Total</h2>
              
              <div className="space-y-4 mb-6 border-b border-black/10 pb-6">
                {cartItems.map((item) => (
                  <div key={`summary-${item.id}`} className="flex justify-between text-sm font-bold">
                    <span className="truncate pr-4 opacity-80">{item.drawName} <span className="font-normal">({item.tickets.length}x)</span></span>
                    <span>₹{item.totalPrice.toFixed(2)}</span>
                  </div>
                ))}
              <div className="flex justify-between font-black text-xl mb-8">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex flex-col gap-3">
                
              <button
  onClick={() => setSelectedTicketGroup(mergedCheckoutData as any)}
  className="w-full bg-white text-black font-bold py-3.5 rounded-lg shadow-lg hover:scale-[1.02] transition"
>
  Checkout
</button>
                
                <Link to="/" className="w-full block text-center bg-black/10 text-black border border-black/20 font-bold py-3.5 rounded-lg hover:bg-black/20 transition">
                  Buy More Tickets
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL: Purchase Summary (From your screenshot) */}
      {selectedTicketGroup && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white text-black rounded-xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">Purchase Summary</h3>
              <button 
                onClick={() => setSelectedTicketGroup(null)}
                className="text-gray-400 hover:text-red-500 transition"
                aria-label='selectedTicket'
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="flex justify-between text-sm font-bold text-gray-600 mb-2">
                <span>Tickets</span>
                <span>{mergedCheckoutData.totalTickets}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-gray-600 mb-6 pb-4 border-b border-gray-100">
                <span>Per Ticket Price</span>
                <span>₹{selectedTicketGroup.pricePerTicket}</span>
              </div>

              {/* Scrollable list of tickets */}
              <div className="max-h-48 overflow-y-auto pr-2 mb-6 space-y-3 custom-scrollbar">
                {selectedTicketGroup.tickets.map((ticket: any, index: number) => (
  <div key={index} className="flex flex-col mb-2">
    
    {/* Draw Name */}
    <span className="text-[10px] text-gray-500">
      {ticket.drawName}
    </span>

    <div className="flex items-center justify-between">
      <span className="text-xs font-bold text-gray-500 w-16">
        Ticket {index + 1}
      </span>

      {renderSequence(ticket.main, ticket.mega, true)}
    </div>
  </div>
))}
              </div>

              {/* Receipt details */}
              <div className="space-y-3 pt-4 border-t border-gray-200 text-sm font-bold text-gray-700">
                <div className="flex justify-between">
                  <span>Total Amount</span>
                  <span>₹{mergedCheckoutData.totalAmount}</span>
                </div>
                <div className="flex justify-between font-normal text-gray-500">
                  <span>Date</span>
                  <span>{new Date().toLocaleDateString("en-IN")}</span>
                </div>
                <div className="flex justify-between font-normal text-gray-500">
                  <span>Time</span>
                  <span>{new Date().toLocaleTimeString("en-IN")}</span>
                </div>
                <div className="flex justify-between font-normal text-gray-500">
                  <span>Transaction Id.</span>
                  <span className="font-mono text-xs">PENDING</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-500 font-bold uppercase">Ready</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-gray-100 flex gap-4 bg-gray-50">
              <button 
                 onClick={() => setSelectedTicketGroup(null)}
                 className="flex-1 bg-white border border-[#d4af37] text-[#b38b36] font-bold py-2 rounded shadow-sm hover:bg-[#d4af37]/10 transition text-sm"
              >
                Close
              </button>
              <button className="flex-1 bg-linear-to-r from-[#d8b357] to-[#b48a33] text-white font-bold py-2 rounded shadow-md hover:brightness-110 transition text-sm">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

   <div className="lg:hidden min-h-screen bg-black text-white px-4 py-4 space-y-5">

  {/* Header */}
  <div className="flex items-center gap-3 bg-[#D4AC54] text-black px-4 py-3 rounded">
    <button onClick={()=>navigate('/')} className='font-bold text-xl'>← Cart</button>
    
  </div>

  {/* Cart List */}
  {cartItems.length === 0 ? (
    <p className="text-gray-500 text-center mt-10">
      Your cart is empty
    </p>
  ) : (
    cartItems.map((item) => (
      <MobileCartCard
        key={item.id}
        title={item.drawName}
        date={item.dateTime}
        price={item.totalPrice}
        numbers={[
          
          ...(item.tickets[0]?.main || []),
          +(item.tickets[0]?.mega || [])
        ]}
        onView={() => setSelectedTicket(item)}
        onDelete={() => dispatch(removeFromCart(item.id))}
      />
    ))
  )}

  {/* Checkout */}
  <div className="pt-6 ">
    <button
      onClick={() => navigate("/checkout")}
      className="fixed w-full bg-[#D4AC54] text-black py-3 rounded font-semibold bottom-20"
    >
      Checkout
    </button>
  </div>
</div>

  

      {selectedTicket && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">

    <div className="bg-white text-black rounded-xl w-full max-w-md shadow-2xl flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between p-5 border-b border-gray-200">
        <h3 className="text-lg font-bold">{selectedTicket.drawName}</h3>
        <button onClick={() => setSelectedTicket(null)}>
          <X size={20} />
        </button>
      </div>

      {/* BODY */}
      <div className="p-4 max-h-64 overflow-y-auto space-y-3">

        {selectedTicket.tickets.map((ticket, index) => (
          <div key={index} className="flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-2">
              <span className="text-sm">{index + 1}.</span>
              {renderSequence(ticket.main, ticket.mega, true)}
            </div>

            {/* DELETE */}
            <button
              onClick={() =>
                dispatch(
                  removeSingleTicket({
                    drawName: selectedTicket.drawName,
                    index,
                  })
                )
              }
              className="text-red-500"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

      </div>
      <div className="pb-[-{5}] border-t border-gray-200 flex justify-center">
        <button
          onClick={() => setSelectedTicket(null)}
          className="bg-linear-to-r from-[#d4af37] to-[#b8962e] text-black px-10 py-3 rounded-full font-semibold"
        >
          OK
        </button>
      </div>

    </div>
  </div>
)}
      
     <Footer className=" hidden sm:block md:block"/>
      <MobileFooter className="block lg:hidden "/>
    </>
  )
}