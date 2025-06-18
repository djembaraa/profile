// frontend/src/components/Experience.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

// Helper component untuk format tanggal
const formatDate = (dateString) => {
  if (!dateString) return "Present";
  const options = { year: "numeric", month: "short" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const Experience = () => {
  // --- STATE MANAGEMENT ---
  const [allExperiences, setAllExperiences] = useState([]); // Menyimpan SEMUA data

  // State baru untuk Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [experiencesPerPage] = useState(3); // Menampilkan 3 item per halaman

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("/api/experience");
        setAllExperiences(response.data);
      } catch (error) {
        console.error("Gagal mengambil data experience:", error);
      }
    };
    fetchExperiences();
  }, []);

  // --- PAGINATION LOGIC ---
  const indexOfLastExperience = currentPage * experiencesPerPage;
  const indexOfFirstExperience = indexOfLastExperience - experiencesPerPage;
  const currentExperiences = allExperiences.slice(
    indexOfFirstExperience,
    indexOfLastExperience
  );
  const totalPages = Math.ceil(allExperiences.length / experiencesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="experience" className="scroll-mt-20">
      <div className="fflex justify-center text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
          Work Experiences
        </h2>
      </div>

      {/* Container untuk semua kartu pengalaman */}
      <div className="space-y-8">
        {/* Mapping dari 'currentExperiences' yang sudah dipotong */}
        {currentExperiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-col md:flex-row items-start bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300"
          >
            {exp.image_url && (
              <img
                src={exp.image_url}
                alt={exp.company}
                className="w-16 h-16 rounded-lg mb-4 md:mb-0 md:mr-8 object-contain bg-white p-1"
              />
            )}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="font-semibold text-lg dark:text-white">
                    {exp.job_title}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 text-sm">
                    {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {formatDate(exp.start_date)} - {formatDate(exp.end_date)}
                </span>
              </div>

              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2 list-disc list-outside md:pl-5 mb-4">
                {exp.description?.map((point, index) => {
                  const parts = point.split(/:(.*)/s);
                  const title = parts[0];
                  const restOfText = parts[1];
                  return (
                    <li key={index}>
                      <strong className="font-semibold text-slate-700 dark:text-white">
                        {title}:
                      </strong>
                      {restOfText}
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.techs?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Navigasi Halaman (Pagination) */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 ${
                currentPage === number
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;
