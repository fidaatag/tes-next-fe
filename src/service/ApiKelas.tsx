"use server";

import axios from "axios";

const token = process.env.TOKEN;

export const APIBuatKelas = async (
  formData: any,
  status: string
): Promise<any> => {

  const dataCreateKelas = new FormData();

  // Dynamically append all properties from formData
  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      const value = formData[key]
      if (typeof value === "string" || value instanceof File) {
        dataCreateKelas.append(key, value);

      } else if (Array.isArray(value))
        // dataCreateKelas.append(key, new Blob(value)); // jika valuenya berupa []
        value.forEach((item) => {
          dataCreateKelas.append(`${key}[]`, item);
        });
    }
  }

  console.log(dataCreateKelas)



  // const dataCreateKelas = {
  //   name: formData?.name,
  //   description: formData?.description,
  //   about: formData?.description,
  //   duration: formData?.duration,
  //   effort_taken: formData?.effort_taken,
  //   status: status,
  //   price: formData?.price,
  //   language: formData?.language,
  //   image_cover: "default_image_cover",
  //   created_by: 40,
  //   updated_by: 9,
  //   course_category_id: formData?.course_category_id,
  //   is_superior: true,
  // };

//   interface Form {
//     price?: string;
//     description?: string;
//     language?: string;
//     transkrip_video?: string;
// }

//   const form: Form = {
//     price: '58',
//     description: 'Odio maxime natus qu',
//     transkrip_video: 'english'
//   };

//   const dataCreateKelas = new FormData();
// console.log(form)
//   // formData.forEach((value: any, key: any) => {
//   //   dataCreateKelas.append(key, value)
//   // });

//   for (const key in form ){
//     dataCreateKelas.append(key, form[key as keyof Form])
//   }

//   // Object.keys(formData).forEach(key => {
//   //   if (!dataCreateKelas.has(key)) {
//   //     dataCreateKelas.append(key, formData[key]);
//   //   }
//   // });

//   // Object.keys(formData).forEach(key => {
//   //   if (Array.isArray(formData[key])) {
//   //     formData[key].forEach((value: any, index: any) => {
//   //       dataCreateKelas.append(`${key}[${index}]`, value);
//   //     });
//   //   } else if (typeof formData[key] === 'object') {
//   //     dataCreateKelas.append(key, JSON.stringify(formData[key]));
//   //   } else {
//   //     dataCreateKelas.append(key, formData[key]);
//   //   }
//   // });

//   // dataCreateKelas.append('nama', formData?.name)

//   console.log(dataCreateKelas)

  // try {
  //   const response = await axios.post(
  //     "http://localhost:8000/api/lecturer/courses",
  //     dataCreateKelas,
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );

  //   return response.data;
  // } catch (error) {
  //   return { error: true, message: "API Tidak Aktif" };
  // }
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
