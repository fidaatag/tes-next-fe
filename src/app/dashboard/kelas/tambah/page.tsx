"use client"

import React, { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import FormKelas from "@/src/components/FormKelas";
import { APIBuatKelas } from "@/src/service/ApiKelas";

const TambahPage = () => {
  const [typeButtonForm, setTypeButtonForm] = useState("");
  const [responForm, setResponForm] = useState();

  const handleBtnSubmit = async (e: string) => {
    setTypeButtonForm(e);

    if (typeButtonForm === "drafted") {
      const respon = await APIBuatKelas(responForm, typeButtonForm);
      alert(JSON.stringify(respon));
    }

    if (typeButtonForm === "published") {
      const respon = await APIBuatKelas(responForm, typeButtonForm);
      alert(JSON.stringify(respon));
    }
  };

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between mb-10 items-center">
          <h1 className="text-xl font-bold">Tambah Kelas</h1>

          <div className="flex gap-2">
            <Button
              form={typeButtonForm}
              onClick={() => handleBtnSubmit("drafted")}
              variant="outline"
            >
              Simpan Draf
            </Button>
            <Button
              form={typeButtonForm}
              onClick={() => handleBtnSubmit("published")}
              variant="secondary"
            >
              Publikasikan
            </Button>
          </div>
        </div>

        <div className="w-full">
          <FormKelas
            typeBtn={typeButtonForm}
            respon={(e: any) => setResponForm(e)}
          />
        </div>
      </div>
    </>
  );
};

export default TambahPage;
