"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import compimg from "@/public/Home/compImg.png";
import girl from "@/public/Home/FrameGirl.png";
import style from "@/styles/home/home.module.css";
import rose from "@/public/Home/chart-rose.png";
import mic from "@/public/Home/mic.png";
import note from "@/public/Home/note.png";
import pen from "@/public/Home/pen-tool.png";
import playList from "@/public/Home/play-list.png";
import megaphone from "@/public/Home/megaphone.png";
import webDesign from "@/public/Home/webDesign.png";
import logo from "@/public/Home/Slogo.png";
import slogo from "@/public/Home/shape.png";
import boy from "@/public/Home/Frameboy.png";
import appicons from "@/public/Home/appicons.png";
import photo1 from "@/public/Home/photo1.png";
import photo2 from "@/public/Home/photo2.png";
import photo3 from "@/public/Home/photo3.png";
import photo4 from "@/public/Home/photo4.png";
import photo5 from "@/public/Home/photo5.png";
import photo6 from "@/public/Home/photo6.png";
import photo7 from "@/public/Home/photo7.png";
import avatarimg from "@/public/Home/avatar.png";
import vector from "@/public/Home/Vector.png";
import textlogo from "@/public/Home/textlogo.png";
import heart from "@/public/Home/heart.png";
import heart1 from "@/public/Home/heart1.png";
import tiktok from "@/public/Home/tiktoklogo.png";
import x from "@/public/Home/Xlogo.png";
import insta from "@/public/Home/instagramlogo.png";
import facebook from "@/public/Home/facebooklogo.png";
import discord from "@/public/Home/discordlogo.png";

