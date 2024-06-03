import React from "react";
import Cart from "./cart";
import LoginCard from "./loginFirst"; // Adjust the import path as needed
import Navbar from "@/src/components/Navbar";
import Bank from "./bank";

export default function Payment() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8 mt-14">
        <div className="w-full lg:w-1/2">
          <Cart />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute left-0 top-0 h-full border-l border-gray-300"></div>
          <div className="w-full max-w-md ml-8">
           
            {/* <LoginCard /> */}
            <Bank />
          </div>
        </div>
      </div>
    </div>
  );
}
