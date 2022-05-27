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
    <div className="w-full h-screen relative section5">
      {imageArray.map((x, i) => (
        <div
          key={x}
          className={`w-full h-screen bg-center bg-fixed bg-cover top-0 left-0 absolute max-w-full max-h-screen ${
            i === image ? "animate-landing-page" : "-z-10 opacity-0"
          }`}
          style={{ backgroundImage: `url("${x}")` }}
        />
      ))}

      <div
        className={`h-screen flex flex-col gap-10 items-center relative justify-center font-poppins text-center z-20 text-white bg-opacity-50 bg-black`}
      >
        <p className="font-smooch text-5xl obj-1">Save The Date</p>

        <div className="flex justify-around w-full  obj-2">
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
          href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding%20Letva%20-%20Dika&details&dates=20220803T100000/20220522T220000&location"
          target="_blank"
          className="font-poppins transition-all duration-300 text-xs border px-2 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25  obj-3"
        >
          Remind Me
        </a>
      </div>
    </div>
  );
}
