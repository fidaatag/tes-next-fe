import React from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";
import { Course } from "@/src/types";

interface InstructorProps {
  course: Course;
}

const Instructor: React.FC<InstructorProps> = ({ course }) => {
  return (
    <div className="p-6 md:p-16">
      <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-8">
        Temui instruktur Anda
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {course.lecturers.map((instructor) => (
          <div key={instructor.id} className="flex items-center space-x-4">
            <Avatar className="w-16 h-16 rounded-full overflow-hidden">
              <AvatarImage
                src={instructor.image || "/images/instructor.png"}
                alt={instructor.full_name}
              />
              <AvatarFallback delayMs={600}>
                {instructor.full_name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">{instructor.full_name}</p>
              {instructor.title && <p>{instructor.title}</p>}
              {instructor.center && <p>{instructor.center}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
