import { InstrukturKLS, KategoriKLS, ListKelas, SiswaUAS } from "@/src/types/index";

export const DataListKelas: ListKelas[] = [
  {
    id: 1,
    title: "Pengembangan Roti Tawar",
    status: "diulas",
    sections: [
      {
        id_section: 1,
        title_section: "Bab 1 : Roti",
        modules: [
          {
            id_module: 1,
            title_module: "Apa itu natural ?",
          },
          {
            id_module: 2,
            title_module: "Kenapa bisa natural ?",
          },
        ],
      },
      {
        id_section: 1,
        title_section: "Bab 2 : Tawar",
        modules: [
          {
            id_module: 3,
            title_module: "Penyebab Buatan",
          },
          {
            id_module: 4,
            title_module: "Terjadi lagi Buatan",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Bangunan Jalanan Nasional",
    status: "draf",
    sections: [
      {
        id_section: 1,
        title_section: "Bab 1 : Jalan",
        modules: [
          {
            id_module: 1,
            title_module: "Apa itu bangunan ?",
          },
          {
            id_module: 2,
            title_module: "Kenapa bisa jalan ?",
          },
        ],
      },
      {
        id_section: 1,
        title_section: "Bab 2 : Nasional",
        modules: [
          {
            id_module: 3,
            title_module: "Penyebab nasi",
          },
          {
            id_module: 4,
            title_module: "Terjadi lagi orisinal",
          },
        ],
      },
    ],
  },
];

export const DataNamaSiswaUAS: SiswaUAS[] = [
  {
    id: 1,
    nama: 'Syalala Yeyeye',
    date: '40 april 1203'
  },
  {
    id: 2,
    nama: 'Lalala Yuyuyu',
    date: '1 april 1203'
  },
  {
    id: 3,
    nama: 'Hore Yayaya',
    date: '54 april 1203'
  },
  {
    id: 4,
    nama: 'Weeehh Weh',
    date: '34 april 1203'
  },
  {
    id: 5,
    nama: 'Hore Yayaya',
    date: '54 april 1203'
  },
  {
    id: 6,
    nama: 'Weeehh Weh',
    date: '34 april 1203'
  },
  
]

export const DataKategoriKelas: KategoriKLS[] = [
  {
    id: 1,
    category_name: "Sejarah"
  },
  {
    id: 2,
    category_name: "Sosial"
  },
  {
    id: 3,
    category_name: "Fisika"
  },
  {
    id: 4,
    category_name: "Fiqih"
  },
  {
    id: 5,
    category_name: "Sesajen"
  },
  {
    id: 6,
    category_name: "Fish"
  },
  {
    id: 7,
    category_name: "Sosis"
  },
];

export const DataInstrukturKelas: InstrukturKLS[] = [
  {
    id: 1,
    full_name: "Devi Permatasari, S.E"
  },
  {
    id: 2,
    full_name: "Lala Atasari, S.E"
  },
  {
    id: 3,
    full_name: "Santi Perasari, S.E"
  },
  {
    id: 4,
    full_name: "Yanya Matasari, S.E"
  },
  {
    id: 5,
    full_name: "Belro Tasari, S.E"
  },
]

