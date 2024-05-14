import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoBookOutline, IoPersonOutline, IoTimeOutline } from "react-icons/io5";

function ClassCard({ title, description, price, instructor, duration, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image
        src={image}
        alt="Class"
        width={400}
        height={240}
        className="w-full object-cover rounded-lg"
        layout="responsive"
      />
      <div className="mt-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <p className="text-gray-800 text-sm mb-1 flex items-center">
          <IoPersonOutline className="mr-1" />
          {instructor}
        </p>
        <p className="text-gray-800 text-sm mb-1 flex items-center">
          <IoBookOutline className="mr-1" />
          {instructor}
        </p>
        <p className="text-gray-800 text-sm mb-1 flex items-center">
          <IoTimeOutline className="mr-1" />
          {duration}
        </p>
        <div className="flex flex-col justify-center items-end">
          <p className="text-blue-500 text-lg font-bold">{price}</p>
        </div>
        <button className="mt-4 bg-blue-600 text-white rounded-lg px-4 py-2 w-full">
          Daftar
        </button>
      </div>
    </div>
  );
}

function AllClasses() {
  const classesInfo = [
    {
      title: "Manajemen Keuangan Pribadi",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua. Non deserunt consequat enim velit.",
      price: "Rp.235.000",
      instructor: "Prof. Dr. Khong Guan, S.E., M.E.",
      type: "Kelas Satuan",
      duration: "4 Minggu",
      image: "/class/class1.png",
    },
    {
      title: "Manajemen Keuangan Pribadi",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua. Non deserunt consequat enim velit.",
      price: "Rp.235.000",
      instructor: "Prof. Dr. Khong Guan, S.E., M.E.",
      type: "Kelas Satuan",
      duration: "4 Minggu",
      image: "/class/class2.png",
    },
    {
      title: "Manajemen Keuangan Pribadi",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua. Non deserunt consequat enim velit.",
      price: "Rp.235.000",
      instructor: "Prof. Dr. Khong Guan, S.E., M.E.",
      type: "Kelas Satuan",
      duration: "4 Minggu",
      image: "/class/class3.png",
    },
    {
      title: "Manajemen Keuangan Pribadi",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua. Non deserunt consequat enim velit.",
      price: "Rp.235.000",
      instructor: "Prof. Dr. Khong Guan, S.E., M.E.",
      type: "Kelas Satuan",
      duration: "4 Minggu",
      image: "/class/class4.png",
    },
    {
      title: "Manajemen Keuangan Pribadi",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua. Non deserunt consequat enim velit.",
      price: "Rp.235.000",
      instructor: "Prof. Dr. Khong Guan, S.E., M.E.",
      type: "Kelas Satuan",
      duration: "4 Minggu",
      image: "/class/class5.png",
    },
    {
      title: "Manajemen Keuangan Pribadi",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua. Non deserunt consequat enim velit.",
      price: "Rp.235.000",
      instructor: "Prof. Dr. Khong Guan, S.E., M.E.",
      type: "Kelas Satuan",
      duration: "4 Minggu",
      image: "/class/class6.png",
    },
  ];
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-blue-400">
        Semua Kelas
      </h1>
      <p className="text-center mb-4 md:mb-8">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {classesInfo.map((info, index) => (
          <ClassCard key={index} {...info} />
        ))}
      </div>
      <div className="text-center mt-4 md:mt-8 text-blue-400">
        <a href="/kelas">Selengkapnya</a>
      </div>
    </div>
  );
}

export default AllClasses;
