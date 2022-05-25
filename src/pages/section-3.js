import FramePicture from "../assets/svg/frame-picture";
import Rings from "../assets/svg/rings";

export default function Section3() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-10 py-10">
      <p className="font-smooch text-shadow text-xl">About Us</p>

      <div className="relative flex justify-center items-center flex-col text-center gap-2">
        <FramePicture className="w-40" />
        <div
          className="w-20 h-20 absolute top-10 left-15  rounded-full bg-center bg-cover bg-black"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=900')",
          }}
        />

        <p className="font-smooch text-3xl tracking-wider text-shadow">Letva Lusyana</p>
        <p className="font-poppins">
          Putri pertama dari <br /> Bpk. Karmawan Adithya <br /> & <br /> Ibu
          Naseroh Handayani
        </p>
      </div>

      <Rings className="w-16" />

      <div className="relative flex justify-center flex-col items-center text-center gap-2">
        <FramePicture className="w-40" />
        <div
          className="w-20 h-20 absolute top-10 left-15 rounded-full bg-center bg-cover bg-black"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=900')",
          }}
        />

        <p className="font-smooch text-3xl tracking-wider text-shadow">Andicha Renata</p>
        <p className="font-poppins">
          Putra kedua dari <br /> Bpk. Reda Angkara <br /> & <br /> Ibu
          Catharina Shinta
        </p>
      </div>
    </div>
  );
}
