import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { Section } from "@/src/types/index";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CustomAlertDialog from "../CustomAlertDialog";
import { useApiErrorHandler } from "@/src/hooks/UseApiErrorHandler";
import { useDialogHandlers } from "@/src/hooks/UseProgressDialog";
import { FileWarning } from "lucide-react";

type TambahBabProps = {
  dataBab: any;
  sections?: Section[];
  course_id?: any;
  isAddForm?: any;
};

const TambahBab = ({
  dataBab,
  sections,
  course_id,
  isAddForm,
}: TambahBabProps) => {
  const pathname = usePathname();
  const [babs, setBabs] = useState<Section[]>([]);
  const [inputBab, setInputBab] = useState("");
  const router = useRouter();
  const {
    munculDialog,
    pesanDialog,
    progressTimer,
    setProgressTimer,
    showDialog,
  } = useDialogHandlers();
  const { handleApiError } = useApiErrorHandler();

  // saat pertama : mendapatkan data yg tersedia ||
  // saat sudh di isi : mengirim data terbaru ke page.tsx
  dataBab(babs);

  useEffect(() => {
    if (sections) {
      setBabs(sections);
    }
  }, [sections]);

  const tambahBab = () => {
    const newBab: Section = {
      section_title: inputBab,
    };

    setBabs((prevBabs) => [...prevBabs, newBab]);

    setTimeout(() => {
      toast.success(`${newBab.section_title} ditambahkan`);
    }, 200);
  };

  const handleTambahMateri = (babId: any, title: any) => {
    // jika ada di page tambah
    if (pathname.includes("tambah")) {
      isAddForm(true);

      // jika blm ada ada bab di db
    } else if (babId === undefined) {
      setProgressTimer(50);
      showDialog(
        <FileWarning />,
        `Data mu rawan hilang, klik Simpan Draf dahulu agar bisa menambahkan materi bab ${title}`
      );

      // jika sdh ada bab di db
    } else {
      router.push(
        `edit/tambah-materi-bab-${babId}`
      );
    }
  };

  return (
    <>
      <CustomAlertDialog
        open={munculDialog}
        pesanDialog={pesanDialog}
        progressTimer={progressTimer}
      />

      <div>
        <h1 className="font-bold">Tambah Bab</h1>

        {/* memuat hasil tambah bab */}
        <div className="my-10">
          <Accordion type="single" collapsible={true} className="w-full">
            <AccordionItem value="item-1">
              <div className="flex justify-between">
                <AccordionTrigger>Pengumuman</AccordionTrigger>
                <button disabled className="text-3xl font-extrabold">
                  ⋮
                </button>
              </div>
              <AccordionContent className="flex flex-col gap-2">
                <p>Silahkan menambah bab dan materi disini</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {babs?.map((bab: any) => (
            <Accordion
              type="single"
              collapsible={true}
              className="w-full"
              key={bab.id}
            >
              <AccordionItem value="item-1">
                <div className="flex justify-between">
                  <AccordionTrigger>{bab.section_title}</AccordionTrigger>
                  <Popover>
                    <PopoverTrigger className="text-3xl font-extrabold">
                      ⋮
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-3">
                      <p
                        onClick={() =>
                          handleTambahMateri(bab.id, bab.section_title)
                        }
                        className="hover:underline"
                      >
                        Tambah Materi
                      </p>
                      <Link href="#">
                        <p className="hover:underline">Tambah Kuis</p>
                      </Link>
                      <Link href="#">
                        <p className="hover:underline">Tambah Forum</p>
                      </Link>
                      <Link href="#">
                        <p className="hover:underline border-t-2 border-dashed pt-2">
                          Set for Free Access
                        </p>
                      </Link>
                    </PopoverContent>
                  </Popover>
                </div>
                <AccordionContent className="flex flex-col gap-2">
                  {bab.modules?.map((modul: any) => (
                    <Link
                      href={`edit/${bab.id}/${modul.id}`}
                      className="hover:underline"
                    >
                      <p>{modul.module_title}</p>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <div className="flex gap-2 justify-end">
          {/* button tambah pop up dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="bg-blue-400">
                Tambah Bab
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="border-b-4 py-4 mb-4">
                  Tambah BAB
                </DialogTitle>
              </DialogHeader>

              <Label>Nama BAB</Label>
              <Input
                placeholder="Nama"
                onChange={(e) => setInputBab(e.target.value)}
              />

              <Label>Tambah template</Label>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <button className="w-full h-20 border-2 hover:border-blue-400 peer"></button>
                  <p className="hidden peer-hover:block absolute top-1 left-1/3 text-6xl text-blue-400 cursor-pointer">
                    +
                  </p>
                  <p className="text-center text-sm">blank</p>
                </div>

                <div className="relative">
                  <button className="w-full h-20 border-2 hover:border-blue-400 peer"></button>
                  <p className="hidden peer-hover:block absolute top-1 left-1/3 text-6xl text-blue-400 cursor-pointer">
                    +
                  </p>
                  <p className="text-center text-sm">materi</p>
                </div>

                <div className="relative">
                  <button className="w-full h-20 border-2 hover:border-blue-400 peer"></button>
                  <p className="hidden peer-hover:block absolute top-1 left-1/3 text-6xl text-blue-400 cursor-pointer">
                    +
                  </p>
                  <p className="text-center text-sm">forum</p>
                </div>

                <div className="relative">
                  <button className="w-full h-20 border-2 hover:border-blue-400 peer"></button>
                  <p className="hidden peer-hover:block absolute top-1 left-1/3 text-6xl text-blue-400 cursor-pointer">
                    +
                  </p>
                  <p className="text-center text-sm">materi forum</p>
                </div>

                <div className="relative">
                  <button className="w-full h-20 border-2 hover:border-blue-400 peer"></button>
                  <p className="hidden peer-hover:block absolute top-1 left-1/3 text-6xl text-blue-400 cursor-pointer">
                    +
                  </p>
                  <p className="text-center text-sm">materi kuis</p>
                </div>

                <div className="relative">
                  <button className="w-full h-20 border-2 hover:border-blue-400 peer"></button>
                  <p className="hidden peer-hover:block absolute top-1 left-1/3 text-6xl text-blue-400 cursor-pointer">
                    +
                  </p>
                  <p className="text-center text-sm">materi forum kuis</p>
                </div>
              </div>

              <hr className="border-2 mt-4" />

              <div className="flex gap-4 justify-end">
                <Button variant="secondary">Batal</Button>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-blue-400"
                    onClick={tambahBab}
                  >
                    Tambah BAB
                  </Button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" className="bg-blue-400">
            Tambah Ujian Akhir
          </Button>
        </div>
      </div>
    </>
  );
};

export default TambahBab;
