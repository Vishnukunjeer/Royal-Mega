import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"
import { assets } from "@/assets/assets"
import MobileFooter from "@/layouts/Mobile"

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">

        <div
                className="absolute left-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
                style={{
                  backgroundImage: `url(${assets.HeroDesign})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "6xl",
                }}
              />
              <div
                className="absolute right-0 top-0 w-[40%] h-full opacity-80 pointer-events-none"
                style={{
                  backgroundImage: `url(${assets.HeroDesign})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "6xl",
                  transform: "scaleX(-1)",
                }}
              />

        <div className="flex-1 flex justify-center">
          <img
            src={assets.lotto || "/lotto.png"}
            alt="lottery"
            className="w-100 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#d4af37] mb-6">
            ABOUT US
          </h1>

          <p className="text-gray-300 mb-4 leading-relaxed">
            We offer the possibility to play the world's biggest lotteries online.
            Our site was designed with a lottery player in mind. We are lotto fans
            ourselves, therefore we know what it takes to satisfy one.
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            Our team is build up with lottery enthusiasts, but also industry
            professionals. Our designers and developers ensure the smoothest lotto
            playing experience. Support is also a pillar of our operations. Our
            agents are always thriving to help.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Your satisfaction is our goal!
          </p>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/pattern.png')] bg-cover" />

      <Footer />
      <div className="lg:hidden">
      <MobileFooter/>
      </div>
    </div>
  )
}

export default About