"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BsCloudUpload } from "react-icons/bs";
import { RiRobot2Line } from "react-icons/ri";
import styles from "../../../styles/GaphicsDesign/GraphicsTool.module.css";
import { RiRobot2Fill } from "react-icons/ri";
import offerimage from "../../../public/offerimage.png";
import { MdInfoOutline } from "react-icons/md";
import InpuText from "./InputTex";
import imageCreation from "../../../public/imageCreation.png";
import videoCreation from "../../../public/videoCreation.png";
import anime from "../../../public/anime.png";
import visualization from "../../../public/visualization.png";
import voiceover from "../../../public/voiceover.png";
import documents from "../../../public/documents.png";
import robos from "../../../public/robos.png";
import stoke from "../../../public/stoke.png";
import custom from "../../../public/custom.png";
import aiimage from "../../../public/aiimage.png";
import business from "../../../public/business.png";
import education from "../../../public/education.png";
import creative from "../../../public/creative.png";
import arow from "../../../public/graphics/arow.png";


const GraphicsTool = () => {
  const [prompt, setPrompt] = useState("");
  const [primaryColors, setPrimaryColors] = useState([]);
  const [secondaryColors, setSecondaryColors] = useState([]);
  const [headlineFont, setHeadlineFont] = useState("Inter (Bold)");
  const [bodyFont, setBodyFont] = useState("Inter (Regular)");
  const [generatedImageUrl, setGeneratedImageUrl] = useState(offerimage); // To store the generated graphic
  const handleGenerateClick = async () => {
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://decisive-cody-brandsmashers-c1c962cb.koyeb.app"
    // Prepare the data to send to the backend
    const data = {
      prompt,
    };
    try {
      // API call to generate the graphic
      const response = await fetch(`${backendURL}/graphic/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.text();
        console.log("RESULT => ", result);
        setGeneratedImageUrl(result); // Assuming the API returns a URL or base64 image
      } else {
        console.error("Failed to generate the graphic");
      }
    } catch (error) {
      console.error("Error generating the graphic:", error);
    }
  };
  return (

    <div className={styles.container}>
        <div className={styles.mainContainer}>
            <div className={styles.presentationContainer}>
               <div className={styles.header}>
                 <h1>Design engaging presentations effortlessly with AI</h1>
               </div>
               <div className={styles.prompt}>
                <h1>Prompt</h1>
                <textarea
                className={styles.textarea}
                placeholder="A modern slide highlighting the company's mission, vision, and core values, featuring clean icons and bold headings."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                ></textarea>
                </div>
              <div className={styles.regenerate}>
              <BsStars />
              Regenerate Copy
              </div>

               <InpuText />
               {/* <SeparatorWithText text="Prefrences" /> */}
               <div className={styles.brandingGuidelines}>
                {/* <SeparatorWithText text="Prefrences" /> */}
                 <div className={styles.brandingGuidelines}>
                 <div className={styles.designBranding}>
                  <h2>Design Preferences & Branding Guidelines</h2>
                 
                  <div className={styles.arrowdropdown}>
                  <select className={styles.fontSelects}>
                  <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                 </div>
                 </div>
                 <p>
                  Maintain brand consistency through colors, fonts, logos, and
                  visuals for a cohesive, professional presentation.
                 </p>
                {/* Color Section */}
                <div className={styles.colorandtypography}>
                  <div className={styles.colorSection}>
                    <div>
                      <label>Color</label>
                      <input type="text" className={styles.colorInput} />
                    </div>

                    <div className={styles.color}></div>
                    <div className={styles.colorDisplay}>
                      <div className={styles.primaryColors}>
                        <h3>Primary Colors</h3>
                        <div className={styles.colorblockcontainer}>
                          <div className={styles.colorBlock}>+</div>
                          <div className={styles.colorBlock}>+</div>
                          <div className={styles.colorBlock}>+</div>
                        </div>
                      </div>
                      <div className={styles.secondaryColors}>
                        <h3>Secondary Colors</h3>
                        <div className={styles.colorblockcontainer}>
                          <div className={styles.colorBlock}>+</div>
                          <div className={styles.colorBlock}>+</div>
                          <div className={styles.colorBlock}>+</div>
                          <div className={styles.colorBlock}>+</div>
                          <div className={styles.colorBlock}>+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Typography Section */}
                  <div className={styles.typographySection}>
                    Typography
                    <div className={styles.typo}>
                      <div className={styles.typography}>
                        <label>Headline (Secondary Font)</label>
                        <select className={styles.fontSelect}>
                          <option>Inter (Bold)</option>
                          <option>Roboto (Bold)</option>
                          <option>Arial (Bold)</option>
                        </select>
                      </div>
                      <div className={styles.typography}>
                        <label className={styles.lableText}>Body text (Primary Font)</label>
                        <div className={styles.fontdropdown}>
                        <select className={styles.fontSelect}>
                          <option>Inter (Bold)</option>
                          <option>Roboto (Regular)</option>
                          <option>Arial (Regular)</option>
                        </select>
                        </div>
                      </div>
                    </div>
                    <div className={styles.logoUpload}>
                      <label>Logo</label>
                      <div className={styles.uploadBox}>
                        <BsCloudUpload className={styles.uploadIcon} />
                        <p>
                          Drag & drop or <span>Choose file</span>
                        </p>
                        <p className={styles.uploadNote}>
                          For better result upload: PNG, SVG files
                        </p>
                      </div>
                    </div>
                  </div>
                 </div>
                 {/* black */}
                 <div className={styles.designBranding}>
                  <div>
                    <h2>Visual Elements</h2>
                    <p>
                      Use icons, images, and graphics to enhance clarity and
                      visual appeal.
                    </p>
                  </div>
                  <div className={styles.arrowdropdown}>
                  <select className={styles.fontSelects}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  </div>
                 </div>
                  { /* Icon Style */}
                 <div className={styles.iconStyles}>
                  <div className={styles.optionCardss}>
                    <div className={styles.optionCard}>
                      <div className={styles.box1}></div>
                      <div className={styles.iconContainer}>
                        <h className={styles.heading}>Portrait(9:16)</h>
                        <small className={styles.smallheading}>Reels, shorts, TikTok, Stories, etc</small>
                      </div>
                    </div>
                    <div className={styles.optionCard}>
                      <div className={styles.cardIconss}>
                        <div className={styles.box2}></div>
                      </div>
                      <div className={styles.iconContainer}>
                        <h className={styles.heading}>Squqre(1:1)</h>
                        <small className={styles.smallheading}>Meta Ads, Instagram, Facebook, etc</small>
                      </div>
                    </div>
                    <div className={styles.optionCard1}>
                      <div className={styles.box3}></div>
                      <div className={styles.iconContainer}>
                        <h className={styles.heading}>Landscape(16:9)</h>
                        <small className={styles.smallheading}>Youtube, Linkedin,Tv, etc</small>
                      </div>
                    </div>
                    <div className={`${styles.optionCardtext} ${styles.optionCard2}`}>
                      <div className={`${styles.cardIcons} ${styles.headings}`}>
                        <Image src={arow} alt="arow" width={16} height={16} className={styles.arowtext}/>
                      </div>
                      <div
                        className={`${styles.iconContainer} ${styles.headings}`}
                      >
                        <h>Custom Size</h>
                      </div>
                    </div>
                  </div>
                 </div>

                  {/* Logo Upload Section */}
                  <div className={styles.visualElements}>
                  <div className={styles.designBranding}>
                    <div>
                      <h2>Visual Elements</h2>
                      <p>
                        Use icons, images, and graphics to enhance clarity and
                        visual appeal.
                      </p>
                    </div>
                    <div className={styles.arrowdropdown}>
                    <select className={styles.fontSelects}>
                      <option></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    </div>
                  </div>
                  {/* Icon Style */}
                  <div className={styles.iconStyle}>
                    <h3>Icon Style</h3>
                    <div className={styles.optionCards}>
                      <div className={styles.optioncard}>
                        <div className={styles.cardIcon}>
                          <RiRobot2Line className={styles.robot} />
                        </div>
                        <div className={styles.iconContainer}>
                          <h>Flat Icons</h>
                          <small  className={styles.smallheading}>
                            Simple, 2D icons for a clean and modern look
                          </small>
                        </div>
                      </div>
                      <div className={styles.optioncard}>
                        <div className={styles.cardIcon}>
                          <Image
                            src={robos}
                            alt="robo"
                            width={56}
                            height={34}
                            layout="responsive"
                            className={styles.roboimagess}
                          />
                        </div>
                        <div className={styles.iconContainer}>
                          <h>3D Icons</h>
                          <small  className={styles.smallheading}>
                            Icons with depth and shading to make elements pop
                          </small>
                        </div>
                      </div>
                      <div className={styles.optioncard}>
                        <div className={styles.cardIcon}>
                          <RiRobot2Fill className={styles.robot} />
                        </div>
                        <div className={styles.iconContainer}>
                          <h>Outlined Icons</h>
                          <small  className={styles.smallheading}>
                            Minimalist outlined icons for a sleek and elegant
                            design
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>



          {/* Image Type */}
          <div className={styles.imageType}>
            <h3>Image Type</h3>
            <div className={styles.optionCards}>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/Images/Premium.png"
                    alt="robo"
                    width={300}
                    height={500}
                    layout="responsive"
                    className={styles.imageIcon}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Premium stock photos</h>
                   <small className={styles.smallheading}>Generic images to represent <br></br>abstract concepts</small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcons}>
                  <Image
                    src="/Images/Custom.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.imageIcon}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Custom Images</h>
                
                  <small className={styles.smallheading} >Unique images tailored to <br></br>your brand</small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/Images/AiGenerated.png"
                    alt="robo"
                    width={300}
                    height={500}
                    layout="responsive"
                    className={styles.imageIcon}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>AI Generated Image</h>
                
                  <small className={styles.smallheading}>Generic images to represent<br></br> abstract concepts</small>
                </div>
              </div>
            </div>
          </div>

         {/*  Ai image generate*/}
         
{/* AI Generated Images */}
<div className={styles.videoGenerationStyle}>
            <h3>Ai generated Image</h3>
            <div className={styles.styleOptions}>
              <div className={styles.styleOption}>
                <Image
                  src="/Images/VideoCreation/Realistic.png" // Update with the actual image path
                  alt="Realistic"
                  layout="responsive"
                  width={100} // Adjust width according to your design
                  height={100} // Adjust height according to your design
                  className={styles.styleImage}
                />
                <span>Realistic</span>
              </div>
              <div className={styles.styleOption}>
                <Image
                  src="/Images/VideoCreation/illustration.png" // Update with the actual image path
                  alt="Illustration"
                  width={100}
                  height={100}
                  layout="responsive"
                  className={styles.styleImage}
                />
                <span>Illustration</span>
              </div>
              <div className={styles.styleOption}>
                <Image
                  src="/Images/VideoCreation/Anime.png" // Update with the actual image path
                  alt="Anime"
                  width={100}
                  height={100}
                  layout="responsive"
                  className={styles.styleImage}
                />
                <span>Anime</span>
              </div>
              <div className={styles.styleOption}>
                <Image
                  src="/Images/VideoCreation/Water Painting.png" // Update with the actual image path
                  alt="Water Painting"
                  width={100}
                  height={100}
                  layout="responsive"
                  className={styles.styleImage}
                />
                <span>Water Painting</span>
              </div>
              <div className={styles.styleOption}>
                <Image
                  src="/Images/VideoCreation/Sci-fi.png" // Update with the actual image path
                  alt="Sci-fi"
                  width={100}
                  height={100}
                  layout="responsive"
                  className={styles.styleImage}
                />
                <span>Sci-fi</span>
              </div>
              <div className={styles.styleOption}>
                <Image
                  src="/Images/VideoCreation/Realistic.png" // Update with the actual image path
                  alt="Imaginative"
                  width={100}
                  height={100}
                  layout="responsive"
                  className={styles.styleImage}
                />
                <span>Imaginative</span>
              </div>
            </div>
          </div>
      
           {/* Tone & Voice Section */}
           <div className={styles.toneVoice}>
            <h3>Tone & Voice</h3>
            <p>
              Tailor your presentations to meet the specific needs of different
              audiences and objectives.
            </p>

            <p1>Presentation Formats</p1>

            <div className={styles.optionCards}>
              <div className={styles.optionCardcontainer }>
                <div className={styles.imagecardIcon}>
                <Image
                    src="/Images/Business.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Business-Oriented Presentations</h>
                  <small className={styles.smallheading}>Business Pitch, Investor Deck<br></br>
                  Sales Presentation, Product Demo</small>
                
                </div>
              </div>
              <div className={styles.optionCardcontainer}>
                <div className={styles.imagecardIcon}>
                <Image
                    src="/Images/Education.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Educational & Training <br></br>Presentations</h>
                  <small className={styles.smallheading}> 
                  Educational, Training, Workshop, etc.</small>
                </div>
              </div>
              <div className={styles.optionCardcontainer}>
                <div className={styles.imagecardIcon}>
                <Image
                    src="/Images/Creative.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Creative & Conceptual <br></br>Presentations</h>
                  <small className={styles.smallheading}>Creative Pitch, Product Demo, etc.</small>
                </div>
              </div>
            </div>
          </div>
            
             {/* Generate Presentation Button */}
                  <div className={styles.generateButton}>
                    <button
                      className={styles.generateBtn}
                      onClick={handleGenerateClick}
                    >
                      <BsStars />
                      Generate 
                    </button>
                   </div>

                  </div>
                 
                 </div>
                </div>
            </div> 

             <div className={styles.rightcontainer}>
              <div className={styles.rightsection}>
                <div>
                  <MdInfoOutline className={styles.icon} />
                </div>
                <div className={styles.text}>
                  <p>Simple preview</p>
                  <h1>Add Captions to video</h1>
                </div>
              </div>
              <Image
                src={offerimage}
                alt="offerimage"
                className={styles.imageSection}
              />
      
          </div>
         </div>
      </div>

  );
};
export default GraphicsTool;
