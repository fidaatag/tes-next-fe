import React from "react";
import AccordionComponent from "./AccordionComponent";
import Dates from "./Dates";
import Certificate from "./Certificate";
import CourseCard from "@/src/app/kelas/CourseCard";
import Navbar from "@/src/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="p-6 mt-6 md:p-16 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
          Kelas : Manajemen Keuangan Pribadi
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AccordionComponent />
          </div>
          <div className="space-y-6">
            <Dates />
            <Certificate />
            <CourseCard />
          </div>
        </div>
      </div>
    </>
  );
}
