"use client"
import React, { useState } from 'react';
import DocumentEditor from './DocumentEditor'; // Assuming this is the editor component you are using
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx'; // For creating .docx files

const DocumentEditorContainer = ({ initialContent }) => {
  const [responseText, setResponseText] = useState(initialContent);

  // Function to generate and download .docx file

  const generateDocx = () => {
    let parsedContent;
  
    try {
      // Parse the responseText as JSON
      parsedContent = JSON.parse(responseText);
    } catch (error) {
      console.error("Error parsing responseText as JSON:", error);
      return;
    }
  
    // Stringify the JSON content to preserve its structure
    const jsonContent = JSON.stringify(parsedContent, null, 2); // Pretty-print JSON with indentation

    console.log("this is doc editor container",jsonContent);
    
  
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: jsonContent, // Insert the JSON as text in the document
                  break: 1, // Optional: adding line breaks
                }),
              ],
            }),
          ],
        },
      ],
    });
  
    // Generate and download the .docx file with the JSON content
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'response.json.docx'); // Give it a .docx filename with a hint that it's JSON
    });
  };
  

  return (
    <div className="document-editor-container">
      <DocumentEditor initialContent={responseText} />
      
      {/* Button to generate and download the .docx file */}
      
      <button onClick={generateDocx}>
        Download as .docx
      </button>
    </div>
  );
};

export default DocumentEditorContainer;
