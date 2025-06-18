import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container px-2 mx-auto">
        <div className="pt-5 pb-2 mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                href="#"
                id="#About"
                className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                href="https://wa.me/6281282160934" // <-- GANTI DENGAN LINK WA ANDA LANGSUNG
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                href="https://www.linkedin.com/in/djembar-arafat-9a6602178/"
                className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-2 mx-auto">
        <p className="py-5 md:pb-10 text-md text-gray-400 font-medium text-center">
          © 2025 djembaraa All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
