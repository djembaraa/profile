// frontend/src/components/Projects.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectModal from "./ProjectModal";

// Impor Swiper dan modulnya
import { Swiper, SwiperSlide } from "swiper/react";
// Modul 'Navigation' sudah dihapus dari sini
import { Pagination, A11y } from "swiper/modules";

// Impor CSS
import "swiper/css";
// 'import 'swiper/css/navigation';' sudah dihapus
import "swiper/css/pagination";
import ReactMarkdown from "react-markdown";

// Helper functions
const truncateWords = (text, limit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
};
const formatProjectDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: "numeric", month: "long" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="ml-1 h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setAllProjects(response.data);
        setFilteredProjects(response.data);
        const uniqueCategories = [
          "All",
          ...new Set(response.data.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Gagal mengambil data proyek:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(
        (project) => project.category === activeCategory
      );
      setFilteredProjects(filtered);
    }
    setCurrentPage(1);
  }, [activeCategory, allProjects]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section
        id="projects"
        className="scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold dark:text-white sm:text-4xl">
              My Projects
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              Choose and click my project to see detail.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  {project.image_url && project.image_url.length > 1 ? (
                    <Swiper
                      // Modul dan properti 'navigation' sudah dihapus dari sini
                      modules={[Pagination, A11y]}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      loop={true}
                      className="h-full w-full"
                    >
                      {project.image_url.map((url, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={url}
                            alt={`${project.title} - slide ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img
                      src={project.image_url?.[0]}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <span className="inline-block bg-indigo-100 dark:bg-indigo-900 px-3 py-1 text-xs font-semibold text-indigo-800 dark:text-indigo-200 rounded-full">
                        {project.category}
                      </span>
                      <time className="text-xs text-gray-500 dark:text-gray-400">
                        {formatProjectDate(project.created_at)}
                      </time>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-3">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-base">
                      <ReactMarkdown>
                        {truncateWords(project.description, 15)}
                      </ReactMarkdown>
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techs?.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 self-start"
                  >
                    Lihat Proyek
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center flex-wrap gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
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
                )
              )}
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Projects;
