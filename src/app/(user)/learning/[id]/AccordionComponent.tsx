"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { CheckCircle, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

const dummyData = [
  {
    id: "item-1",
    title: "Pengumuman",
    content: [],
    isLocked: false,
    isCompleted: true,
  },
  {
    id: "item-2",
    title: "BAB 1 : Pengenalan Keuangan",
    content: [
      {
        title: "Apa itu Keuangan?",
        id: "detail1",
        id2: "learning1",
      },
      {
        title: "Jenis-jenis Keuangan",
        id: "detail2",
        id2: "learning2",
      },
      {
        title: "Manfaat Mengatur Keuangan",
        id: "detail3",
        id2: "learning3",
      },
      {
        title: "Quiz: Pengenalan Keuangan",
        id: "quiz1",
        id2: "learning4",
      },
    ],
    isLocked: false,
    isCompleted: true,
  },
  {
    id: "item-3",
    title: "BAB 2 : Perencanaan Keuangan",
    content: [
      {
        title: "Mengapa Perlu Rencana Keuangan?",
        id: "detail4",
        id2: "learning5",
      },
      {
        title: "Langkah-langkah Membuat Rencana Keuangan",
        id: "detail5",
        id2: "learning6",
      },
      {
        title: "Contoh Rencana Keuangan",
        id: "detail6",
        id2: "learning7",
      },
      {
        title: "Quiz: Perencanaan Keuangan",
        id: "quiz2",
        id2: "learning8",
      },
    ],
    isLocked: false,
    isCompleted: false,
  },
  {
    id: "item-4",
    title: "BAB 3 : Penerapan Keuangan Pribadi",
    content: [
      {
        title: "Menentukan Prioritas Keuangan",
        id: "detail7",
        id2: "learning9",
      },
      {
        title: "Strategi Menabung Efektif",
        id: "detail8",
        id2: "learning10",
      },
      {
        title: "Investasi untuk Pemula",
        id: "detail9",
        id2: "learning11",
      },
      {
        title: "Quiz: Penerapan Keuangan Pribadi",
        id: "quiz3",
        id2: "learning12",
      },
    ],
    isLocked: false,
    isCompleted: false,
  },
  {
    id: "item-5",
    title: "BAB 4 : Mengelola Hutang",
    content: [
      {
        title: "Jenis-jenis Hutang",
        id: "detail10",
        id2: "learning13",
      },
      {
        title: "Cara Mengelola Hutang dengan Baik",
        id: "detail11",
        id2: "learning14",
      },
      {
        title: "Menghindari Jeratan Hutang",
        id: "detail12",
        id2: "learning15",
      },
      {
        title: "Quiz: Mengelola Hutang",
        id: "quiz4",
        id2: "learning16",
      },
    ],
    isLocked: false,
    isCompleted: false,
  },
  {
    id: "item-6",
    title: "BAB 5 : Menyiapkan Dana Darurat",
    content: [
      {
        title: "Pentingnya Dana Darurat",
        id: "detail13",
        id2: "learning17",
      },
      {
        title: "Cara Menyisihkan Dana Darurat",
        id: "detail14",
        id2: "learning18",
      },
      {
        title: "Mengelola Dana Darurat",
        id: "detail15",
        id2: "learning19",
      },
      {
        title: "Quiz: Menyiapkan Dana Darurat",
        id: "quiz5",
        id2: "learning20",
      },
    ],
    isLocked: false,
    isCompleted: false,
  },
  {
    id: "item-7",
    title: "Ujian Akhir",
    content: "Hanya untuk pengguna berbayar",
    isLocked: true,
    isCompleted: false,
  },
  {
    id: "item-8",
    title: "Forum Diskusi",
    content: "Hanya untuk pengguna berbayar",
    isLocked: true,
    isCompleted: false,
  },
];

const AccordionComponent = () => {
    const [activeItems, setActiveItems] = useState<string[]>([]);
    const router = useRouter();
  
    const handleTriggerClick = (id: string) => {
      setActiveItems((prevItems) =>
        prevItems.includes(id)
          ? prevItems.filter((item) => item !== id)
          : [...prevItems, id]
      );
    };
  
    const handleContentClick = (id: string, id2: string, isLocked: boolean) => {
      if (!isLocked) {
        router.push(`/learning/${id}/${id2}`);
      }
    };
  
    return (
      <Accordion type="multiple" className="w-full">
        {dummyData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger
              className="flex justify-between items-center"
              onClick={() => handleTriggerClick(item.id)}
            >
              {item.title}
              {item.isLocked ? (
                <Lock className="text-gray-500" />
              ) : item.isCompleted ? (
                <CheckCircle className="text-green-500" />
              ) : null}
            </AccordionTrigger>
            <AccordionContent>
              {Array.isArray(item.content) && item.content.length > 0 ? (
                <ul className="pl-4">
                  {item.content.map((subItem, index) => (
                    <li
                      key={index}
                      className={`flex justify-between items-center mb-2 ${
                        item.isLocked
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-blue-600 cursor-pointer hover:underline"
                      }`}
                      onClick={() =>
                        handleContentClick(subItem.id, subItem.id2, item.isLocked)
                      }
                    >
                      {subItem.title}
                      {subItem.completed && (
                        <CheckCircle className="text-green-500" />
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">Konten untuk {item.title}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  
  export default AccordionComponent;