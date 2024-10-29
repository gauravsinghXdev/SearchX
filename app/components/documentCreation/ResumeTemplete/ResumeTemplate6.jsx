"use client";
import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { FaTrash } from "react-icons/fa"; // Importing the trash icon

const ResumeTemplate6 = ({ resumeText }) => {
  const sectionsInitial = resumeText ? resumeText.split("\n\n") : [];
  const [editedSections, setEditedSections] = useState(sectionsInitial);
  const [currentlyEditing, setCurrentlyEditing] = useState({ sectionIndex: null, lineIndex: null });

  // Function to handle changes in the text fields
  const handleChange = (index, field, value) => {
    const updatedSections = [...editedSections];
    const [title, ...content] = updatedSections[index].split("\n");

    if (field === "title") {
      updatedSections[index] = `${value}\n${content.join("\n")}`;
    } else {
      content[field] = value;
      updatedSections[index] = `${title}\n${content.join("\n")}`;
    }

    setEditedSections(updatedSections);
  };

  // Function to delete a line
  const handleDeleteLine = (sectionIndex, lineIndex) => {
    const updatedSections = [...editedSections];
    const [title, ...content] = updatedSections[sectionIndex].split("\n");

    // Remove the specified line if it's valid
    if (lineIndex >= 0 && lineIndex < content.length) {
      content.splice(lineIndex, 1); // Remove the line
      updatedSections[sectionIndex] = `${title}\n${content.join("\n")}`;
      setEditedSections(updatedSections);

      // Clear currently editing if needed
      if (content.length === 0) {
        setCurrentlyEditing({ sectionIndex: null, lineIndex: null }); // No lines left, clear focus
      } else if (lineIndex === content.length) {
        // If deleted the last line, focus on the previous line
        setCurrentlyEditing({ sectionIndex, lineIndex: lineIndex - 1 });
      }
    }
  };

  // Download logic for ResumeTemplate6
  const downloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          children: editedSections.flatMap((section) => {
            const [title, ...content] = section.split("\n").filter(Boolean);
            const sectionContent = [];

            // Add title (left-aligned, modern look)
            sectionContent.push(
              new Paragraph({
                children: [new TextRun({ text: title, bold: true, size: 32, color: "4A90E2" })],
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.LEFT,
                spacing: {
                  before: 300,
                  after: 100,
                },
              })
            );

            // Add content (left-aligned, modern look with spacing)
            content.forEach((line) => {
              sectionContent.push(
                new Paragraph({
                  children: [new TextRun({ text: line, size: 24, color: "333333" })],
                  alignment: AlignmentType.LEFT,
                  spacing: {
                    after: 200, // Adds space between lines for a clean look
                  },
                })
              );
            });

            return sectionContent;
          }),
        },
      ],
    });

    // Trigger download
    Packer.toBlob(doc).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume_template6.docx"; // Template 6 file name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url); // Cleanup
    });
  };

  return (
    <div>
      {/* Preview Section */}
      <div style={{ padding: "20px", border: "1px solid #ddd", backgroundColor: "#f9f9f9", textAlign: "left", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h3 style={{ color: "#4A90E2", textAlign: "center" }}>Resume Preview (Template 6)</h3>
        {editedSections.map((section, index) => {
          const [title, ...content] = section.split("\n");
          return (
            <div key={index} style={{ marginBottom: "30px", textAlign: "left", borderBottom: "1px solid #ccc", paddingBottom: "20px" }}>
              {/* Title Input */}
              <input
                type="text"
                value={title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                style={{ color: "#4A90E2", fontWeight: "bold", width: "100%", padding: "10px", fontSize: "20px", border: "1px solid #4A90E2", borderRadius: "5px", marginBottom: "10px" }}
              />
              {content.map((line, lineIndex) => (
                <div key={lineIndex} style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <textarea
                    value={line}
                    onChange={(e) => handleChange(index, lineIndex, e.target.value)}
                    style={{
                      color: "#333333",
                      width: "100%",
                      padding: "10px",
                      resize: "none",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      height: "40px", // Fixed height for uniformity
                      overflow: "hidden", // Prevents scrollbars
                      boxSizing: "border-box", // Ensures padding and border are included in the element's total width and height
                    }}
                    onFocus={() => setCurrentlyEditing({ sectionIndex: index, lineIndex })} // Set the editing state
                  />
                  {/* Delete Icon */}
                  {currentlyEditing.sectionIndex === index && currentlyEditing.lineIndex === lineIndex && (
                    <button
                      onClick={() => handleDeleteLine(index, lineIndex)} // Call delete handler
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: '5px',
                        color: 'red', // Color of delete icon
                      }}
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Download Button */}
      <button
        onClick={downloadDOCX}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4A90E2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "18px",
        }}
      >
        Download Resume (Template 6)
      </button>
    </div>
  );
};

export default ResumeTemplate6;