import DropDown from "./DropDown";
import Footer from "../footer/Footer";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Image Creation");
  const [currentSelection, setCurrentSelection] = useState("Website design");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const changeSelection = (option) => {
    setCurrentSelection(option);
  };

  const renderContentG = () => {
    switch (currentSelection) {
      case "Website design":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Create Stunning <br /> Websites Quickly
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Design websites with ease using our intuitive AI tools, crafted to
              meet both aesthetic and functional needs in minimal time.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Build in Minutes</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Instant Publishing</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Easy Edits</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>No Coding Needed</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Mobile-Ready</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Custom Templates</p>
              </div>
            </div>
          </>
        );
      case "Graphic design":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Instant Graphic Design <br /> Solutions
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Create visually stunning graphics quickly with our AI tools,
              designed for a variety of use cases, from social media to business
              branding.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Flyer and Poster Creation</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Business Card Generator</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Infographic Design</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Social Media Banner Design</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>No design Skill required</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Custom Templates</p>
              </div>
            </div>
          </>
        );
      case "Ad Creatives":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              High-Impact Ad <br /> Creatives in No Time
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Generate high-impact ad creatives instantly, optimized for
              multiple platforms to boost your marketing campaigns.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Banner Ad Creator</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Social Media Ads Generator</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Video Ad Design</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Ad Copy Suggestions</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Responsive Ad Design</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Ad Split Testing Suggestions</p>
              </div>
            </div>
          </>
        );
      case "Slide creation":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Effortless Slide Design <br /> for Presentations
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Craft professional presentations with minimal effort using
              AI-powered tools for visually impactful and well-organized slides.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>AI Design Suggestions</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Data Visualization Tools</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Automatic Slide Layouts</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Export to PDF/PowerPoint</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Presentation Style Matching</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Custom Templates</p>
              </div>
            </div>
          </>
        );
      case "Data Visualization":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Transform Data into <br /> Visual Insights
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Convert raw data into compelling visual formats with ease,
              improving communication and decision-making.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Custom Chart Builder</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Interactive Graph Generator</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Real-Time Data Visuals</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Infographic Creation</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Pre-designed Data Templates</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Heatmaps and Trends</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderContentB = () => {
    switch (selectedOption) {
      case "Image Creation":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Instant Image Creation
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Generate stunning images effortlessly with our AI-powered tools,
              customized to meet your unique requirements with speed and
              precision.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Convert Text to Image</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Add Captions to Video/Audi</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Audio to Video Converter</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Article to Video Converter</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Add Captions to Videos</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Silent Video Commenter</p>
              </div>
            </div>
          </>
        );
      case "Video Creation":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Instant video creation <br /> and editing
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Create and edit videos effortlessly with our instant <br />
              tools, designed for fast, high-quality results <br /> tailored to
              your needs.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Short / Reel Creator</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Add Captions to Video/Audi</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Audio to Video Converter</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Article to Video Converter</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Add Captions to Videos</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Silent Video Commenteror</p>
              </div>
            </div>
          </>
        );
      case "Voice Creation":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              High-Quality Voiceovers <br /> in Minutes
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Convert your text into natural-sounding voiceovers in multiple
              languages and accents with just a few clicks.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Article Summarizer</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Customizable Voice Tone</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Automated Text-to-Speech</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Add Music to Voiceovers</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Convert Articles to Podcasts</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Voice Style Selection</p>
              </div>
            </div>
          </>
        );
      case "Idea Generation":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Innovative Ideas, <br /> Instantly Generated
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Instantly generate ideas for your projects with our AI-powered
              tool that tailors solutions to your creative and business needs.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Blog Idea Generation</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p> Marketing Campaign Ideas</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Brand Name Generator</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Ad Copy Ideas</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Product Design Inspiration</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Social Media Strategy Ideas</p>
              </div>
            </div>
          </>
        );
      case "Document Creation":
        return (
          <>
            <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
              Seamless Document <br /> Creation and Formatting
            </h3>
            <p className="text-[0.875rem] text-[#c8c8c8]">
              Create professional documents effortlessly with our AI tools
              designed to format, structure, and style your content quickly.
            </p>
            <div className={`${style.innerOneA}`}>
              <div className={`${style.innerOneAboxes}`}>
                <p>Resume Builder</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p> Proposal Creator</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Business Report Writer</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Document Summarizer</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Contract Drafting</p>
              </div>
              <div className={`${style.innerOneAboxes}`}>
                <p>Whitepaper Generator</p>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  const testimonials = [
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatarimg },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatarimg },
    },
    // Add more testimonials here...
  ];
  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="!bg-[#171717] text-white mx-auto  min-h-screen">
      <header className="p-4 px-9 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">
            <Image src={logo} alt={"logo"} />
          </span>
          {/* <span className="text-xl">Searchpad</span> */}
        </div>
        <nav>
          <ul className="flex space-x-6 font-[400]">
            <li className="">Home</li>
            <li>
              <DropDown />
            </li>
            <li>About us</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <Link  href="/ToolsHome">
        <button
          className={` ${style.button1} px-5 py-1 rounded-[39px] font-[400] text-[13px]`}
        > 
          Start for free
        </button>
        </Link>
      </header>

      <main className="container mx-auto flex flex-col justify-center   py-12">
        <h1 className={`${style.heading} font-bold text-center mt-4`}>
          Unleash Creativity with
          <br />
          <span className={`${style.headingspan}`}>AI-Powered Solutions</span>
        </h1>
        <p className="text-center text-[16px] text-[#c9c9c9] font-[400] opacity-90 mt-5 mb-8">
          From video creation to web design, our AI-driven platform simplifies
          and elevates your creative <br /> process.
        </p>
        
        <div className="flex justify-center mb-12">
        <Link  href="/ToolsHome">
          <button
            className={` ${style.button1} px-9 py-3 rounded-[39px] text-[16px]`}
          >
            Start for free
          </button>
           </Link>
        </div>
        <div className={`${style.parent} `}>
          <div className={`${style.first}`}>
          <Link  href="/tools">
            <FeatureCard
              icon={playList}
              title="Video Creation"
              description="Harness AI to instantly generate  engaging videos and short clips with ease."
            />
            </Link>
            <FeatureCard
              icon={megaphone}
              title="Ad Creative"
              description="Create attention-grabbing ads effortlessly with the power of AI."
            />
            <Link href='Presentation'>
            <FeatureCard
              icon={note}
              title="Slide Creation"
              description="Generate polished, professional slides instantly with AI assistance."
            />
            </Link>
          </div>
          <div className={`${style.second} `}>
            <div className={`${style.secondA} ${style.imgBox}`}>
              <Image
                src={compimg}
                alt="robo"
                width={300}
                height={300}
                className={`${style.imgBox} rounded-lg `}
              />
            </div>

            <FeatureCard
              icon={rose}
              title="Data Visualization"
              description="Transform raw data into visually clear insights, powered by AI."
            />
          </div>
          <div className={`${style.third} `}>
          <Link href='/voiceOver'>
            <FeatureCard
              icon={mic}
              title="Voiceover"
              description="Let AI produce perfectly tailored voiceovers for your content in seconds."
            />
            </Link>

            <FeatureCard
              icon={webDesign}
              title="Website Design"
              description="Use AI to design beautiful, user-friendly websites in no time."
            />
            <Link href='/graphicstool'>
            <FeatureCard
              icon={pen}
              title="Graphic Design"
              description="AI generates stunning ads and designs that captivate and elevate your brand."
            />
            </Link>
          </div>
        </div>

        <div className={` text-center  `}>
          <span className={`${style.bigtext}  `}> Quick, Simple</span>
        </div>
        <div className={`${style.bigCard} mx-auto`}>
          <div className={`${style.bigCardDivOne}`}>
            {[
              "Image Creation",
              "Video Creation",
              "Voice Creation",
              "Idea Generation",
              "Document Creation",
            ].map((option) => (
              <li
                key={option}
                className={`${style.listitem}`}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </li>
            ))}
          </div>
          <div className={`${style.bigCardDivTwo}`}>
            <div className={`${style.bigCardDivinnerIOne}`}>
              {renderContentB()}
            </div>
            <div className={`${style.bigCardDivinnerITwo}`}>
              <Image
                src={boy}
                alt="robo"
                width={700}
                height={555}
                className={`rounded-[8px]`}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className={`${style.bigCard} mx-auto`}>
          <div className={`${style.bigCardDivOne}`}>
            {[
              "Website design",
              "Graphic design",
              "Ad Creatives",
              "Slide creation",
              "Data Visualization",
            ].map((option) => (
              <li
                key={option}
                className={`${style.listitem}`}
                onClick={() => changeSelection(option)}
              >
                {option}
              </li>
            ))}
          </div>
          <div className={`${style.bigCardDivTwo}`}>
            <div className={`${style.bigCardDivinnerITwo}`}>
              <Image
                src={girl}
                alt="girl"
                width={700}
                height={555}
                className={`rounded-[8px]`}
              />
            </div>
            <div className={`${style.bigCardDivinnerIOne}`}>
              {renderContentG()}
            </div>
          </div>
        </div>

        <p className={`${style.midtext} text-center mt-4`}>
          Engineered for Your <br /> Brand&apos;s Essence
        </p>

        <div
          className={`${style.fourthSection} flex gap-7 mt-14 justify-center items-center`}
        >
          <div
            className={`${style.showcard} max-w-md rounded overflow-hidden p-11 shadow-lg`}
          >
            <div className={`${style.buttonccontainer} h-`}>
              <div className={`${style.button} ${style.firstbutton}`}>
                <Image src={slogo} width={26} />
                <span className={`${style.buttontext} `}> Logo</span>
              </div>
              <div className={`${style.button} ${style.middlebutton}`}>
                <Image src={vector} width={30} />
                <span className={`${style.buttontext} `}>Colors</span>
              </div>
              <button className={`${style.button} ${style.thirdbutton}`}>
                <Image src={textlogo} width={40} />
                <span className={`${style.buttontext} `}> text</span>
              </button>
            </div>
            <div className={`${style.showcardtext}`}>
              <span className="text-white font-[500] tracking-tighter text-[36px] mb-2">
                Brand Assets
              </span>
              <p className="text-[#c9c9c9] font-[400] text-base  leading-7 tracking-tight text-center">
                Ensure brand consistency with unified colors, fonts, logos, and
                visuals for a polished, professional look
              </p>
            </div>
          </div>

          {/* ------------------------------------------ */}

          <div
            className={`${style.showcard} max-w-md rounded overflow-hidden p-11 shadow-lg`}
          >
            <div className={`${style.logoContainer} overflow-hidden`}>
              <div className={`${style.appiconsfirst}`}>
                <Link
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={tiktok}
                    alt={"tiktok logo"}
                    className="w-[80px] h-[108px]"
                  />
                </Link>
                <Link
                  href="https://x.com/searchpad_app?s=21&t=ROAHeI0m0fL-67vkOtDSXA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={x} alt={"x logo"} className="w-[69px] h-[69px]" />
                </Link>
                <Link
                  href="https://www.instagram.com/searchpad?igsh=YnQ0N2xwNDFrOG1u"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={insta}
                    alt={"instagram logo"}
                    className="w-[80px] h-[80px]"
                  />
                </Link>
              </div>
              <div className={`${style.appiconssecond}`}>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={facebook}
                    alt={"facebook logo"}
                    className="w-[79px] h-[79px]"
                  />
                </Link>
                <Link
                  href="https://discord.gg/searchpad "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={discord}
                    alt={"discord logo"}
                    className="w-[90px] h-[70px]"
                  />
                </Link>
              </div>
            </div>
            <div className={`${style.showcardtext}`}>
              <span className="text-white font-[500] tracking-tighter text-[36px] mb-2">
                Seamless Integration
              </span>
              <p className="text-[#c9c9c9] font-[400] text-base leading-7 tracking-tight text-center">
                Export content to your platforms efficiently.
              </p>
            </div>
          </div>
          {/* ------------------------------------------- */}
        </div>

        <div className={`${style.showOfSection}`}>
          <div className={`${style.firstPhotoSection}`}>
            <Image
              src={photo1}
              width={336}
              height={336}
              alt={"first photo"}
              layout="responsive"
            />
            <Image
              src={photo2}
              width={400}
              height={240}
              alt={"first photo"}
              layout="responsive"
            />
            <Image
              src={photo3}
              width={400}
              height={240}
              alt={"first photo"}
              layout="responsive"
            />
          </div>
          <div className={`${style.secondPhotoSection}`}>
            <Image src={photo4} alt={"first photo"} />
            <Image
              src={photo5}
              width={400}
              height={240}
              alt={"first photo"}
              layout="responsive"
            />
            <Image
              src={photo6}
              width={400}
              height={240}
              alt={"first photo"}
              layout="responsive"
            />
            <Image src={photo7} alt={"first photo"} />
          </div>
          <div className={`${style.thirdSection}`}>
            <div className={`${style.thirdSectionFirst}`}>
              <p className="text-[#c9c9c9] text-[3rem] font-[600]">
                Explore Unlimited <br />
                Possibilities with AI
              </p>
            </div>
            <div className={`${style.thirdSectionsecond}`}>
              <p className="text-[#c9c9c9] text-[1rem] font-[400]">
                Elevate your content game with Searchpad. Create <br /> smarter,
                not harder. <br />
                One search. One touch. Endless possibilities
              </p>
              <button
                className={`${style.button1} w-[179px] h-[48px] rounded-[39px] py-3 px-2 text-[16px] font-[400]`}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-[ #171717] text-[#c9c9c9]  mt-3 p-8">
          <h2 className="text-[3rem] font-[500] leading-[71px] text-center mb-[38px] mt-4">
            Preferred by Creators
            <br />
            and Professionals
          </h2>
          <div className="flex justify-center items-center gap-[4px] mb-[38px]">
            <div>
              <Image src={heart} alt={"heart icon"} />
            </div>
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={avatarimg}
                  alt="Creator"
                  className="w-[64px] h-[64px] rounded-full border-2 border-gray-900"
                />
              ))}
            </div>

            <span className="ml-2 text-sm">10k+</span>
            <Image src={heart1} alt={"heart icon"} />
          </div>
          <button
            className={`${style.button1} text-white px-6 py-2 rounded-full mx-auto block mb-8`}
          >
            Start for free
          </button>
          <div className="grid grid-cols-4 gap-2">
            {testimonials.map((testimonial, index) => (
              <SmallCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div
    className={`${style.box} bg-[#1C1C1C] flex justify-center  items-center gap-[24px] p-10 rounded-[24px]`}
  >
    <div className="">
      <Image src={icon} alt="robo" width={56} className="rounded-lg mr-1" />
    </div>
    <div className="flex flex-col gap-[8px]">
      <p className="font-[500] text-[#c9c9c9  ] text-[16px] ">{title}</p>
      <p className="text-[13px] leading-[22px] text-[#c8c8c8]">{description}</p>
    </div>
  </div>
);

// const ShowCard = ({ photo, title, description }) => (
//   <div
//     className={`${style.showcard} max-w-md rounded overflow-hidden p-11 shadow-lg`}
//   >
//     <div className={`${style.showCardImgContainer}  overflow-hidden`}>
//       <Image className="w-full" src={photo} alt={title} />
//     </div>
//     <div className={`${style.showcardtext}py-4 mt-6 text-center`}>
//       <span className="text-white-500 text-[36px] mb-2">{title}</span>
//       <p className="text-[#c9c9c9]-400 opacity-70   text-[16px] text-base">
//         {description}
//       </p>
//     </div>
//   </div>
// );

const SmallCard = ({ text, author, role, avatar }) => (
  <div className={`${style.smallCard} p-8 mb-3 rounded-[24px]`}>
    <div className={`${style.scrollcontainer}`}>
      <div className={`${style.scrollcontent}`}>
        <p className="text-[14px] text-[#c9c9c9]-[400] opacity-85 leading-[22px] mb-4">
          {text}
        </p>
      </div>
    </div>
    <div className="flex items-center">
      <Image scr={avatar} alt={author} className="w-8 h-8 rounded-full mr-2" />
      <div>
        <p className=" text-[14px] text-[#c9c9c9]-[500]">{author}</p>
        <p className="text-[11px] text-[#c9c9c9]-300 italic">{role}</p>
      </div>
    </div>
  </div>
);

export default Home;
