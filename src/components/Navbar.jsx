"use client";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import github from "../assets/github.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-[#e39dc16e] shadow-lg relative">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              {/* Logo */}
              <div>
                <a href="/home" className="flex items-center py-3 px-0 md:py-4 md:px-2">
                  <span className="text-red-700 text-xl font-semibold md:text-3xl md:font-bold">&lt;</span>
                  <img
                    src={logo} // Path to your logo image
                    alt="Logo"
                    width={40} // Set the width of the logo
                    height={40} // Set the height of the logo
                    className="mr-2"
                  />
                  <span className="font-semibold text-white text-sm md:text-lg">
                    Vault
                  </span>
                  <span className="font-semibold text-red-700 text-sm md:text-lg">
                    Guard
                  </span>
                  <span className="text-red-700 text-xl font-semibold md:text-3xl md:font-bold">/&gt;</span>
                </a>
              </div>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="/home"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 transition duration-300"
              >
                Home
              </a>
              <a
                href="/about"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 transition duration-300"
              >
                About
              </a>
              <a
                href="/services"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 transition duration-300"
              >
                Services
              </a>
              <a
                href="/contact"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 transition duration-300"
              >
                Contact
              </a>
              <a
                href="/admindashboard"
                className="py-4 px-2 text-gray-500 border-b-4 border-transparent hover:border-red-500 transition duration-300"
              >
                Admin
              </a>
              <button className="bg-red-600 px-4 py-1 rounded-full hover:bg-red-700 ring-2 ring-white">
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="flex justify-center items-center gap-2 text-gray-500 transition duration-300"
                >
                  <img className="h-8 w-8 rounded-full ring-1 ring-gray-400" src={github} alt="" />
                  <span className="text-white text-sm font-semibold">
                    Github
                  </span>
                </a>
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-red-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`mobile-menu ${
            isOpen ? "block" : "hidden"
          } md:hidden text-black absolute top-14 z-10 bg-[#e39dc1d0] w-1/2 right-1`}
        >
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Home
          </a>
          <a
            href="/about"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            About
          </a>
          <a
            href="/services"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Contact
          </a>
          <a
            href="/admindashboard"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Admin
          </a>
          <button className="bg-red-600 p-1 rounded-full hover:bg-red-700">
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="flex justify-center items-center gap-2 text-gray-500 transition duration-300"
                >
                  <img className="h-8 w-8 ring-1 rounded-full ring-gray-400" src={github} alt="" />
                </a>
              </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
