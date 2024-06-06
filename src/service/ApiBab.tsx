"use server";

import axios from "axios";

const token = process.env.TOKEN;
// {{host}}:{{port}}/api/lecturer/courses/{{courseId}}/sections
export const APIBuatBab = async (
  formData: any,
  courseId: any
): Promise<any> => {
  const dataCreateBab = {
    section_title: formData.section_title,
  };

  try {
    const response = await axios.post(
      `http://localhost:8000/api/lecturer/courses/${courseId}/sections`,
      dataCreateBab,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
