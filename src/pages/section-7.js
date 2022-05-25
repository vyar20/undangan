export default function Section7() {
  return (
    <div
      className="w-full flex flex-col items-center min-h-screen gap-10 p-4 text-white"
      style={{ backgroundColor: "#557C55" }}
    >
      <p className="font-smooch text-4xl ">Ucapan & Doa</p>

      <div className="w-full font-poppins flex flex-col gap-5">
        <label>
          Nama Undangan
          <input
            type="text"
            name="name"
            placeholder="Nama Undangan"
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <label>
          Ucapan & Doa
          <textarea
            type="text"
            name="name"
            placeholder="Ucapan & Doa"
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <div className="flex justify-end">
          <button className="font-poppins text-xs transition-all duration-300 border px-3 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25">
            Kirim Pesan
          </button>
        </div>
      </div>

      <div className="w-full h-80 p-4 flex flex-col gap-5 overflow-y-scroll rounded bg-white font-poppins">
        <div className="w-full rounded p-2" style={{ backgroundColor: "#557C55" }}>
          <p className="font-smooch text-2xl underline tracking-wider">Andicha Renata</p>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
        </div>
      </div>
    </div>
  );
}
