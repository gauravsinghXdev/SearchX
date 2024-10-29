import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const IndustryField = ({ selectedIndustries, setSelectedIndustries }) => {
  const [newIndustry, setNewIndustry] = useState('');

  // Load industries from localStorage or set default industries
  const [industries, setIndustries] = useState(() => {
    const savedIndustries = localStorage.getItem('industries');
    return savedIndustries
      ? JSON.parse(savedIndustries)
      : [
          { id: 'logistics', label: 'Logistics and Supply Chain Technology' },
          { id: 'healthtech', label: 'HealthTech (Healthcare Technology)' },
          { id: 'edtech', label: 'EdTech (Educational Technology)' },
          { id: 'fintech', label: 'FinTech (Financial Technology)' },
          { id: 'retail-tech', label: 'Retail Tech' },
          { id: 'proptech', label: 'Real Estate Tech (PropTech)' },
          { id: 'foodtech', label: 'FoodTech' },
          { id: 'gaming', label: 'Gaming and Entertainment Tech' },
          { id: 'None', label: 'None' },
        ];
  });

  // Save industries to localStorage whenever the industries state is updated
  useEffect(() => {
    localStorage.setItem('industries', JSON.stringify(industries));
  }, [industries]);

  // Handle checkbox change for selected industries
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedIndustries((prev) => [...prev, value]);
    } else {
      setSelectedIndustries((prev) => prev.filter((industry) => industry !== value));
    }
  };

  // Add a new industry and save to state
  const addNewIndustry = () => {
    if (newIndustry.trim()) {
      const newIndustryObj = {
        id: newIndustry.toLowerCase().replace(/\s+/g, '-'),
        label: newIndustry.trim(),
      };
      setIndustries((prev) => [...prev, newIndustryObj]);
      setNewIndustry(''); // Clear input field after adding
    }
  };

  // Remove an industry and update both the industry and selected states
  const removeIndustry = (id) => {
    setIndustries((prev) => prev.filter((industry) => industry.id !== id));
    setSelectedIndustries((prev) => prev.filter((industry) => industry !== id));
  };

  return (
    <div className="p-4">
      <div className="flex">
        <h2 className="text-xl font-bold text-[#fff] mb-4 mr-4">Add Your Industry</h2>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            value={newIndustry}
            onChange={(e) => setNewIndustry(e.target.value)}
            placeholder="Add new industry"
            className="border-none border-gray-300 rounded p-2 mr-2 bg-[#2C2C2C] text-[#fff]"
          />
          <button
            onClick={addNewIndustry}
            className="flex items-center bg-blue-600 text-white rounded p-2"
          >
            <FaPlus className="mr-1" />
            Add
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {industries.map((industry) => (
          <div key={industry.id} className="flex items-center space-x-2 group">
            <input
              type="checkbox"
              id={industry.id}
              name={industry.id}
              value={industry.label}
              checked={selectedIndustries.includes(industry.label)} // Ensure checkbox state matches selection
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={industry.id} className="text-[#c9c9c9]">{industry.label}</label>
            <button
              onClick={() => removeIndustry(industry.id)}
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

export default IndustryField;
