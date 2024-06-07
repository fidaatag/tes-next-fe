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
import { UseConvertFormDta } from "../hooks/UseConvertFormData";

// http://localhost:8000/api/lecturer/courses/  --> create buat api di page tambah, buttonnya draf ---- by default status draft
// http://localhost:8000/api/lecturer/courses/publish --> create buat api di page tambah, buttonnya ajukan ke admin / publish --- key status ttp diisi --- by default status draft juga 😢
// http://localhost:8000/api/lecturer/courses/123/publish --> api khusus untuk page edit, button publis/ ajukan ke admin
// http://localhost:8000/api/lecturer/courses/8243 ---> edit yg versi lengkap
// http://localhost:8000/api/lecturer/courses/4/change --> edit statusnya aja, json status aja

// * semua api course/ atau  yang ada create/publish --> untuk section prilakunya add ke db, kalo mau edit lupakan --- blm ada fitur itu 😅
// * khusus case create apapun kondisinya, wajib key : nama, description, image-cover



export const APIBuatKelas_caseCreateDraf = async (
  formData: any, // yg blum di build
  tes: any, // yg udh di build
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

  // tes apakah yg sudah di build itu sama dengan yg belum di build ?
  console.log(dataCreateKelas) // build disini
  console.log(tes) // build diluar

  console.log("apakah sama? "+ dataCreateKelas === tes)

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
      // dataCreateKelas, // build formData disini //---- data bisa kesimpen -- krn ga ada key status // bisa berhasil klo ga ada status
      tes, // build formData di luar // --- data tidak bisa kesimpen -- krn ada key status // bisa berhasil kalo ga ada status
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











// export const APIBuatKelas_caseCreateDraf = async (
//   formData: any
// ): Promise<any> => {
//   try {
//     const tes = UseConvertFormDta(formData)
//     console.log(formData);
//     const user: AuthAttributes | null = await GetAuth();
//     const cookieFromToken = user?.token;
//     console.log(cookieFromToken);
//     const response = await Http.post(`/api/lecturer/courses`, formData, {
//       headers: {
//         Authorization: `Bearer ${cookieFromToken}`,
//         "Content-Type": "multipart/form-data", // -- axios udh pinter bisa detect ini
//       },
//     });
//     console.log(response.data)
//     return response.data;
//   } catch (error) {
//     console.log(error)
//     return { error: true, message: "API Tidak Aktif: " + error };
//   }
// };

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
    const response = await Http.post(`/api/lecturer/courses/${id}`, formData, {
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

// export const APIEditKelas = async (
//   formData: any,
//   status: string,
//   id: string
// ) => {
//   const dataUpdateKelas = {
//     name: formData?.name,
//     description: formData?.description,
//     about: formData?.description,
//     duration: formData?.duration,
//     effort_taken: formData?.effort_taken,
//     status: status,
//     price: formData?.price,
//     language: formData?.language,
//     image_cover: "default_image_cover",
//     created_by: 40,
//     updated_by: 9,
//     course_category_id: formData?.course_category_id,
//     is_superior: true,
//   };

//   try {
//     const response = await axios.put(
//       `http://localhost:8000/api/lecturer/courses/${id}`,
//       dataUpdateKelas,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     return { error: true, message: "API Tidak Aktif" };
//   }
// };

// export const APIDetailKelasREAD = async (id: any) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:8000/api/lecturer/courses/${id}/read`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     return { error: true, message: "API Tidak Aktif" };
//   }
// };

// export const APIDetailKelasUPDATE = async (id: any) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:8000/api/lecturer/courses/${id}/update`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     return { error: true, message: "API Tidak Aktif" };
//   }
// };

// export const APIHapusKelas = async (id: any) => {
//   try {
//     const response = await axios.delete(
//       `http://localhost:8000/api/lecturer/courses/${id}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     return { error: true, message: "API Tidak Aktif" };
//   }
// };

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
