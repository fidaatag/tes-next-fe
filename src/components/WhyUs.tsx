import React from "react";
import { Card } from "./ui/card";
import {
  FaBook,
  FaUserTie,
  FaRegNewspaper,
  FaInfinity,
  FaCertificate,
  FaUsers,
} from "react-icons/fa";

function WhyUs() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 justify-center p-8 md:p-16">
      <div className="flex flex-col justify-center p-4 md:p-8 md:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-left text-blue-600">
          KENAPA HARUS FE OPEN COURSES?
        </h2>
        <p className="text-left text-gray-700">
          FE Open Courses menyediakan platform belajar yang fleksibel dan mudah
          diakses. Dengan berbagai materi yang disusun oleh para ahli, Anda
          dapat belajar kapan saja dan di mana saja sesuai dengan kebutuhan
          Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8 md:w-1/2">
        <Card className="bg-blue-500 text-white p-4 text-center">
          <div className="flex flex-col items-center">
            <FaBook className="w-12 h-12 mb-4" />
            <span>Kursus Berkualitas</span>
          </div>
        </Card>
        <Card className="bg-blue-500 text-white p-4 text-center">
          <div className="flex flex-col items-center">
            <FaUserTie className="w-12 h-12 mb-4" />
            <span>Instruktur Berpengalaman</span>
          </div>
        </Card>
        <Card className="bg-blue-500 text-white p-4 text-center">
          <div className="flex flex-col items-center">
            <FaRegNewspaper className="w-12 h-12 mb-4" />
            <span>Materi Terbaru</span>
          </div>
        </Card>
        <Card className="bg-blue-500 text-white p-4 text-center">
          <div className="flex flex-col items-center">
            <FaInfinity className="w-12 h-12 mb-4" />
            <span>Akses Seumur Hidup</span>
          </div>
        </Card>
        <Card className="bg-blue-500 text-white p-4 text-center">
          <div className="flex flex-col items-center">
            <FaCertificate className="w-12 h-12 mb-4" />
            <span>Sertifikat Resmi</span>
          </div>
        </Card>
        <Card className="bg-blue-500 text-white p-4 text-center">
          <div className="flex flex-col items-center">
            <FaUsers className="w-12 h-12 mb-4" />
            <span>Dukungan Komunitas</span>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default WhyUs;
