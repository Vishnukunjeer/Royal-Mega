import React from "react";
import {
  User,
  Ticket,
  Home,
  ShoppingBag,
  ClipboardList,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type NavItem = {
  label: string;
  icon: React.ReactNode;
  path: string;
};

type MobileProps = {
  className?: string;
};

const navItems: NavItem[] = [
  { label: "Profile", icon: <User size={20} />, path: "/profile" },
  { label: "Ticket", icon: <Ticket size={20} />, path: "/" },
  { label: "Home", icon: <Home size={22} />, path: "/" },
  { label: "Cart", icon: <ShoppingBag size={20} />, path: "/cart" },
  { label: "Results", icon: <ClipboardList size={20} />, path: "/result" },
];

const MobileFooter: React.FC<MobileProps> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-black border-t border-neutral-800 z-50 ${className || ""}`}
    >
      <div className="flex justify-around items-center h-16 pb-safe">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <React.Fragment key={index}>
              
              {/* 🔘 BUTTON */}
              <button
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center justify-center text-xs flex-1"
              >
                <span
                  className={`mb-1 ${
                    isActive ? "text-yellow-400" : "text-neutral-400"
                  }`}
                >
                  {item.icon}
                </span>

                <span
                  className={`${
                    isActive ? "text-yellow-400" : "text-neutral-400"
                  }`}
                >
                  {item.label}
                </span>

                {isActive && (
                  <div className="mt-1 h-0.5 w-6 bg-yellow-400 rounded-full" />
                )}
              </button>

              {/* ✨ DIVIDER LINE */}
              {index !== navItems.length - 1 && (
                <div className="h-6 w-px bg-neutral-700" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MobileFooter;