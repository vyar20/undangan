import imageArray from "../utils/image";
export default function Section6() {
  return (
    <div className="w-full flex flex-col gap-5 items-center p-4">
      <p className="font-smooch text-4xl">Galeri</p>

      <div className="flex gap-2 w-full overflow-x-scroll relative" id="galeri">
        {imageArray.map((x) => (
          <img src={x} key={x} alt={x} className="w-1/2" />
        ))}
      </div>
    </div>
  );
}
