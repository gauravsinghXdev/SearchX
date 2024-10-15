import React from "react";
import Image from "next/image";
import style from "@/styles/documentCreation/documentcreationsecon.module.css";
import sparkle from "@/public/VoiceOver/sparkles.png";
import Shape from "@/public/VoiceOver/Slogo.png";
import arrow from "@/public/VoiceOver/arrow.png";
import coins from "@/public/VoiceOver/coins.png";
import crown from "@/public/VoiceOver/crown.png";
const DocumentCreationSecond = () => {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen  ">
      {/* <nav className="bg-[#1C1C1C] text-white p-4">
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
      </nav> */}
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
          placeholder="What services could merge finance and health for better personal management?"
        ></textarea>

        <button
          className={`${style.icon} w-full text-white font-[300] text-[13px] py-2 px-4 rounded-lg flex items-center justify-center mb-8`}
        >
          <Image
            src={sparkle}
            alt="star-icon"
            width={19.41} // Adjust width as needed
            height={40} // Adjust height as needed
            className="rounded-lg mr-1" // Optional: to maintain the rounded look
          />
          Generate Document
        </button>
      </div>
    </div>
  );
};

export default DocumentCreationSecond;
