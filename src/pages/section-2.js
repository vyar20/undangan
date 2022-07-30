import Frame1 from "../assets/svg/frame-1";
import Frame2 from "../assets/svg/frame-2";
import imageArray from "../utils/image";

export default function Section2({ image, openMail }) {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-[#557C55]">
      {imageArray.map((x, i) => (
        <img
          src={x}
          alt="i"
          key={x}
          className={`h-full bg-center absolute top-0 left-1/2 -translate-x-1/2 mx-auto max-w-full max-h-screen ${
            i === image ? "animate-landing-page" : "-z-10 opacity-0"
          }`}
        />
      ))}

      <div
        className={`h-screen flex flex-col gap-8 items-center justify-center text-center z-50 text-white bg-black`}
      >
        <Frame1 />

        <p
          className={`font-smooch text-5xl tracking-widest transition-all duration-1000 delay-[2700ms] ${
            !openMail ? "opacity-0" : "opacity-100"
          }`}
        >
          Letva <br /> & <br /> Dika
        </p>
        <Frame2 />
      </div>
    </div>
  );
}
