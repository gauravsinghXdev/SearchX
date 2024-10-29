"use client";
import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { FaTrash } from "react-icons/fa"; // Importing the trash icon

const ResumeTemplate5 = ({ resumeText }) => {
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

  // Download logic for ResumeTemplate5
  const downloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          children: editedSections.flatMap((section) => {
            const [title, ...content] = section.split("\n").filter(Boolean);
            const sectionContent = [];

            // Add title (center-aligned, minimalist)
            sectionContent.push(
              new Paragraph({
                children: [new TextRun({ text: title, bold: true, size: 28, color: "000000" })],
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: {
                  before: 300,
                  after: 100,
                },
              })
            );

            // Add content (left-aligned, minimalist with spacing)
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
      a.download = "resume_template5.docx"; // Template 5 file name
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url); // Cleanup
    });
  };

  return (
    <div>
      {/* Preview Section */}
      <div style={{ padding: "20px", border: "1px solid #ddd", backgroundColor: "#ffffff", textAlign: "left" }}>
        <h3 style={{ color: "#000000", textAlign: "center" }}>Resume Preview (Template 5)</h3>
        {editedSections.map((section, index) => {
          const [title, ...content] = section.split("\n");
          return (
            <div key={index} style={{ marginBottom: "30px", textAlign: "left" }}>
              {/* Title Input */}
              <input
                type="text"
                value={title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                style={{ color: "#000000", fontWeight: "bold", width: "100%", padding: "5px", textAlign: "center" }}
              />
              {content.map((line, lineIndex) => (
                <div key={lineIndex} style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <textarea
                    value={line}
                    onChange={(e) => handleChange(index, lineIndex, e.target.value)}
                    style={{
                      color: "#000000",
                      width: "100%",
                      padding: "5px",
                      resize: "none",
                      overflow: "hidden",
                      height: "auto",
                    }}
                    rows={1}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight}px`;
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
          backgroundColor: "#000000",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Resume (Template 5)
      </button>
    </div>
  );
};

export default ResumeTemplate5;
