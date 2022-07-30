/* eslint-disable array-callback-return */
// import { useEffect, useState } from "react";
// import Heart from "../assets/svg/heart";
import Rings from "../assets/svg/rings";

// const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Section3() {
  // const [heartState, setHeartState] = useState([]);

  // useEffect(() => {
  //   let dum = [];
  //   dummyArray.map((x) => {
  //     let random1 = Math.round(Math.random() * 10);
  //     let random2 = Math.round(Math.random() * 10);
  //     if (random1 > 10 && random2 < random1) random1 = random1 - 8  ;

  //     const check = dum.find((y) => y === x);
  //     if (check) random1 = random1 + 10;

  //     dum.push(random1);
  //     setHeartState(dum);
  //   });
  //   console.log(dum);
  // }, []);

  return (
    <div className="w-full min-h-screen flex bg-white flex-col justify-center items-center gap-10 py-10 section3 relative">
      {/* {heartState.map((x, i) => (
        <Heart className={`w-10 absolute translate-y-[${x + Math.floor(Math.random() * 10)}rem] translate-x-[${x + Math.floor(Math.random() * 10)}rem]`} key={i} />
      ))} */}
      <p className="font-smooch text-shadow text-4xl aboutus relative">
        About Us
      </p>

      <div className="relative flex justify-center items-center flex-col text-center gap-2 picture1">
        <p className="font-smooch text-3xl tracking-wider text-shadow">
          Letva Lusyana
        </p>
        <p className="font-poppins">
          Putri pertama dari <br /> Bpk. Karmawan Adithya <br /> & <br /> Ibu
          Naseroh Handayani
        </p>
      </div>

      <Rings className="w-16 rings" />

      <div className="relative flex justify-center flex-col items-center text-center gap-2 picture2">
        <p className="font-smooch text-3xl tracking-wider text-shadow">
          Andicha Renata
        </p>
        <p className="font-poppins">
          Putra kedua dari <br /> Bpk. Reda Angkara <br /> & <br /> Ibu
          Catharina Shinta
        </p>
      </div>
    </div>
  );
}
