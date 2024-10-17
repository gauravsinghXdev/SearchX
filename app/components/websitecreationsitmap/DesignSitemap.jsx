import React from "react";
import { BsStars } from "react-icons/bs";
import { RxDragHandleDots2 } from "react-icons/rx";
import styles from "@/styles/websitecreationsitmap/websitecreationsitmap.module.css";
import SeparatorWithText from "./Saperator";
const DesignSitemap = () => {
  return (
    <>
      <div class="bg-[#1a1a1a] h-full w-screen overflow-x-hidden">
        <div className={styles.presentationContainer}>
          <div className={styles.header}>
            <h1>Build captivating websites in minutes with AI-driven precision.</h1>
          </div>
          <div className={styles.prompt}>
            <h1>Prompt</h1>
            
            <textarea
              className={styles.textarea}
              placeholder="Create a modern portfolio website for a graphic designer with bold visuals and smooth navigation"
            ></textarea>
          </div>
          <div className={styles.regenerate}>
            <BsStars />
            Regenerate Copy
          </div>
          <SeparatorWithText text="Sitemap" />


          <div className={styles.sections}>
            {/* Navbar section */}
            <div className="ml-5 mt-5">
  <h1 className="mb-1 text-[#C9C9C9] text-[14px] font-normal leading-[16.94px] tracking[-0.02em] text-left">
    Navbar
  </h1>

  <div className="flex space-x-2">
    {/* Reduced gap between buttons */}
    <button className="flex items-center bg-[#2D2D2D] text-[#C9C9C9] border border-transparent rounded-[8px] px-4 py-2 hover:border-[#6949FF] hover:bg-[#191919] transition duration-300 ease-in-out text-[11px] font-normal leading-[13.31px] tracking[-0.02em] text-center">
      <img
        src="\websitedesignsitmap\elements.png"
        alt="icon"
        className="w-4 h-4 mr-2"
      />
      Button 1
    </button>
    <button className="flex items-center bg-[#2D2D2D] text-[#C9C9C9] border border-transparent rounded-[8px] px-4 py-2 hover:border-[#6949FF] hover:bg-[#191919] transition duration-300 ease-in-out text-[11px] font-normal leading-[13.31px] tracking[-0.02em] text-center">
      <img
        src="\websitedesignsitmap\elements.png"
        alt="icon"
        className="w-4 h-4 mr-2"
      />
      Button 2
    </button>
    <button className="flex items-center bg-[#2D2D2D] text-[#C9C9C9] border border-transparent rounded-[8px] px-4 py-2 hover:border-[#6949FF] hover:bg-[#191919] transition duration-300 ease-in-out text-[11px] font-normal leading-[13.31px] tracking[-0.02em] text-center">
      <img
        src="\websitedesignsitmap\elements.png"
        alt="icon"
        className="w-4 h-4 mr-2"
      />
      Button 3
    </button>
    {/* New button with "+" icon */}
    <button className="flex items-center bg-[#2D2D2D] text-[#C9C9C9] border border-transparent rounded-[8px] px-4 py-2 hover:border-[#6949FF] hover:bg-[#191919] transition duration-300 ease-in-out text-[11px] font-normal leading-[13.31px] tracking[-0.02em] text-center">
      <span className="text-[#C9C9C9] text-[18px] font-bold flex items-center justify-center mr-0">
        + {/* Plus icon */}
      </span>
    </button>
  </div>
</div>


            <h1 className="ml-[20px] mt-3 text-[#C9C9C9] text-[14px] font-normal leading-[16.94px] tracking[-0.02em] text-left">
              Sections
            </h1>

            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div className={styles.lineheight}>
                <h2>Hero Header Section</h2>
                <p>
                Bold and engaging visual header with a background image of the designer's work and a tagline.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div className={styles.lineheight}>
                <h2>Feature Section</h2>
                <p>
                Brief introduction about the designer and their design philosophy.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div className={styles.lineheight}>
                <h2>Features List Section</h2>
                <p>
                Three primary services or specialties with brief descriptions and corresponding images.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div className={styles.lineheight}>
                <h2>Project List Section</h2>
                <p>
                Three primary services or specialties with brief descriptions and corresponding images.
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div className={styles.lineheight}>
                <h2>Testimonial Section</h2>
                <p>
                Testimonials from previous clients with their names and photos.                </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div className={styles.lineheight}>
                <h2>CTA Section</h2>
                <p>
                Encourage visitors to view the portfolio or contact the designer for a consultation.               </p>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div className={styles.lineheight}>
                <h2>Footer</h2>
                <p>
                Encourage visitors to view the portfolio or contact the designer for a consultation.         </p>
              </div>
            </div>

           

          
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div>
                <h2>Closing Statement</h2>
                <p>
                  Driven by our mission, inspired by our vision, and guided by
                  our values, we're here to make a difference.
                </p>
              </div>
            </div>
            <div className={styles.addSection}>+ Add Section</div>
          </div>

          <SeparatorWithText
            text="Preferences"
            className="text-[11px] font-normal leading-[13.31px] tracking[-0.02em] text-center"
          />

          <div className={styles.brandingGuidelines}>
            {/*After preference section */}

            <div className={styles.visualElements}>
              {/* Design Preferences & Branding Guidelines*/}
              <div className={styles.toneVoice}>
                <div>
                  <h3>Design Preferences & Branding Guidelines</h3>
                  <p>
                    Maintain brand consistency through colors, fonts, logos, and
                    visuals for a cohesive, professional presentation.
                  </p>
                </div>
                <div>
                  <div class="flex items-center justify-center">
                    <button class="flex items-center justify-center bg-[#2D2D2D] text-[#C9C9C9] border border-transparent rounded-lg w-8 h-8 hover:border-[#6949FF] hover:bg-[#191919] transition duration-300 ease-in-out text-[18px] font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Visual Elements */}
              <div className={styles.toneVoice}>
                <div>

                <h3>Visual Elements</h3>
                <p>
                  Use icons, images, and graphics to enhance clarity and visual
                  appeal.
                </p>
                </div>
                <div>
                  <div class="flex items-center justify-center">
                    <button class="flex items-center justify-center bg-[#2D2D2D] text-[#C9C9C9] border border-transparent rounded-lg w-8 h-8 hover:border-[#6949FF] hover:bg-[#191919] transition duration-300 ease-in-out text-[18px] font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* Tone & Voice */}
              <div className={styles.toneVoice}>
                <div>

                <h3>Tone & Voice</h3>
                <p>
                  Tailor your presentations to meet the specific needs of
                  different audiences and objectives.
                </p>
                </div>
                <div>
                  <div class="flex items-center justify-center">
                    <button class="flex items-center justify-center bg-[#2D2D2D] text-[#C9C9C9] border border-transparent rounded-lg w-8 h-8 hover:border-[#6949FF] hover:bg-[#191919] transition duration-300 ease-in-out text-[18px] font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Generate Presentation Button */}
              <div className={styles.generateButton}>
                <button className={styles.generateBtn}>
                  <BsStars />
                  Generate Presentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignSitemap;
