// useApiErrorHandler.ts
import { Link2Off } from "lucide-react";
import { useDialogHandlers } from "@/src/hooks/UseProgressDialog";

interface ApiResponse {
  status?: string;
  message?: string;
}

export const useApiErrorHandler = () => {
  const { showDialog } = useDialogHandlers();

  const handleApiError = (respon: ApiResponse) => {
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

  return { handleApiError };
};
