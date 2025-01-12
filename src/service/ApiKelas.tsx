// kalo diganti client --- FormData().append berfungsi, tapi tidak bisa log FormData
// kalo diganti server --- FormData().append berfungsi juga, log FormData bisa kebaca
// kalo pake use server ==> cookies token kebaca, tapi file img ga kebaca
// kalo pake use client ==> cookies tokn ga kebaca, tapi file img kebaca
// kalo ga pake apa ==> kebaca semua

// solusinya : menerima paramter yang sudah dibuild menjadi FormData siap upload

"use server";

import { GetAuth } from "../helpers/AuthUser";
import AuthAttributes from "../types/AuthUserInterface";
import Http from "../helpers/Fetch";

// http://localhost:8000/api/lecturer/courses/  --> create buat api di page tambah, buttonnya draf ---- by default status draft
// http://localhost:8000/api/lecturer/courses/publish --> create buat api di page tambah, buttonnya ajukan ke admin / publish --- key status ttp diisi --- by default status draft juga 😢
// http://localhost:8000/api/lecturer/courses/123/publish --> api khusus untuk page edit, button publis/ ajukan ke admin
// http://localhost:8000/api/lecturer/courses/8243 ---> edit yg versi lengkap
// http://localhost:8000/api/lecturer/courses/4/change --> edit statusnya aja, json status aja

// * semua api course/ atau  yang ada create/publish --> untuk section prilakunya add ke db, kalo mau edit lupakan --- blm ada fitur itu 😅
// * khusus case create apapun kondisinya, wajib key : nama, description, image-cover

// ! enum status hanya menrima ini : $table->enum('status',['published-admin','published-lecturer','draft','revision'])->nullable();

export const APIBuatKelas_caseCreateDraft = async (
  formData: any
): Promise<any> => {
  try {
    const user: AuthAttributes | null = await GetAuth();
    const cookieFromToken = user?.token;

    const response = await Http.post(`/api/lecturer/courses`, formData, {
      headers: {
        Authorization: `Bearer ${cookieFromToken}`,
      },
    });

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: " + error };
  }
};

export const APIBuatKelas_caseCreatePublish = async (
  formData: any
): Promise<any> => {
  try {
    const user: AuthAttributes | null = await GetAuth();
    const cookieFromToken = user?.token;
    const response = await Http.post(
      `/api/lecturer/courses/publish`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${cookieFromToken}`,
          "Content-Type": "multipart/form-data", // -- axios udh pinter bisa detect ini
        },
      }
    );
    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: " + error };
  }
};

export const APIEditKelas_caseFullEdit = async (
  formData: any,
  id: string
): Promise<any> => {
  try {
    const user: AuthAttributes | null = await GetAuth();
    const cookieFromToken = user?.token;
    const response = await Http.post(`/api/lecturer/courses/${id}?_method=PUT`, formData, {
      headers: {
        Authorization: `Bearer ${cookieFromToken}`,
        "Content-Type": "multipart/form-data", // -- axios udh pinter bisa detect ini
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: " + error };
  }
};

export const APIEditKelas_Status = async (
  formData: any,
  id: string
): Promise<any> => {
  try {
    const user: AuthAttributes | null = await GetAuth();
    const cookieFromToken = user?.token;
    const response = await Http.post(`/api/lecturer/courses/${id}/change?_method=PUT`, formData, {
      headers: {
        Authorization: `Bearer ${cookieFromToken}`,
        "Content-Type": "multipart/form-data", // -- axios udh pinter bisa detect ini
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: " + error };
  }
};

export const APIEditKelas_caseFullEdit_Publish = async (
  formData: any,
  id: string
): Promise<any> => {
  try {
    const user: AuthAttributes | null = await GetAuth();
    const cookieFromToken = user?.token;
    const response = await Http.post(
      `/api/lecturer/courses/${id}/publish`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${cookieFromToken}`,
          "Content-Type": "multipart/form-data", // -- axios udh pinter bisa detect ini
        },
      }
    );
    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: " + error };
  }
};

export const APIHapusKelas = async (id: string): Promise<any> => {
  try {
    const user: AuthAttributes | null = await GetAuth();
    const cookieFromToken = user?.token;
    const response = await Http.delete(`/api/lecturer/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${cookieFromToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: " + error };
  }
};

export const APIDetailKelas = async (id: any) => {
  try {
    const user: AuthAttributes | null = await GetAuth();

    const cookieFromToken = user?.token;

    const response = await Http.get(
      `http://localhost:8000/api/lecturer/courses/${id}/update`,
      {
        headers: { Authorization: `Bearer ${cookieFromToken}` },
      }
    );
    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};

export const APISemuaKelas = async () => {
  try {
    const user: AuthAttributes | null = await GetAuth();

    const cookieFromToken = user?.token;

    const response = await Http.get(
      `api/lecturer/courses/status/check?status=semua`,
      {
        headers: { Authorization: `Bearer ${cookieFromToken}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif: " + error };
  }
};
