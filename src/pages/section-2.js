import Frame1 from "../assets/svg/frame-1";
import Frame2 from "../assets/svg/frame-2";
import imageArray from "../utils/image";

export default function Section2({ image, openMail }) {
  return (
    <div className="w-full h-screen overflow-hidden">
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
        className={`h-screen flex flex-col gap-4 items-center justify-center text-center z-50 text-white bg-black`}
      >
        <Frame1
          className={`transition-all duration-1000 delay-700  ${
            !openMail ? "opacity-0" : "opacity-100"
          }`}
        />

        <p
          className={`font-smooch text-5xl tracking-widest transition-all duration-1000 delay-700 ${
            !openMail ? "opacity-0" : "opacity-100"
          }`}
        >
          Letva <br /> & <br /> Dika
        </p>
        <Frame2
          className={`transition-all duration-1000 delay-700 ${
            !openMail ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
}
