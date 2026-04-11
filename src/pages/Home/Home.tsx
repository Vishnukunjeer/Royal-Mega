import React from "react";

import Hero from "@/pages/Hero/Hero";
import LottoSection from "@/pages/LottoSection/LottoSection";
import Bingo from "@/pages/Bingo/Bingo";
import Casino from "@/pages/Casino/Casino";

import Header from "@/layouts/Header";


const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Header className="lg:hidden"/>
      <Hero />
      <LottoSection />
      <Bingo />
      <Casino />
      
    </div>
  );
};

export default Home;