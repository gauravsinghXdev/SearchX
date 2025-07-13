import React, { useRef, useState, useEffect } from "react";
import forwardimg from "@/public/VoiceOver/forward.png";
import backwardimg from "@/public/VoiceOver/backward.png";
import gif from "@/public/VoiceOver/pnggif.gif";
import Image from "next/image";
import { CgPlayButtonO } from "react-icons/cg";
import { GiPauseButton } from "react-icons/gi";
import style from "@/styles/VoiceOver/voiceoverplayerresult.module.css";
import pausedgif from "@/public/VoiceOver/pausedgif.png";

const AudioPlayerResult = ({
  audio,
  voiceName = "SearchX Voices",
  promptSnippet = "SearchX",
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const skipAmount = 5; // seconds to skip

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false); // Set isPlaying to false when audio ends
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateCurrentTime);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.addEventListener("ended", handleEnded); // Add ended event listener
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateCurrentTime);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        audioElement.removeEventListener("ended", handleEnded); // Clean up ended event listener
      }
    };
  }, [audio]); // Add audio dependency

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Skip forward and backward functions
  const skipForward = () => {
    const newTime = Math.min(currentTime + skipAmount, duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const skipBackward = () => {
    const newTime = Math.max(currentTime - skipAmount, 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const isAudioAvailable = !!audio; // Check if audio is available

  return (
    <div className="bg-[#C0B2FF] min-w-[320px] min-h-[568px] rounded-[8px] shadow-md mt-8">
      {/* Fixed height GIF container */}
      <div
        className={` ${style.gifarea} h-64 flex justify-center items-center`}
      >
        {isPlaying ? (
          <Image
            src={gif}
            alt="idk - Highvyn, Taylor Shin"
            className={`transition-all duration-300 ${
              isPlaying ? "animate-play" : "paused"
            }`}
            layout="responsive"
            width={256} // Adjust width to your needs
            height={256} // Adjust height to your needs
            style={{
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          />
        ) : (
          <Image
            src={pausedgif}
            alt="Paused Animation"
            layout="responsive"
            width={256} // Adjust width to your needs
            height={256} // Adjust height to your needs
          />
        )}
      </div>
      <div className={`${style.audioinfosection}`}>
        {/* Title and Description */}
        <h2 className="text-[16px] font-[500] ">
          {promptSnippet || "SearchX"}
        </h2>
        <p className="text-[#ffff] text-[11px] font-[500]">
          {voiceName || "SearchX Voices"}
        </p>

        {/* Audio Element */}
        <audio ref={audioRef} src={audio} preload="metadata" />

        <div className="mt-6">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
            className="w-full"
            disabled={!isAudioAvailable} // Disable if audio is not available
          />
        </div>

        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>
            {new Date(currentTime * 1000).toISOString().substr(14, 5)}
          </span>
          <span>{new Date(duration * 1000).toISOString().substr(14, 5)}</span>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            className={`p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-2 ${
              !isAudioAvailable ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={skipBackward}
            disabled={!isAudioAvailable} // Disable if audio is not available
          >
            <Image
              src={backwardimg}
              alt="Backward Icon"
              className="max-w-[25px] max-h-[25px]"
            />
          </button>

          <button
            className={`p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none ${
              !isAudioAvailable ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={togglePlayPause}
            disabled={!isAudioAvailable} // Disable if audio is not available
          >
            {isPlaying ? (
              <GiPauseButton className="w-[35px] h-[35px]" />
            ) : (
              <CgPlayButtonO className="w-[35px] h-[35px]" />
            )}
          </button>

          <button
            className={`p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-2 ${
              !isAudioAvailable ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={skipForward}
            disabled={!isAudioAvailable} // Disable if audio is not available
          >
            <Image
              src={forwardimg}
              alt="Forward Icon"
              className="max-w-[25px] max-h-[25px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayerResult;
