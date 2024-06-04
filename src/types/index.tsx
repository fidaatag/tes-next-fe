export interface ItemsNav {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  description?: string;
}

export interface ItemsNav_WithChildren extends ItemsNav {
  items: ItemsNav_WithChildren[];
}

export interface ItemsNav_WithOptionalChildren extends ItemsNav {
  items?: ItemsNav_WithOptionalChildren[];
}


export interface ListKelas {
  message?: string
  data?: any
  error?: boolean
  id: number
  name: string
  description: string
  about: string
  duration: number
  effort_taken: number
  status: string
  price: number
  language: string
  image_cover: string
  created_at: string
  updated_at: string
  created_by: number
  updated_by: number
  course_category_id: number
  deleted_at: Date
  is_superior: number
  sections?: Section[]
}

export interface Section {
  id?: number; 
  course_id?:    number;
  section_title?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
  modules?:       Module[];
}

export interface Module {
  id?: number;
  section_id?:    number;
  module_title?: string;
  description?: string;
  status?: string;
  created_by?: number;
  updated_by?: number;
  created_at?: string;
  updated_at?: string;
}


export interface SiswaUAS {
  id: number;
  nama: string;
  date: string;
}

export interface KategoriKLS {
  id: number;
  kategori: string;
}

export interface TagKLS {
  id: number;
  tag: string;
}

export interface BabKLS {
  id: number;
  bab: string;
}

export interface DipelajariKLS {
  id: number;
  pelajari: string;
}

export interface InstrukturKLS {
  id: number;
  guru: string;
}