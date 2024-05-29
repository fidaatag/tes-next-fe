import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";

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

const Bank = () => {
  return (
    <div className="p-6 md:p-16">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
        Bank Transfer
      </h2>
      <div className="space-y-6">
        {banks.map((bank, index) => (
          <Card key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <div className="w-1/4 md:w-1/6 flex justify-center">
              <Image src={bank.logo} alt={bank.name} width={140} height={140} />
            </div>
            <div className="w-3/4 md:w-5/6 pl-6 border-l-2 border-gray-200">
              <p className="text-lg font-semibold">{bank.accountNumber}</p>
              <p className="text-gray-600">a.n. {bank.accountName}</p>
              <p className="text-gray-600">{bank.university}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Bank;
