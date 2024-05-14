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
  id: number;
  title: string;
  status: string;
}

export interface ListKelas_WithChildren extends ListKelas {
  kelas: ListKelas_WithChildren[];
}

export interface ListKelas_WithOptionalChildren extends ListKelas {
  kelas?: ListKelas_WithOptionalChildren[];
}