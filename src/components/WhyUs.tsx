import React from "react";
import { Card } from "./ui/card";

function WhyUs() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 justify-center">
      <div className="p-4 md:px-40">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-blue-400">
          KENAPA HARUS FE OPEN COURSES?
        </h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8">
        <Card className="bg-blue-500 text-white p-4">Aliqua Dolor</Card>
        <Card className="bg-blue-500 text-white p-4">Aliqua Dolor</Card>
        <Card className="bg-blue-500 text-white p-4">Aliqua Dolor</Card>
        <Card className="bg-blue-500 text-white p-4">Aliqua Dolor</Card>
        <Card className="bg-blue-500 text-white p-4">Aliqua Dolor</Card>
        <Card className="bg-blue-500 text-white p-4">Aliqua Dolor</Card>
      </div>
    </div>
  );
}

export default WhyUs;
