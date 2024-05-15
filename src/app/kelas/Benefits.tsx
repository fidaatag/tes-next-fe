import React from "react";

function Benefits() {
  return (
    <div className="p-6 md:p-16 bg-gray-100">
      <h2 className="text-3xl md:text-4xl text-blue-600 font-bold mb-4">
        Apa yang akan Kamu Pelajari:
      </h2>
      <ul className="list-none space-y-2 text-gray-700">
        <li className="flex items-start">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-4 mt-2"></span>
          Duis ultricies porttitor commodo. Mauris nec rutrum turpis.
        </li>
        <li className="flex items-start">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-4 mt-2"></span>
          Suspendisse iaculis, dolor ac tempus iaculis, erat mauris tempor mi, vel
          ultrices mi dui sed lorem.
        </li>
        <li className="flex items-start">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-4 mt-2"></span>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </li>
      </ul>
    </div>
  );
}

export default Benefits;
