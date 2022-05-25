export default function Section8() {
  return (
    <div
      className="w-full flex flex-col items-center gap-10 p-4 font-poppins text-white"
      style={{ backgroundColor: "#557C55" }}
    >
      <p className="font-smooch text-4xl ">Kado Digital</p>

      <p className="text-center text-sm">
        Kami Menerima Kado Pernikahan Dalam Bentuk Kado Digital Melalui Tombol
        Dibawah Ini
      </p>

      <button className="font-poppins text-xs transition-all duration-300 border px-3 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25">
        Kado Digital
      </button>

      <p className="font-poppins text-center text-xs tracking-wider">
        Terimakasih atas Doa dan Restu Bapak/Ibu/Saudara/Saudari <br /> Kami
        Ucapkan banyak Terima Kasih
      </p>
      <div className="flex flex-col gap-3">
        <p className="font-poppins text-center text-xs tracking-wider">
          Dari Kami Yang Berbahagia
        </p>
        <p className="font-smooch text-4xl">Letva & Dika</p>
      </div>
    </div>
  );
}
