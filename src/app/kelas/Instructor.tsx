import React from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";

const instructors = [
  {
    name: "Prof. Dr. Khong Guan, S.E., M.E.",
    title: "Director, Greater Good",
    center: "Science Center",
    image: "/instructor.png", // Replace with the actual image path
  },
  {
    name: "Prof. Dr. Khong Guan, S.E., M.E.",
    title: "Director, Greater Good",
    center: "Science Center",
    image: "/instructor.png",
  },
  {
    name: "Prof. Dr. Khong Guan, S.E., M.E.",
    title: "Director, Greater Good",
    center: "Science Center",
    image: "/instructor.png",
  },
  {
    name: "Prof. Dr. Khong Guan, S.E., M.E.",
    title: "Director, Greater Good",
    center: "Science Center",
    image: "/instructor.png",
  },
  {
    name: "Prof. Dr. Khong Guan, S.E., M.E.",
    title: "Director, Greater Good",
    center: "Science Center",
    image: "/instructor.png",
  },
  {
    name: "Prof. Dr. Khong Guan, S.E., M.E.",
    title: "Director, Greater Good",
    center: "Science Center",
    image: "/instructor.png",
  },
];

function Instructor() {
  return (
    <div className="p-6 md:p-16">
      <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-8">
        Temui instruktur Anda
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {instructors.map((instructor, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Avatar className="w-16 h-16 rounded-full overflow-hidden">
              <AvatarImage src={instructor.image} alt={instructor.name} />
              <AvatarFallback delayMs={600}>
                {instructor.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">{instructor.name}</p>
              <p>{instructor.title}</p>
              <p>{instructor.center}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructor;
