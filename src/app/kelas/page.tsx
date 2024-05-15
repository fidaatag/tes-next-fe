import React from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";
import Instructor from "./Instructor";
import Certificate from "./Certificate";
import Footer from "@/src/components/layout/footer";
import Navbar from "@/src/components/Navbar";

export default function Kelas() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Instructor />
      <Certificate />
      <Footer />
    </main>
  );
}
