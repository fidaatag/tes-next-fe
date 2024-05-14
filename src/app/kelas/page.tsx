import React from "react";
import Yes from "./yes";  // Rename the import to 'Yes' to follow React naming conventions

export default function Kelas() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>yes</h1>
      <Yes />
    </main>
  );
}
