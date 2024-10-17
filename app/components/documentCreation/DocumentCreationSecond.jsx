'use client'

import React, {useState} from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import style from "@/styles/documentCreation/documentcreationsecon.module.css";
import sparkle from "@/public/VoiceOver/sparkles.png";

const DocumentCreationSecond = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [editorContent, setEditorContent] = useState("");

  // Function to handle API call for document generation
  const handleGenerateDocument = async () => {
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://decisive-cody-brandsmashers-c1c962cb.koyeb.app";
    if (!inputText) {
      alert("Please enter a prompt");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${backendURL}/document_generation/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: inputText }),
      });

      if (response.ok) {
        // Handling the response as a blob (binary data)
        const blob = await response.blob();

        // Create a download link for the file
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        // Default file name for the downloaded document
        let fileName = "generated_document.docx"; // For .docx files
        router.push({
          pathname: '/documentCreation/DocumentCreationThird',
          query: { fileUrl: url, fileName }
        });
        // If the server sends a Content-Disposition header with filename
        const contentDisposition = response.headers.get("Content-Disposition");
        if (contentDisposition) {
          const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
          if (fileNameMatch?.length === 2) {
            fileName = fileNameMatch[1];
          }
        }

        // Set the file name and trigger the download
        link.download = fileName;
        link.click(); // Automatically download the document
        window.URL.revokeObjectURL(url); // Clean up the URL after download

      } else {
        console.error("Error fetching document:", response.statusText);
      }
    } catch (error) {
      console.error("Error in document generation:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen">
      <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
      <div className="w-[825px] mt-7 mx-auto">
        <h1 className={`${style.heading} text-4xl font-bold text-center mb-2`}>
          Effortless Document Creation <br /> for Every Need
        </h1>
        <p className="text-center text-[14px] tracking-normal !font-[50] text-[#C9C9C9] mb-8">
          Create professional documents in minutes with AI—tailored to your
          needs and ready to go.
        </p>

        <textarea
          className="w-full bg-[#2C2C2C] text-white p-7 text-[14px] rounded-lg mb-4 resize-none min-h-[112px] max-h-[300px]"
          rows="3"
          placeholder="Enter a prompt to generate a document"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <button
          onClick={handleGenerateDocument}
          className={`${style.icon} w-full text-white font-[300] text-[13px] py-2 px-4 rounded-lg flex items-center justify-center mb-8`}
          disabled={loading}
        >
          <Image
            src={sparkle}
            alt="star-icon"
            width={19.41} 
            height={40} 
            className="rounded-lg mr-1"
          />
          Generate Document
        </button>
        {editorContent && (
          <div className="bg-[#2C2C2C] text-white p-4 rounded-lg mt-4">
            <h2 className="text-2xl font-bold mb-2">Generated Document:</h2>
            <p>{editorContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentCreationSecond;
