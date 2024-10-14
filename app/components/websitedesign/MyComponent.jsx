import React from "react";

const MyComponent = () => {
  const sections = [
    {
      title: "Hero Header Section",
      description:
        "Bold and engaging visual header with a background image of the designer's work and a tagline.",
    },
    {
      title: "Feature Section",
      description:
        "Brief introduction about the designer and their design philosophy.",
    },
    {
      title: "Features List Section",
      description:
        "Three primary services or specialties with brief descriptions and corresponding images.",
    },
    {
      title: "Project List Section",
      description:
        "Three primary services or specialties with brief descriptions and corresponding images.",
    },
    {
      title: "Testimonial Section",
      description:
        "Testimonials from previous clients with their names and photos.",
    },
    {
      title: "CTA Section",
      description:
        "Encourage visitors to view the portfolio or contact the designer for a consultation.",
    },
    {
      title: "Footer",
      description:
        "Encourage visitors to view the portfolio or contact the designer for a consultation.",
    },
  ];

  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-400">
          Build captivating websites in minutes with AI-driven precision
        </h1>

        <div className="mb-6">
          <p className="text-sm mb-2">Prompt</p>
          <textarea
            className="w-full bg-[#2C2C2C] text-white p-4 rounded-lg resize-none min-h-[80px] max-h-[300px]"
            rows="4"
            defaultValue="Create a modern portfolio website for a graphic designer with bold visuals and smooth navigation"
          />
        </div>

        <button className="w-full bg-[#3C3C3C] hover:bg-[#4C4C4C] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center mb-6">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          Regenerate Sitemap
        </button>

        <div className="bg-[#2C2C2C] rounded-lg p-4 mb-6">
          <p className="text-sm mb-4">Sitemap</p>
          <div className="flex space-x-2 mb-4">
            <button className="bg-[#3C3C3C] text-white px-3 py-1 rounded-md flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              Home Page
            </button>
            <button className="bg-[#3C3C3C] text-white px-3 py-1 rounded-md">
              Portfolio
            </button>
            <button className="bg-[#3C3C3C] text-white px-3 py-1 rounded-md">
              Blog
            </button>
            <button className="bg-[#3C3C3C] text-white px-3 py-1 rounded-md">
              +
            </button>
          </div>
          <p className="text-sm mb-2">Sections</p>
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#3C3C3C] p-3 rounded-md mb-2 flex items-start"
            >
              <div className="bg-purple-600 w-4 h-4 rounded mr-3 mt-1"></div>
              <div>
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-sm text-gray-400">{section.description}</p>
              </div>
            </div>
          ))}
          <button className="w-full bg-[#3C3C3C] hover:bg-[#4C4C4C] text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center mt-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
