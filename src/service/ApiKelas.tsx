"use server"

import axios from "axios";

const token  = process.env.TOKEN

export const APIBuatKelas = async (formData: any, status: string) : Promise<any> => { 
  const dataCreateKelas = {
    name: formData?.name,
    description: formData?.description,
    about: formData?.description,
    duration: formData?.duration,
    effort_taken: formData?.effort_taken,
    status: status,
    price: formData?.price,
    language: formData?.language,
    image_cover: "default_image_cover",
    created_by: 40,
    updated_by: 9,
    course_category_id: 1,
    is_superior: true
  };

  try {
    const response = await axios.post("http://localhost:8000/api/admin/courses", dataCreateKelas, 
      {
        headers: {"Authorization" : `Bearer ${token}`}
      }
    );

    return response.data;

  } catch (error) {
    throw error;
  }
};

export const APIEditKelas = async(formData: any, status: string, id: string) => {
  const dataUpdateKelas = {
    name: formData?.name,
    description: formData?.description,
    about: formData?.description,
    duration: formData?.duration,
    effort_taken: formData?.effort_taken,
    status: status,
    price: formData?.price,
    language: formData?.language,
    image_cover: "default_image_cover",
    created_by: 40,
    updated_by: 9,
    course_category_id: 1,
    is_superior: true
  };

  try {
    const response = await axios.put(`http://localhost:8000/api/admin/courses/${id}`, dataUpdateKelas,
      {
        headers: {"Authorization" : `Bearer ${token}`}
      }
    );

    return response.data;

  } catch (error) {
    throw error;
  }
};

export const APIDetailKelas = async(id: any) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/admin/courses/${id}`, 
      {
        headers: {"Authorization" : `Bearer ${token}`}
      }
    );

    return response.data.data;

  } catch (error) {
    throw error
  }
};

export const APIHapusKelas = async(id: any) => {
  try {
    const response = await axios.delete(`http://localhost:8000/api/admin/courses/${id}`, 
      {
        headers: {"Authorization" : `Bearer ${token}`}
      }
    );

    return response.data.data;

  } catch (error) {
    throw error
  }
};
