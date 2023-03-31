import React, { useState, useRef, useEffect } from "react";
import "./ComingSoon.css"; // import the CSS file for styling
import videoMain from "../assets/video.mp4";
import logo from "../assets/shimonaagrawaallogo.png";
import audioMain from "../assets/audio.mp3";
import muteIcon1 from "../assets/mute.png";
import unmuteIcon from "../assets/unmute.png";
import imageLeft from "../assets/imageLeft.png";
import imageRight from "../assets/imageRight.png";
const ComingSoon = () => {
  const [isMuted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted(!isMuted);
  };
  useEffect(() => {
    // Play audio on page load
    const audioElement = document.getElementById("audio");
    audioElement.play();

    // Play audio on user interaction
    document.addEventListener("click", () => {
      audioElement.play();
    });
  }, []);

  const muteIcon = isMuted ? muteIcon1 : unmuteIcon;

  return (
    <div className="coming-soon-container">
      <audio id="audio" className="background-audio" loop muted={isMuted}>
        <source src={audioMain} type="audio/mpeg" />
      </audio>
      {/* background video */}
      <video className="background-video" autoPlay loop muted>
        <source src={videoMain} type="video/mp4" />
      </video>
      {/* blackbox overlay */}
      <div className="blackbox-overlay" />
      {/* logo */}
      <img className="logo" src={logo} alt="Logo" />
      {/* coming soon text */}
      <h1 className="coming-soon-text">COMING SOON</h1>
      <h1 className="coming-soon-text1">
        We can’t wait to share our Creation with you!
      </h1>
      {/* get in touch button */}
      <button className="get-in-touch-button">Get in Touch</button>
      {/* mute/unmute button */}
      <div className="mute-button" onClick={toggleMute}>
        <img className="mute" src={muteIcon} alt="Logo" onClick={toggleMute} />
      </div>
      <div className="image-left-container">
        <img className="image-left" src={imageLeft} alt="Image Left" />
      </div>
      <div className="image-right-container">
        <img className="image-right" src={imageRight} alt="Image Right" />
      </div>
      {/* background audio */}
    </div>
  );
};

export default ComingSoon;
