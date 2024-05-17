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
  id:       number;
  title:    string;
  status:   string;
  sections: Section[];
}

export interface Section {
  id_section:    number;
  title_section: string;
  modules:       Module[];
}

export interface Module {
  id_module:    number;
  title_module: string;
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