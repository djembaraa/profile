// frontend/src/components/Certificates.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import CertificateModal from "./CertificateModal"; // Impor komponen modal

// SVG Icons
const CertificateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);
const LevelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    />
  </svg>
);
const DurationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const Certificate = () => {
  // --- STATE MANAGEMENT ---
  const [allCertificates, setAllCertificates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [certificatesPerPage] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get("/api/certificates");
        setAllCertificates(response.data);
      } catch (error) {
        console.error("Gagal mengambil data sertifikat:", error);
      }
    };
    fetchCertificates();
  }, []);

  // --- MODAL HANDLERS ---
  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // --- PAGINATION LOGIC ---
  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = allCertificates.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );
  const totalPages = Math.ceil(allCertificates.length / certificatesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section id="certificates" className="scroll-mt-20 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold dark:text-white sm:text-4xl">
              Certificates & Courses
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              Beberapa sertifikasi dan kursus yang telah saya selesaikan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 cursor-pointer">
            {currentCertificates.map((cert) => (
              <div
                onClick={() => handleOpenModal(cert)}
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={cert.image_url}
                    alt={cert.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 -left-1">
                    <div
                      className="relative bg-white dark:bg-gray-900 pl-3 pr-4 py-1 text-xs font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-1 shadow-md"
                      style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)",
                      }}
                    >
                      <CertificateIcon />
                      <span>CERTIFICATE</span>
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 px-4 py-2 text-xs font-semibold flex items-center gap-2">
                  <LevelIcon />
                  <span>{cert.level}</span>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {cert.category}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 leading-tight h-16">
                    {cert.title}
                  </h3>
                  <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
                    {/* Ambil hanya 3 tag pertama untuk ditampilkan di kartu */}
                    {cert.techs?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}

                    {/* Jika jumlah tag lebih dari 3, tampilkan indikator '...' */}
                    {cert.techs?.length > 3 && (
                      <span className="text-xs font-bold text-gray-400 ml-1">
                        ...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300 cursor-pointer ${
                      currentPage === number
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Certificate;
