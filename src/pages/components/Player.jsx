import React, { useState, useRef } from "react";
// import { ReactComponent as PlayIcon } from "./play.svg";
// import { ReactComponent as PauseIcon } from "./pause.svg";

const Player = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
  };

  const handleProgressChange = (event) => {
    const progressBar = event.target;
    const progressPercent =
      (event.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    const newTime = progressPercent * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(progressPercent * 100);
  };

  const progressPathLength = Math.PI * 2 * 25;
  const progressPathOffset = progressPathLength * (1 - progress / 100);

  return (
    <div className="audio-player">
      <audio src={src} ref={audioRef} onTimeUpdate={handleTimeUpdate} />
      <button className="play-pause-button" onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div className="progress-container" onClick={handleProgressChange}>
        <svg className="progress-svg" width={50} height={50}>
          <path
            className="progress-background"
            d="M 25 0 A 25 25 0 1 1 24.999999999999996 0"
            color="red"
          />
          <path
            className="progress-foreground"
            d="M 25 0 A 25 25 0 0 1 24.999999999999996 0"
            strokeDasharray={progressPathLength}
            strokeDashoffset={progressPathOffset}
            color="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Player;
