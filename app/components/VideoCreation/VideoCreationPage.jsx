"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "@/styles/VideoCreation/VideoCreationPage.module.css";
import Image from "next/image";
import { IoIosImages } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { MdOutlineTune } from "react-icons/md";
// import ReactAudioPlayer from "react-audio-player";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { BiCaptions } from "react-icons/bi";
import { MdInfoOutline } from "react-icons/md";
import { MdDoNotDisturb } from "react-icons/md";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

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

const VideoToolSelection = () => {
  const [selectedTool, setSelectedTool] = useState("Short / Reel Creator");

  const tools = [
    "Short / Reel Creator",
    "Add Captions to Videos",
    "YouTube Clip Generator",
    "Talking Avatar Creator",
    "Face Swap in Videos",
    "Website Review Video Maker",
    "AI Movie Creator",
    "Audio to Video Converter",
    "Music Video Creator",
    "Silent Video Commenter",
    "Reddit Post to Video",
    "Tweet to Video",
    "LinkedIn Post Video Maker",
    "Article to Video Converter",
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

  const audioOptions = [
    {
      name: "Creative Technology Showreel",
      description: "Leo Murray DDS",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "Lazy Day - Stylish Futuristic Chill",
      description: "Melinda Hirthe",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "Night Detective",
      description: "Timmy Larkin",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "In Slow Motion (Inspiring Ambient Lounge)",
      description: "Patty Grady",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "AMALGAM",
      description: "Luke Schultz",
      audioFile: "/Audio/Audio.mp3",
    },
    {
      name: "No Place To Go",
      description:
        "Inspiring & Motivational (Adult Male, Nigerian, Neutral Nigerian Accent)",
      audioFile: "/Audio/Audio.mp3",
    },
  ];

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.generateVideoContainer}>
          <h1 className={styles.heading}>Generate Video</h1>
          <p className={styles.subtext}>
            Correct punctuation helps the generated voice to be much better
          </p>

          <div className={styles.toolGrid}>
            <button
              className={`${styles.createbtn} ${
                selectedTool === "Create New" ? styles.createButton : ""
              }`}
              onClick={() => handleToolClick("Create New")}
            >
              + Create New
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

          {/* Display selected tool info */}
          <div className={styles.shortCreator}>
            <div className={styles.infoBox}>
              <GoInfo className={styles.infoIcon} />
            </div>
            <div className={styles.infoText}>
              <span>{selectedTool}</span>
              <p>
                Create a vertical video from scripts or links. Set your media
                type, voice, and style, and it will generate an engaging video
                for you.
              </p>
            </div>
          </div>
        </div>

        {/* Video Script Section */}
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

        {/* Motion Control Options Section */}
        <div className={styles.motionControlContainer}>
          <div className={styles.motionControl}>
            <div className={styles.motionControlOptions}>
              <h3>Motion Control Options</h3>
              <p>
                Customize the movement and transitions of elements to create
                smooth, engaging visuals.
              </p>
            </div>
            <select className={styles.dropdown}>
              <option value="Moving AI images">Moving AI images</option>
              <option value="Static AI images">Static AI images</option>
            </select>
          </div>
        </div>

        {/* Aspect Ratio Section */}
        <div className={styles.aspectRatio}>
          <div className={styles.aspectratioheading}>
            <div className={styles.aspectratiocontent}>
              <h3>Aspect Ratio</h3>
              <p>
                Customize the movement and transitions of elements to create
                smooth, engaging visuals.
              </p>
            </div>
            <div className={styles.custombtn}>
              <button className={styles.customSizeButton}>
                <FaExpandArrowsAlt />
                Custom Size
              </button>
            </div>
          </div>
          <div className={styles.aspectRatioOptions}>
            <button className={styles.aspectButton}>
              <div className={styles.portraitContainer}>
                <div className={styles.portrait}></div>
                <div>
                  <h1>Portrait (9:16)</h1>
                  <p>Reels, shorts, TikTok, Stories, etc</p>
                </div>
              </div>
            </button>
            <button className={styles.aspectButton}>
              <div className={styles.squareContainer}>
                <div className={styles.square}></div>
                <div>
                  <h1>Square (1:1)</h1>
                  <p>Meta Ads, Instagram, Facebook, etc</p>
                </div>
              </div>
            </button>
            <button className={styles.aspectButton}>
              <div className={styles.landscapeContainer}>
                <div className={styles.landscape}></div>
                <div>
                  <h1>Landscape (16:9)</h1>
                  <p>Youtube, Linkedin,Tv, etc/</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Video Generation Style Section */}
        {/* Video Generation Style Section */}
        <div className={styles.videoGenerationStyle}>
          <h3>Video Generation Style</h3>
          <p>
            Customize the movement and transitions of elements to create smooth,
            engaging visuals.
          </p>
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

        {/* Select Audio Section */}
        <div className={styles.selectVoiceContainer}>
          <div className={styles.selectVoice}>
            <div className={styles.voiceSection}>
              <div>
                <h3>Select Audio</h3>
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
                  <FiUploadCloud />
                  Upload Audio
                </button>
              </div>
            </div>

            <div className={styles.voiceOptions}>
              {audioOptions.map((voice) => (
                <button key={voice.name} className={`${styles.voiceButton}`}>
                  <div className={styles.voiceDetails}>
                    <Image
                      src="/Images/VideoCreation/Audio.png" // Replace with actual path to the user icon
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

        {/* Captions Section */}
        <div className={styles.captionsSection}>
          <div className={styles.captionContainer}>
            <div>
              <h3>Caption</h3>
              <p>Select a preset to add to your captions</p>
            </div>
            <div>
              <button className={styles.generateScriptButton}>
                <BiCaptions />
                Custom Captions
              </button>
            </div>
          </div>

          <div className={styles.captionOptions}>
            <button className={styles.captionOption}>
              <div className={styles.notIcon}>
                <MdDoNotDisturb />
              </div>
            </button>
            <button className={styles.captionOption}>Plain</button>
            <button className={styles.basicOption}>Basic</button>
            <button className={styles.captionOption}>Basic</button>
            <button className={styles.youtuberOption}>Youtuber</button>
            <button className={styles.wrap1Option}><p>Wrap1</p></button>
            <button className={styles.wrap2Option}><p>Wrap2</p></button>
            <button className={styles.boldOption}> <h1>Bold & Classy</h1></button>
          </div>
        </div>
        <div className={styles.generatebtn}>
          <button className={styles.generateButton}>
            <BsStars />
            Generate video
          </button>
        </div>
      </div>
      {/* </div> */}

      {/* Sample Preview Section */}
      <div className={styles.rightSection}>
        <div className={styles.preview}>
          <MdInfoOutline className={styles.leftinfoIcon} />

          <div>
            <h3>Sample Preview</h3>
            <p>Short / Reel Creator</p>
          </div>
        </div>

        <Image
          src="/Images/VideoCreation/Overview.png"
          alt="Orb of the Eternal Sage"
          className={styles.previewImage}
          width={300}
          height={70}
        />
        {/* <p>Orb of the Eternal Sage</p> */}
      </div>
    </div>
  );
};

export default VideoToolSelection;
