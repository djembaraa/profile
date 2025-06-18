// frontend/src/components/Skills.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/skills");
        // KUNCI UTAMA ADA DI SINI: gandakan datanya
        // Kita gabungkan data asli dengan data itu sendiri sekali lagi
        setSkills([...response.data, ...response.data]);
      } catch (error) {
        console.error("Gagal mengambil data skills:", error);
      }
    };
    fetchSkills();
  }, []);

  if (skills.length === 0) {
    return (
      <section id="skills" className="scroll-mt-20 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Tech Stack
        </h2>
        <p className="text-center dark:text-gray-400">Loading skills...</p>
      </section>
    );
  }

  return (
    <section id="skills" className="scroll-mt-20 py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
        Tech Stack
      </h2>

      <Swiper
        // ▼▼▼ TAMBAHKAN KELAS PADDING VERTIKAL 'py-4' DI SINI ▼▼▼
        className="skills-swiper py-4"
        modules={[Autoplay, A11y]}
        loop={false}
        freeMode={true}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={"auto"}
        spaceBetween={50}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={`${skill.id}-${index}`} style={{ width: "auto" }}>
            <div className="flex flex-col items-center text-center gap-3 group w-28">
              <div className="mt-5 w-15 h-15 rounded-xl bg-white shadow-md flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                <img
                  src={skill.image_url}
                  alt={skill.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="font-medium text-sm md:text-base dark:text-slate-300">
                {skill.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;

// {/* <div className="flex flex-col items-center text-center gap-3   group">
//   {/* ▼▼▼ DIV PEMBUNGKUS BARU ▼▼▼ */}
//   <div className="mt-5 w-15 h-15 rounded-xl bg-white shadow-md flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
//     <img
//       src={skill.image_url}
//       alt={skill.title}
//       className="w-14 h-14 object-contain" // Ukuran ikon sedikit lebih kecil dari background
//     />
//   </div>
//   {/* ▲▲▲ AKHIR DARI DIV PEMBUNGKUS ▲▲▲ */}
//   <p className="font-medium text-sm">{skill.title}</p>
// </div>; */}
