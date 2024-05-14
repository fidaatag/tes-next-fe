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
  return (
    <div className="bg-blue-800 text-white p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        <div>
          <h3 className="text-xl font-bold mb-3">FE Open Courses</h3>
          <p>Informasi Lebih Lanjut:</p>
          <div className="flex space-x-3 mt-2">
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
            <FaGoogle />
            <FaRss />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">Kontak Kami:</h3>
          <ul>
            <li>Jl. Raya Kaligawe Km.4 Semarang 50112</li>
            <li>(024) 6583584 ext 537</li>
            <li>081329262505</li>
            <li>fe@unissula.ac.id</li>
          </ul>
        </div>
        <div className="text-sm">
          <p>copyright ©2020</p>
          <p>Dibuat dengan penuh ❤ oleh Azuralabs</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
