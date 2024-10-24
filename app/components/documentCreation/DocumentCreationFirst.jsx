"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/documentCreation/documentCreationFirst.module.css";
import { BsPaperclip } from "react-icons/bs";
import template1 from "@/public/documentCreation/template1.png";
import template2 from "@/public/documentCreation/template2.png";
import template3 from "@/public/documentCreation/template3.png";
import ResumeComponent from "./ResumeComponent";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import starIcon from "@/public/VoiceOver/star.png";
import DocumentEditorContainer from "./DocumentEditorContainer";
import { FiDownload } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver"; // file-saver library for saving files locally

const PresentationPage = () => {
  const [showEditor, setShowEditor] = useState(false); // State to toggle the editor visibility
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
  const [responseText, setResponseText] = useState(""); // This holds the assistant's response
  const [editorContent, setEditorContent] = useState("");
  const [savedResponse, setSavedResponse] = useState(""); // To store the saved response

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

  // Function to download the responseText as a .docx file
  const handleDownloadDocx = async () => {
    if (responseText) {
      // Ensure there's content to download
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [
                  new TextRun(responseText), // Ensures the preview content is the same as the downloaded content
                ],
              }),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, "template.docx"); // Downloads the document with the correct content
    } else {
      console.error("No content to download");
    }
  };

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

      const jsonResponse = await response.json();
      console.log("This is Result=>", jsonResponse);

      if (jsonResponse && jsonResponse.assistant) {
        setResponseText(jsonResponse.assistant); // Store the assistant's response
      } else {
        setResponseText("No response from the assistant.");
      }

      // console.log("This is JSON Data", jsonResponse); // Log the full JSON response
    } catch (error) {
      console.error("Error generating document:", error);
      alert("Failed to generate document. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Function to save the response
  const saveGeneratedResponse = async (responseText) => {
    const backendURL =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://192.168.1.46:8000";

    try {
      const response = await fetch(`${backendURL}/save_response/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ generatedResponse: JSON.parse(responseText) }),
      });

      if (!response.ok) {
        throw new Error("Failed to save the generated response.");
      }
      console.log("Response saved successfully.");
      setSavedResponse(JSON.parse(responseText)); // Save the response in state
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };

  const handleTemplateClick = (template) => {
    console.log("Template Clicked:", template);
    saveGeneratedResponse(responseText); // Save the generated response when a template is clicked
    setSelectedTemplate(template);
    setIsPreviewOpen(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsContentHidden(e.target.value.trim() !== "");
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setSelectedTemplate(null);
  };

  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    setLiked(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(responseText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleRegenerate = () => {
    handleGenerateIdea();
  };

  // Function for handling the download
  const handleDownload = () => {
    if (responseText) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                children: [new TextRun(responseText)],
              }),
            ],
          },
        ],
      });

      Packer.toBlob(doc)
        .then((blob) => {
          saveAs(blob, "resume.docx");
        })
        .catch((error) => console.error("Error creating the document", error));
    } else {
      console.error("No content to download");
    }
  };

  // Function for handling the save
  const handleSave = () => {
    // Add your save logic (e.g., API call or local storage)
    console.log("Document saved!");
  };

  // Automatically select a template when a response is received
  const defaultTemplate = templates[0];

  useEffect(() => {
    if (responseText) {
      setSelectedTemplate(defaultTemplate);
    }
  }, [responseText]);

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
              {selectedFile ? `${selectedFile.name}` : ""}
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

        {responseText && (
          <div className="mt-4 text-center text-white">
            <h2 className="mb-3">Generated Text:</h2>
            <p className="max-w-[824px] w-full overflow-x-auto p-4 bg-[#2C2C2C] rounded-lg">
              <ResumeComponent resumeText={responseText} />
            </p>

            {/* Like, Dislike, and Copy buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleLike}
                className={`${
                  liked ? "text-blue-500" : "text-white"
                } flex items-center`}
              >
                <BiLike className="mr-1" />
                Like
              </button>
              <button
                onClick={handleDislike}
                className={`${
                  disliked ? "text-red-500" : "text-white"
                } flex items-center`}
              >
                <BiDislike className="mr-1" />
                Dislike
              </button>
              <button
                onClick={handleCopy}
                className={`flex items-center ${
                  isCopied ? "text-green-500" : ""
                }`}
              >
                <MdOutlineContentCopy className="mr-1" />
                {isCopied ? "Copied!" : "Copy"}
              </button>
              <button onClick={handleRegenerate} className="flex items-center">
                <AiOutlineReload className="mr-1" />
                Regenerate
              </button>

              <button
                onClick={handleDownloadDocx}
                className="flex items-center"
              >
                <FiDownload /> Download
              </button>
            </div>

            {/* Templates Section */}
            <div className={styles.templeteImg}>
              {templates.map((template, index) => (
                <div key={index} className="col-span-1">
                  <TemplateCard
                    image={template.image}
                    title={template.title}
                    onClick={() => handleTemplateClick(template)} // Pass template on click
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Content that gets hidden after generating the idea or typing text */}
        {!isContentHidden && (
          <>
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

      {/* Preview modal */}
      {/* {isPreviewOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[80%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Template Preview</h2>
              <button
                onClick={handleClosePreview}
                className="text-red-500 hover:text-red-700"
              >
                Close
              </button>
            </div>
            <DocumentEditorContainer
              initialContent={responseText}
              template={selectedTemplate}
            />
          </div>
        </div>
      )} */}

      {isPreviewOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">Template Preview</h2>
              <button
                onClick={handleClosePreview}
                className="text-red-500 hover:text-red-700"
              >
                Close
              </button>
            </div>

            {/* Document Editor */}
            {/* <DocumentEditorContainer
        initialContent={responseText}
        template={selectedTemplate}
      /> */}
            <DocumentEditorContainer
              initialContent={responseText} // Content displayed in the editor
              template={selectedTemplate}
              onContentChange={(updatedContent) =>
                setResponseText(updatedContent)
              } // Syncing changes
            />

            {/* Buttons Section */}
            <div className="flex justify-end mt-4">
              {/* Save Button */}
              <button
                onClick={() => {
                  handleSave(); // Your save logic here
                  toast.success("Content saved successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
              >
                Save
              </button>

              {/* Download Button */}
              <button
                onClick={handleDownloadDocx} // Function for downloading
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Download
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default PresentationPage;
