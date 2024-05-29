"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassCard from "./ClassCard";
import { ClassInfo } from "@/src/types";

const AllClasses: React.FC = () => {
  const [classesInfo, setClassesInfo] = useState<ClassInfo[]>([]);
  const [visibleCards, setVisibleCards] = useState(6);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/courses");
        setClassesInfo(response.data.data);
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.");
      }
    };

    fetchClasses();
  }, []);

  const showMoreClasses = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-blue-600">
        Semua Kelas
      </h1>
      <p className="text-center mb-4 md:mb-8 text-gray-700">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
      {error && (
        <p className="text-center text-red-500 mb-4 md:mb-8">{error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classesInfo.slice(0, visibleCards).map((info) => (
          <ClassCard key={info.id} {...info} />
        ))}
      </div>
      {visibleCards < classesInfo.length && (
        <div className="text-center mt-4 md:mt-8 text-blue-600">
          <button
            onClick={showMoreClasses}
            className="mt-4 bg-blue-600 text-white rounded-lg px-4 py-2 transition duration-300 transform hover:bg-blue-700"
          >
            Selengkapnya
          </button>
        </div>
      )}
    </div>
  );
};

export default AllClasses;
