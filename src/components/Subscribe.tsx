import React from 'react';

function Subscribe() {
  return (
    <div className="bg-blue-500 p-6 md:p-8 rounded-md text-center max-w-4xl mx-auto my-4">
      <p className="text-white mb-4">
        Tulis Email Anda untuk Mendapat Informasi Kelas Terbaru dari FE Open Courses!
      </p>
      <form className="flex justify-center items-center gap-2">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-2 rounded-md flex-1 max-w-xs" // Ensures input does not become too wide
          aria-label="Your email"
        />
        <button 
          type="submit" 
          className="bg-white text-blue-500 font-bold py-2 px-4 rounded-md hover:bg-gray-100"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
