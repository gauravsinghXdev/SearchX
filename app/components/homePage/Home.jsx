import React from "react";
import Image from "next/image";
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
import boy from "@/public/Home/Frameboy.png";
import appicons from "@/public/Home/appicons.png";
import photo1 from "@/public/Home/photo1.png";
import photo2 from "@/public/Home/photo2.png";
import photo3 from "@/public/Home/photo3.png";
import photo4 from "@/public/Home/photo4.png";
import photo5 from "@/public/Home/photo5.png";
import photo6 from "@/public/Home/photo6.png";
import photo7 from "@/public/Home/photo7.png";
import avatar from "@/public/Home/avatar.png";
import abcd from "@/public/Home/abcd.png";

import DropDown from "./DropDown";
import Footer from "../footer/Footer";
const Home = () => {
  const testimonials = [
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    {
      text: "Searchpad has transformed the way I create content. The video editing and image generation tools are incredibly intuitive. I&apos;ve saved so much time on my ad creatives and graphic design projects!",
      author: "@johnn_94",
      role: "Digital Marketer",
      avatar: { avatar },
    },
    {
      text: "As a small business owner, Searchpad&apos;s website design feature was a lifesaver. I built a professional-looking site without hiring a developer. The AI suggestions for visuals were spot on too!",
      author: "@sarahbizowner",
      role: "Small Business Owner",
      avatar: { avatar },
    },
    // Add more testimonials here...
  ];
  return (
    <div className="bg-gray-[ #171717] text-white mx-auto  min-h-screen">
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
        <button
          className={` ${style.button1} px-5 py-1 rounded-[39px] font-[400] text-[13px]`}
        >
          Start for free
        </button>
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
          <button
            className={` ${style.button1} px-9 py-3 rounded-[39px] text-[16px]`}
          >
            Start for free
          </button>
        </div>
        <div className={`${style.parent} `}>
          <div className={`${style.first}`}>
            <FeatureCard
              icon={playList}
              title="Video Creation"
              description="Harness AI to instantly generate  engaging videos and short clips with ease."
            />

            <FeatureCard
              icon={megaphone}
              title="Ad Creative"
              description="Create attention-grabbing ads effortlessly with the power of AI."
            />

            <FeatureCard
              icon={note}
              title="Slide Creation"
              description="Generate polished, professional slides instantly with AI assistance."
            />
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
            <FeatureCard
              icon={mic}
              title="Voiceover"
              description="Let AI produce perfectly tailored voiceovers for your content in seconds."
            />

            <FeatureCard
              icon={webDesign}
              title="Website Design"
              description="Use AI to design beautiful, user-friendly websites in no time."
            />

            <FeatureCard
              icon={pen}
              title="Graphic Design"
              description="AI generates stunning ads and designs that captivate and elevate your brand."
            />
          </div>
        </div>

        <div className={`${style.bigtext} text-center  `}>Quick, Simple</div>
        <div className={`${style.bigCard} mx-auto`}>
          <div className={`${style.bigCardDivOne}`}>
            <li className={`${style.listitem}`}>Image Creation</li>
            <li className={`${style.listitem}`}>Video Creation</li>
            <li className={`${style.listitem}`}>Voice Creation</li>
            <li className={`${style.listitem}`}>Idea Generation</li>
            <li className={`${style.listitem}`}>Document Creation</li>
          </div>
          <div className={`${style.bigCardDivTwo}`}>
            <div className={`${style.bigCardDivinnerIOne}`}>
              <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
                Instant video creation <br /> and editing
              </h3>
              <p className="text-[0.875rem] text-[#c8c8c8]">
                Create and edit videos effortlessly with our instant <br />{" "}
                tools, designed for fast, high-quality results <br /> tailored
                to your needs.
              </p>
              <div className={`${style.innerOneA}`}>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Short / Reel Creator</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Add captions to video/Audio</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Audio to video converter</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Artical to video converter</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p> Add caption to video</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Silent video commenter</p>
                </div>
              </div>
            </div>
            <div className={`${style.bigCardDivinnerITwo}`}>
              <Image
                src={boy}
                alt="robo"
                width={700}
                height={555}
                className={` rounded-[8px] `}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className={`${style.bigCard}  mx-auto`}>
          <div className={`${style.bigCardDivOne}`}>
            <li className={`${style.listitem}`}>Website design</li>
            <li className={`${style.listitem}`}>Graphic design</li>
            <li className={`${style.listitem}`}>Ad Creatives</li>
            <li className={`${style.listitem}`}>Slide creation</li>
            <li className={`${style.listitem}`}>Data Visualization</li>
          </div>
          <div className={`${style.bigCardDivTwo}`}>
            <div className={`${style.bigCardDivinnerITwo}`}>
              <Image
                src={girl}
                alt="robo"
                width={700}
                height={555}
                className={` rounded-[8px] `}
              />
            </div>
            <div className={`${style.bigCardDivinnerIOne}`}>
              <h3 className="text-[1.75rem] text-[#c9c9c9] leading-[36px]">
                Instant video creation <br /> and editing
              </h3>
              <p className="text-[0.875rem] text-[#c8c8c8]">
                Create and edit videos effortlessly with our instant <br />
                tools, designed for fast, high-quality results <br /> tailored
                to your needs.
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
                  <p> Mobile Ready</p>
                </div>
                <div className={`${style.innerOneAboxes}`}>
                  <p>Custom Templates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className={`${style.midtext} text-center mt-4`}>
          Engineered for Your <br /> Brand&apos;s Essence
        </p>

        <div
          className={`${style.fourthSection} flex gap-7 mt-14 justify-center items-center`}
        >
          <ShowCard
            title={"Brand Assets"}
            description={
              "Ensure brand consistency with unified colors, fonts, logos, and visuals for a polished, professional look"
            }
          />
          <ShowCard
            photo={appicons}
            title={"Seamless Integration"}
            description={"Export content to your platforms efficiently."}
          />
        </div>

        <div className={`${style.showOfSection}`}>
          <div className={`${style.firstPhotoSection}`}>
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
            <Image
              src={photo1}
              width={336}
              height={336}
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
                className={`${style.button1} w-[179px] h-[48px] rounded-[39px] py-3 px-6 text-[16px] font-[400]`}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-[ #171717] text-white p-8">
          <h2 className="text-[3rem] font-[500] leading-[71px] text-center mt-4">
            Preferred by Creators
            <br />
            and Professionals
          </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/api/placeholder/32/32"
                  alt="Creator"
                  width={20}
                  height={20}
                  className="w-8 h-8 rounded-full border-2 border-gray-900"
                />
              ))}
            </div>
            <span className="ml-2 text-sm">10k+</span>
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full mx-auto block mb-8">
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
    className={`${style.box} bg-[#1C1C1C] flex justify-center items-center gap-[24px] p-10 rounded-[24px]`}
  >
    <div className="">
      <Image
        src={icon}
        alt="robo"
        width={56}
        height={56}
        className="rounded-lg mr-1"
      />
    </div>
    <div className="flex flex-col gap-[8px">
      <p className="font-bold text-[16px] ">{title}</p>
      <p className="text-[13px] text-gray-400">{description}</p>
    </div>
  </div>
);

const ShowCard = ({ photo, title, description }) => (
  <div
    className={`${style.showcard} max-w-md rounded overflow-hidden p-11 shadow-lg`}
  >
    <div className={`${style.showCardImgContainer} h-[205px] overflow-hidden`}>
      <Image className="w-full" src={photo} alt={title} />
    </div>
    <div className="py-4 mt-6 text-center">
      <div className="text-white-500 text-[36px] mb-2">{title}</div>
      <p className="text-[#c9c9c9]-400 opacity-70   text-[16px] text-base">
        {description}
      </p>
    </div>
  </div>
);

const SmallCard = ({ text, author, role, avatar }) => (
  <div className={`${style.smallCard} p-8 mb-3 rounded-[24px]`}>
    <p className="text-[14px] text-[#c9c9c9]-[400] opacity-85 leading-[22px] mb-4">
      {text}
    </p>
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
