/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import imageArray from "../utils/image";

export default function Section5({ image, openMail }) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Aug 3, 2022 10:00:00").getTime();

    setInterval(function () {
      // code goes here
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setTime({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    }, 1000);
  }, []);
  return (
    <div className="w-full h-screen relative">
      {imageArray.map((x, i) => (
        <div
          key={x}
          className={`w-full h-screen bg-center top-0 left-0 absolute max-w-full max-h-screen ${
            i === image ? "animate-landing-page" : "-z-10 opacity-0"
          }`}
          style={{ backgroundImage: `url("${x}")` }}
        />
      ))}

      <div
        className={`h-screen flex flex-col gap-10 items-center relative justify-center font-poppins text-center z-20 text-white bg-opacity-50 bg-black`}
      >
        <p className="font-smooch text-5xl">Save The Date</p>

        <div className="flex gap-20">
          <div>
            <p className="text-4xl">{time.days}</p>
            <p>Hari</p>
          </div>

          <div>
            <p className="text-4xl">{time.hours}</p>
            <p>Jam</p>
          </div>

          <div>
            <p className="text-4xl">{time.minutes}</p>
            <p>Menit</p>
          </div>

          <div>
            <p className="text-4xl">{time.seconds}</p>
            <p>Detik</p>
          </div>
        </div>
        <a
          href="https://www.google.co.id/maps/place/Advis+PRINT+SHOP/@-6.282206,106.7424695,17z/data=!4m5!3m4!1s0x2e69f01550b2907f:0x8f8a27a1a5fc85ef!8m2!3d-6.2822113!4d106.7466967?hl=id"
          target="_blank"
          className="font-poppins transition-all duration-300 text-xs border px-2 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25"
        >
          Remind Me
        </a>
      </div>
    </div>
  );
}
