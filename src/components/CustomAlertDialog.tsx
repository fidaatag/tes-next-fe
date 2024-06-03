import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/src/components/ui/alert-dialog";
import { Progress } from "@/src/components/ui/progress";

interface CustomAlertDialogProps {
  open: boolean;
  pesanDialog: {
    icon: JSX.Element;
    message: string;
    displayProgress: boolean;
  };
  progressTimer: number;
}

const CustomAlertDialog: React.FC<CustomAlertDialogProps> = ({
  open,
  pesanDialog,
  progressTimer,
}) => (
  <AlertDialog open={open}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogDescription className="flex flex-col justify-center items-center gap-2">
          <p>{pesanDialog.icon}</p>
          <p>{pesanDialog.message}</p>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        {pesanDialog.displayProgress ? (
          <Progress value={progressTimer} className="" />
        ) : (
          ""
        )}
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default CustomAlertDialog;
