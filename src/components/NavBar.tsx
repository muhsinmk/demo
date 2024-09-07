"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/constants/navLinks";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center p-6 bg-transparent absolute w-full z-50">
      <div className="text-white text-2xl font-bold">DEMO</div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row space-x-0 md:space-x-6 absolute md:static bg-black md:bg-transparent w-full md:w-auto top-16 md:top-0 left-0 md:flex items-center transition-all duration-300 ease-in-out`}
      >
        {navItems.map((item) => (
          <li key={item.name} className="text-center">
            <Link
              href={item.href}
              className="text-white hover:text-gray-400 transition duration-300 block py-2"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300 hidden md:block"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar;
