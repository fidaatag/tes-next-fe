"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { Course } from "@/src/types"; // Adjust the import path as needed

interface HeroProps {
  course: Course;
}

const Hero: React.FC<HeroProps> = ({ course }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  if (!course) return <div>Failed to load course data.</div>;

  return (
    <section className="flex flex-col md:flex-row items-center p-8 md:p-24 bg-gray-100 space-y-8 md:space-y-0">
      <div className="flex flex-col space-y-4 md:w-2/3">
        <h1 className="text-3xl md:text-4xl text-blue-600 font-bold">
          {course.name}
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          {course.description}
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <Button onClick={handleClick}>Daftar Sekarang</Button>
          <p className="text-sm md:text-base text-gray-500">
            {course.student_enrolled_amount} telah mendaftar
          </p>
        </div>
      </div>
      <div className="md:w-1/3">
        <Image
          src={
            course.image_cover
              ? "/images/class/class3.png"
              : "/images/class/class3.png"
          }
          alt="Hero"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
