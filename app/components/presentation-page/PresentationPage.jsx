import React from "react";
import Image from "next/image";
import styles from "@/styles/Presentation/presentationpage.module.css";
import docIcon from "@/public/VoiceOver/docIcon.png";
import brochure from "@/public/VoiceOver/brochure.png";
import starIcon from "@/public/VoiceOver/star.png";
import Shape from "@/public/VoiceOver/Slogo.png";
import arrow from "@/public/VoiceOver/arrow.png";
import coins from "@/public/VoiceOver/coins.png";
import crown from "@/public/VoiceOver/crown.png";
const PresentationPage = () => {
  const samplePrompts = [
    "A modern slide highlighting the company's mission, vision, and core values, featuring clean icons and bold headings.",
    "A slide showcasing the key features of the latest product, using sleek visuals and simple infographics",
    "A professional slide introducing team members with names, roles, and photos in a structured layout.",
    "A data-driven slide displaying key statistics and trends, using charts and graphs with a minimalist design.",
    "A timeline slide outlining project milestones for the upcoming year, with clear markers and distinct color coding.",
    "A simple, impactful conclusion slide with a thank you message and contact information, in a clean, modern style.",
  ];

  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen ">
      <nav className="bg-[#1C1C1C] text-white p-4">
        <div className="max-w-[full] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-4">
              <Image
                src={arrow}
                alt="star-icon"
                width={16}
                height={16}
                className="rounded-lg mr-1"
              />
            </button>
            <div className="flex flex-row gap-1">
              <Image src={Shape} alt="star-icon" />
            </div>
          </div>
          <div className="text-center flex-grow">
            <span className="font-[500] text-[16px]">Presentation</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-[#ffff] text-[14px] flex items-center">
              <Image
                src={coins}
                alt="coins-icon"
                width={24}
                height={24}
                className="rounded-lg mr-1"
              />
              25 Tokens Left
            </span>
            <span className="mr-4 text-[#ffff] text-[14px] flex items-center">
              <Image
                src={crown}
                alt="crown-icon"
                width={16}
                height={16}
                className="rounded-lg mr-1"
              />
              Upgrade
            </span>
          </div>
        </div>
      </nav>
      <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className={`${styles.heading} text-4xl font-bold text-center mb-2`}>
          Design engaging presentations <br /> effortlessly with AI
        </h1>
        <p className="text-center text-[#C9C9C9] mb-8 text-[13px] font-light leading-[15.73px] tracking-[-0.02em]">
          Transform your ideas into fully responsive websites with just a few
          clicks.
        </p>
        <textarea
          className="w-full bg-[#2C2C2C] text-white p-4 rounded-lg mb-4 resize-none min-h-[80px] max-h-[300px]"
          rows="4"
          placeholder="Describe what you would like to make..."
        ></textarea>

        <div class="flex items-center">
          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
          <span class="mx-10 !font-extralight text-[#C9C9C9] text-center">
            Sample Prompt
          </span>

          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
          {samplePrompts.map((prompt, index) => (
            <div
              key={index}
              className="bg-[#2C2C2C] p-6 rounded-lg flex items-start justify-center  font-normal text-xs "
            >
              <div className="flex flex-row gap-4 ">
                <span className="text-purple-400 mr-2 mt-1 flex-shrink-0 flex justify-center items-center">
                  <Image
                    src={starIcon}
                    alt="star-icon"
                    width={19.41} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className="rounded-lg" // Optional: to maintain the rounded look
                  />
                </span>
                <p className="font-normal text-xs text-[#C9C9C9]">{prompt}</p>
              </div>
            </div>
          ))}
        </div>
        <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>

        <div className="flex flex-col justify-center items-center py-6">
          <p className="text-sm text-gray-400 mb-4">Design alternatives</p>

          <div className="flex space-x-4 mb-8 gap-4 h-14">
            <div className="flex flex-row justify-center items-center gap-4 bg-[#2C2C2C] pr-5 rounded-lg">
              <div
                className={`${styles.templateIcon} flex justify-center items-center h-full rounded-lg px-9`}
              >
                <Image
                  src={brochure}
                  alt="Brochure"
                  width={25} // Adjust width as needed
                  height={40} // Adjust height as needed
                  className="rounded-lg" // Optional: to maintain the rounded look
                />
              </div>
              <p className="text-[13px] text-gray-400">
                Select from unique template
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 bg-[#2C2C2C] pr-5 rounded-lg">
              <div
                className={`${styles.docsIcon} flex justify-center items-center h-full rounded-lg px-9 `}
              >
                <Image
                  src={docIcon}
                  alt="docIcon"
                  width={25} // Adjust width as needed
                  height={30} // Adjust height as needed
                />
              </div>
              <p className="text-[13px] text-gray-400">
                Upload word document file
              </p>
            </div>
            {/* <button className="bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center">
              <span className="mr-2">
                <UploadIcon />
              </span>
              Upload word document file
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationPage;
