"use client"

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import FormKelas from "../../../../components/FormKelas";
import TesFormHooks from "./TesFormHooks";
import { CheckboxReactHookFormMultiple } from "./Tes";

const TambahPage = () => {

  const [typeButtonForm, setTypeButtonForm] = useState("")

  console.log(typeButtonForm);
  

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between mb-10 items-center">
          <h1 className="text-xl font-bold">Tambah Kelas</h1>

          <div className="flex gap-2">
            <Button form={typeButtonForm} onClick={() => setTypeButtonForm("hapus")} variant="link">Hapus Kelas</Button>
            <Button form={typeButtonForm} onClick={() => setTypeButtonForm("draf")} variant="outline">Simpan Draf</Button>
            <Button form={typeButtonForm} onClick={() => setTypeButtonForm("publish")} variant="secondary">Publikasikan</Button>
          </div>
        </div>

        <div className="w-full">
          
          <FormKelas typeBtn={typeButtonForm} />

          {/* <TesFormHooks tesBtn={typeButtonForm} /> */}

          {/* <CheckboxReactHookFormMultiple typeBtn={typeButtonForm} /> */}

        </div>
      </div>
    </>
  );
};

export default TambahPage;
