"use client";
import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx";
import { FaTrash } from "react-icons/fa";

const ResumeTemplate1 = ({ resumeText }) => {
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

    if (lineIndex >= 0 && lineIndex < content.length) {
      content.splice(lineIndex, 1);
      updatedSections[sectionIndex] = `${title}\n${content.join("\n")}`;
      setEditedSections(updatedSections);

      if (content.length === 0) {
        setCurrentlyEditing({ sectionIndex: null, lineIndex: null });
      } else if (lineIndex === content.length) {
        setCurrentlyEditing({ sectionIndex, lineIndex: lineIndex - 1 });
      }
    }
  };

  // Download DOCX logic for ResumeTemplate1
  const downloadDOCX = async () => {
    console.log("download",resumeText);
    
    const doc = new Document({
      sections: [
        {
          children: editedSections.flatMap((section) => {
            const [title, ...content] = section.split("\n").filter(Boolean);
            const sectionContent = [];
  
            // Add the heading with 11px size and bold
            sectionContent.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: title,
                    bold: true,
                    size: 22, // 11px in points for docx
                    color: "000000",
                  }),
                ],
                alignment: AlignmentType.LEFT,
              })
            );
  
            // Add content with 11px size and normal weight
            content.forEach((line) => {
              sectionContent.push(
                new Paragraph({
                  children: [new TextRun({ text: line, size: 22, color: "000000" })], // 11px in points for docx
                  alignment: AlignmentType.LEFT,
                })
              );
            });
  
            return sectionContent;
          }),
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume_template1.docx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  };
  

  return (
    <div>
      <div style={{ padding: "20px", border: "1px solid #ddd", marginBottom: "20px", backgroundColor: "#f9f9f9" }}>
        <h3 style={{ color: "#333", textAlign: "left" }}>Resume Preview (Template 1)</h3>
        {editedSections.map((section, index) => {
          const [title, ...content] = section.split("\n");
          return (
            <div key={index} style={{ marginBottom: "20px", textAlign: "left" }}>
              <input
                type="text"
                value={title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                style={{ color: "#000000", fontWeight: "bold", width: "100%", padding: "5px", textAlign: "left" }}
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
                      background: "none",
                      textAlign: "left"
                    }}
                    rows={1}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    onFocus={() => setCurrentlyEditing({ sectionIndex: index, lineIndex })}
                  />
                  {currentlyEditing.sectionIndex === index && currentlyEditing.lineIndex === lineIndex && (
                    <button
                      onClick={() => handleDeleteLine(index, lineIndex)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: '5px',
                        color: 'red',
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
          backgroundColor: "#007bff",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Download as DOCX
      </button>
    </div>
  );
};

export default ResumeTemplate1;
