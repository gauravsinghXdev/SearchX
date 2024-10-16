"use client";
import React, { useState } from "react";
import Image from 'next/image';
import styles from "@/styles/SlideCreation/SlideCreationBottomSection.module.css";
import { BsStars } from "react-icons/bs";

const SlideCreationBottom = () => {
  const [prompt, setPrompt] = useState("");
  const [primary_color, setPrimary_color] = useState("#ffffff");
  const [secondary_color, setSecondary_color] = useState("#000000");
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://decisive-cody-brandsmashers-c1c962cb.koyeb.app"

  // Function to handle API call
  const handleGeneratePresentation = async () => {
    if (!/^#[0-9A-F]{6}$/i.test(primary_color) || !/^#[0-9A-F]{6}$/i.test(secondary_color)) {
      console.error("Invalid color format. Colors must be in '#rrggbb' format.");
      return;
    }

    if (!prompt.trim()) {
      console.error("Prompt is required.");
      return;
    }
    console.log("Prompt:", prompt, "Type:", typeof prompt);
    console.log("Primary Color:", primary_color, "Type:", typeof primary_color);
    console.log(
      "Secondary Color:",
      secondary_color,
      "Type:",
      typeof secondary_color
    );
    setLoading(true);
    try {
      const dataGen={
        prompt: prompt,
        primary_color: primary_color,
        secondary_color: secondary_color
      }
      const response = await fetch(
       `${backendURL}/generate-presentation/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
            primary_color: primary_color,
            secondary_color: secondary_color,
          }),
        });
    

      const data = await response.json();
      if (response.ok) {
        // Update sections with the API response data
        setSections(data.sections);
      } else {
        console.error("Error generating presentation:", data.message);
      }
    } catch (error) {
      console.error("API call failed:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
   <><div className={styles.container}>
          {/* Tone & Voice Section */}
          <div className={styles.toneVoice}>
            <h3>Tone & Voice</h3>
            <p>
              Tailor your presentations to meet the specific needs of different
              audiences and objectives.
            </p>

            <p1>Presentation Formats</p1>

            <div className={styles.optionCards}>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/SlideCreation/SlideCreationBottomSection/Business.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Business-Oriented Presentations</h>
                  <small>
                    Business Pitch, Investor Deck, Sales Presentation, Product
                    Demo
                  </small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/SlideCreation/SlideCreationBottomSection/Education.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Educational & Training Presentations</h>
                  <small>Educational, Training, Workshop, etc.</small>
                </div>
              </div>
              <div className={styles.optionCard}>
                <div className={styles.imagecardIcon}>
                  <Image
                    src="/SlideCreation/SlideCreationBottomSection/Creative.png"
                    alt="robo"
                    width={300}
                    height={300}
                    layout="responsive"
                    className={styles.formatImage}
                  />
                </div>
                <div className={styles.iconContainer}>
                  <h>Creative & Conceptual Presentations</h>
                  <small>Creative Pitch, Product Demo, etc.</small>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Presentation Button */}
          <div className={styles.generateButton}>
            <button
              className={styles.generateBtn}
              onClick={handleGeneratePresentation}
              disabled={loading}
            >
              <BsStars />
              {loading ? "Generating..." : "Generate Presentation"}
             
            </button>
          </div>
          </div>
   </>
  );
};

export default SlideCreationBottom;