import { Button } from "@/src/components/ui/button";
import ItemsKelas from "./ItemsKelas";
import { DataListKelas } from "@/src/constants/example";
import Link from "next/link";


const PageKelas = () => {
  
  return (
    <>
      <div className="p-4 flex flex-col gap-9">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-extrabold">Kelas</h1>
          <Link href="/dashboard/kelas/tambah">
            <Button className="bg-blue-400" variant="outline">Tambah Kelas</Button>
          </Link>
        </div>

        <ItemsKelas kelas={DataListKelas}/>

      </div>
    </>
  );
};

export default PageKelas;
