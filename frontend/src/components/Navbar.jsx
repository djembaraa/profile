// frontend/src/components/Navbar.jsx

import React, { useState } from "react"; // Hapus useEffect karena tidak dipakai lagi
import whatsappIcon from "../assets/whatsapp.svg"; // Pastikan path dan nama file gambar ini benar

// Hapus komponen SunIcon dan MoonIcon karena tidak dipakai

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
  // State yang tersisa hanya untuk menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hapus semua state dan useEffect untuk dark mode dari sini

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Kita hapus semua kelas 'dark:...' untuk sementara
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" id="About" className="text-2xl font-bold text-white">
          DJ
        </a>

        {/* Grup item menu untuk desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#skills"
            className="nav-link text-gray-100 hover:text-gray-400"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="nav-link text-gray-100 hover:text-gray-400"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="nav-link text-gray-100 hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="nav-link text-gray-100 hover:text-gray-400"
          >
            Certificates
          </a>
          <a
            href="https://github.com/djembaraa"
            className="bg-gray-700 hover:brightness-95 text-white px-5 py-2 rounded-lg transition-colors flex items-center justify-center font-medium text-sm"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/djembar-arafat-9a6602178/"
            className="bg-[#0e76a8] hover:brightness-95 text-white px-5 py-2 rounded-lg transition-colors flex items-center justify-center font-medium text-sm"
          >
            Linkedin
          </a>

          {/* Tombol "Let's Talk" dipindahkan ke sini agar rapi */}
          <a
            href="https://wa.me/6281282160934" // <-- GANTI DENGAN LINK WA ANDA LANGSUNG
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-colors flex items-center justify-center font-medium text-sm"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 mr-2" />
            Let's Talk
          </a>
        </div>

        {/* Tombol menu mobile tetap di sini */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
          <MenuIcon />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`mobile-menu md:hidden bg-white shadow-lg absolute w-full left-0 transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#skills" className="block text-gray-700">
            Skills
          </a>
          <a href="#experience" className="block text-gray-700">
            Experience
          </a>
          <a href="#projects" className="block text-gray-700">
            Projects
          </a>
          <a href="#certificates" className="block text-gray-700">
            Certificates
          </a>
          {/* Anda juga bisa menambahkan tombol Let's Talk di sini jika mau */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
