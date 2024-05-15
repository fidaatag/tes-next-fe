"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

function Hero() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start p-16 md:p-24 bg-gray-100">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-4xl text-blue-600 font-bold">
          Manajemen Keuangan Pribadi
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={handleClick}>Daftar Sekarang</Button>
          <p className="text-sm md:text-base text-gray-500">
            814 telah Mendaftar
          </p>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:ml-8">
        <Image
          src="/class/class1.png"
          alt="Hero"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
