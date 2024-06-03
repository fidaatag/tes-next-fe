"use client";

import { useState } from "react";
import { APIBuatBab } from "@/src/service/ApiBab";
import { Section } from "@/src/types";

export const useBabUploader = () => {
  const [isUploadingBab, setIsUploadingBab] = useState<boolean>(false);

  const uploadBab = async (dataAllBab: Section[] = [], course_id: number) => {
    setIsUploadingBab(true);
    try {
      const babTanpaId = dataAllBab?.filter((itemBab) => !itemBab?.id);

      const kirimBab = babTanpaId?.map((itemBab) =>
        APIBuatBab(itemBab, course_id)
      );

      const responBab = await Promise.all(kirimBab);

      const isSuccessAll = responBab.every((res) => res.succes);

      return isSuccessAll;
    } catch (error) {
      console.error("Error uploading Bab:", error);
      return false;
    } finally {
      setIsUploadingBab(false);
    }
  };

  return { uploadBab, isUploadingBab };
};
