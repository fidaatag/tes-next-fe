import React from "react";

function Hero() {
  return (
    <div className="flex flex-col text-center p-4 md:px-48 lg:px-64 xl:px-96">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-blue-600 font-bold mb-4">
        Bangun Keterampilan Pertama Anda
      </h1>
      <p className="text-sm md:text-base lg:text-lg mt-2 mb-2 ">
        Dapatkan keterampilan baru dengan mengikuti kursus kami yang dirancang
        khusus untuk pemula. Bergabunglah dengan ribuan
        pelajar lainnya yang telah sukses dengan program kami.
      </p>
    </div>
  );
}

export default Hero;
