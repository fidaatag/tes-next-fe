"use client";

import { Button } from "@/src/components/ui/button";
import ItemsKelas from "./ItemsKelas";
import Link from "next/link";
import { APISemuaKelas } from "@/src/service/ApiKelas";
import CustomAlertDialog from "@/src/components/CustomAlertDialog";
import { useDialogHandlers } from "@/src/hooks/UseProgressDialog";
import { Link2Off } from "lucide-react";
import { useEffect, useState } from "react";
import { ListKelas } from "@/src/types/index";
import { useRouter } from "next/navigation";

const PageKelas = () => {
  const [dataListKelas, setDataListKelas] = useState<ListKelas>();

  const dataKelas = async () => {
    const respon = await APISemuaKelas();
    setDataListKelas(respon);
  };

  useEffect(() => {
    dataKelas();
  }, []);

  const {
    munculDialog,
    pesanDialog,
    progressTimer,
    showDialog,
  } = useDialogHandlers();
  const router = useRouter()

  useEffect(() => {
    if (!dataListKelas) return;

    if (
      dataListKelas?.status === "Token is Expired" ||
      dataListKelas?.status === "Token is Invalid"
    ) {
      showDialog(<Link2Off />, "Anda sudah logout, silahkan Login kembali");
      // buka komentar ini jika fitur login sudah ada
      // setTimeout(() => {
      //   router.push(`/`)
      // }, 4000);
    }

    if (dataListKelas?.message === "API Tidak Aktif") {
      showDialog(
        <Link2Off />,
        "Aplikasi sedang ada perbaikan, silahkan hubungi Admin"
      );
      setTimeout(() => {
        window.location.reload()
      }, 4000);
    }
  }, [dataListKelas]);

  return (
    <>
      <CustomAlertDialog
        open={munculDialog}
        pesanDialog={pesanDialog}
        progressTimer={progressTimer}
      />

      <div className="p-4 flex flex-col gap-9">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-extrabold">Kelas</h1>
          <Link href="kelas/tambah">
            <Button className="bg-blue-400" variant="outline">
              Tambah Kelas
            </Button>
          </Link>
        </div>

        <ItemsKelas kelas={dataListKelas?.data} />
      </div>
    </>
  );
};

export default PageKelas;
