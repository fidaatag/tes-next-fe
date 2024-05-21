"use client"

import React, { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import FormKelas from "../../../../components/FormKelas";
import axios from "axios";

const TambahPage = () => {

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzE2MjgxOTAzLCJleHAiOjE3MTYyODU1MDMsIm5iZiI6MTcxNjI4MTkwMywianRpIjoiOEFzSEtRdGpjU0w5N1NFYSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwidXNlciI6eyJpZCI6MSwiZnVsbF9uYW1lIjoiYWRtaW4iLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBvcGVuY291cnNlLmNvbSIsInBob25lX251bWJlciI6IjA4MTIzNDU2Nzg5IiwiYmlvIjoiYWRtaW4iLCJwcm9maWxlX3BpY3R1cmUiOiIiLCJlbWFpbF92ZXJpZmllZF9hdCI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMjQtMDUtMTZUMDQ6NTc6MDMuMDAwMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDI0LTA1LTE2VDA0OjU3OjAzLjAwMDAwMFoiLCJjcmVhdGVkX2J5IjpudWxsLCJ1cGRhdGVkX2J5IjpudWxsLCJyb2xlIjoiYWRtaW4iLCJkZWxldGVkX2F0IjpudWxsfX0.TC9LUyoBFjuKOdWDd0X7JQDwb7s5ONqrneSWFWoTC6o"

  const [typeButtonForm, setTypeButtonForm] = useState("")

  const [dataFormKelas, setDataFormKelas] = useState({
    nama_kelas: '',
    tentang_kelas: '',
    lama_kelas: '',
    upaya: '',
    harga_kelas: '',
    bahasa_kelas: '',
    transkrip_video: ''
  });

  // mendapatkan value dari komponen form
  const handleAllValueForm = (e :any) => { setDataFormKelas(e) }

  // memastikan data form terisi
  const isDataFormKelas_Filled = () => {
    const allPropsEmpty = Object.values(dataFormKelas).every(value => value === '');
    return !allPropsEmpty;
  };

  
  // create course
  useEffect(() => {
    if (isDataFormKelas_Filled()) {
      axios.post("http://localhost:8000/api/admin/courses", {
        name: dataFormKelas.nama_kelas,
        description: dataFormKelas.tentang_kelas,
        about: dataFormKelas.tentang_kelas,
        duration: dataFormKelas.lama_kelas,
        effort_taken: dataFormKelas.upaya,
        status: "drafted",
        price: dataFormKelas.harga_kelas,
        language: dataFormKelas.bahasa_kelas,
        image_cover: "default_image_cover",
        created_by: 40,
        updated_by: 9, 
        course_category_id: 1,
        is_superior: true
      }, {
        headers: {"Authorization" : `Bearer ${token}`}
      })
      .then(response => {
        console.log("Data posted successfully:", response);
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });
    }

  }, [isDataFormKelas_Filled(), dataFormKelas])
  

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
          
          <FormKelas typeBtn={typeButtonForm} AllValue={handleAllValueForm}/>

        </div>
      </div>
    </>
  );
};

export default TambahPage;
