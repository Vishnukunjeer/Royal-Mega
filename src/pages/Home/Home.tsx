import React from "react";
import  Header from "@/layouts/Header";
import Hero from "@/pages/Hero/Hero";
import LottoSection from "@/pages/LottoSection/LottoSection";
import Bingo from "@/pages/Bingo/Bingo";
import Casino from "@/pages/Casino/Casino";
import Footer from "@/layouts/Footer";
import MobileFooter from "@/layouts/Mobile";


const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Header/>
      <Hero />
      <LottoSection />
      <Bingo />
      <Casino />
      <Footer />
      <MobileFooter className="lg:hidden"/>
      
    </div>
  );
};

export default Home;