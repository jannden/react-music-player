// Initialization
import React, { useState, useRef } from "react";
// Styles
import "./styles/App.scss";
// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import { setOtherSong } from "./util";

// Data
import chillHop from "./data";
// View
function App() {
  // Ref
  const audioRef = useRef(null);
  // State
  const [songs] = useState(chillHop());
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  // Handlers
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const animationPercentage = Math.round((currentTime / duration) * 100);
    setSongInfo({ ...songInfo, currentTime, duration, animationPercentage });
  };
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const playNextHandler = () => {
    setOtherSong(1, songs, currentSong, setCurrentSong);
  };
  return (
    <div className={`app ${isNavOpen ? "library-active" : ""}`}>
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Library
        isNavOpen={isNavOpen}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedData={autoPlayHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={playNextHandler}
      />
    </div>
  );
}
// Export
export default App;
