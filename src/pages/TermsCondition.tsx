import React from "react";
import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"
import { assets } from "@/assets/assets";

const menuItems = [
  "Overview",
  "Data Collection & Use",
  "Cookies Data",
  "Data Security",
  "Customer Information",
  "Data Collection & Use",
];

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
     <Header/>
      {/* HERO */}
      <section className="relative h-75 flex flex-col items-center justify-center text-center bg-linear-to-b from-black/70 to-black">
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
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              `url(${assets.bg_cards})`,
              backgroundSize:"1000px",
              backgroundRepeat:"no-repeat"
          }}
        />
        <h1 className="text-3xl font-semibold z-10">
          Terms & Conditions
        </h1>
        <p className="text-xs text-gray-400 mt-2 z-10">
          Home ➜ Terms & Conditions
        </p>
      </section>

      {/* MAIN */}
      <div className="flex justify-center px-4 py-12">
  <div className="flex w-full max-w-6xl gap-10">
        {/* SIDEBAR */}
        <aside className="w-64 hidden md:block">
          <ul className="space-y-3 text-sm text-gray-400">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-yellow-500 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 max-w-3xl">
          <section className="mb-10">
            <h2 className=" text-lg font-semibold mb-3">
              Overview
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse efficitur varius orci, eget posuere metus 
              facilisis nec. Integer vel elit vel nisi feugiat 
              vestibulum.
            </p>
          </section>

          <section className="mb-10">
            <h2 className=" text-lg font-semibold mb-3">
              Data Collection & Use
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We collect various types of information to provide and improve 
              our services. This includes personal data, usage data, and 
              tracking cookies.
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-400 space-y-2">
              <li>Different types of data are collected</li>
              <li>Used to improve service quality</li>
              <li>Stored securely and responsibly</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className=" text-lg font-semibold mb-3">
              Cookies Data
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Cookies are used to track activity and store certain information. 
              You can instruct your browser to refuse cookies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className=" text-lg font-semibold mb-3">
              Data Security
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We use commercially acceptable means to protect your data, 
              but no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className=" text-lg font-semibold mb-3">
              Data Storage
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Your information is stored securely and only for as long as 
              necessary for the purposes outlined in this policy.
            </p>
          </section>
        </main>
      </div>
      </div>

      {/* FOOTER */}
      <Footer/>
    </div>
  );
};

export default TermsPage;