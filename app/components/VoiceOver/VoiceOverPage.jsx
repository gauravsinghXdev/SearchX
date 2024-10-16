"use client";  // Ensure this is at the top for Client-side rendering

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Make sure useRouter is used only in client components
import styles from "@/styles/VoiceOver/VoiceOverPage.module.css";
import { IoIosImages } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { MdOutlineTune } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import AudioPlayer from '../AudioPlayer/AudioPlayer'; // Import the audio player component
// import 'react-h5-audio-player/lib/styles.css';
import Image from "next/image";
import AudioPlayerSidebar from '../AudioPlayerSidebar/Player'

const VideoToolSelection = () => {
  const router = useRouter();
  
  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };
  
  const tools = [
    {
      name: "AI Voice for Blogs",
      description: "Turn blog posts into engaging audio with customizable AI voices."
    },
    {
      name: "News Narrator AI",
      description: "Convert news articles or links into dynamic audio reports with customizable voice and style."
    },
    {
      name: "Podcast Voice Generator",
      description: "Turn scripts into professional podcast episodes with customizable voice and tone."
    },
    {
      name: "Speech-enabled Presentations",
      description: "Bring your presentations to life with natural, AI-powered speech narration."
    },
    {
      name: "Email-to-Audio Converter",
      description: "Convert emails into spoken audio for easy listening on the go."
    },
    {
      name: "AI Audiobook Narration",
      description: "Generate high-quality audiobook narrations with a voice tailored to your story."
    },
    {
      name: "AI Character Voice Generator",
      description: "Create unique voices for characters with AI-driven customization."
    },
    {
      name: "AI Interactive Storytelling",
      description: "Craft immersive, interactive stories with adaptable voices and dynamic narration."
    },
    {
      name: "Documentation to Speech",
      description: "Convert documentation into clear, spoken audio for easy comprehension and accessibility."
    },
    {
      name: "AI Advertisement Voiceover",
      description: "Generate captivating voiceovers for advertisements with tailored tones and styles."
    }
  ];

  const voiceOptions = [
    {
      name: "Nigel",
      description: "Warm & Friendly (Young Adult Female, American, Midwestern Accent)",
      audioFile: "s3://voice-cloning-zero-shot/f6c4ed76-1b55-4cd9-8896-31f7535f6cdb/original/manifest.json",
    },
    {
      name: "Valentine",
      description: "Authoritative & Confident (Middle-Aged Male, British Accent)",
      audioFile: "s3://voice-cloning-zero-shot/valentine/audio/manifest.json", // Replace with actual URL
    },
    {
      name: "Daphne",
      description: "Conversational & Relatable (Young Adult Male, Irish Accent)",
      audioFile: "s3://voice-cloning-zero-shot/daphne/audio/manifest.json", // Replace with actual URL
    },
    {
      name: "Dahlia",
      description: "Sophisticated & Elegant (Middle-Aged Female, French Accent)",
      audioFile: "s3://voice-cloning-zero-shot/dahlia/audio/manifest.json", // Replace with actual URL
    },
    {
      name: "Gwendolyn",
      description: "Crisp & Professional (Adult Male, Indian, Neutral Indian Accent)",
      audioFile: "s3://voice-cloning-zero-shot/gwendolyn/audio/manifest.json", // Replace with actual URL
    },
    {
      name: "Marjory",
      description: "Inspiring & Motivational (Adult Male, Nigerian, Neutral Nigerian Accent)",
      audioFile: "s3://voice-cloning-zero-shot/marjory/audio/manifest.json", // Replace with actual URL
    },
  ];

  const [selectedTool, setSelectedTool] = useState(tools[0]);
  
  return (
    <div className={styles.container}>
      {/* Your component JSX */}
      <div className={styles.leftSection}>
        <div className={styles.generateVideoContainer}>
          <h1 className={styles.heading}>Generate Voiceover/Audio</h1>
          <p className={styles.subtext}>
            Correct punctuation helps the generated voice to be much better
          </p>

          <div className={styles.toolGrid}>
            <button
              className={`${styles.createbtn} ${
                selectedTool.name === "Create New" ? styles.createButton : ""
              }`}
              onClick={() => handleToolClick({ name: "Create New", description: "Create a custom tool for new video/audio." })}
            >
              + Create New
            </button>

            {tools.map((tool) => (
              <button
                key={tool.name}
                className={`${styles.toolButton} ${
                  selectedTool.name === tool.name ? styles.selectedButton : ""
                }`}
                onClick={() => handleToolClick(tool)}
              >
                {tool.name} ➔
              </button>
            ))}
          </div>

          {/* Display selected tool info */}
          <div className={styles.shortCreator}>
            <div className={styles.infoBox}>
              <GoInfo className={styles.infoIcon} />
            </div>
            <div className={styles.infoText}>
              <span>{selectedTool.name}</span>
              <p>
              {selectedTool.description}
              </p>
            </div>
          </div>
        </div>

        {/* Audio Script Section */}
        <div className={styles.videoScriptContainer}>
          <div className={styles.videoScript}>
            <div>
              <h3>Video Script</h3>
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
          ></textarea>
        </div>

        {/* Select Voice Section */}
        <div className={styles.selectVoiceContainer}>
          <div className={styles.selectVoice}>
            <div className={styles.voiceSection}>
              <div>
                <h3>Select Voice</h3>
                <p>
                  Correct punctuation helps the generated voice to be much
                  better
                </p>
              </div>
              <div className={styles.selctvoicebtn}>
                <div className={styles.iconWrapper}>
                  <MdOutlineTune className={styles.tune} />
                </div>

                <button className={styles.generateScriptButton}>
                  <IoIosImages />
                  Record Yourself
                </button>
              </div>
            </div>
            <div className={styles.voiceOptions}>
              {voiceOptions.map((voice) => (
                <button key={voice.name} className={`${styles.voiceButton}`}>
                  <div className={styles.voiceDetails}>
                    <Image
                      src="/Images/VideoCreation/userIcon.png" // Replace with actual path to the user icon
                      alt="User Icon"
                      width={30} // Adjust size according to design
                      height={30}
                      className={styles.userIcon}
                    />
                    <div>
                      <span className={styles.voiceName}>{voice.name}</span>
                      <p>{voice.description}</p>
                    </div>
                  </div>
                  {/* Audio Player */}
                  <AudioPlayer audioSrc={voice.audioFile} />
                </button>
              ))}
            </div>
          </div>
        </div>


        <div className={styles.generatebtn}>
          <button className={styles.generateButton}>
            Generate video
          </button>
        </div>
      </div>

      {/* Sample Preview Section */}
      <div className={styles.rightSection}>
        <div className={styles.preview}>
        <MdInfoOutline className={styles.leftinfoIcon} />
          <div>
            <h3>Sample Preview</h3>
            <p>News Narration  sample</p>
          </div>
        </div>
        <AudioPlayerSidebar
          audioSrc="Audio/Audio.mp3"
          title="Sample Audio"
          description="This is a sample description for the audio"
        />
      </div>
    </div>
  );
};

export default VideoToolSelection;
