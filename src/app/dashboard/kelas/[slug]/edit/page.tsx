"use client"

import React, { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import FormKelas from "@/src/components/FormKelas";
import { ListKelas } from "@/src/types";
import { APIDetailKelas, APIEditKelas } from "@/src/service/ApiKelas";
import { APIBuatBab } from "@/src/service/ApiBab";

type PageEditKelasProps = {
  params: { slug: string };
};

const PageEdit = ({ params }: PageEditKelasProps) => {
  const id = params.slug;
  const [typeButtonForm, setTypeButtonForm] = useState("");
  const [data_OldForm, set_DataOldForm] = useState<ListKelas>();
  const [responForm, setResponForm] = useState();
  const [dataAllBab, setDataAllBab] = useState<[]>(); // ambil data bab yang tersedia selama pengisian form

  // ambil data lama buat nampilin di versi edit
  const dataLamaKelas = async () => {
    const respon = await APIDetailKelas(id);
    set_DataOldForm(respon);
  };

  // trigger ambil data lama saat pertama kali reload / id berubah
  useEffect(() => {
    dataLamaKelas();
  }, [id]);

  const handleBtnSubmit = async (e: string) => {
    setTypeButtonForm(e);

    if (e === "drafted") {
      const respon = await APIEditKelas(responForm, e, id);

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
      const respon = await APIEditKelas(responForm, e, id);
      alert(JSON.stringify(respon));
    }

    if (e === "hapus") {
      const respon = await APIEditKelas(responForm, e, id);
      alert(JSON.stringify(respon));
    }
  };

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between mb-10 items-center">
          <h1 className="text-xl font-bold">Edit Kelas</h1>

          <div className="flex gap-2">
            <Button onClick={() => handleBtnSubmit("hapus")} variant="link">
              Hapus Kelas
            </Button>
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
            oldData={data_OldForm}
            respon={(e: any) => setResponForm(e)}
            dataBab={(e: any) => setDataAllBab(e)}
          />
        </div>
      </div>
    </>
  );
};

export default PageEdit;
