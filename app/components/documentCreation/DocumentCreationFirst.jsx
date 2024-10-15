import React from "react";
import Image from "next/image";
import styles from "@/styles/documentCreation/documentCreationFirst.module.css";
import docIcon from "@/public/VoiceOver/docIcon.png";
import brochure from "@/public/VoiceOver/brochure.png";
import starIcon from "@/public/VoiceOver/star.png";
import Shape from "@/public/VoiceOver/Slogo.png";
import arrow from "@/public/VoiceOver/arrow.png";
import coins from "@/public/VoiceOver/coins.png";
import crown from "@/public/VoiceOver/crown.png";
import template1 from "@/public/documentCreation/template1.png";
import { BsPaperclip } from "react-icons/bs";
const PresentationPage = () => {
  const samplePrompts = [
    "A modern slide highlighting the company's mission, vision, and core values, featuring clean icons and bold headings.",
    "A slide showcasing the key features of the latest product, using sleek visuals and simple infographics.",
    "A professional slide introducing team members with names, roles, and photos in a structured layout.",
  ];
  const templates = [
    {
      image: template1,
      title: "Document Template",
    },
    {
      image: template1,
      title: "Brochure Template",
    },
    {
      image: template1,
      title: "Star Template",
    },
    {
      image: template1,
      title: "Shape Template",
    },
    {
      image: template1,
      title: "Arrow Template",
    },
  ];
  const templates1 = [
    {
      image: template1,
      title: "Q3 Sales Report 2024",
    },
    {
      image: template1,
      title: "Marketing Strategy - Final Draft",
    },
    {
      image: template1,
      title: "Client Contract - ABC Corp",
    },
    {
      image: template1,
      title: "Team Meeting Notes - October 2024",
    },
    {
      image: template1,
      title: "Budget Plan - Annual 2025",
    },
    {
      image: template1,
      title: "Product Launch Timeline",
    },
  ];

  return (
    <div className={`bg-[#1C1C1C] text-white min-h-screen `}>
      <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
      <div className={` ${styles.maincontainer} max-w-4xl mx-auto mt-8`}>
        <h1 className={`${styles.heading} text-4xl font-bold text-center mb-2`}>
          Effortless Document Creation <br /> for Every Need
        </h1>
        <p className="text-center text-[#C9C9C9] mb-8 text-[13px] font-light leading-[15.73px] tracking-[-0.02em]">
          Create professional documents in minutes with AI—tailored to your
          needs and ready to go.
        </p>
        <div className={`${styles.inputcontainer}`}>
          <textarea
            className="w-[760px] bg-[#2C2C2C] text-white p-4 rounded-lg mb-4 resize-none "
            rows="4"
            placeholder="Describe what you would like to make..."
          ></textarea>

          <div className={` ${styles.clipcontainer}`}>
            <BsPaperclip className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
          <span class="mx-10 !font-extralight text-[#C9C9C9] text-center">
            Sample Prompt
          </span>

          <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
        </div>
        <div className="max-w-[824px] grid grid-cols-3 gap-4 mt-8 mb-8">
          {samplePrompts.map((prompt, index) => (
            <div
              key={index}
              className="bg-[#2C2C2C] min-h-[88px] px-6 py-4 rounded-[8px] flex items-start justify-center  font-normal text-xs "
            >
              <div className="flex flex-row gap-[14px] ">
                <span className="text-purple-400 mr-2 mt-1 flex-shrink-0 flex justify-center items-center">
                  <Image
                    src={starIcon}
                    alt="star-icon"
                    width={19.41} // Adjust width as needed
                    height={40} // Adjust height as needed
                    className="rounded-lg" // Optional: to maintain the rounded look
                  />
                </span>
                <p className="font-normal text-[12px] text-[#C9C9C9]">
                  {prompt}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div class="flex-1 border-t border-[#3F3F3F] border-[0.61px]"></div>
        {/* <div className={`${styles.templatemaincontainer}`}>
          <div className={`${styles.containerfirstcontainer}`}>
            <div>
              <h3>Templates</h3>
              <p className="text-[10px] font-normal leading-[16px] tracking-[-0.02em] text-left">
                Find ready-to-use templates for any document—quick and easy.
              </p>
            </div>
            <div>
              <button>See all templates</button>
            </div>
          </div>
          <div className={`${styles.template}`}>
            <div className={`${styles.addtemplateicon} `}>
              <span className={`${styles.newdocicon} bg-[#2B2A2A]`}>+</span>
              <span className="text-[11px] font-[400]">New Document</span>
            </div>
            <div className={`${styles.templatecontainer}`}>
              {templates.map((template, index) => (
                <TemplateCard
                  key={index}
                  image={template.image}
                  title={template.title}
                  description={template.description}
                />
              ))}
            </div>
          </div>
        </div> */}
        <div className={styles.bottomContent}>
          {/* Additional content, such as buttons or other elements */}

          <div className={styles.templateAllContent}>
            <div className={styles.bottomTemplates}>
              <div className={styles.TemplatesContent}>
                <h2>Templates</h2>
                <p>
                  Find ready-to-use templates for any document—quick and easy.
                </p>
              </div>
              <button className={styles.button}>See all templates</button>
            </div>
            {/* import Image from 'next/image'; */}

            <div className={styles.templeteImg}>
              <div className={styles.templeteImgBox}>
                <button className={styles.addButton}>
                  <span className={styles.plusIcon}>+</span>
                </button>

                <p>New Document</p>
              </div>

              {templates.map((template, index) => (
                <TemplateCard
                  key={index}
                  image={template.image}
                  title={template.title}
                  description={template.description}
                />
              ))}
            </div>
          </div>
          <div className={styles.customline}></div>

          <div className={styles.templateAllContent}>
            <div className={styles.bottomTemplates}>
              <div className={styles.TemplatesContent}>
                <h2>Recent Documents</h2>
                <p>Instantly view and edit your latest documents</p>
              </div>
              <button className={`${styles.button} w-[128px]`}>See all</button>
            </div>
            {/* import Image from 'next/image'; */}

            <div className={styles.templeteImg}>
              {templates1.map((template, index) => (
                <TemplateCard
                  key={index}
                  image={template.image}
                  title={template.title}
                  description={template.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplateCard = ({ image, title, description }) => {
  return (
    <div className={styles.templeteImgBox}>
      <Image
        src={image}
        alt={title}
        className="mb-2 min-w-[112px] min-h-[144px] "
      />
      <h4 className="text-white  text-[11px] font-normal leading-[13.31px] tracking-[-0.02em] text-center">
        {title}
      </h4>
    </div>
  );
};

export default PresentationPage;
