"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsStars, BsCloudUpload } from "react-icons/bs";
import { RxDragHandleDots2 } from "react-icons/rx";
import { RiRobot2Line, RiRobot2Fill } from "react-icons/ri";
import styles from "@/styles/Presentation/Presentation.module.css";
import SeparatorWithText from "../Seperators/Seperators";

const PresentationPage = () => {
  const [prompt, setPrompt] = useState("");
  const [primary_color, setPrimary_color] = useState("#ffffff");
  const [secondary_color, setSecondary_color] = useState("#000000");
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://decisive-cody-brandsmashers-c1c962cb.koyeb.app";

  // Function to handle API call
  const handleGeneratePresentation = async () => {
    if (!/^#[0-9A-F]{6}$/i.test(primary_color) || !/^#[0-9A-F]{6}$/i.test(secondary_color)) {
      console.error("Invalid color format.");
      return;
    }

    if (!prompt.trim()) {
      console.error("Prompt is required.");
      alert("Please enter a prompt before generating the presentation.");
      return;
    }

    console.log("Prompt before API call:", prompt);

    setLoading(true);
    try {
      const response = await fetch(`${backendURL}/generate-presentation/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          primary_color,
          secondary_color,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSections(data.sections);
      } else {
        console.error("Error generating presentation:", data.detail);
      }
    } catch (error) {
      console.error("API call failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.presentationContainer}>
      <div className={styles.header}>
        <h1>Design engaging presentations effortlessly with AI</h1>
      </div>
      <div className={styles.prompt}>
        <h1>Prompt</h1>
        <textarea
          className={styles.textarea}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Add your prompt."
        ></textarea>
      </div>
      <div className={styles.regenerate} onClick={handleGeneratePresentation}>
        <BsStars />
        Regenerate Copy
      </div>
      <SeparatorWithText text="Outlines" />

      <div className={styles.sections}>
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <div className={styles.section} key={index}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div>
                <h2>{section.title}</h2>
                {section.content ? (
                  <p>{section.content}</p>
                ) : (
                  <ul>
                    {section.values.map((value, idx) => (
                      <li key={idx}>
                        <strong>{value.title}</strong> – {value.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))
        ) : (
          // Default sections if no sections available
          <>
            <div className={styles.section}>
              <div className={styles.dots}>
                <RxDragHandleDots2 className={styles.dotsIcon} />
              </div>
              <div>
                <h2>Mission Statement</h2>
                <p>
                  To empower small businesses with innovative technology
                  solutions that drive growth and efficiency.
                </p>
              </div>
            </div>
            {/* Add more default sections here... */}
          </>
        )}
        <div className={styles.addSection}>+ Add Section</div>
      </div>

      <SeparatorWithText text="Preferences" />
      <div className={styles.brandingGuidelines}>
        <h2>Design Preferences & Branding Guidelines</h2>
        <p>
          Maintain brand consistency through colors, fonts, logos, and visuals
          for a cohesive, professional presentation.
        </p>

        {/* Color Section */}
        <div className={styles.colorandtypography}>
          <div className={styles.colorSection}>
            <div className={styles.colorPicker}>
              <label>Primary Color</label>
              <input
                type="color"
                value={primary_color}
                onChange={(e) => setPrimary_color(e.target.value)}
                className={styles.colorInput}
              />
              <label>Secondary Color</label>
              <input
                type="color"
                value={secondary_color}
                onChange={(e) => setSecondary_color(e.target.value)}
                className={styles.colorInput}
              />
            </div>
            <div className={styles.colorDisplay}>
              <div className={styles.primaryColors}>
                <h3>Primary Color</h3>
                <div
                  className={styles.colorBlock}
                  style={{ backgroundColor: primary_color }}
                />
              </div>
              <div className={styles.secondaryColors}>
                <h3>Secondary Color</h3>
                <div
                  className={styles.colorBlock}
                  style={{ backgroundColor: secondary_color }}
                />
              </div>
            </div>
          </div>

          {/* Typography Section */}
          <div className={styles.typographySection}>
            Typography
            {/* Add typography options here */}
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
    </div>
  );
};

export default PresentationPage;
