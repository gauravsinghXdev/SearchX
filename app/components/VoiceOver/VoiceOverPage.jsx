"use client";
import styles from "@/styles/VoiceOver/VoiceOverPage.module.css";
import { IoIosImages } from "react-icons/io";
import { MdOutlineTune } from "react-icons/md";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

import React, { useState, useRef, useEffect } from "react";

const CustomAudioPlayer = ({ audioFile, title, artist }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!isSliding) {
      const audio = audioRef.current;
      setCurrentTime(audio.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    setDuration(audio.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleSliderChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSliderMouseDown = () => {
    setIsSliding(true);
  };

  const handleSliderMouseUp = () => {
    setIsSliding(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <div className={styles.customAudioPlayer}>
      <div className={styles.audioPlayer}>
        <audio ref={audioRef} src={audioFile} />
        <div className={styles.audioDetails}>
          <span className={styles.audioTitle}>{title}</span>
          <span className={styles.audioArtist}>{artist}</span>
        </div>
        <div className={styles.player}>
          <button className={styles.playPauseButton} onClick={togglePlayPause}>
            {isPlaying ? "❚❚" : "▶️"}
          </button>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            {/* Slider input to control playback */}
            <input
              type="range"
              className={styles.progressInput}
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSliderChange}
              onMouseDown={handleSliderMouseDown}
              onMouseUp={handleSliderMouseUp}
            />
          </div>
          <div className={styles.audioTime}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
};
const VoiceOver = () => {
  const [selectedTool, setSelectedTool] = useState("Short / Reel Creator");
  const [prompt, setPrompt] = useState(""); // For the script prompt
  const [voiceEngine, setVoiceEngine] = useState("Play3.0"); // For the voice engine
  const [voice, setVoice] = useState(
    "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json"
  ); // For the voice selection
  const [outputFormat, setOutputFormat] = useState("mp3"); // For output format
  const [generatedAudio, setGeneratedAudio] = useState(null); // For storing the audio file URL
  const [loading, setLoading] = useState(false); // For loading state

  const tools = [
    "AI Voice for Blogs",
    "News Narrator AI",
    "Podcast Voice Generator",
    "Speech-enabled Presentations",
    "Email-to-Audio Converter",
    "AI Audiobook Narration",
    "AI Character Voice Generator",
    "AI Interactive Storytelling",
    "Documentation to Speech ",
  ];

  const voiceOptions = [
    {
      name: "Nigel",
      description:
        "Warm & Friendly (Young Adult Female, American, Midwestern Accent)",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "Valentine",
      description:
        "Authoritative & Confident (Middle-Aged Male, British Accent)",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "Daphne",
      description:
        "Conversational & Relatable (Young Adult Male, Irish Accent)",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "Dahlia",
      description:
        "Sophisticated & Elegant (Middle-Aged Female, French Accent)",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "Gwendolyn",
      description:
        "Crisp & Professional (Adult Male, Indian, Neutral Indian Accent)",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "Marjory",
      description:
        "Inspiring & Motivational (Adult Male, Nigerian, Neutral Nigerian Accent)",
      audioFile: "/Audio/Audio.mp3",
    },
  ];

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  // const handleGenerateAudio = async () => {
  //   if (!prompt.trim() || !voiceEngine.trim() || !voice.trim() || !outputFormat.trim()) {
  //     alert("Please fill in all the fields before generating audio.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const postData = {
  //       text: prompt,           // Sending the text (prompt)
  //       voice_engine: voiceEngine, // Sending the selected voice engine
  //       voice: voice,           // Sending the selected voice
  //       output_format: outputFormat // Send the prompt as the request body
  //     };
  //     console.log("POST DATA => ", postData);
  //     const response = await fetch("http://192.168.31.54:8004/text-to-speech/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(postData),
  //     });

  //     console.log("RESPONSE => ", response);

  //     if (!response.ok) {
  //       throw new Error("Failed to generate audio");
  //     }

  //     const blob = await response.blob();
  //     const url = URL.createObjectURL(blob);
  //     console.log(url)
  //     setGeneratedAudio(url); // Assuming the response includes an audio URL
  //   } catch (error) {
  //     console.error("Error generating audio:", error);
  //     alert("There was an issue generating the audio. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ---------------------------

  const handleGenerateAudio = async () => {
    if (
      !prompt.trim() ||
      !voiceEngine.trim() ||
      !voice.trim() ||
      !outputFormat.trim()
    ) {
      alert("Please fill in all the fields before generating audio.");
      return;
    }
    setLoading(true);
    try {
      const postData = {
        text: prompt, // Sending the text (prompt)
        voice_engine: voiceEngine, // Sending the selected voice engine
        voice: voice, // Sending the selected voice
        output_format: outputFormat, // Send the prompt as the request body
      };

      const response = await fetch(
        "http://192.168.31.54:8004/text-to-speech/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      console.log("RESPONSE =>", response);

      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }

      // Get the audio file URL from the response
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      setGeneratedAudio(audioUrl); // Set the generated audio URL
    } catch (error) {
      console.error("Error generating audio:", error);
      alert("There was an issue generating the audio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.generateVideoContainer}>
          <h1 className={styles.heading}>Generate Voiceover/Audio</h1>
          <p className={styles.subtext}>
            Correct punctuation helps the generated voice to be much better
          </p>

          <div className={styles.toolGrid}>
            <button
              className={`${styles.toolButton} ${
                selectedTool === "Create New" ? styles.createButton : ""
              }`}
              onClick={() => handleToolClick("Create New")}
            >
              None
            </button>

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

        {/* Video Script Section */}
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
              <div className={styles.selectvoicebtn}>
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
                  <div className={styles.selectVoiceSection}>
                    <div>
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
                    </div>
                    <div>
                      {/* Audio Player */}
                      <AudioPlayer audioSrc={voice.audioFile} />
                    </div>
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
          <div className={styles.audioPlayerContainer}>
            <h3>Generated Audio</h3>
            <audio
              controls
              src={generatedAudio}
              className={styles.audioPlayer}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default VoiceOver;
