import { useState } from "react";

export default function Section7() {
  const [msg, setMsg] = useState({ msg: "", sender: "" });

  const [message, setMessage] = useState([]);

  const submit = e => {
    e.preventDefault();
    const pesan = {msg: msg.msg, sender: msg.sender};

    message.push(pesan);
    setMessage(x => [...x])
  };
 
  return (
    <div
      className="w-full flex flex-col items-center min-h-screen gap-10 p-4 text-white section7"
      style={{ backgroundColor: "#557C55" }}
    >
      <p className="font-smooch text-4xl obj-1">Ucapan & Doa</p>

      <form onSubmit={submit} className="w-full font-poppins flex flex-col gap-5  obj-2" >
        <label>
          Nama Undangan
          <input
            type="text"
            name="sender"
            placeholder="Nama Undangan"
            value={msg.sender}
            onChange={(e) => setMsg((p) => ({ ...p, sender: e.target.value }))}
            required
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <label>
          Ucapan & Doa
          <textarea
            type="text"
            name="msg"
            placeholder="Ucapan & Doa"
            value={msg.msg}
            onChange={(e) => setMsg((p) => ({ ...p, msg: e.target.value }))}
            required
            className="w-full px-2 py-1 outline-none border-none rounded text-black"
          />
        </label>

        <div className="flex justify-end  obj-3">
          <button className="font-poppins text-xs transition-all duration-300 border px-3 py-2 rounded flex items-center hover:bg-white hover:bg-opacity-25">
            Kirim Pesan
          </button>
        </div>
      </form>

      <div className="w-full h-80 p-4 flex flex-col gap-5 overflow-y-scroll rounded bg-white font-poppins  obj-4">
        {message.map((x, i) => (
          <div
          key={i}
          className="w-full rounded p-2"
          style={{ backgroundColor: "#557C55" }}
          >
          <p className="font-smooch text-2xl underline tracking-wider">
            {x.sender}
          </p>
          <p className="text-sm">
            "{x.msg}"
          </p>
        </div>
          ))}
      </div>
    </div>
  );
}
