import React from "react";
import Image from "next/image";
import { button } from "@/components/ui/button";

const Certificate = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <Image
          src="/images/certificate.png" // path to the certificate image
          alt="Certificate"
          width={500}
          height={300}
          className="object-cover"
        />
      </div>
      <button className="w-full bg-blue-600 text-white py-3">
        Download Sertifikat
      </button>
    </div>
  );
};

export default Certificate;
