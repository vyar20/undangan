/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import "./App.css";
import imageArray from "./utils/image";
import MusicPlayer from "./components/music-player";
import Section1 from "./pages/section-1";
import Section2 from "./pages/section-2";
import Section3 from "./pages/section-3";
import Section4 from "./pages/section-4";
import Section5 from "./pages/section-5";
import Section6 from "./pages/section-6";
import Section7 from "./pages/section-7";
import Section8 from "./pages/section-8";
import Section9 from "./pages/section-9";

export default function App() {
  const [openMail, setOpenMail] = useState(false);
  const [image, setImage] = useState(0);
  const [play, setPlay] = useState(false);
  const [showTitle, setShowTitile] = useState(true);

  const startFunction = () => {
    playMusic(false);

    document.querySelector("body").style.overflow = "auto";
    let num = 0;
    setInterval(() => {
      if (num + 1 === imageArray.length) {
        setImage(0);
        num = 0;
      } else {
        setImage(num + 1);
        num = num + 1;
      }
    }, 5000);
  };

  const playMusic = (e) => {
    const audio = document.querySelector("audio");
    console.log("running");
    if (!e) {
      audio.currentTime = 5;
      audio.play();
      setPlay(true);
      setShowTitile(false);
    } else {
      audio.pause();
      setPlay(false);
      setShowTitile(true);
    }
  };

  return (
    <div className={`w-full min-h-screen ${!openMail && "overflow-hidden"}`}>
      <MusicPlayer playMusic={playMusic} play={play} showTitle={showTitle} />

      <Section1
        openMail={openMail}
        setOpenMail={setOpenMail}
        startFunction={startFunction}
      />

      <Section2 image={image} openMail={openMail} />

      <Section3 />

      <Section4 />

      <Section5 image={image}/>

      <Section6 />

      <Section7 />

      <Section9 />
      
      <Section8 />
      
    </div>
  );
}
