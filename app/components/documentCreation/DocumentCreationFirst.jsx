"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/documentCreation/documentCreationFirst.module.css";
import { BsPaperclip } from "react-icons/bs";
import starIcon from "@/public/VoiceOver/star.png";
import template1 from "@/public/documentCreation/template1.png";
import template2 from "@/public/documentCreation/template2.png";
import template3 from "@/public/documentCreation/template3.png";
import { FiCopy } from "react-icons/fi";
import {
  IoMdClose,
  IoMdThumbsUp,
  IoMdThumbsDown,
  IoMdRefresh,
} from "react-icons/io";

import ResumeComponent from "./ResumeComponent";

const PresentationPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isContentHidden, setIsContentHidden] = useState(false);
  const [responseMessage, setResponseMessage] = useState(""); // State for the response message
  const [liked, setLiked] = useState(false); // Like button state
  const [disliked, setDisliked] = useState(false); // Dislike button state
  const [isCopied, setIsCopied] = useState(false); // Copy button state
  const [editorContent, setEditorContent] = useState("");
  const [responseText, setResponseText] = useState("");
  const samplePrompts = [
    "A modern slide highlighting the company's mission, vision, and core values, featuring clean icons and bold headings.",
    "A slide showcasing the key features of the latest product, using sleek visuals and simple infographics.",
    "A professional slide introducing team members with names, roles, and photos in a structured layout.",
  ];

  const templates = [
    { image: template1, title: "Business Proposals" },
    { image: template2, title: "Contracts and Agreements" },
    { image: template3, title: "Resumes and CVs" },
    { image: template1, title: "Invoices and Receipts" },
    { image: template2, title: "Case Studies" },
    { image: template2, title: "Case Studies" },
  ];

  const templates1 = [
    { image: template1, title: "Q3 Sales Report 2024" },
    { image: template2, title: "Marketing Strategy - Final Draft" },
    { image: template3, title: "Client Contract - ABC Corp" },
    { image: template1, title: "Team Meeting Notes - October 2024" },
    { image: template2, title: "Budget Plan - Annual 2025" },
    { image: template3, title: "Product Launch Timeline" },
  ];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

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
  
      // Attempt to retrieve the response as JSON
      const jsonResponse = await response.json(); // Directly parse JSON
  
      // Ensure that `assistant` exists in the response
      if (jsonResponse && jsonResponse.assistant) {
        setResponseText(jsonResponse.assistant); // Store the assistant's response
      } else {
        setResponseText("No response from the assistant.");
      }
  
      console.log("This is JSON Data", jsonResponse); // Log the full JSON response
    } catch (error) {
      console.error("Error generating document:", error);
      alert("Failed to generate document. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  
  


  const saveGeneratedResponse = async (responseText) => {
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://192.168.1.46:8000";
  
    try {
      const response = await fetch(`${backendURL}/save_response/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ generatedResponse: responseText }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to save the generated response.");
      }
      console.log("Response saved successfully.");
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };
  

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setSelectedTemplate(null);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsContentHidden(e.target.value.trim() !== "");
  };

  // Like button handler
  const handleLike = () => {
    setLiked(true);
    setDisliked(false); // Reset dislike
  };

  // Dislike button handler
  const handleDislike = () => {
    setDisliked(true);
    setLiked(false); // Reset like
  };

  // Copy button handler
  const handleCopy = () => {
    navigator.clipboard.writeText(responseMessage);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  // Regenerate button handler
  const handleRegenerate = () => {
    handleGenerateIdea();
  };

  // TemplateCard component
  const TemplateCard = ({ image, title, onClick }) => (
    <div className={styles.templeteImgBox} onClick={onClick}>
      <Image src={image} alt={title} className="rounded-lg" />
      <p className="text-center text-white mt-2">{title}</p>
    </div>
  );

  return (
    <div className={`bg-[#1C1C1C] text-white min-h-screen`}>
      <div className="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
      <div className={`${styles.maincontainer} max-w-4xl mx-auto mt-8`}>
        <h1 className={`${styles.heading} text-4xl font-bold text-center mb-2`}>
          Effortless Document Creation <br /> for Every Need
        </h1>
        <p className="text-center text-[#C9C9C9] mb-8 text-[13px] font-light leading-[15.73px] tracking-[-0.02em]">
          Create professional documents in minutes with AI—tailored to your
          needs and ready to go.
        </p>

        {/* Input Section */}
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
              {selectedFile ? `${selectedFile.name}` : "Attach a file"}{" "}
            </span>
            
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        {/* Generate Button */}
        <div className={`${styles.generatebtn}`}>
          <button
            className={styles.generateButton}
            onClick={handleGenerateIdea}
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Idea"}
          </button>
        </div>

        {/* Response Message After Clicking Generate */}
        {responseText && (
  <div className="mt-4 text-center text-white">
    <h2 className="mb-3">Generated Text:</h2>
    <p className="max-w-[824px] w-full overflow-x-auto p-4 bg-[#2C2C2C] rounded-lg">
     
      <ResumeComponent resumeText={responseText} /> {/* Pass the response to ResumeComponent */}
    </p>
    <div style={{ marginTop: "20px" }}>
      {/* Other components or functionality can go here */}
    </div>
  </div>
)}

        {/* Content that gets hidden after generating the idea or typing text */}
        {!isContentHidden && (
          <>
            {/* Sample Prompts Section */}
            <div className="flex items-center flex-wrap">
              <div className="flex-1 border-t border-[#5A5A5A] border-[2px] w-[20px] sm:w-[80px] md:w-[150px] lg:w-[200px]"></div>
              <span className="mx-2 sm:mx-4 md:mx-6 font-extralight text-[#C9C9C9] text-center text-xs sm:text-sm md:text-base">
                Sample Prompt
              </span>
              <div className="flex-1 border-t border-[#5A5A5A] border-[2px] w-[120px] sm:w-[250px] md:w-[350px] lg:w-[400px]"></div>
            </div>

            <div className="max-w-[824px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-8 mx-3">
              {samplePrompts.map((prompt, index) => (
                <div
                  key={index}
                  className={`bg-[#2C2C2C] min-h-[88px] px-6 py-4 rounded-[8px] flex items-center justify-between font-normal text-xs ${
                    index === 2
                      ? "col-span-1 sm:col-span-2 lg:col-span-1 justify-self-center"
                      : ""
                  }`}
                >
                  <div className="flex flex-row gap-[14px] items-center">
                    <span className="text-purple-400 flex-shrink-0 flex justify-center items-center">
                      <Image
                        src={starIcon}
                        alt="star-icon"
                        width={19.41}
                        height={40}
                        className="rounded-lg"
                      />
                    </span>
                    <p className="font-normal text-[12px] text-[#C9C9C9]">
                      {prompt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>

            {/* Templates Section */}
            <div className={styles.bottomContent}>
              <div className={styles.templateAllContent}>
                <div className={styles.bottomTemplates}>
                  <div className={styles.TemplatesContent}>
                    <h2>Templates</h2>
                    <p>
                      Find ready-to-use templates for any document—quick and
                      easy.
                    </p>
                  </div>
                  <button className={styles.button}>See all templates</button>
                </div>

                <div className={styles.templeteImg}>
                  {templates.map((template, index) => (
                    <div
                      key={index}
                      className={`${
                        index === 4 || index === 5
                          ? "sm-551:col-span-2 sm-551:justify-self-center sm-768:col-span-2 md-769:col-span-2 md-868:col-span-2 justify-self-center"
                          : "col-span-1"
                      }`}
                    >
                      <TemplateCard
                        image={template.image}
                        title={template.title}
                        onClick={() => handleTemplateClick(template)} // Handle click
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.customline}></div>

              <div className={styles.templateAllContent}>
                <div className={styles.bottomTemplates}>
                  <div className={styles.TemplatesContent}>
                    <h2>Recently Used Templates</h2>
                  </div>
                </div>

                <div className={styles.templeteImg}>
                  {templates1.map((template, index) => (
                    <TemplateCard
                      key={index}
                      image={template.image}
                      title={template.title}
                      onClick={() => handleTemplateClick(template)} // Handle click
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PresentationPage;