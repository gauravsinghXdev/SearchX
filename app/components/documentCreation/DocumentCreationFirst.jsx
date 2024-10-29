"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/documentCreation/documentCreationFirst.module.css";
import template1 from "@/public/documentCreation/template1.png";
import template2 from "@/public/documentCreation/template2.png";
import template3 from "@/public/documentCreation/template3.png";
import ResumeComponent from "./ResumeComponent";
import starIcon from "@/public/VoiceOver/star.png";
import "react-toastify/dist/ReactToastify.css";
import TemplateSelection from "./TemplateSelection";
import ButtonEvent from "./ButtonEvent";
import LanguageSelector from "./LanguageSelector";
import IndustryField from "./IndustryField";

const PresentationPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isContentHidden, setIsContentHidden] = useState(false);
  const [responseMessage, setResponseMessage] = useState(""); // State for the response message
  const [responseText, setResponseText] = useState(""); // This holds the assistant's response
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);


  const samplePrompts = [
    "A modern slide highlighting the company's mission, vision, and core values, featuring clean icons and bold headings.",
    "A slide showcasing the key features of the latest product, using sleek visuals and simple infographics.",
    "A professional slide introducing team members with names, roles, and photos in a structured layout.",
  ];

  const templates = [
    { image: template1, title: "Template 1" },
    { image: template2, title: "Template 2" },
    { image: template3, title: "Template 3" },
    { image: template1, title: "Template 4" },
    { image: template2, title: "Template 5" },
    { image: template2, title: "Template 6" },
  ];

  const templates1 = [
    { image: template1, title: "Template 1" },
    { image: template2, title: "Template 2" },
    { image: template3, title: "Template 3" },
    { image: template1, title: "Template 4" },
    { image: template2, title: "Template 5" },
    { image: template3, title: "Template 6" },
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
        // Combine the input value, selected industries, and selected languages
        const combinedPrompt = `
        ${inputValue.trim()}
        Skills: ${selectedLanguages.join(", ")}
        Professional Experience  explain if selected : ${selectedIndustries.join(", ")}
      `;
  
    const backendURL =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://192.168.1.46:8000";

      try {
        let response;
        if (selectedFile) {
          const formData = new FormData();
          formData.append("description", combinedPrompt);
          // formData.append("file", selectedFile);
          response = await fetch(`${backendURL}/document_generation/`, {
            method: "POST",
            body: formData,
          });
        } else {
          const data = { prompt: combinedPrompt };
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
          console.log("Assistant Response:", jsonResponse.assistant); // Log the assistant's response
        } else {
          setResponseText("No response from the assistant.");
        }
      
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

  const handleRegenerate = () => {
    handleGenerateIdea();
  };

  const defaultTemplate = templates[0];

  useEffect(() => {
    console.log("response",responseText);
    
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
        <h1
          className={`${styles.heading} text-4xl font-bold text-center mb-2 leading-tight sm:leading-normal`}
        >
          Effortless Document Creation <br /> for Every Need
        </h1>

        <p className="text-center text-[#C9C9C9] mb-8 text-[13px] font-light leading-[15.73px] tracking-[-0.02em] ml-3 mr-3">
          Create professional documents in minutes with AI—tailored to your
          needs and ready to go.
        </p>

        {/* Input Section */}
        <div className={`${styles.inputcontainer} ml-3 mr-3`}>
          <textarea
            className="w-full bg-[#2C2C2C] text-white pt-4 pb-4 ml-2 rounded-lg resize-none outline-none leading-normal sm:w-[480px] md:w-[640px] lg:w-[760px] mx-0 custom-line-height"
            rows="4"
            placeholder="Describe what you would like to make..."
            value={inputValue}
            onChange={handleInputChange}
          />

          <style jsx>{`
            @media (max-width: 670px) {
              .custom-line-height {
                line-height: 1.2; /* Adjust this to your preferred smaller line height */
                overflow: hidden; /* Hides the scrollbar */
              }
            }
          `}</style>
        </div>
      {/* Industry Selection */}
      
      {/* Language Selection */}
      <LanguageSelector
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
      />
      <IndustryField
        selectedIndustries={selectedIndustries}
        setSelectedIndustries={setSelectedIndustries}
      />
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
{/* 
        {responseText && (
          <div className="mt-4 text-center text-white">
            <h2 className="mb-3">Generated Text:</h2>
            <p className="max-w-[824px] w-full overflow-x-auto p-4 bg-[#2C2C2C] rounded-lg">
              <ResumeComponent resumeText={responseText} />
            </p>
            <div className="max-w-[824px]">

            <ButtonEvent
              onRegenerate={handleRegenerate}
              textToCopy={responseText}
              />

              
            <h2 className="mb-3 text-xl font-bold mt-4 text-blue-500">
              Available Templates
            </h2>
            </div>
            <TemplateSelection
              templates={templates}
              generatedContent={responseText}
            />
          </div>
        )} */}
{responseText && (
  <div>
    <h2>Generated Text:</h2>
    <p>
      <ResumeComponent resumeText={responseText} />
    </p>
    <div>
      <ButtonEvent
        onRegenerate={handleRegenerate}
        textToCopy={responseText}
      />
      <h2>Available Templates</h2>
    </div>
    <TemplateSelection
      templates={templates}
      generatedContent={responseText}
    />
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
                    <div>
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
