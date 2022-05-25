/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */

import RingsAkad from "../assets/svg/Rings-akad";

/* eslint-disable react/jsx-no-target-blank */
export default function Section4() {
  return (
    <div
      className="w-full p-4 text-white flex flex-col gap-4"
      style={{ backgroundColor: "#557C55" }}
    >
      <RingsAkad className="w-24" />
      <p className="font-smooch text-3xl tracking-wider ">
        Akad Nikah & Resepsi
      </p>

      <div className="flex gap-4 items-center">
        <p className="font-poppins text-xs">09:00 WIB - Selesai</p>
        <p className="-translate-y-[.2rem]">|</p>
        <p className="font-poppins text-xs">10:00 WIB - Selesai</p>
      </div>

      <p className="font-poppins text-xs">
        006 10 Blok B12, Jl. W R Supratman, Rengas, Kec. Ciputat Tim., Kota
        Tangerang Selatan, Banten 15412
      </p>

      <div className="flex justify-between">
        <p className="font-poppins">Location On Maps</p>

        <a
          href="https://www.google.co.id/maps/place/Advis+PRINT+SHOP/@-6.282206,106.7424695,17z/data=!4m5!3m4!1s0x2e69f01550b2907f:0x8f8a27a1a5fc85ef!8m2!3d-6.2822113!4d106.7466967?hl=id"
          target="_blank"
          className="font-poppins text-xs transition-all duration-300 border px-2 rounded flex items-center hover:bg-white hover:bg-opacity-25"
        >
          Open On Google Maps
        </a>
      </div>

      <div className="w-full">
        <iframe
          className="w-full h-64 rounded"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=006%2010%20Blok%20B12,%20Jl.%20W%20R%20Supratman,%20Rengas,%20Kec.%20Ciputat%20Tim.,%20Kota%20Tangerang%20Selatan,%20Banten%2015412&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </div>
  );
}
