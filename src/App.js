/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from "react";
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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [openMail, setOpenMail] = useState(false);
  const [image, setImage] = useState(0);
  const [play, setPlay] = useState(false);
  const [showTitle, setShowTitile] = useState(true);

  const startAnimationFrame1 = () => {
    const tlFrame = gsap.timeline({ delay: 1.5 });
    const tlDove = gsap.timeline({ delay: 1.7 });

    tlFrame.fromTo(
      "#frame1",
      { opacity: 0, y: "-1rem", x: "4rem" },
      { opacity: 1, y: 0, x: 0, duration: 1 }
    );
    tlDove.fromTo(
      "#dove1",
      { opacity: 0, y: "-1rem", x: "4rem" },
      { opacity: 1, y: 0, x: 0, duration: 1 }
    );
  };

  const startAnimationFrame2 = () => {
    const tlFrame = gsap.timeline({ delay: 1.5 });
    const tlDove = gsap.timeline({ delay: 1.7 });

    tlFrame.fromTo(
      "#frame2",
      { opacity: 0, y: "1rem", x: "-4rem" },
      { opacity: 1, y: 0, x: 0, duration: 1 }
    );
    tlDove.fromTo(
      "#dove2",
      { opacity: 0, y: "-1rem", x: "-4rem" },
      { opacity: 1, y: 0, x: 0, duration: 1 }
    );
  };

  const startAnimationSection3 = () => {
    [
      ".section3 .aboutus",
      ".section3 .picture1",
      ".section3 .picture2",
      ".section3 .rings",

      ".section4 .obj-1",
      ".section4 .obj-2",
      ".section4 .obj-3",
      ".section4 .obj-4",

      ".section5 .obj-1",
      ".section5 .obj-2",
      ".section5 .obj-3",

      ".section6 .obj-1",
      ".section6 .obj-2",
      ".section6 .obj-3",
      ".section6 .obj-4",

      ".section7 .obj-1",
      ".section7 .obj-2",
      ".section7 .obj-3",
      ".section7 .obj-4",

      ".section8 .obj-1",
      ".section8 .obj-2",
      ".section8 .obj-3",

    ].map((x, i) =>
      gsap.fromTo(
        x,
        { opacity: 0, x: i % 2 === 0 ? "1rem" : "-1rem" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: .5,
          scrollTrigger: {
            trigger: x,
            markers: true,
            start: "top 90%",
          },
        }
      )
    );

    [
      ".section9 .obj-1",
      ".section9 .obj-2",
      ".section9 .obj-3",
      ".section9 .obj-4",
      ".section9 .obj-5",
      ".section9 .obj-6",
    ].map((x, i) => {
      gsap.fromTo(
        x,
        { opacity: 0, x: i % 2 === 0 ? "1rem" : "-1rem" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: x,
            start: "top bottom",
          },
        }
      );
    });
  };

  useEffect(() => {
    startAnimationSection3();
  }, []);

  const startFunction = () => {
    playMusic(false);
    startAnimationFrame1();
    startAnimationFrame2();
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

      <Section5 image={image} />

      <Section6 />

      <Section7 />

      <Section9 />

      <Section8 />
    </div>
  );
}
