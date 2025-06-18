// frontend/src/App.jsx

import React from "react";
import "./App.css";

// PASTIKAN SEMUA KOMPONEN INI DI-IMPORT DENGAN BENAR
// DAN NAMA FILENYA SESUAI
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";

function App() {
  // Tidak ada lagi useState dan useEffect di sini

  return (
    <div className="bg-slate-100 dark:bg-gray-900 text-slate-800 dark:text-slate-200 min-h-screen">
      <Navbar />
      <About />

      <main className="container mx-auto p-4 md:p-8">
        {/* Pastikan semua komponen ini dipanggil dengan benar */}
        <Skills />
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <Experience />
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <Projects />
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <Certificate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
