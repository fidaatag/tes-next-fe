"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassCard from "./ClassCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Button } from "@/src/components/ui/button";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/courses");
        setCourses(response.data.data);
      } catch (err) {
        setError("Failed to fetch courses. Please try again later.");
      }
    };

    fetchCourses();
  }, []);

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 md:p-16">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        Selamat Datang, Fauza Aulia!
      </h1>
      {error && <p className="text-red-500 mb-6">{error}</p>}
      <Tabs defaultValue="kelas" className="w-full bg-white">
        <TabsList className="flex space-x-4 mb-6 justify-start">
          <TabsTrigger
            value="kelas"
            className="px-4 py-2 font-bold border-b-2 border-transparent text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 transition-colors"
          >
            Kelas Kamu
          </TabsTrigger>
          <TabsTrigger
            value="proses"
            className="px-4 py-2 font-bold border-b-2 border-transparent text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 transition-colors"
          >
            Dalam Proses
          </TabsTrigger>
          <TabsTrigger
            value="selesai"
            className="px-4 py-2 font-bold border-b-2 border-transparent text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 transition-colors"
          >
            Selesai
          </TabsTrigger>
        </TabsList>
        <TabsContent value="kelas">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCourses.map((course, index) => (
              <ClassCard key={index} {...course} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <Button
                  key={pageNumber}
                  className={`mx-1 ${
                    currentPage === pageNumber
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleClick(pageNumber)}
                >
                  {pageNumber}
                </Button>
              )
            )}
          </div>
        </TabsContent>
        <TabsContent value="proses">
          <p>Content for "Dalam Proses" goes here.</p>
        </TabsContent>
        <TabsContent value="selesai">
          <p>Content for "Selesai" goes here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
