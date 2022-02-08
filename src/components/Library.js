import React from "react";
import LibrarySong from "./LibrarySong";

function Library({ isNavOpen, songs, currentSong, setCurrentSong }) {
  return (
    <div
      className={`library ${isNavOpen ? "library-opened" : "library-closed"}`}
    >
      <h2>Library</h2>
      {songs.map((songElement) => (
        <LibrarySong
          key={songElement.id}
          songElement={songElement}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      ))}
    </div>
  );
}

export default Library;
