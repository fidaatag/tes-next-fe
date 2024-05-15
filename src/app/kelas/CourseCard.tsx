import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

function CourseCard() {
  return (
    <Card className="p-4 border shadow-sm rounded-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Course Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Lamanya :</span>
          <span>4 Minggu</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Upaya :</span>
          <span>2-3 jam per minggu</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Harga :</span>
          <span>GRATIS <br />Tambah Sertifikat Terverifikasi hanya Rp.235.000</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Bahasa :</span>
          <span>Indonesia</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Transkip Video :</span>
          <span>Indonesia</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
