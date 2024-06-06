"use server";

import axios from "axios";

const TOKEN = process.env.TOKEN;

export const APIInstrukturKelas = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/lecturer/courses/lecturer-list`,
      {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};