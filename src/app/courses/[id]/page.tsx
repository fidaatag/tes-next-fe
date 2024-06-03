import React from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";
import Instructor from "./Instructor";
import Certificate from "./Certificate";
import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/Navbar";
import axios from "axios";
import { Course } from "@/src/types";

async function fetchCourseData(id: string): Promise<Course | null> {
  try {
    const response = await axios.get(`http://localhost:8000/api/courses/${id}`);
    return response.data.data;
  } catch (err) {
    console.error("Failed to fetch courses. Please try again later.");
    return null;
  }
}

interface KelasProps {
  params: {
    id: string;
  };
}

const Kelas: React.FC<KelasProps> = async ({ params }) => {
  const courseData = await fetchCourseData(params.id);

  if (!courseData) return <div>Failed to load course data.</div>;

  return (
    <main>
      <Navbar />
      <Hero course={courseData} />
      <About course={courseData} />
      <Benefits course={courseData} />
      <Instructor course={courseData} />
      <Certificate course={courseData} />
      <Footer />
    </main>
  );
};

export default Kelas;
