// types.ts or at the top of your component file
export interface Course {
  id: number;
  image_cover: string;
  name: string;
  description: string;
  about: string;
  effort_taken: string;
  price: string;
  duration: number;
  language: string;
  learning_list: {
    id: number;
    name: string;
  }[];
  student_enrolled_amount: number;
  lecturers: {
    id: number;
    full_name: string;
    image?: string; // Optional property
    title?: string;
    center?: string;
  }[];
}

export interface ClassInfo {
  id: number;
  image_cover: string;
  name: string;
  description: string;
  about: string;
  effort_taken: string;
  price: string;
  duration: number;
  language: string;
  learning_list: {
    id: number;
    name: string;
  }[];
  student_enrolled_amount: number;
  lecturers: {
    id: number;
    full_name: string;
    image?: string; // Optional property
    title?: string;
    center?: string;
  }[];
}
