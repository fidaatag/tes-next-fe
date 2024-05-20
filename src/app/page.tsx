import { Card } from "@/src/components/ui/card";
import Image from "next/image";
import Hero from "@/src/components/hero";
import WhyUs from "@/src/components/WhyUs";
import AllClass from "@/src/components/AllClass";
import Partner from "@/src/components/Partner";
import Subscribe from "@/src/components/Subscribe";
import Footer from "@/src/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyUs />
      <AllClass />
      <Partner />
      <Subscribe />
      <Footer />
    </main>
  );
}
