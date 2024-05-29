import React from 'react';

function Subscribe() {
  return (
    <div className="bg-blue-500 p-6 md:p-8 rounded-md text-center max-w-4xl mx-auto my-4">
      <p className="text-white mb-4 font-semibold">
        Tulis Email Anda untuk Mendapat Informasi Kelas Terbaru dari FE Open Courses!
      </p>
      <form className="flex justify-center items-center">
        <input 
          type="email" 
          placeholder="Tulis email Anda" 
          className="p-2 rounded-l-md flex-1 min-w-0"
          aria-label="Your email"
        />
        <button 
          type="submit" 
          className="bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md hover:bg-gray-100"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
