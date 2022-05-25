export default function Section9() {
  return (
    <div
      className="w-full flex flex-col items-center gap-10 p-4 font-poppins text-white"
      style={{ backgroundColor: "#557C55" }}
    >
      <p className="font-smooch text-4xl">Reservasi</p>

      <div className="w-full font-poppins flex flex-col gap-5">
        <label>
          Nama
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <label>
          Jumlah
          <input
            type="text"
            name="jumlah"
            placeholder="Jumlah"
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <div className="flex justify-end">
          <button className="font-poppins text-xs transition-all duration-300 border px-3 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25">
            Kirim Pesan
          </button>
        </div>
      </div>

    </div>
  );
}
