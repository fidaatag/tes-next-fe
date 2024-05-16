"use client"

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import TesFormBiasa from "./TesFormBiasa";
import TesFormHooks from "./TesFormHooks";

const TesPage = () => {

  const [typeButtonForm, setTypeButtonForm] = useState("")


  return (
    <>
      <div className="p-3">
        <div className="flex justify-between mb-10 items-center">
          <h1 className="text-xl font-bold">Tambah Kelas</h1>


          {/* skema : 
          - klik button -> kirim perintah ke form
          - identifikasi form dengan id untuk menyamakan dgn perintah button yg dikirim
          - submit / fetch ke api berdarsarkan perintah button */}

          <div className="flex gap-2">
            <Button variant="link">Hapus Kelas</Button>
            <Button form="edit" onClick={() => setTypeButtonForm("edit")} variant="outline">Edit</Button>
            <Button form='tes' onClick={() => setTypeButtonForm("tes")} variant="secondary">Tes</Button>
          </div>
        </div>

        <div className="w-full">
          {/* <TesFormBiasa /> */}

          <TesFormHooks tesBtn={typeButtonForm}/>
        </div>
      </div>
    </>
  );
};

export default TesPage;
