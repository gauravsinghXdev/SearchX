import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import styles from "@/styles/AudioPlayerSidebar/Player.module.css"; // Assuming CSS Modules for styling

const CustomAudioPlayer = ({ audioSrc, title, description }) => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    console.log("Audio src =>",audioSrc)

  
    return () => {
      
    }
  }, [])

  const playAudio = () => {
    const audio = audioRef.current;
    console.log("Audio readyState:", audio.readyState); // Log the readyState
    if (audio.readyState >= 2) { // HAVE_ENOUGH_DATA
      audio.play().catch((error) => {
        console.error("Playback error:", error);
      });
    } else {
      console.error("Audio is not ready to play");
    }
  }
  

  const togglePlayPause = () => {
    const audio = audioRef.current;
    console.log("Toggling play/pause:", isPlaying);
    if (isPlaying) {
        audio.pause();
        cancelAnimationFrame(animationRef.current);
        console.log("Paused audio");
    } else {
        audio.play()
            .then(() => {
                console.log("Playing audio");
                animateWaveform();
            })
            .catch((error) => {
                console.error("Audio playback failed:", error);
            });
    }
    setIsPlaying(!isPlaying);
};


  useEffect(() => {
    const audio = audioRef.current;

    if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        try {
          audioContextRef.current = new AudioContext();
          analyserRef.current = audioContextRef.current.createAnalyser();
          analyserRef.current.fftSize = 256;
        } catch (error) {
          console.error("Error initializing AudioContext:", error);
        }
      }

      if (!sourceRef.current && audioContextRef.current) {
        sourceRef.current = audioContextRef.current.createMediaElementSource(audio);
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      }

    return () => {
      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }
      if (analyserRef.current) {
        analyserRef.current.disconnect();
      }
    };
  }, []);

  const animateWaveform = () => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      analyser.getByteTimeDomainData(dataArray);
      console.log("Drawing waveform");

      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "#e0e0e0";
      canvasCtx.beginPath();

      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
  };

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
  };

  const onLoadedMetadata = () => {
    const audioDuration = audioRef.current.duration;
    setDuration(audioDuration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
    audioRef.current.currentTime = seekTime;
    setProgress((seekTime / duration) * 100);
  };

  const skipForward = () => {
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 5,
      duration
    );
    updateProgress();
  };

  const skipBackward = () => {
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 5,
      0
    );
    updateProgress();
  };

  return (
    <div className={styles.customAudioPlayer}>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={onLoadedMetadata}
      />

      <canvas
        ref={canvasRef}
        width="600"
        height="100"
        className={styles.visualizer}
      />

      <div className={styles.audioControls}>
        <div className={styles.progressBar} onClick={handleSeek}>
          <div
            className={styles.progressFilled}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={styles.timeInfo}>
          <span>{formatTime(audioRef.current?.currentTime || 0)}</span> {" "}
          <span>{formatTime(duration)}</span>
        </div>
        <div className={styles.forwardbtn}>
          <button onClick={skipBackward} className={styles.skipBtn}>
          <Image src="/VoiceOver/Skip.png" alt="Play" width={20} height={20} layout="responsive" className={styles.secbtn}/>
          </button>
          <button onClick={playAudio} className={styles.playPauseBtn}>
            {isPlaying ? <Image src="/VoiceOver/Pause.png" alt="Play" width={200} height={200} layout="responsive" className={styles.pausebtn}/> :  <Image src="/VoiceOver/Pause.png" alt="Play" width={200} height={200} layout="responsive" className={styles.pausebtn}/>}
          </button>

          {/* Skip Forward Button */}
          <button onClick={skipForward} className={styles.skipBtn}>
          <Image src="/VoiceOver/Skip.png" alt="Play" width={20} height={20} layout="responsive" className={styles.secbtn}/>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;