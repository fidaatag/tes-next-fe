import React from "react";
import InvoiceSummary from "./InvoiceSummary";
import PaymentMethods from "./PaymentMethods";
import Navbar from "@/src/components/Navbar";

export default function PaymentPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center p-6 md:p-16 space-y-6">
        <InvoiceSummary />
        <PaymentMethods />
      </div>
    </div>
  );
}
