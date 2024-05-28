"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import dynamic from "next/dynamic";
import { APIBuatMateri } from "../../../../../../service/ApiMateri";

type PageTambahMateriProps = {
  params: { bab: string };
};

const TextEditor = dynamic(() => import("./TextEditor"), { ssr: false });

const pageTambahMateri = ({ params }: PageTambahMateriProps) => {
  const extractID = (text: any) => parseInt((text.match(/\d+/g) || []).join(""));
  const id = extractID(params.bab);

  const [dataMateri, setDataMateri] = useState({
    module_title: "",
    description: "",
  });

  const handleSubmitMateri = async () => {
    const respon = await APIBuatMateri(dataMateri, id);
    console.log(respon);
  };

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
            />
            <TextEditor
              valueText={(e: any) =>
                setDataMateri({ ...dataMateri, description: e })
              }
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

export default pageTambahMateri;
