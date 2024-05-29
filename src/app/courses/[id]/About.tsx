import React from "react";
import CourseCard from "./CourseCard";
import { Course } from "@/src/types"; 

interface AboutProps {
  course: Course;
}

const About: React.FC<AboutProps> = ({ course }) => {
  if (!course) return <div>Failed to load course data.</div>;

  return (
    <div className="p-6 md:p-16 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
      <div className="md:w-2/3">
        <h2 className="text-3xl md:text-4xl text-blue-600 font-bold">
          Tentang Kelas ini
        </h2>
        <p className="mt-2 text-gray-500">1.201 Dilihat</p>
        <p className="mt-4 text-gray-700">{course.about}</p>
      </div>
      <div className="md:w-1/3">
        <CourseCard course={course} />
      </div>
    </div>
  );
};

export default About;
