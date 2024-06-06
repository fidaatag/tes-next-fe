"use server";

import axios from "axios";

const token = process.env.TOKEN;

export const APIBuatMateri = async (
  formData: any,
  courseId: any, 
  sectionId: any, 
): Promise<any> => {
  const dataCreateMateri = {
    module_title: formData?.module_title,
    description: formData?.description || "Anda belum memasukan data",
  };
  try {
    const response = await axios.post(
      `http://localhost:8000/api/lecturer/courses/${courseId}/sections/${sectionId}/modules`,
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
  courseId: any, 
  sectionId: any, 
  moduleId: any
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
      `http://localhost:8000/api/lecturer/courses/${courseId}/sections/${sectionId}/modules/${moduleId}/?_method=PUT`,
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

export const APIDetailMateri = async (courseId: any, sectionId: any, moduleId: any): Promise<any> => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/lecturer/courses/${courseId}/sections/${sectionId}/modules/${moduleId}`,
      {
        headers: { "Authorization": `Bearer ${token}` }
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
