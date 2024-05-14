"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { ListKelas } from "../../../types";
import Link from "next/link";
import { useState } from "react";

interface DaftarKelasProps {
  kelas: ListKelas[];
}

const ItemsKelas = ({ kelas }: DaftarKelasProps) => {

  const [statusKelas, setStatusKelas] = useState("diulas")

  const FilterKelas = kelas.filter((item) => {
    if (statusKelas == "semua") return kelas
    else return item.status == statusKelas
  })

  return (
    <>
      <div>
        <Tabs defaultValue="diulas" className="">
          <TabsList>
            <TabsTrigger value="diulas" onClick={() => setStatusKelas("diulas")}>Perlu Diulas</TabsTrigger>
            <TabsTrigger value="public" onClick={() => setStatusKelas("public")}>Public</TabsTrigger>
            <TabsTrigger value="draf" onClick={() => setStatusKelas("draf")}>Draf</TabsTrigger>
            <TabsTrigger value="semua" onClick={() => setStatusKelas("semua")}>Semua</TabsTrigger>
          </TabsList>

          <TabsContent value={statusKelas} className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {FilterKelas.map((kelas) => (
              <Card>
                <Link href={`/dashboard/kelas/${kelas.id}`}>
                  <CardContent className="h-40 bg-red-200 rounded-t-lg w-full">
                    <p className="bg-white w-fit p-1 relative top-3">{kelas.status}</p>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-md">{kelas.title}</CardTitle>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ItemsKelas;
