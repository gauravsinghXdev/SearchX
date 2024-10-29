"use client"

import { useState } from "react";

const GenerateDocument = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [responseText, setResponseText] = useState("");

  const handleGenerateIdea = async () => {
    if (inputValue.trim() === "" && !selectedFile) {
      alert("Please describe what you would like to make or attach a file.");
      return;
    }

    setIsGenerating(true);

    const backendURL =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://192.168.1.46:8000";

    try {
      let response;
      if (selectedFile) {
        const formData = new FormData();
        formData.append("description", inputValue);
        formData.append("file", selectedFile);

        console.log([...formData]); // Log to verify contents

        response = await fetch(`${backendURL}/document_generation/`, {
          method: "POST",
          body: formData,
        });
      } else {
        const data = { prompt: inputValue };
        console.log("Request data => ", data); // Log the data object

        response = await fetch(`${backendURL}/document_generation/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      console.log("Response => ", response);

      // Get the text content from the response
      const responseText = await response.text();
      console.log("Generated Text => ", responseText);

      setResponseText(responseText);
    } catch (error) {
      console.error("Error generating document:", error);
      alert("Failed to generate document. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container">
      <h1>Generate Your Text Document</h1>
      <div className="input-section">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Describe what you would like to make..."
          className="input-box"
          rows="5"
        />
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="file-input"
        />
      </div>
      <button
        onClick={handleGenerateIdea}
        className="generate-button"
        disabled={isGenerating}
      >
        {isGenerating ? "Generating..." : "Generate Document"}
      </button>

      {/* Display the generated text */}
      {responseText && (
        <div className="output-section">
          <h2>Generated Text:</h2>
          <pre>{responseText}</pre>
        </div>
      )}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .input-section {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 600px;
          margin-bottom: 20px;
        }
        .input-box {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .file-input {
          margin-bottom: 20px;
        }
        .generate-button {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .generate-button:disabled {
          background-color: #ddd;
          cursor: not-allowed;
        }
        .output-section {
          margin-top: 30px;
          padding: 20px;
          background-color: #f4f4f4;
          border-radius: 10px;
          width: 100%;
          max-width: 600px;
          white-space: pre-wrap;
        }
        pre {
          font-family: monospace;
          font-size: 1rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default GenerateDocument;
