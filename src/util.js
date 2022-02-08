export const setOtherSong = (direction, songs, currentSong, setCurrentSong) => {
  const currentIndex = songs.findIndex(
    (songElement) => songElement.id === currentSong.id
  );
  let newIndex = 0;
  newIndex = (currentIndex + direction) % songs.length;
  if (newIndex < 0) {
    newIndex = songs.length - 1;
  }
  setCurrentSong(songs[newIndex]);
};
