import Rings from "../assets/svg/rings";

export default function Section3({ en }) {
  return (
    <div className="w-full min-h-screen flex bg-white flex-col justify-center items-center gap-10 py-10 section3 relative">
      <p className="font-smooch text-shadow text-4xl aboutus relative">
        About Us
      </p>

      <div className="relative flex justify-center items-center flex-col text-center gap-2 picture1">
        <p className="font-smooch text-3xl tracking-wider text-shadow">
          Letva Lusyana
        </p>
        {!en ? (
          <p className="font-poppins">
            Putri pertama dari <br /> Bpk. Karmawan Adithya <br /> & <br /> Ibu
            Naseroh Handayani
          </p>
        ) : (
          <p>
            The First Daughter Of <br /> Mr. Karmawan Adithya <br /> & <br />{" "}
            Ms. Naseroh Handayani
          </p>
        )}
      </div>

      <Rings className="w-16 rings" />

      <div className="relative flex justify-center flex-col items-center text-center gap-2 picture2">
        <p className="font-smooch text-3xl tracking-wider text-shadow">
          Andicha Renata
        </p>
        {!en ? (
          <p className="font-poppins">
            Putra kedua dari <br /> Bpk. Reda Angkara <br /> & <br /> Ibu
            Catharina Shinta
          </p>
        ) : (
          <p>
            The Second Son Of <br /> Mr. Reda Angkara <br /> & <br /> Ms.
            Catharina Shinta
          </p>
        )}
      </div>
    </div>
  );
}
