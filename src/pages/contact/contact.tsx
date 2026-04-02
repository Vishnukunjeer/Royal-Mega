import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"
import { assets } from "@/assets/assets"

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      
      <Header />

      {/* 🔶 BACKGROUND DECOR */}
      <img
        src={assets.bg_dot}
        className="absolute top-0 left-0 opacity-30 w-75"
        alt=""
      />

      <img
        src={assets.side_ball}
        className="absolute right-0 top-20 h-120 lg:h-150 object-contain opacity-90"
        alt=""
      />
       <img
        src={assets.bg_shape}
        className="absolute bottom-0 left-0 opacity-30 w-75"
        alt=""
      />

      {/* 🔥 MAIN SECTION */}
      <div className="order-2 max-w-7xl mx-auto px-6 py-40 lg:py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* 📝 LEFT FORM */}
        <div  className="order-2 lg:order-1 flex-1 max-w-md">

          <p className="text-sm text-gray-400 mb-2">Contact us</p>

          <h1 className="text-4xl font-bold mb-4">
            Get in touch
          </h1>

          <p className="text-gray-400 mb-6">
            We'd love to hear from you. Please fill out this form.
          </p>

          {/* FORM */}
          <div className="space-y-4">

            {/* SELECT */}
            <select title="promo" 
            className="w-full bg-white border text-black border-gray-700 p-3 rounded">
              <option>Promotions</option>
              <option>Message Type</option>
              <option>General queries</option>
              <option>Winning & Withdrawals</option>
              <option>Transaction Status</option>
              <option>Promotions</option>
              <option>Documents</option>
              <option>Other</option>
              <option>Self exclusion</option>

            </select>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full bg-white border border-gray-700 p-3 rounded"
            />

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white border border-gray-700 p-3 rounded"
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-white border border-gray-700 p-3 rounded"
            />

            {/* FILE */}
            <input
              type="file"
              className="w-full text-gray-400"
              aria-label="file"
            />

            {/* BUTTON */}
            <button className="w-full py-3 rounded bg-linear-to-r from-[#E3BA5D] via-[#FFDEAC] to-[#D4AC54] text-black font-bold hover:opacity-90 transition">
              Send message
            </button>

          </div>
        </div>

        {/* 🎰 RIGHT IMAGE */}
        <div className="order-1 flex-1 flex justify-center">
          <img
            src={assets.roullete}
            alt="roulette"
            className="w-112.5 object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          />
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Contact