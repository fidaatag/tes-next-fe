import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { FaClock, FaTag, FaLanguage } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { Course } from "@/src/types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  if (!course) return <div>Failed to load course data.</div>;

  return (
    <Card className="p-6 border shadow-md rounded-lg mb-6 bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Course Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 mt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaClock className="text-blue-500" />
            <span className="font-medium text-gray-600">Lamanya :</span>
          </div>
          <span className="text-gray-700">{course.duration} Minggu</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GiPathDistance className="text-blue-500" />
            <span className="font-medium text-gray-600">Upaya :</span>
          </div>
          <span className="text-gray-700">{course.effort_taken}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaTag className="text-blue-500" />
            <span className="font-medium text-gray-600">Harga :</span>
          </div>
          <span className="text-gray-700">Rp {course.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaLanguage className="text-blue-500" />
            <span className="font-medium text-gray-600">Bahasa :</span>
          </div>
          <span className="text-gray-700">{course.language}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
