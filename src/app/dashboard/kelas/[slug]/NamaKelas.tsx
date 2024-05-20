import { ListKelas } from "@/../../src/types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/../../src/components/ui/breadcrumb";
import Link from "next/link";

interface NamaKelasProps {
  isikelas: ListKelas[];
  params: String;
}

const NamaKelas = ({ isikelas, params }: NamaKelasProps) => {
  const detailKelas = isikelas.find((kelas: any) => kelas.id == params);

  return (
    <>
      <div className="md:flex justify-between w-full">
        <h1 className="text-lg font-semibold">
          {detailKelas?.title} - {detailKelas?.status}
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href={"/dashboard/kelas"}>Kelas</Link>
            </BreadcrumbItem>
            <p>/</p>
            <BreadcrumbItem>
              <BreadcrumbPage>{detailKelas?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
};

export default NamaKelas;
