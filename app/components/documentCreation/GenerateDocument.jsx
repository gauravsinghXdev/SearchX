"use client";
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

        response = await fetch(`${backendURL}/document_generation/`, {
          method: "POST",
          body: formData,
        });
      } else {
        const data = { prompt: inputValue };

        response = await fetch(`${backendURL}/document_generation/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      const responseText = await response.text();
      setResponseText(responseText);
    } catch (error) {
      console.error("Error generating document:", error);
      alert("Failed to generate document. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle downloading the generated text as a .txt file
  const handleDownload = () => {
    const blob = new Blob([responseText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "generated_document.txt";
    link.click();
  };

  // Handle moving the generated text back into the input area for editing
  const handleEdit = () => {
    setInputValue(responseText);
    setResponseText("");
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

          {/* Download and Edit Buttons */}
          <div className="action-buttons">
            <button onClick={handleDownload} className="action-button">
              Download
            </button>
            <button onClick={handleEdit} className="action-button">
              Edit
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          background:red;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: #f0f4f8;
          min-height: 100vh;
          box-sizing: border-box;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: #333;
          text-align: start;
        }
        .input-section {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 824px;
          margin-bottom: 20px;
        }
        .input-box {
          width: 100%;
          padding: 15px;
          margin-bottom: 20px;
          font-size: 1rem;
          background-color: black;
          color: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          outline: none;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .input-box::placeholder {
          color: #888;
        }
        .file-input {
          color: white;
          background-color: black;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 20px;
          font-size: 1rem;
          border: 1px solid #ccc;
        }
        .generate-button {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          font-size: 1.2rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .generate-button:hover {
          background-color: #45a049;
        }
        .generate-button:disabled {
          background-color: #ddd;
          cursor: not-allowed;
        }
        .output-section {
          margin-top: 30px;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          width: 100%;
          max-width: 824px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .action-buttons {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .action-button {
          background-color: #2196f3;
          color: white;
          padding: 10px 20px;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .action-button:hover {
          background-color: #1e88e5;
        }
        pre {
          font-family: monospace;
          font-size: 1rem;
          line-height: 1.5;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </div>
  );
};

export default GenerateDocument;
