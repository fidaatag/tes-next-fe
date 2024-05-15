import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import IsiMateriKelas from "./IsiMateriKelas";
import NamaKelas from "./NamaKelas";
import NamaSiswaUAS from "./NamaSiswaUAS";
import { DataListKelas, DataNamaSiswaUAS } from "@/src/constants/example";

type PageDetailKelasProps = {
  params: { slug: string };
};

const PageDetailKelas = ({ params }: PageDetailKelasProps) => {
  const id = params.slug[0];

  return (
    <>
      <div className="m-8">
        <div className="flex justify-between items-center mb-8">
          <NamaKelas isikelas={DataListKelas} params={id} />
          <div className="w-1/2 flex justify-end">
            <Button className="bg-blue-400" variant="outline">
              Edit Kelas
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 h-screen row-start-1 md:row-start-2">
          <div className="col-span-2 order-2">
            <IsiMateriKelas isikelas={DataListKelas} params={id} />
          </div>

          <div className="flex md:flex-col px-2 gap-4 md:order-last">
            <div className="flex flex-col gap-4 w-full">
              <Card>
                <CardHeader className="bg-blue-100 rounded-t-lg">
                  <CardTitle className="text-lg">Tanggal Penting</CardTitle>
                </CardHeader>
                <CardContent className="mt-4 flex flex-col gap-2">
                  <div>
                    <p className="font-bold">28 Juni 2020</p>
                    <p className="">mengkoreksi ujian akhir</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-100 rounded-t-lg">
                  <CardTitle className="text-lg">Jumlah Siswa</CardTitle>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="font-bold">
                    <span className="text-xl">40</span> Siswa
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="h-full w-full">
              <CardHeader className="bg-blue-100 rounded-t-lg">
                <CardTitle className="text-lg">Pengumpulan UAS</CardTitle>
              </CardHeader>
              <CardContent className="mt-4 h-48 overflow-y-scroll flex flex-col gap-2">
                <NamaSiswaUAS siswa={DataNamaSiswaUAS} />
              </CardContent>
              <CardFooter className="border-t-2 border-dashed">
                <Button className="w-full mt-4 bg-blue-400" variant="outline">
                  Koreksi Sekarang
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageDetailKelas;
