"use client"

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import FormKelas from "@/src/components/FormKelas";
import { APIBuatKelas } from "@/src/service/ApiKelas";
import { APIBuatBab } from "@/src/service/ApiBab";

const TambahPage = () => {
  const [typeButtonForm, setTypeButtonForm] = useState("");
  const [responForm, setResponForm] = useState();
  const [dataAllBab, setDataAllBab] = useState<[]>();


  const handleBtnSubmit = async (e: string, event: React.FormEvent) => {
    event.preventDefault() // cegah page biar ga reload langsung, tunggu sampe bab selesai
    setTypeButtonForm(e);

    if (e === "drafted") {
    const respon = await APIBuatKelas(responForm, e);

      if (respon?.course?.id) {
        const course_id = respon.course.id;

        // hit api buat bab, jika ada bab yang terbaru
        dataAllBab?.map((itemBab: any) => {
          if (!itemBab.id) {
            return APIBuatBab(itemBab, course_id);
          }
        });
      }
    }

    if (e === "published") {
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
              onClick={(event) => handleBtnSubmit("drafted", event)}
              variant="outline"
            >
              Simpan Draf
            </Button>
            <Button
              form={typeButtonForm}
              onClick={(event) => handleBtnSubmit("published", event)}
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
            dataBab={(e: any) => setDataAllBab(e)}
          />
        </div>
      </div>
    </>
  );
};

export default TambahPage;
