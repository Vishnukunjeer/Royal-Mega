import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { assets } from '@/assets/assets';
import type { NavLink } from '@/types';



type FooterProps = {
  className?: string;
};

const mainNavLinks: NavLink[] = [
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
];

const bottomNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '#about' },
  { label: 'Lotteries', href: '#lotteries' },
  { label: 'Contact', href: '#contact' },
  { label: 'Faq', href: '#faq' },
];

const socialLinks = [
  { Icon: Facebook, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Youtube, href: '#' },
  { Icon: Linkedin, href: '#' },
];
const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      {/* 🔥 TOP SECTION */}
      <div
        className="relative w-full bg-center bg-cover bg-no-repeat text-white"
        style={{ backgroundImage: `url(${assets.FooterDesign})` }}
      >
        <div className="relative border-b-2 border-t-2 border-[#a88d4c]/30 px-6 py-10 lg:px-16">

          {/* 🎲 FLOATING IMAGE */}
          <div className="absolute right-2 -top-10 lg:right-10 lg:-top-20">
            <img
              src={assets.card1}
              alt="cards"
              className="w-28 sm:w-32 lg:w-52 object-contain"
            />
          </div>

          {/* 🧱 MAIN CONTENT */}
          <div className="flex flex-col text-center lg:flex-row lg:items-start lg:text-left">

            {/* 🏆 LOGO */}
            <div className="flex lg:justify-start">
              <img src={assets.logo} alt="Royal Mega Logo" className="h-12 sm:h-16" />
            </div>

            {/* 📝 TEXT + LINKS */}
            <div className="flex flex-col items-center gap-4 mt-6 lg:flex-row lg:gap-20 lg:ml-20">

              {/* TEXT */}
              <p className="max-w-xs text-sm leading-relaxed text-neutral-300">
                Lottery Players Can Play Royal Mega Lottery Games Online From Anywhere
              </p>

              {/* LINKS */}
              <nav className="flex gap-6 text-sm justify-center">
                {mainNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-[#d8b06c] transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM SECTION */}
      <div className="bg-black/50 px-6 py-6 lg:px-20">
        <div className="mx-auto flex flex-col items-center justify-center gap-6 text-xs text-neutral-400 lg:flex-row">

          {/* SOCIAL ICONS */}
          <div className="order-2 flex gap-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d8b06c] text-black transition-transform hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* NAV LINKS */}
          <nav className="order-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {bottomNavLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-[#d8b06c]">
                {link.label}
              </a>
            ))}
          </nav>

          {/* COPYRIGHT */}
          <p className="order-1 text-center">
            Copyright © 2026. All Right Reserved By ROYAL MEGA LIMITED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;