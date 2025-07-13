import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

const LanguageSelector = ({ selectedLanguages, setSelectedLanguages }) => {
  const [newLanguage, setNewLanguage] = useState('');
  const initialLanguages = [
    { id: 'reactjs', label: 'ReactJS' },
    { id: 'nodejs', label: 'NodeJS' },
    { id: 'python', label: 'Python' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'ruby', label: 'Ruby' },
    { id: 'go', label: 'Go' },
    { id: 'java', label: 'Java' },
    { id: 'typescript', label: 'TypeScript' },
    { id: 'php', label: 'PHP' },
    { id: 'csharp', label: 'C#' },
    { id: 'swift', label: 'Swift' },
    { id: 'kotlin', label: 'Kotlin' },
    { id: 'rust', label: 'Rust' },
    { id: 'dart', label: 'Dart' },
  ];

  const [languages, setLanguages] = useState(initialLanguages);

  // Load selected languages from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguages = localStorage.getItem('selectedLanguages');
      if (savedLanguages) {
        setSelectedLanguages(JSON.parse(savedLanguages));
      }
    }
  }, [setSelectedLanguages]);

  // Save selected languages to localStorage when they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('selectedLanguages', JSON.stringify(selectedLanguages));
    }
  }, [selectedLanguages]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the selected language
      setSelectedLanguages((prev) => [...prev, value]);
    } else {
      // Remove the deselected language
      setSelectedLanguages((prev) => prev.filter((language) => language !== value));
    }
  };

  const addNewLanguage = () => {
    if (newLanguage.trim()) {
      const newLanguageObj = {
        id: newLanguage.toLowerCase().replace(/\s+/g, '-'), // Generate an ID
        label: newLanguage.trim(),
      };
      setLanguages((prev) => [...prev, newLanguageObj]);
      setNewLanguage(''); // Clear input after adding
    }
  };

  const removeLanguage = (id) => {
    setLanguages((prev) => prev.filter((language) => language.id !== id));
    // Also remove from selectedLanguages if it was selected
    setSelectedLanguages((prev) => prev.filter((language) => language !== id));
  };

  return (
    <div className="p-4 max-w-[824px]">
      {/* Heading */}
      <div className="flex">

      
      <h2 className="text-xl font-semibold text-[#fff] mb-4 mr-3">Add Skills to Your Resume</h2>
      
      {/* Input for adding new language */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={newLanguage}
          onChange={(e) => setNewLanguage(e.target.value)}
          placeholder="Add new language"
          className="border-none border-gray-300 rounded p-2 mr-2 bg-[#2C2C2C] text-[#fff]"
        />
        <button
          onClick={addNewLanguage}
          className="flex items-center bg-blue-600 text-white rounded p-2"
        >
          Add
        </button>
      </div>
      </div>
      {/* Checkboxes for languages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
        {languages.map((language) => (
          <div key={language.id} className="flex items-center space-x-2 group">
            <input
              type="checkbox"
              id={language.id}
              name={language.id}
              value={language.label}
              checked={selectedLanguages.includes(language.label)} // Check if it's selected
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-white focus:ring-white border-gray-300 rounded"
            />
            <label htmlFor={language.id} className="text-[#c9c9c9]">{language.label}</label>
            <button 
              onClick={() => removeLanguage(language.id)} 
              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
            >
              <FaTrash className="text-red-600 hover:text-red-800" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
