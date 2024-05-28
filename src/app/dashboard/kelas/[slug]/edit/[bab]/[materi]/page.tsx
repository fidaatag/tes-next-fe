"use client"

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { APIDetailMateri, APIEditMateri } from "@/src/service/ApiMateri";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

type PageEditMateriProps = {
  params: { materi: string }
}

const TextEditor = dynamic(() => import("./TextEditor"), { ssr: false });

const pageEditMateri = ({params} : PageEditMateriProps) => {
  const module_id = params.materi;

  const dataLamaMateri = async () => {
    const respon = await APIDetailMateri(module_id);
    console.log(respon)
    setDataMateri({
      module_title: respon.module_title,
      description: respon.description
    });
  }

  useEffect(() => {
    dataLamaMateri();
  }, [module_id]);

  const [dataMateri, setDataMateri] = useState({
    module_title: "",
    description: "",
  });

  const handleSubmitMateri = async () => {
    const respon = await APIEditMateri(dataMateri, module_id);
    console.log(respon);
  };

  console.log(dataMateri)

  return (
    <>
      <div>
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Tambah Kelas</h1>

          <Button variant="secondary" onClick={() => handleSubmitMateri()}>
            Simpan
          </Button>
        </div>

        <hr />

        <div className="w-full grid grid-cols-4 justify-between">
          {/* // ! --- sisi kanan ----  */}
          <div className="col-span-3 flex flex-col gap-4 px-4 pt-4">
            <Input
              placeholder="Judul Materi"
              className="w-full mb-3"
              onChange={(e) =>
                setDataMateri({ ...dataMateri, module_title: e.target.value })
              }
              value={dataMateri?.module_title}
            />
            <TextEditor
              valueText={(e: any) =>
                setDataMateri({ ...dataMateri, description: e })
              }
              value={dataMateri?.description}
            />
          </div>

          {/* // ! --- sisi kiri ----  */}
          <div className="border">
            <h1 className="text-center text-md font-bold py-3 bg-gray-400">
              Informasi kelas
            </h1>

            <div>
              <div className="bg-gray-300">
                <h2 className="py-2 pl-2 ">Durasi Kelas</h2>
              </div>
              <div className="p-2">
                <div className="w-full h-40 bg-slate-200 mb-3"></div>
                <Input disabled value="https://youtube.lalala.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pageEditMateri;
