"use server";

import axios from "axios";

const token = process.env.TOKEN;

export const APIBuatMateri = async (
  formData: any,
  sections_id: any
): Promise<any> => {
  const dataCreateMateri = {
    section_id: sections_id,
    module_title: formData?.module_title,
    description: formData?.description || "Anda belum memasukan data",
    status: "finished",
    created_by: 23,
    updated_by: 43,
  };

  try {
    const response = await axios.post(
      "http://localhost:8000/api/modules",
      dataCreateMateri,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};

export const APIEditMateri = async (
  formData: any,
  module_id: any
): Promise<any> => {
  const dataUpdateMateri = {
    module_title: formData?.module_title,
    description: formData?.description,
    status: "finished",
    created_by: 23,
    updated_by: 43,
  };

  try {
    const response = await axios.put(
      `http://localhost:8000/api/modules/${module_id}`,
      dataUpdateMateri,
      {
        headers: { "Authorization": `Bearer ${token}` }
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const APIDetailMateri = async (module_id: any): Promise<any> => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/modules/${module_id}`,
      {
        headers: { "Authorization": `Bearer ${token}` }
      }
    );

    //
    return response.data.module;
  } catch (error) {
    throw error;
  }
};
