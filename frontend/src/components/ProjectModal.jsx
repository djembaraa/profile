// frontend/src/components/ProjectModal.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactMarkdown from "react-markdown";

const formatProjectDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {project.image_url && (
          <div className="w-full aspect-video bg-gray-900 rounded-t-lg">
            {project.image_url.length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="h-full w-full"
              >
                {project.image_url.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={url}
                      alt={`${project.title} - slide ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={project.image_url?.[0]}
                alt={project.title}
                className="h-full w-full object-contain"
              />
            )}
          </div>
        )}

        <div className="p-6 md:p-8">
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900 px-3 py-1 text-xs font-semibold text-indigo-800 dark:text-indigo-200 rounded-full">
            {project.category}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
            {project.title}
          </h2>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {formatProjectDate(project.created_at)}
          </time>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose dark:prose-invert mt-6 max-w-none text-gray-600 dark:text-gray-300">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </div>

          <a
            href={project.project_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200"
          >
            Kunjungi Proyek
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
