import React from "react";

function LibrarySong({ songElement, currentSong, setCurrentSong }) {
  const selectSongHandler = () => {
    setCurrentSong(songElement);
  };
  return (
    <div
      className={`library-song ${
        songElement.id === currentSong.id ? "selected" : ""
      }`}
      onClick={selectSongHandler}
    >
      <img src={songElement.cover} alt={songElement.name} />
      <div>
        <div className="song-name">{songElement.name}</div>
        <div className="song-artist">{songElement.artist}</div>
      </div>
    </div>
  );
}

export default LibrarySong;
