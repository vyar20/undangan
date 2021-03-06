import { useState } from "react";

export default function Section8({ en }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = (e) => {
    if (e.target.id === "modal") {
      document.querySelector("body").style.overflow = "auto";
      setShowModal(false);
    }
  };
  return (
    <div
      className="w-full flex flex-col items-center gap-10 p-4 relative font-poppins text-white section9"
      style={{ backgroundColor: "#557C55" }}
    >
      <p className="font-smooch text-4xl obj-1">
        {!en ? "Kado Digital" : "Digital Gifts"}
      </p>

      <p className="text-center text-sm  obj-2">
        {!en
          ? "Kami Menerima Kado Pernikahan Dalam Bentuk Kado Digital Melalui Tombol Dibawah Ini"
          : "We accept wedding gifts in digital form via the button below"}
      </p>

      <button
        onClick={() => {
          document.querySelector("body").style.overflow = "hidden";
          setShowModal(true);
        }}
        className="font-poppins text-xs transition-all duration-300 border px-3 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25  obj-3"
      >
        {!en ? "Kado Digital" : "Digital Gifts"}
      </button>

      {!en ? (
        <p className="font-poppins text-center text-xs tracking-wider  obj-4">
          Terimakasih atas Doa dan Restu Bapak/Ibu/Saudara/Saudari <br /> Kami
          Ucapkan banyak Terima Kasih
        </p>
      ) : (
        <p className="font-poppins text-center text-xs tracking-wider  obj-4">
          Thank you for your prayers and blessings, Mr./Mrs./Brothers/Sisters
        </p>
      )}

      <div className="flex flex-col gap-3">
        <p className="font-poppins text-center text-xs tracking-wider obj-5">
          {!en ? "Dari Kami Yang Berbahagia" : "From We Who Are Happy"}
        </p>
        <p className="font-smooch text-4xl  obj-6">Letva & Dika</p>
      </div>
      <div
        onClick={closeModal}
        id="modal"
        className={`duration-300 fixed w-full h-screen bg-black bg-opacity-50 top-0 flex justify-center items-center ${
          showModal ? "opacity-100 z-50" : "opacity-0 -z-10"
        }`}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex flex-col gap-4">
          <img
            src={require("../assets/image/qr.png")}
            alt="qr"
            className={`duration-300 w-52 ${
              showModal ? "translate-y-0" : "-translate-y-5"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
