"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";

function Yes() {
  // Renamed to avoid confusion with the Button import
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // Adjust the route as needed
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}

export default Yes;
