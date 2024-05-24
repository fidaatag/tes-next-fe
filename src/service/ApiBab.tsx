"use server"

import axios from "axios";

const token  = process.env.TOKEN

export const APIBuatBab = async (formData: any, course_id: any): Promise<any> => {
  const dataCreateBab = {
    course_id: course_id,
    section_title: formData.section_title,
    created_by: 40,
    updated_by: 9,
  };

  try {
    const response = await axios.post("http://localhost:8000/api/admin/sections", dataCreateBab,
      {
        headers: { "Authorization": `Bearer ${token}` }
      }
    );

    return response.data;

  } catch (error) {
    throw error;
  }
};