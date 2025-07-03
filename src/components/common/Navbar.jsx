"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/variables/common/commonVars";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[96%] absolute top-5 left-1/2 -translate-x-1/2 px-6 py-4 bg-white text-black shadow-md z-20">
      <div className="flex items-center justify-between w-full">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* Contact on mobile */}
          <div className="md:hidden text-sm font-medium border border-black px-4 py-2 cursor-pointer hover:text-blue-500">
            Contact us →
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href} className="hover:text-blue-500" >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Contact on desktop */}
          <div className="hidden md:block text-sm font-medium border border-black px-4 py-2 cursor-pointer hover:text-blue-500">
            Contact us →
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="absolute top-[70px] right-4 w-[85vw] bg-white shadow-lg px-6 py-4 flex flex-col gap-4 text-center md:hidden z-30">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
