// frontend/src/components/About.jsx

import React from "react";
import profileImage from "../assets/saya.jpg"; // Pastikan path dan nama file gambar ini benar
import whatsappIcon from "../assets/whatsapp.svg"; // Pastikan path dan nama file gambar ini benar

// Helper component untuk ikon SVG agar lebih rapi
const LocationIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    ></path>
  </svg>
);

// Nama komponen diubah menjadi About agar sesuai dengan nama file dan ekspor
const About = () => {
  const myData = {
    name: "Nama Anda",
    title: "Full-Stack Developer",
    location: "Depok, Sawangan, Indonesia",
    whatsappLink: "https://wa.me/6281282160934",
    cvLink:
      "https://drive.google.com/file/d/1iVWDPXKfOgAgtkRoLlE2k1NsBlscecJw/view?usp=sharing",
  };

  return (
    <section id="about" className="w-full py-10 lg:py-10 scroll-mt-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
        <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-center pl-3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative mx-auto w-64 h-64 lg:w-[420px] lg:h-[420px] rounded-xl shadow-lg object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 dark:text-white">
              Hi, I'm Djembar Arafat 👋
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6">
              Full-Stack Developer & Cybersecurity Enthusiast
            </p>
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-300 leading-relaxed">
              I’m passionate about building reliable web applications from front
              to back, and constantly exploring how to make software more secure
              and efficient. With a background in backend development using
              Golang and frontend skills in JavaScript, I enjoy turning ideas
              into scalable digital products. Beyond development, I also have a
              solid understanding of SEO, digital marketing, graphic design,
              video editing, photography, and videography—allowing me to bridge
              the gap between technical execution and creative strategy. I’m
              also interested in data, machine learning, and how technology can
              create real-world impact.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-3 mb-8">
            <div className="flex items-center space-x-2">
              <LocationIcon />
              <span className="text-gray-500 dark:text-gray-400">
                Banyumas, Central Java, Indonesia
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-500 dark:text-gray-400">
                Available for new projects
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={myData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center font-medium"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 mr-2" />
              Let's Talk
            </a>
            <a
              href={myData.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center font-medium"
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pastikan yang diekspor adalah komponen About
export default About;
