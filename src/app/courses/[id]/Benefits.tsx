import React from "react";
import { Course } from "@/src/types";

interface BenefitsProps {
  course: Course;
}

const Benefits: React.FC<BenefitsProps> = ({ course }) => {
  return (
    <div className="p-6 md:p-16 bg-gray-100">
      <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-4">
        Apa yang akan Kamu Pelajari:
      </h2>
      <ul className="list-none space-y-2 text-gray-700">
        {course.learning_list.map((item) => (
          <li key={item.id} className="flex items-start">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-4 mt-2"></span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Benefits;
