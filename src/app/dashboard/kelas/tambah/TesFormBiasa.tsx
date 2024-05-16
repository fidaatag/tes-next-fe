"use client";

import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import CreatableSelect from "react-select/creatable";
import React from "react";

const TesFormBiasa = () => {


  const handleForm = (e: any) => {
    e.preventDefault();

    const resultForm = {
      nama_kelas : e.target.nama_kelas.value,
      tentang_kelas : e.target.tentang_kelas.value,
      lama_kelas : e.target.lama_kelas.value,
      upaya: e.target.upaya.value,
      harga: e.target.harga.value
    }

    alert(JSON.stringify(resultForm))
  }


  return (
    <>
      <div>
        <form id="tes" className="grid grid-cols-4 justify-between gap-10" onSubmit={handleForm}>
          {/* tambah kelas */}
          <div className="col-span-3 flex flex-col gap-4">
            <Input type="text" placeholder="Nama Kelas" name="nama_kelas"/>

            <div className="flex flex-col gap-1">
              <p>Tentang Kelas Ini</p>
              <Textarea
                placeholder="Tulis Tentang kelas ini"
                className="h-48"
                name="tentang_kelas"
              />
            </div>

            <div>
              <p>Apa yang dipelajari</p>
              {/* komponen sendiri */}
            </div>
          </div>

          {/* informasi kelas */}
          <div className="border">
            <h1 className="text-center text-md font-bold py-3 bg-gray-400">
              Informasi kelas
            </h1>

            <div>
              <div className="bg-gray-300">
                <h2 className="py-2 pl-2 ">Durasi Kelas</h2>
              </div>

              <div className="p-2">
                <p className="text-sm">Lama Kelas</p>
                <Input placeholder="6 Minggu" name="lama_kelas"/>
              </div>

              <div className="p-2">
                <p className="text-sm">Upaya</p>
                <Input placeholder="2-3 Jam per minggu" name="upaya"/>
              </div>
            </div>

            <div>
              <div className="bg-gray-300">
                <h2 className="py-2 pl-2 ">Harga Kelas</h2>
              </div>

              <div className="p-2">
                <p className="text-sm">Harga</p>
                <Input placeholder="200" name="harga"/>
              </div>
            </div>

            <div>
              <div className="bg-gray-300">
                <h2 className="py-2 pl-2 ">Bahasa Materi</h2>
              </div>

              <div className="p-2">
                <p className="text-sm">Materi</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Indonesia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Indonesia</SelectItem>
                    <SelectItem value="dark">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-2">
                <p className="text-sm">Transkip Video</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Indonesia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Indonesia</SelectItem>
                    <SelectItem value="dark">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <div className="bg-gray-300">
                <h2 className="py-2 pl-2 ">Bahasa Materi</h2>
              </div>

              <div className="p-2">
                <p className="text-sm">Materi</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Indonesia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Indonesia</SelectItem>
                    <SelectItem value="dark">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-2">
                <p className="text-sm">Transkip Video</p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Indonesia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Indonesia</SelectItem>
                    <SelectItem value="dark">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <div className="bg-gray-300">
                <h2 className="py-2 pl-2 ">Kategori</h2>
              </div>

              <div className="p-2">
                <Input placeholder="Cari Kategori" />
              </div>

              <div className="px-4">
                <div className="flex gap-2 items-center">
                  <Checkbox id="1" />
                  <p>Fiqih</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Checkbox id="2" />
                  <p>Akuntansi</p>
                </div>

                <div className="flex gap-2 items-center">
                  <Checkbox id="3" />
                  <p>Sejarah</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-300">
                <h2 className="py-2 pl-2 ">Tag</h2>
              </div>

              <div className="p-2">
                <CreatableSelect isMulti />
              </div>
            </div>
          </div>


        </form>


      </div>
    </>
  );
};

export default TesFormBiasa;
