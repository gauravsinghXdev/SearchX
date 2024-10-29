"use client";
import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from "docx";
import { FaTrash } from "react-icons/fa"; // Importing a trash icon for deletion

const ResumeTemplate4 = ({ resumeText }) => {
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

  // Download logic for ResumeTemplate4
  const downloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          children: editedSections.flatMap((section) => {
            const [title, ...content] = section.split("\n").filter(Boolean);
            const sectionContent = [];

            sectionContent.push(
              new Paragraph({
                children: [new TextRun({ text: title, bold: true, color: "333333" })],
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.LEFT,
              })
            );

            content.forEach((line) => {
              sectionContent.push(
                new Paragraph({
                  children: [new TextRun({ text: line, color: "888888" })],
                  spacing: { after: 200 },
                  alignment: AlignmentType.LEFT,
                })
              );
            });

            sectionContent.push(
              new Paragraph({
                border: {
                  top: { color: "dddddd", space: 1, style: BorderStyle.SINGLE },
                },
              })
            );

            return sectionContent;
          }),
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume_template4.docx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <div>
      <div style={{ padding: "20px", border: "1px solid #ddd", backgroundColor: "#f9f9f9" }}>
        <h3 style={{ color: "#333", textAlign: "left" }}>Resume Preview (Template 4)</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {editedSections.map((section, index) => {
            const [title, ...content] = section.split("\n");
            return (
              <div key={index} style={{ flex: "1 0 45%", margin: "10px", border: "1px solid #ddd", padding: "10px" }}>
                {/* Title Input */}
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  style={{ color: "#000000", fontWeight: "bold", width: "100%", padding: "5px" }}
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
      </div>
      <button
        onClick={downloadDOCX}
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", borderRadius: "5px", cursor: "pointer", display: "block", margin: "0 auto" }}
      >
        Download Resume (Template 4)
      </button>
    </div>
  );
};

export default ResumeTemplate4;
