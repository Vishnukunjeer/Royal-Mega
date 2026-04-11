import { CirclePlay} from "lucide-react";
import { assets } from "@/assets/assets";
import  LoginCard  from "../auth/LoginCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules"
import "swiper/css";
import { useRef } from "react";


const Hero: React.FC = () => {

const swiperRef = useRef<any>(null);

const numbers = [1, 2, 3, 4, 5];
  return (
    <Swiper
    modules={[Autoplay]}
  autoplay={{
    delay: 10000, 
    disableOnInteraction: false,
  }}
  loop={true}
  className="h-52 sm:h-40 lg:h-120"
>
    <SwiperSlide>
    <section className="relative w-full h-full bg-black-100 text-white border-b-2 border-[#d4af37] overflow-hidden ">
      
      <div
        className="absolute left-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${assets.HeroDesign})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
      <div
        className="absolute right-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
        style={{
          backgroundImage: `url(${assets.HeroDesign})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          transform: "scaleX(-1)",
        }}
      />

      <div className="flex flex-row items-center justify-between px-4 sm:px-4 lg:px-10 py-4 mt-6">
        
        <div className="w-[57%] sm:w-[45%] lg:w-[30%] ">
          <h1 className="text-[#f8dc65] text-lg lg:text-3xl sm:text-xs font-bold ">
            Royal Lotto
          </h1>
          <p className="text-gray-300 text-[8px] sm:text-xs lg:text-xs leading-snug">
            Join the excitement with Royal Mega's Lottery games, offering you the chance to turn dreams into reality with every ticket. Whether you're playing for fun or aiming for a life-changing win, our easy-to-play lotteries bring you closer to incredible prizes.
          </p>
        </div>

        {/* CENTER — Prize + Button + Image */}
        <div className="flex flex-col items-center gap-2 w-[25%]">
          <div className="flex items-end gap-1">
            <span className="text-sm sm:text-lg lg:text-3xl font-bold">₹</span>
            <span className="text-xl sm:text-2xl lg:text-5xl font-bold">5</span>
            <span className="text-sm sm:text-lg lg:text-3xl font-bold">cr</span>
          </div>
          <button className="flex items-center gap-1 
  bg-red-600 
  px-3 py-1.5 
  text-[6px] sm:text-xs lg:text-sm 
  rounded ">
            <CirclePlay className="w-2 h-2 sm:w-2 sm:h-2 lg:w-7 lg:h-7"/>
            Buy Tickets
          </button>
        </div>

        <div className="w-[45%] h-full flex justify-end items-center">
          <img
  src={assets.snooker_logo}
  className="w-full h-full sm:w-30 lg:w-100 max-w-120 object-contain scale-125 sm:scale-110 lg:scale-100"
  alt="Snooker"
/>
        </div>
       
  <div className="w-full max-w-md mx-auto lg:mx-0 hidden sm:block" >
    <LoginCard showPassword={false} setShowPassword={function (): void {
                throw new Error("Function not implemented.");
              } } navigate={undefined} />
  </div>
</div>
        
        </section>
        </SwiperSlide>
       <SwiperSlide>
  <div className="border-b-2 border-primary relative overflow-hidden h-full">

    {/* Background decorations */}
    <div
      className="absolute left-0 top-0 w-[40%] h-full opacity-60 pointer-events-none"
      style={{
        backgroundImage: `url(${assets.HeroDesign})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    />
    <div
      className="absolute right-0 top-0 w-[40%] h-full opacity-60 pointer-events-none"
      style={{
        backgroundImage: `url(${assets.HeroDesign})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        transform: "scaleX(-1)",
      }}
    />
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#d4af37,transparent_40%)]" />
    <div className="relative flex sm:hidden flex-row items-center justify-between px-2 py-1 h-50 gap-1 text-white">

      <div className="flex flex-col items-center gap-1 shrink-0">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-2 py-0.5 bg-primary text-black rounded text-[9px] font-medium"
        >
          ← Prev
        </button>
        <Swiper
          direction="vertical"
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={8}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-16 w-8"
        >
          {[...numbers, ...numbers, ...numbers].map((num, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center text-white text-xs">
                {num}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-2 py-0.5 bg-primary text-black rounded text-[9px] font-medium"
        >
          Next →
        </button>
      </div>

      {/* Center Text */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h1 className="text-xs font-semibold leading-tight">Lottery</h1>
        <p className="text-gray-300 text-[8px] leading-snug line-clamp-4">
          Join the excitement with Royal Mega's Lottery games, offering you
          the chance to turn dreams into reality with every ticket.
          Whether you're playing for fun or aiming for a life-changing win,
          our easy-to-play lotteries bring you closer to incredible prizes.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 shrink-0">
        <h2 className="font-bold text-base leading-none">
          ₹<span className="text-2xl">5</span>cr
        </h2>
        <button className="bg-red-500 hover:bg-red-600 transition px-2 py-1 rounded flex items-center gap-1 text-[8px]">
          ▶ Buy
        </button>
      </div>

      <div className="shrink-0 w-14">
        <img
          src={assets.snooker_logo}
          className="w-full h-full object-contain"
          alt="Snooker"
        />
      </div>
    </div>

    <div className="relative hidden sm:grid grid-cols-12 items-center px-6 py-4 h-100 mt-5">

      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="mb-3 px-4 py-1 bg-primary text-black rounded-md text-sm font-medium"
        >
          ← Previous
        </button>
        <Swiper
          direction="vertical"
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          spaceBetween={15}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="h-37.5"
        >
          {[...numbers, ...numbers, ...numbers].map((num, index) => (
            <SwiperSlide key={index}>
              <div className="w-10 h-10 flex items-center justify-center text-white text-lg">
                {num}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="mt-3 px-4 py-1 bg-primary text-black rounded-md text-sm font-medium"
        >
          Next →
        </button>
      </div>

      <div className="col-span-5 pl-6">
        <h1 className="text-2xl font-semibold mb-3 text-white">Lottery</h1>
        <p className="text-white text-sm max-w-md font-semibold">
          Join the excitement with Royal Mega's Lottery games, offering you
          the chance to turn dreams into reality with every ticket.
          Whether you're playing for fun or aiming for a life-changing win,
          our easy-to-play lotteries bring you closer to incredible prizes.
          Try your luck today and see if fortune favours you!
        </p>
      </div>

      <div className="col-span-3 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-3">
          ₹<span className="text-6xl">5</span>cr
        </h2>
        <button className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded flex items-center gap-2">
          ▶ Buy Tickets
        </button>
      </div>

      <div className="col-span-3 flex justify-center">
        <img
          src={assets.snooker_logo}
          className="w-full max-w-105 object-contain"
          alt="Snooker"
        />
      </div>

    </div>
  </div>
</SwiperSlide>
        </Swiper>
  
  )}

export default Hero;