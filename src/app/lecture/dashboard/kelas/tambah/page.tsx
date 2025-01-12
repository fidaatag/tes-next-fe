"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import FormKelas from "@/src/components/form/FormKelas";
import { APIBuatKelas_caseCreateDraft } from "@/src/service/ApiKelas";
import { FileCheck, Link2Off, Upload } from "lucide-react";
import { setTimeout } from "timers";
import { useRouter } from "next/navigation";
import CustomAlertDialog from "@/src/components/CustomAlertDialog";
import { useDialogHandlers } from "@/src/hooks/UseProgressDialog";
import { useBabUploader } from "@/src/hooks/UseBabUploader";
import { ListKelas, Section } from "@/src/types/index";
import { useApiErrorHandler } from "@/src/hooks/UseApiErrorHandler";
import { UseConvertFormDta } from "@/src/hooks/UseConvertFormData";

const TambahPage = () => {
  const [typeButtonForm, setTypeButtonForm] = useState("");
  const [responForm, setResponForm] = useState<ListKelas>();
  const [isAddForm, setIsAddForm] = useState(false);
  const [dataAllBab, setDataAllBab] = useState<Section[]>();
  const router = useRouter();
  const {
    munculDialog,
    pesanDialog,
    progressTimer,
    setProgressTimer,
    showDialog,
  } = useDialogHandlers();
  const { uploadBab } = useBabUploader();
  const { handleApiError } = useApiErrorHandler();

  const handleBtnSubmit = async (e: string, event: React.FormEvent) => {
    event.preventDefault();
    setTypeButtonForm(e);

    setProgressTimer(0);
    showDialog(<Upload />, "Sedang mengupload data...", true);

    const okData = UseConvertFormDta(responForm, e, dataAllBab)

    const respon = await APIBuatKelas_caseCreateDraft(okData);

    if (respon?.success) {
      showDialog(
        <FileCheck />,
        `Data kelas ${responForm?.name} berhasil diupload.`
      ); 
      
      setTimeout(() => {
        router.push("/lecture/dashboard/kelas");
      }, 3000);
    }
    
    if (
      respon?.status === "Token is Expired" ||
      respon?.status === "Token is Invalid"
    ) {
      showDialog(<Link2Off />, "Anda sudah logout, silahkan Login kembali");
      return;
    }

    if (respon?.message === "API Tidak Aktif") {
      showDialog(
        <Link2Off />,
        "Aplikasi sedang ada perbaikan, silahkan hubungi Admin"
      );
      return;
    }
  };

  // jika saat user tambah dan ingin nambah materi, data akan diupload dan diarahkan ke page edit
  useEffect(() => {
    const handleTambahKelas = async () => {
      if (isAddForm) {
        const okData = UseConvertFormDta(responForm, "draft", dataAllBab)
        const respon = await APIBuatKelas_caseCreateDraft(okData);

        if (respon?.success) {
          showDialog(
            <FileCheck />,
            `Jika anda ingin menambah materi bab, anda akan diarahkan ke halaman edit data kelas ${responForm?.name} Anda tersimpan. Silahkan pilih bab yang akan ditambah materi`
          );
          setTimeout(() => {
            router.push(`/lecture/dashboard/kelas/${respon?.data}/edit`);
          }, 4000);
        }

        handleApiError(respon);
      }
    };

    handleTambahKelas();
  }, [isAddForm]);

  console.log(responForm)

  return (
    <>
      <CustomAlertDialog
        open={munculDialog}
        pesanDialog={pesanDialog}
        progressTimer={progressTimer}
      />

      <div className="p-3">
        <div className="flex justify-between mb-10 items-center">
          <h1 className="text-xl font-bold">Tambah Kelas</h1>

          <div className="flex gap-2">
            <Button
              form={typeButtonForm}
              onClick={(event) => handleBtnSubmit("draft", event)}
              variant="outline"
            >
              Simpan Draf
            </Button>
            <Button
              form={typeButtonForm}
              onClick={(event) => handleBtnSubmit("published-admin", event)}
              variant="secondary"
            >
              Ajukan Ke Admin
            </Button>
          </div>
        </div>

        <div className="w-full">
          <FormKelas
            typeBtn={typeButtonForm}
            respon={(e: any) => setResponForm(e)}
            dataBab={(e: any) => setDataAllBab(e)}
            addForm={(e: any) => setIsAddForm(e)} // mengambil nilai boolean
          />
        </div>
      </div>
    </>
  );
};

export default TambahPage;
