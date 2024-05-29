"use client";

import React, { useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { FaFilePdf, FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const InvoiceSummary = () => {
  const invoiceRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const input = invoiceRef.current;
    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div className="mt-10 md:mt-8" ref={invoiceRef}>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">INVOICE</h1>
          <p>#FEOC10421</p>
        </div>
        <div className="text-right">
          <p>Tanggal Invoice 14/06/2020</p>
          <p>Batas Akhir 21/06/2020</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-bold">Kepada</p>
        <p>Ahmad Fauza Aulia</p>
        <p>fauzaauliiia@gmail.com</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold">Ringkasan</h2>
        <div className="flex justify-between mt-4">
          <p>Manajemen Keuangan Pribadi</p>
          <p>Rp.235.000,00</p>
        </div>
        <div className="flex justify-between">
          <p>Manajemen Keuangan Pribadi</p>
          <p>Rp.235.000,00</p>
        </div>
        <div className="flex justify-between mt-4 border-t pt-2">
          <p>Subtotal</p>
          <p>Rp.470.000,00</p>
        </div>
        <div className="flex justify-between">
          <p>Diskon</p>
          <p>Rp.0,00</p>
        </div>
        <div className="flex justify-between">
          <p>Kode Unik</p>
          <p>266</p>
        </div>
        <div className="flex justify-between font-bold text-xl mt-4 border-t pt-2">
          <p>TOTAL</p>
          <p>RP.470.266,00</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button
          className="bg-blue-500 text-white flex items-center"
          onClick={handleDownloadPdf}
        >
          <FaFilePdf className="mr-2" /> PDF
        </Button>
        <Button
          className="bg-blue-500 text-white flex items-center"
          onClick={handlePrint}
        >
          <FaPrint className="mr-2" /> Print
        </Button>
      </div>
      <Button className="w-full mt-6 bg-blue-500 text-white">
        Konfirmasi Pembayaran
      </Button>
    </div>
  );
};

export default InvoiceSummary;
