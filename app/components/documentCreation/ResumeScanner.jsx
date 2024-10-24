import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';
import { BsPaperclip } from 'react-icons/bs';
import pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import mammoth from 'mammoth';

const ResumeScanner = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      processFile(file);
    }
  };

  const processFile = async (file) => {
    setLoading(true);
    const fileType = file.type;

    try {
      if (fileType.startsWith('image/')) {
        // Process image files with Tesseract
        const { data: { text } } = await Tesseract.recognize(
          file,
          'eng',
          { logger: (m) => console.log(m) } // Optional: log progress
        );
        setText(text);
      } else if (fileType === 'application/pdf') {
        // Process PDF files
        const pdfText = await extractTextFromPDF(file);
        setText(pdfText);
      } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileType === 'application/msword') {
        // Process DOCX files
        const docText = await extractTextFromDOCX(file);
        setText(docText);
      } else {
        alert('Unsupported file type. Please upload an image, PDF, or DOCX file.');
      }
    } catch (error) {
      console.error('Error processing file:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractTextFromPDF = async (file) => {
    const pdfData = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
    let text = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(' ');
      text += `${pageText} `;
    }

    return text;
  };

  const extractTextFromDOCX = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const { value } = await mammoth.extractRawText({ arrayBuffer });
    return value;
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      processFile(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*,application/pdf,.docx',
  });

  return (
    <div style={{ padding: '20px' }}>
      <div className={`${styles.inputcontainer} ml-3 mr-3`}>
        <textarea
          className="w-[760px] bg-[#2C2C2C] text-white p-4 rounded-lg resize-none outline-none ml-3 mr-3"
          rows="4"
          placeholder="Describe what you would like to make..."
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>

        <div
          className={`${styles.clipcontainer}`}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <BsPaperclip className="w-[24px] h-[24px]" />
          <span className="ml-2 text-[#C9C9C9] text-xs">
            {selectedFile ? selectedFile.name : ""} {/* Display file name */}
          </span>
        </div>

        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* Dropzone area */}
        <div {...getRootProps({ className: 'dropzone', style: { border: '2px dashed #ccc', padding: '20px', textAlign: 'center', marginTop: '10px' } })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image, PDF, or DOCX file here, or click to select one</p>
        </div>

        {loading && <p>Loading...</p>}
        {text && (
          <div style={{ marginTop: '20px' }}>
            <h3>Extracted Text:</h3>
            <p>{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeScanner;
