 // kalo diganti client --- FormData().append berfungsi, tapi tidak bisa log FormData
 // kalo diganti server --- FormData().append berfungsi juga, log FormData bisa kebaca
 // kalo pake use server ==> cookies token kebaca, tapi file img ga kebaca
 // kalo pake use client ==> cookies tokn ga kebaca, tapi file img kebaca
 // kalo ga pake apa ==> kebaca semua

 // solusinya : menerima paramter yang sudah dibuild menjadi FormData siap upload 

 "use server" 

import axios from "axios";
import { GetAuth } from "../helpers/AuthUser";
import AuthAttributes from "../types/AuthUserInterface";
import Http from "../helpers/Fetch";


 // http://localhost:8000/api/lecturer/courses/  --> create buat api di page tambah, buttonnya draf ---- by default status draft
 // http://localhost:8000/api/lecturer/courses/publish --> create buat api di page tambah, buttonnya ajukan ke admin / publish --- key status ttp diisi --- by default status draft juga 😢 
 // http://localhost:8000/api/lecturer/courses/123/publish --> api khusus untuk page edit, button publis/ ajukan ke admin
 // http://localhost:8000/api/lecturer/courses/8243 ---> edit yg versi lengkap 
 // http://localhost:8000/api/lecturer/courses/4/change --> edit statusnya aja, json status aja

 const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzE3Njc2NDk0LCJleHAiOjE3MTgyODEyOTQsIm5iZiI6MTcxNzY3NjQ5NCwianRpIjoibmVqM1RRNFJYWTU4QXVZayIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwidXNlciI6eyJpZCI6MywiZnVsbF9uYW1lIjoibGVjdHVyZXIxIiwidXNlcm5hbWUiOiJsZWN0dXJlcjEiLCJlbWFpbCI6ImxlY3R1ckBvcGVuY291cnNlLmNvbSIsInBob25lX251bWJlciI6IjA4MTIzNDU2Nzg5IiwiYmlvIjoibGVjdHVyZSIsInByb2ZpbGVfcGljdHVyZSI6IiIsImVtYWlsX3ZlcmlmaWVkX2F0IjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyNC0wNi0wNlQwNzoxNzo0Ni4wMDAwMDBaIiwidXBkYXRlZF9hdCI6IjIwMjQtMDYtMDZUMDc6MTc6NDYuMDAwMDAwWiIsImNyZWF0ZWRfYnkiOm51bGwsInVwZGF0ZWRfYnkiOm51bGwsInJvbGUiOiJsZWN0dXJlIiwiTklETiI6bnVsbCwiamFiYXRhbiI6bnVsbCwiZGVsZXRlZF9hdCI6bnVsbH19.w5dkfHXheNu5V6IwK6Zg9Jc-Z1SUTinNuuSZNL1YanE"

 const TOKEN = process.env.TOKEN;

 console.log("disini ada "+TOKEN)
 

export const APIBuatKelas_caseCreateDraf = async (
  formData: any,
  status?: string
): Promise<any> => {



  const dataCreateKelas = new FormData();

  console.log("tes")
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
    const user : AuthAttributes | null = await GetAuth();
// const cook = cookies()
    const cookieFromToken = user?.token
// console.log(user)
// console.log(cookieFromToken)
console.log("disini")
    const response = await Http.post(
      `/api/lecturer/courses`, // aman bisa
      // `/api/lecturer/courses/publish`, // aman bisa
      dataCreateKelas,
      {
        headers: {
          Authorization: `Bearer ${cookieFromToken}`,
          'Content-Type': 'multipart/form-data'   // -- axios udh pinter bisa detect ini
      },
      }
    );
    console.log("sini")
console.log(response)
    return response.data;
  } catch (error) {
    console.log(error)
    return { error: true, message: "API Tidak Aktif: "+error };
  }
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
    const user : AuthAttributes | null = await GetAuth();

    const cookieFromToken = user?.token;

    const response = await Http.get(
      `api/lecturer/courses/status/check?status=semua`,
      {
        headers: { Authorization: `Bearer ${cookieFromToken}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: "+error };
  }
};
