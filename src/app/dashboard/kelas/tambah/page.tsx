"use client"

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import FormKelas from "../../../../components/FormKelas";

const TambahPage = () => {

  const [typeButtonForm, setTypeButtonForm] = useState("")


  return (
    <>
      <div className="p-3">
        <div className="flex justify-between mb-10 items-center">
          <h1 className="text-xl font-bold">Tambah Kelas</h1>

          <div className="flex gap-2">
            <Button variant="link">Hapus Kelas</Button>
            <Button form={typeButtonForm} onClick={() => setTypeButtonForm("edit")} variant="outline">Simpan Draf</Button>
            <Button form={typeButtonForm} onClick={() => setTypeButtonForm("tes")} variant="secondary">Publikasikan</Button>
          </div>
        </div>

        <div className="w-full">
          
          <FormKelas />

        </div>
      </div>
    </>
  );
};

export default TambahPage;
