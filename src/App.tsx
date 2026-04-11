import React from "react";
import Home from "@/pages/Home/Home";
import {Route,Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Cart from "@/pages/Cart/cart";
import Login from "@/pages/auth/Login"
import Register from "./pages/auth/Registar";
import About from "@/pages/about/about"
import Contact from "./pages/contact/contact";
import Results from "@/pages/results/results"
import Profile from "./pages/profiles/profiles"
import TermsPage from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MobileCheckout from "./components/ui/mobileCheckout";
import LottoDetails from '@/components/ui/mobileChart';
import MobileDraw from "./components/ui/mobileDraw";
import {MobilePassword} from "./components/ui/mobilePassword"
import { Addaccount } from "./components/ui/mobileAddAccount";
import { Toaster } from "react-hot-toast";



const App: React.FC = () => {
  return (
    <>
    <Toaster/>
    <Routes>
      {/* Layout Wrapper */}
      <Route path="/" element={<Layout />}>
        {/* 👇 Default Home page */}
        <Route index element={<Home />} />

        {/* Other pages */}
        <Route path="dashboard" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="result" element={<Results />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="TermsPage" element={<TermsPage />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="checkout" element={<MobileCheckout />} />
        <Route path="draw/:id" element={<LottoDetails />} />
        <Route path="MobileDraw" element={<MobileDraw />} />
        <Route path="change-password" element={<MobilePassword />} />
        <Route path="AddAccount" element={<Addaccount />} />
      </Route>

      {/* Auth routes outside layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
    </>
  );
};


export default App;