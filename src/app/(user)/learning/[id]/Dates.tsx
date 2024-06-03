import React from "react";

const importantDates = [
  {
    date: "28 Juni 2020",
    description: "Batas Akhir Ujian Akhir Periode 1",
  },
  {
    date: "28 Juni 2020",
    description: "Batas Akhir Ujian Akhir Periode 1",
  },
];

const Dates = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Tanggal Penting
      </h2>
      <div className="border-t border-blue-600 mb-4"></div>
      {importantDates.map((dateItem, index) => (
        <div key={index} className="flex items-start mb-4">
          <div className="w-2 h-2 bg-blue-600 rounded-full mt-1 mr-2"></div>
          <div>
            <p className="font-semibold text-black">{dateItem.date}</p>
            <p className="text-gray-700">{dateItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dates;
