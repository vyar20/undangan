import SwipeToSeeMore from "../assets/svg/swipe";
import imageArray from "../utils/image";
export default function Section6() {
  return (
    <div className="w-full flex flex-col gap-5 items-center p-4 section6">
      <p className="font-smooch text-4xl text-shadow obj-1">Galeri</p>

      <video controls className="w-full obj-4">
        <source src={require("../assets/music/music-1.mp4")} type="video/mp4" />
      </video>

      <div
        className="flex gap-2 w-full overflow-x-scroll  obj-2 relative"
        id="galeri"
      >
        {imageArray.map((x) => (
          <img src={x} key={x} alt={x} className="w-1/2" />
        ))}
      </div>

      <SwipeToSeeMore className="w-80 -translate-y-2  obj-3" />
    </div>
  );
}
