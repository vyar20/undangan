/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */

import RingsAkad from "../assets/svg/Rings-akad";

/* eslint-disable react/jsx-no-target-blank */
export default function Section4({ en }) {
  return (
    <div
      className="w-full p-4 text-white flex flex-col gap-4 section4"
      style={{ backgroundColor: "#557C55" }}
    >
      <RingsAkad className="w-24 obj-1" />
      <p className="font-smooch text-3xl tracking-wider obj-2">
        {!en ? "Akad Nikah & Resepsi" : "Marriage & Wedding Reception"}
      </p>

      {!en ? (
        <div className="flex gap-4 items-center obj-3">
          <p className="font-poppins text-xs">09:00 WIB - Selesai</p>
          <p className="-translate-y-[.2rem]">|</p>
          <p className="font-poppins text-xs">10:00 WIB - Selesai</p>
        </div>
      ) : (
        <div className="flex gap-4 items-center obj-3">
          <p className="font-poppins text-xs">
            09:00 West Indonesian Time - Finish
          </p>
          <p className="-translate-y-[.2rem]">|</p>
          <p className="font-poppins text-xs">
            10:00 West Indonesian Time - Finish
          </p>
        </div>
      )}

      <p className="font-poppins text-xs obj-4">
        Jl. Yaktapena Raya, Pd. Ranji, Kec. Ciputat Timur, Kota Tangerang
        Selatan, Banten 15412
      </p>

      <div className="flex justify-between obj-5">
        <p className="font-poppins">Location On Maps</p>

        <a
          href="https://www.google.co.id/maps/place/Masjid+Jami'+At+Taqwa/@-6.286049,106.7420951,17.82z/data=!4m9!1m2!2m1!1saula+di+dekat+Masjid+At+Taqwa,+Jalan+Yaktapena+Raya,+Pondok+Ranji,+Ciputat+Tim.,+Kota+Tangerang+Selatan,+Banten!3m5!1s0x2e69f016668b12f3:0x900980757e957007!8m2!3d-6.2861082!4d106.743658!15sCm9hdWxhIGRpIGRla2F0IE1hc2ppZCBBdCBUYXF3YSwgSmFsYW4gWWFrdGFwZW5hIFJheWEsIFBvbmRvayBSYW5qaSwgQ2lwdXRhdCBUaW0uLCBLb3RhIFRhbmdlcmFuZyBTZWxhdGFuLCBCYW50ZW5aayJpYXVsYSBkaSBkZWthdCBtYXNqaWQgYXQgdGFxd2EgamFsYW4geWFrdGFwZW5hIHJheWEgcG9uZG9rIHJhbmppIGNpcHV0YXQgdGltIGtvdGEgdGFuZ2VyYW5nIHNlbGF0YW4gYmFudGVukgEGbW9zcXVlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJQT1hVdE5GRlJFQUU?hl=id"
          target="_blank"
          className="font-poppins text-xs transition-all duration-300 border px-2 rounded flex items-center hover:bg-white hover:bg-opacity-25"
        >
          Open On Google Maps
        </a>
      </div>

      <div className="w-full obj-6">
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
