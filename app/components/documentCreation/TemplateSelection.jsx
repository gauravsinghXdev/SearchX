import React, { useState } from "react";
import styles from "@/styles/documentCreation/documentCreationFirst.module.css";
import ResumeTemplate1 from "./ResumeTemplete/ResumeTemplate1";
import ResumeTemplate2 from "./ResumeTemplete/ResumeTemplate2";
import ResumeTemplate3 from "./ResumeTemplete/ResumeTemplate3";
import ResumeTemplate4 from "./ResumeTemplete/ResumeTemplate4";
import ResumeTemplate5 from "./ResumeTemplete/ResumeTemplate5";
import TemplateCard from "./TemplateCard";
import ResumeTemplate6 from "./ResumeTemplete/ResumeTemplate6";

// Array of available resume templates
const resumeTemplates = [
  ResumeTemplate1,
  ResumeTemplate2,
  ResumeTemplate3,
  ResumeTemplate4,
  ResumeTemplate5,
  ResumeTemplate6,

];

const TemplateSelection = ({ templates, generatedContent }) => {
  const [SelectedTemplateComponent, setSelectedTemplateComponent] =
    useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState(generatedContent); // Track content

  const handleTemplateSelect = (templateComponent) => {
    setSelectedTemplateComponent(() => templateComponent);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  // Handle saving edited content
  const handleSave = (newContent) => {
    setCurrentContent(newContent);
    console.log("Saved content:", newContent); // Optional: log saved content
  };

  return (
    <div>
      {/* Template Selection Section */}
      <div className={styles.templeteImg}>
        {templates.map((template, index) => (
          <div key={index} className="col-span-1">
            <TemplateCard
              image={template.image}
              title={template.title}
              onClick={() => handleTemplateSelect(resumeTemplates[index])}
            />
          </div>
        ))}
      </div>

      {/* Render the preview in a modal if a template is selected */}
      {isPreviewOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Template Preview</h2>
             
              <button
                onClick={handleClosePreview}
                className="text-red-500 hover:text-red-700"
              >
                Close
              </button>
            </div>

            {/* Render the selected template */}
            {SelectedTemplateComponent && (
              <SelectedTemplateComponent
                resumeText={currentContent}
                onSave={handleSave}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelection;
