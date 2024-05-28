import React from "react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

function Certificate() {
  return (
    <div className="p-6 md:p-16 flex flex-col md:flex-row items-center bg-gray-100">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-4">
          Mulai Belajar Hari Ini
        </h2>
        <p className="text-gray-700 mb-6">
          Kejar Sertifikat Terverifikasi untuk menyoroti pengetahuan dan
          keterampilan yang Anda peroleh Rp.235.000
        </p>
        <Button className="bg-blue-600 text-white py-2 px-4 rounded">
          Dapatkan Sertifikat
        </Button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
        <Image
          src={"/images/certificate.png"}
          alt="Certificate"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Certificate;
