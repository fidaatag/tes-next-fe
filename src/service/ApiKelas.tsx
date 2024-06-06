"use"; // kalo diganti client --- jadi FormData().append tidak berfungsi

import axios from "axios";
import { writeFile } from "fs/promises";
import { join } from "path";

const token = process.env.TOKEN;


export const APIBuatKelas = async (
  formData: any,
  status: string
): Promise<any> => {

  const dataCreateKelas = new FormData();

  console.log(formData) // sampe sini bisa masuk, mau pake use server / use client ttp bisa

  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      const value = formData[key]

        // kalo objectnya string / number / file
      if (typeof value === "string" || value instanceof File) {
        dataCreateKelas.append(key, value);

        // kalo objectnya array
      } else if (Array.isArray(value))
        value.forEach((item) => {
          dataCreateKelas.append(`${key}[]`, item);
        });
    }
  }

  console.log(dataCreateKelas)

  try {
    const response = await axios.post(
      "http://localhost:8000/api/admin/courses",
      dataCreateKelas,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
      },
      }
    );
    console.log(response)
    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }

  // const blob = new Blob([formData?.image_cover])
  // console.log(blob)
  // dataCreateKelas.append("image", blob)

  // const bytes = await formData?.image_cover.arrayBuffer();
  // const buffer = Buffer.from(bytes);

  // const path = join(process.cwd(), formData?.image_cover.name);
  // await writeFile(path, buffer);

  // console.log(`open ${path} to see the uploaded file`);



  console.log(dataCreateKelas.get('image_cover')) // disini ga mau masuk, mesti pake use server. --> serve tdk terima File
};

export const APIEditKelas = async (
  formData: any,
  status: string,
  id: string
) => {
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
    course_category_id: formData?.course_category_id,
    is_superior: true,
  };

  try {
    const response = await axios.put(
      `http://localhost:8000/api/lecturer/courses/${id}`,
      dataUpdateKelas,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};

export const APIDetailKelasREAD = async (id: any) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/lecturer/courses/${id}/read`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};

export const APIDetailKelasUPDATE = async (id: any) => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/lecturer/courses/${id}/update`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};

export const APIHapusKelas = async (id: any) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/lecturer/courses/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};

export const APISemuaKelas = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/lecturer/courses`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};
