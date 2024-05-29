"use client";

import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaGoogle,
  FaRss,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">FE Open Courses</h3>
          <p className="mb-2">Informasi Lebih Lanjut:</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle size={24} />
            </a>
            <a href="https://rss.com" target="_blank" rel="noopener noreferrer">
              <FaRss size={24} />
            </a>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Kontak Kami:</h3>
          <ul className="space-y-2">
            <li>Jl. Raya Kaligawe Km.4 Semarang 50112</li>
            <li>(024) 6583584 ext 537</li>
            <li>081329262505</li>
            <li><a href="mailto:fe@unissula.ac.id">fe@unissula.ac.id</a></li>
          </ul>
        </div>
        <div className="text-sm text-center md:text-left">
          <p>&copy; {currentYear}</p>
          <p>Dibuat dengan penuh <span className="text-red-500">❤</span> oleh Azuralabs</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
