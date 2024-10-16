"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/IdeaGeneration/IdeaGenerationFirst.module.css";

import element from "@/public/SlideCreationImg/elements.png";

const IdeaGenerationFirst = () => {
  const [hasText, setHasText] = useState(false);

  const handleChange = (e) => {
    setHasText(e.target.value.length > 0);
  };

  return (
    <>
      <div className={styles.head}>
        <div className={styles.slidecreationhead}>
          <div className={styles.inputControl}>
            <div className={styles.slidecreationheadContent}>

              <div className={styles.gradientTextContainer}>
                <p className={styles.gradientText}>
                  Smart Ideas at Your Fingertips: <br /> Fuel Your Creativity
                  with AI
                </p>
              </div>
              <p className={styles.secondpara}>
                Quickly generate slides that captivate and convey your message
                effectively.
              </p>
            </div>


            <div className={styles.inputcontainer}>
              <textarea
                className={styles.inputbox}
                placeholder="Describe what you would like to make"
                onChange={handleChange}
              />
            </div>
          </div>

          {!hasText && (
            <div className={styles.hideContent}>
              <div className={styles.separatorContainer}>
                <div className={styles.separatorLine}></div>
                <span className={styles.separatorText}>Sample Prompt</span>
                <div className={styles.separatorLine}></div>
              </div>

              <div className={styles.container}>
                <div className={styles.containerBox}>
                  <Image src={element} alt="Element Image" />
                  <p>
                    What services could merge finance and health for better
                    personal management?
                  </p>
                </div>
                <div className={styles.containerBox}>
                  <Image src={element} alt="Element Image" />
                  <p>
                    How can education be made more accessible in remote areas?
                  </p>
                </div>
                <div className={styles.containerBox}>
                  <Image src={element} alt="Element Image" />
                  <p>
                    What tools could improve e-commerce logistics and customer
                    experience?
                  </p>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.containerBox}>
                  <Image src={element} alt="Element Image" />
                  <p>
                    What opportunities arise when AI automates tasks in Banking
                  </p>
                </div>
                <div className={styles.containerBox}>
                  <Image src={element} alt="Element Image" />
                  <p>
                    How can a SaaS platform be improved for better user
                    experience?
                  </p>
                </div>
                <div className={styles.containerBox}>
                  <Image src={element} alt="Element Image" />
                  <p>
                    How could technology redefine traditional business practices
                    in Farming?
                  </p>
                </div>
              </div>
            </div>
          )}


          {hasText && (
           <div className={`${styles.buttonContainer} mt-[17px]`}>
           <button className={styles.generatebutton}>
             <Image
               src={element}
               alt="star-icon"
               width={19.41}
               height={40}
               className="rounded-lg mr-1"
             />
             Generate Idea
           </button>
         </div>



          )}
        </div>
      </div>
    </>
  );
};

export default IdeaGenerationFirst;