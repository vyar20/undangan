import { useState } from "react";

export default function Section8() {
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
      <p className="font-smooch text-4xl obj-1">Kado Digital</p>

      <p className="text-center text-sm  obj-2">
        Kami Menerima Kado Pernikahan Dalam Bentuk Kado Digital Melalui Tombol
        Dibawah Ini
      </p>

      <button
        onClick={() => {
          document.querySelector("body").style.overflow = "hidden";
          setShowModal(true);
        }}
        className="font-poppins text-xs transition-all duration-300 border px-3 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25  obj-3"
      >
        Kado Digital
      </button>

      <p className="font-poppins text-center text-xs tracking-wider  obj-4">
        Terimakasih atas Doa dan Restu Bapak/Ibu/Saudara/Saudari <br /> Kami
        Ucapkan banyak Terima Kasih
      </p>
      <div className="flex flex-col gap-3">
        <p className="font-poppins text-center text-xs tracking-wider obj-5">
          Dari Kami Yang Berbahagia
        </p>
        <p className="font-smooch text-4xl  obj-6">Letva & Dika</p>
      </div>
      {showModal && (
        <div
          onClick={closeModal}
          id="modal"
          className="fixed w-full h-screen z-[60] bg-black bg-opacity-50 top-0 flex justify-center items-center"
        >
          <div>
            <img src={require("../assets/image/qr.png")} alt="qr" />
          </div>
        </div>
      )}
    </div>
  );
}
