"use client";
import styles from "@/styles/VoiceOver/VoiceOverPage.module.css";
import { IoIosImages } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import AudioPlayer from "../AudioPlayer/AudioPlayer"; // Import the audio player component
// import 'react-h5-audio-player/lib/styles.css';
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import React, { useState } from "react";
// import AudioPlayer from "../AudioPlayer/AudioPlayer";
import AudioPlayerSidebar from "../AudioPlayerSidebar/Player";
// import { MdInfoOutline } from "react-icons/md";

const VoiceOver = () => {
  const [selectedTool, setSelectedTool] = useState("Short / Reel Creator");
  const [prompt, setPrompt] = useState(""); // For the script prompt
  const [voiceEngine, setVoiceEngine] = useState("Play3.0"); // For the voice engine
  const [voice, setVoice] = useState(""); // For the voice selection
  const [outputFormat, setOutputFormat] = useState("mp3"); // For output format
  const [generatedAudio, setGeneratedAudio] = useState(null); // For storing the audio file URL
  const [loading, setLoading] = useState(false); // For loading state
  const backendURL =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    "https://decisive-cody-brandsmashers-c1c962cb.koyeb.app";

  const tools = [
    "AI Voice for Blogs",
    "News Narrator AI",
    "Podcast Voice Generator",
    "Speech-enabled Presentations",
    "Email-to-Audio Converter",
    "AI Audiobook Narration",
    "AI Character Voice Generator",
    "AI Interactive Storytelling",
    "Documentation to Speech",
  ];

  const voiceOptions = [
    {
      name: "Nigel",
      description:
        "Warm & Friendly (Young Adult Female, American, Midwestern Accent)",
      audioFile: "https://parrot-samples.s3.amazonaws.com/gargamel/Aaliyah.wav",
      voiceKey:
        "s3://voice-cloning-zero-shot/f6c4ed76-1b55-4cd9-8896-31f7535f6cdb/original/manifest.json",
    },
    {
      name: "Valentine",
      description:
        "Authoritative & Confident (Middle-Aged Male, British Accent)",
      audioFile:
        "https://peregrine-results.s3.amazonaws.com/1kOpQr0eTDPFGlmFkL.mp3",
      voiceKey:
        "s3://voice-cloning-zero-shot/40738a3a-34bb-4ac3-97c5-aed7b31ccf1d/chucksaad/manifest.json",
    },
    {
      name: "Daphne",
      description:
        "Conversational & Relatable (Young Adult Male, Irish Accent)",
      audioFile: "https://parrot-samples.s3.amazonaws.com/gargamel/Siobhán.wav",
      voiceKey:
        "s3://voice-cloning-zero-shot/30884451-1eff-4fd8-9a24-d1ee3353b215/original/manifest.json",
    },
    {
      name: "Dahlia",
      description:
        "Sophisticated & Elegant (Middle-Aged Female, French Accent)",
      audioFile:
        "https://parrot-samples.s3.amazonaws.com/gargamel/Baptiste.wav",
      voiceKey:
        "s3://voice-cloning-zero-shot/1d26f4fe-1d08-4cfe-a7c1-d28e4e913ff9/original/manifest.json",
    },
    {
      name: "Gwendolyn",
      description:
        "Crisp & Professional (Adult Male, Indian, Neutral Indian Accent)",
      audioFile: "https://parrot-samples.s3.amazonaws.com/gargamel/Sumita.wav",
      voiceKey:
        "s3://voice-cloning-zero-shot/f3c22a65-87e8-441f-aea5-10a1c201e522/original/manifest.json",
    },
    {
      name: "Marjory",
      description:
        "Inspiring & Motivational (Adult Male, Nigerian, Neutral Nigerian Accent)",
      audioFile: "https://parrot-samples.s3.amazonaws.com/gargamel/Sumita.wav",
      voiceKey: "s3://voice-cloning-zero-shot/marjory/audio/manifest.json",
    },
  ];

  // Function to handle tool selection
  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  // Function to handle voice selection
  const handleVoiceSelect = (audioFile) => {
    setVoice(audioFile);
  };

  // Function to generate audio based on prompt and selected voice
  const handleGenerateAudio = async () => {
    if (!prompt.trim() || !voice.trim() || !outputFormat.trim()) {
      alert("Please fill in all the fields before generating audio.");
      return;
    }

    setLoading(true);

    try {
      const postData = {
        text: prompt, // Sending the text (prompt)
        voice: voice, // Sending the selected voice audio key
      };

      const response = await fetch(`${backendURL}/text-to-speech/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      console.log("first");
      console.log("The respo", response);
      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }
      console.log("second");
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      console.log("third audio URL=>", audioBlob);
      setGeneratedAudio(audioUrl); // Set the generated audio URL
      console.log("fourth");
    } catch (error) {
      console.error("Error generating audio:", error);
      alert("There was an issue generating the audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.generateVideoContainer}>
          <h1 className={styles.heading}>Generate Voiceover/Audio</h1>
          <p className={styles.subtext}>
            Correct punctuation helps the generated voice to be much better
          </p>

          <div className={styles.toolGrid}>
            {tools.map((tool) => (
              <button
                key={tool}
                className={`${styles.toolButton} ${
                  selectedTool === tool ? styles.selectedButton : ""
                }`}
                onClick={() => handleToolClick(tool)}
              >
                {tool} ➔
              </button>
            ))}
          </div>
        </div>

        {/* Audio Script Section */}
        <div className={styles.videoScriptContainer}>
          <div className={styles.videoScript}>
            <div>
              <h3>Audio Script</h3>
              <p>Create a vertical video from script</p>
            </div>

            <button className={styles.generateScriptButton}>
              <IoIosImages />
              Generate Script
            </button>
          </div>
          <textarea
            placeholder="Outline your video"
            className={styles.textarea}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        {/* Select Voice Section */}
        <div className={styles.selectVoiceContainer}>
          <div className={styles.selectVoice}>
            <h3>Select Voice</h3>
            <p>
              Correct punctuation helps the generated voice to be much better
            </p>
            <div className={styles.voiceOptions}>
              {voiceOptions.map((voiceOption) => (
                <button
                  key={voiceOption.name}
                  className={styles.voiceButton}
                  onClick={() => handleVoiceSelect(voiceOption.voiceKey)}
                >
                  <div className={styles.selectVoiceSection}>
                    <div className={styles.voiceDetails}>
                      <Image
                        src="/Images/VideoCreation/userIcon.png" // Replace with actual path to the user icon
                        alt="User Icon"
                        width={30}
                        height={30}
                        className={styles.userIcon}
                      />
                      <div>
                        <span className={styles.voiceName}>
                          {voiceOption.name}
                        </span>
                        <p>{voiceOption.description}</p>
                      </div>
                    </div>
                    <AudioPlayer audioSrc={voiceOption.audioFile} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.generatebtn}>
          <button
            className={styles.generateButton}
            onClick={handleGenerateAudio}
            disabled={loading}
          >
            <BsStars />
            {loading ? "Generating..." : "Generate Audio"}
          </button>
        </div>

        {generatedAudio && (
          <>
            <div className={styles.audioPlayerContainer}>
              <h3>Generated Audio</h3>
              <audio
                controls
                src={generatedAudio}
                className={styles.audioPlayer}
              />
            </div>
          </>
        )}
      </div>
      <div>

      {generatedAudio && (
          <>
            <div className={styles.audioPlayerContainer}>
              <h3>Generated Audio</h3>
              <audio
                controls
                src={generatedAudio}
                className={styles.audioPlayer}
              />
            </div>
          </>
        )}
        {/* <div className={styles.audioPlayerContainer}>
          <h3>Generated Audio</h3>
          <audio controls src={generatedAudio} className={styles.audioPlayer} />
        </div> */}

        <div className={styles.rightSection}>
          <div className={styles.preview}>
            <MdInfoOutline className={styles.leftinfoIcon} />
            <div>
              <h3>Sample Preview</h3>
              <p>News Narration sample</p>
            </div>
          </div>
          <AudioPlayerSidebar
            audioSrc="Audio/Audio.mp3"
            title="Sample Audio"
            description="This is a sample description for the audio"
          />
        </div>
      </div>
      {/* <div className={styles.rightSection}>
        <div className={styles.preview}>
          <MdInfoOutline className={styles.leftinfoIcon} />
          <div>
            <h3>Sample Preview</h3>
            <p>News Narration sample</p>
          </div>
        </div>
        <AudioPlayerSidebar
          audioSrc="Audio/Audio.mp3"
          title="Sample Audio"
          description="This is a sample description for the audio"
        />
      </div> */}
    </div>
  );
};

export default VoiceOver;
