import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Flashback",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-300x300.jpg",
      artist: "Blue Wednesday, Shopan",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11225",
      color: ["#6B567D", "#3A447F"],
      id: uuidv4(),
    },
    {
      name: "Lax Incense",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto, Daphné",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
      color: ["#773E20", "#122B2B"],
      id: uuidv4(),
    },
    {
      name: "Seascape",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      artist: "Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11773",
      color: ["#E99770", "#7779A3"],
      id: uuidv4(),
    },
    {
      name: "Time to Shine",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
      artist: "Sitting Duck, Hoffy Beats",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9785",
      color: ["#7E6651", "#8DC8A0"],
      id: uuidv4(),
    },
  ];
}

export default chillHop;
