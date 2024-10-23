"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Ideageneration/IdeaGenerationFirst.module.css";
import element from "@/public/SlideCreationImg/elements.png";

const IdeaGenerationFirst = () => {
  const [hasText, setHasText] = useState(false);
  const [prompt, setPrompt] = useState(""); // State for the prompt text
  const [loading, setLoading] = useState(false); // Loading state for the button
  const [result, setResult] = useState("");
  // Handle input change to update prompt state
  const handleChange = (e) => {
    const value = e.target.value;
    setHasText(value.length > 0);
    setPrompt(value); // Update prompt state with textarea input
  };

  // Async function to generate idea
  const handleGenerateClick = async () => {
    const backendURL =
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "https://decisive-cody-brandsmashers-c1c962cb.koyeb.app";
    const data = { prompt };

    setLoading(true);

    try {
      const response = await fetch(`${backendURL}/idea_generation/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the response is JSON
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        console.log("RESULT => ", result);
        JSON.stringify(data), setResult(JSON.stringify(result));
        // Handle the result, e.g., set image URL or display the result
      } else {
        // If not JSON, treat as text
        const textResult = await response.text();
        console.log("Text Result => ", textResult);
        setResult(textResult);
      }
    } catch (error) {
      console.error("Error generating the idea:", error);
    } finally {
      setLoading(false);
    }
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
                onChange={handleChange} // Update prompt on input change
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
              <button
                className={styles.generatebutton}
                onClick={handleGenerateClick} // Trigger API call on click
                disabled={loading} // Disable button if loading
              >
                <Image
                  src={element}
                  alt="star-icon"
                  width={19.41}
                  height={40}
                  className="rounded-lg mr-1"
                />
                {loading ? "Generating..." : "Generate Idea"}{" "}
                {/* Show loading */}
              </button>
            </div>
          )}

          {loading && (
            <div className={styles.resultContainer}>
              <h3 className={styles.resultTitle}>Generated Idea:</h3>
              <p className={styles.resultText}>{result}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IdeaGenerationFirst;
