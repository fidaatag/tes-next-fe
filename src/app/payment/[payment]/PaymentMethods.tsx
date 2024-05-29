"use client";

import React from "react";
import Image from "next/image";
import { useToast } from "@/src/components/ui/use-toast";

const banks = [
  {
    name: "BCA",
    accountNumber: "01270721021",
    accountName: "FE Open Course",
    university: "UNISSULA",
    logo: "/images/bank/bca.png",
  },
  {
    name: "BANK BRI",
    accountNumber: "01270721021",
    accountName: "FE Open Course",
    university: "UNISSULA",
    logo: "/images/bank/bri.png",
  },
  {
    name: "MANDIRI",
    accountNumber: "01270721021",
    accountName: "FE Open Course",
    university: "UNISSULA",
    logo: "/images/bank/mandiri.png",
  },
  {
    name: "JENIUS",
    accountNumber: "01270721021",
    accountName: "FE Open Course",
    university: "UNISSULA",
    logo: "/images/bank/jenius.png",
  },
];

const PaymentMethods = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: text,
      });
    });
  };

  return (
    <div className="p-6 md:p-16 mt-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
        Metode Pembayaran Transfer Bank
      </h2>
      <p className="mb-6">
        Lakukan pembayaran sebesar Rp 470.266,00 tepat 3 digit terakhir (JANGAN
        kumpulkan) dan tambahkan berita FEOC10421 sehingga dapat diproses oleh
        sistem secara otomatis (tidak perlu konfirmasi secara manual).
      </p>
      <div className="space-y-6">
        {banks.map((bank, index) => (
          <div key={index} className="flex items-center p-4 bg-gray-100 rounded-md">
            <div className="w-1/4 md:w-1/6 flex justify-center">
              <Image src={bank.logo} alt={bank.name} width={100} height={100} />
            </div>
            <div className="w-3/4 md:w-5/6 pl-6">
              <p className="text-lg font-semibold flex items-center">
                {bank.accountNumber}{" "}
                <button
                  className="text-blue-600 cursor-pointer ml-2"
                  onClick={() => copyToClipboard(bank.accountNumber)}
                >
                  copy
                </button>
              </p>
              <p className="text-gray-600">a.n. {bank.accountName}</p>
              <p className="text-gray-600">{bank.university}</p>
              <p className="text-gray-600 flex items-center">
                News : FEOC10421{" "}
                <button
                  className="text-blue-600 cursor-pointer ml-2"
                  onClick={() => copyToClipboard("FEOC10421")}
                >
                  copy
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-100 rounded-md">
        <p className="text-red-500 font-semibold">Penting!</p>
        <p>
          Jika setelah 15 menit pembayaran yang Anda lakukan dan tagihan Anda
          belum diproses, silakan konfirmasi secara manual.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethods;
