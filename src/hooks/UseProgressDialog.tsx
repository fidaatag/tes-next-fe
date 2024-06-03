import { FileWarning } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface DialogState {
  icon: JSX.Element;
  message: string;
  displayProgress: boolean;
}

export const useDialogHandlers = () => {
  const [munculDialog, setMunculDialog] = useState(false);
  const [pesanDialog, setPesanDialog] = useState<DialogState>({
    icon: <FileWarning />,
    message: "",
    displayProgress: false,
  });
  const [progressTimer, setProgressTimer] = useState<number>(0);

  const showDialog = (
    icon: JSX.Element,
    message: string,
    displayProgress: boolean = false
  ) => {
    setMunculDialog(true);
    setPesanDialog({ icon, message, displayProgress });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (munculDialog) {
      interval = setInterval(() => {
        setProgressTimer((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setMunculDialog(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      timer = setTimeout(() => {
        clearInterval(interval);
        setMunculDialog(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [munculDialog]);

  return {
    munculDialog,
    pesanDialog,
    progressTimer,
    setProgressTimer,
    showDialog,
  };
};
