import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { FaTrash } from "react-icons/fa";


const ResumeTemplate2 = ({ resumeText, onSave }) => {
  const sectionsInitial = resumeText ? resumeText.split("\n\n") : [];
  const [editedSections, setEditedSections] = useState(sectionsInitial);
  const [currentlyEditing, setCurrentlyEditing] = useState({ sectionIndex: null, lineIndex: null });

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
    onSave(updatedSections.join("\n\n")); // Save changes to current content
  };

  const handleDeleteLine = (sectionIndex, lineIndex) => {
    const updatedSections = [...editedSections];
    const [title, ...content] = updatedSections[sectionIndex].split("\n");

    if (lineIndex >= 0 && lineIndex < content.length) {
      content.splice(lineIndex, 1);
      updatedSections[sectionIndex] = `${title}\n${content.join("\n")}`;
      setEditedSections(updatedSections);
      onSave(updatedSections.join("\n\n")); // Save changes to current content

      if (content.length === 0) {
        setCurrentlyEditing({ sectionIndex: null, lineIndex: null });
      } else if (lineIndex === content.length) {
        setCurrentlyEditing({ sectionIndex, lineIndex: lineIndex - 1 });
      }
    }
  };

  const downloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          children: editedSections.flatMap((section) => {
            const [title, ...content] = section.split("\n").filter(Boolean);
            const sectionContent = [];

            sectionContent.push(
              new Paragraph({
                children: [new TextRun({ text: title, bold: true, color: "007bff", size: 28 })],
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
              })
            );

            content.forEach((line) => {
              sectionContent.push(
                new Paragraph({
                  children: [new TextRun({ text: line, color: "333333", size: 24 })],
                  alignment: AlignmentType.LEFT,
                  spacing: { after: 200 },
                })
              );
            });

            return sectionContent;
          }),
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      console.log("DOCX Blob:", blob); // Check if blob is created
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume_template2.docx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }).catch((error) => {
      console.error("Error creating DOCX:", error);
    });
  };


  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div style={{ padding: "20px", border: "1px solid #ddd", marginBottom: "20px" }}>
        <h3 style={{ color: "#007bff", textAlign: "center", fontWeight: "bold" }}>Resume Preview (Template 2)</h3>
        {editedSections.map((section, index) => {
          const [title, ...content] = section.split("\n");
          return (
            <div key={index} style={{ marginBottom: "20px", textAlign: "center" }}>
              <input
                type="text"
                value={title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                style={{ color: "#007bff", fontWeight: "bold", width: "100%", padding: "10px", border: "1px solid #007bff", borderRadius: "5px", textAlign: "center" }}
                placeholder="Section Title"
              />
              {content.map((line, lineIndex) => (
                <div key={lineIndex} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                  <textarea
                    value={line}
                    onChange={(e) => handleChange(index, lineIndex, e.target.value)}
                    style={{
                      color: "#000000",
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      resize: "none",
                      overflow: "hidden",
                      height: "auto",
                      textAlign: "left",
                    }}
                    rows={1}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    onFocus={() => setCurrentlyEditing({ sectionIndex: index, lineIndex })}
                  />
                  {currentlyEditing.sectionIndex === index && currentlyEditing.lineIndex === lineIndex && (
                    <button onClick={() => handleDeleteLine(index, lineIndex)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '5px', color: 'red' }}>
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <button onClick={downloadDOCX} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", display: "block", margin: "0 auto", fontWeight: "bold" }}>
        Download Resume (Template 2 - DOCX)
      </button>
    
    </div>
  );
};

export default ResumeTemplate2;
