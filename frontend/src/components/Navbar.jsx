// frontend/src/components/Navbar.jsx

import React, { useState } from "react";
import whatsappIcon from "../assets/whatsapp.svg"; // Pastikan path ini benar

// Ikon menu hamburger
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const Navbar = () => {
  // State hanya untuk mengontrol buka/tutup menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-white">
          DJ
        </a>

        {/* Grup item menu untuk desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#skills" className="nav-link text-gray-300 hover:text-white">
            Skills
          </a>
          <a
            href="#experience"
            className="nav-link text-gray-300 hover:text-white"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="nav-link text-gray-300 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="nav-link text-gray-300 hover:text-white"
          >
            Certificates
          </a>

          <div className="pl-4 flex items-center gap-4">
            <a
              href="https://github.com/djembaraa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110"
            >
              {/* SVG untuk GitHub bisa ditambahkan di sini jika mau */}
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/djembar-arafat-9a6602178/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-transform hover:scale-110"
            >
              Linkedin
            </a>
            <a
              href="https://wa.me/6281282160934"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center font-medium text-sm"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 mr-2" />
              Let's Talk
            </a>
          </div>
        </div>

        {/* Tombol menu mobile, hanya muncul di layar kecil */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          <MenuIcon />
        </button>
      </nav>

      {/* Kontainer untuk menu mobile dropdown */}
      <div
        className={`mobile-menu md:hidden bg-gray-900 shadow-lg absolute w-full left-0 transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col items-center text-center space-y-4">
          <a
            href="#skills"
            onClick={toggleMobileMenu}
            className="block text-gray-300 hover:text-white w-full py-2"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={toggleMobileMenu}
            className="block text-gray-300 hover:text-white w-full py-2"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={toggleMobileMenu}
            className="block text-gray-300 hover:text-white w-full py-2"
          >
            Projects
          </a>
          <a
            href="#certificates"
            onClick={toggleMobileMenu}
            className="block text-gray-300 hover:text-white w-full py-2"
          >
            Certificates
          </a>
          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com/djembaraa"
              className="text-gray-300 hover:text-white"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/djembar-arafat-9a6602178/"
              className="text-gray-300 hover:text-white"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
