"use server";

import axios from "axios";

const specialToken = process.env.TOKENDOS;

export const APIInstrukturKelas = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/api/lecturer/courses/lecturer-list`,
      {
        headers: { Authorization: `Bearer ${specialToken}` },
      }
    );

    return response.data;
  } catch (error) {
    return { error: true, message: "API Tidak Aktif" };
  }
};