import { useState } from "react";

export default function Section9() {
  const [msg, setMsg] = useState({ msg: "", sender: "" });
  return (
    <div
      className="w-full flex flex-col items-center gap-10 p-4 font-poppins text-white section8"
      style={{ backgroundColor: "#557C55" }}
    >
      <p className="font-smooch text-4xl obj-1">Reservasi</p>

      <div className="w-full font-poppins flex flex-col gap-5  obj-2">
        <label>
          Nama
          <input
            type="text"
            placeholder="Nama"
            name={msg.sender}
            value={msg.sender}
            onChange={(e) => setMsg((p) => ({ ...p, sender: e.target.value }))}
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <label>
          Jumlah Undangan
          <input
            type="number"
            placeholder="1/2/3/other Orang"
            name={msg.msg}
            value={msg.msg}
            onChange={(e) => setMsg((p) => ({ ...p, msg: e.target.value }))}
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <div className="flex justify-end  obj-3">
          <a
            href={`https://api.whatsapp.com/send/?phone=6281286280644&text=${msg.sender}%0D%0A${msg.msg}&app_absent=0`}
            target="_blank"
            className="font-poppins text-xs transition-all duration-300 border px-3 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25" rel="noreferrer"
          >
            Reservasi
          </a>
        </div>
      </div>
    </div>
  );
}
