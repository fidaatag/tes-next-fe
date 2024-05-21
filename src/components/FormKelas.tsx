import { Checkbox } from "@/src/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import { DataKategoriKelas } from "@/src/constants/example";
import { DipelajariKLS, KategoriKLS, ListKelas, TagKLS } from "@/src/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TambahBab from "./TambahBab";
import { Button } from "@/src/components/ui/button";
import { Edit, Trash } from "lucide-react";


const formSchema = z.object({
  nama_kelas: z.string().min(5, {message: "Isi Dulu Nama Kelas, Mininal 5 huruf"}),
  tentang_kelas: z.string(),
  lama_kelas: z.coerce.number(),
  upaya: z.coerce.number(),
  harga_kelas: z.coerce.number(),
  bahasa_kelas: z.string(),
  transkrip_video: z.string(),
});


type FormKelasProps = {
  typeBtn :  string;
  AllValue : (data: z.infer<typeof formSchema>) => void;
  oldData? : ListKelas
}


const FormKelas = ({typeBtn, AllValue, oldData} : FormKelasProps) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   nama_kelas: oldData?.name,
    //   tentang_kelas: oldData?.about,
    //   lama_kelas: oldData?.duration,
    //   upaya: oldData?.effort_taken,
    //   harga_kelas: oldData?.price,
    //   bahasa_kelas: oldData?.language,
    //   transkrip_video: oldData?.language,
    // },
  });

  function KirimForm (values: z.infer<typeof formSchema>) {
    AllValue(values); // kirim semua value form ke induknya (page.tsx)
  };


  // * ------- sisi kanan -------------
  const [pelajari, setPelajari] = useState<DipelajariKLS[]>([])
  const [inputPelajari, setInputPelajari] = useState("")

  const tambahPelajari = () => {
    const newPelajari: DipelajariKLS = {
      id: pelajari.length + 1,
      pelajari: inputPelajari,
    };

    setPelajari((prevPelajari) => [...prevPelajari, newPelajari]);
  };

  const hapusPelajari = (hapus: any) => {
    const sisaPelajari = pelajari.filter((tag: any) => tag.id !== hapus.id);
    setPelajari(sisaPelajari);
  };

    // * ------- sisi kiri -------------
    const [cariKategori, setCariKategori] = useState("");
    const [hasilCariKategori, setHasilCariKategori] = useState<KategoriKLS[]>([]);
    useEffect(() => {
      const hasilPencarian = DataKategoriKelas.filter((item) =>
        item.kategori.toLowerCase().includes(cariKategori.toLowerCase())
      );
  
      setHasilCariKategori(hasilPencarian);
    }, [cariKategori]);
  
    const [tags, setTags] = useState<TagKLS[]>([]);
    const tambahTag = (e: any) => {
      if (e.key === "Enter" && e.target.value.length > 0) {
        const newTag: TagKLS = {
          id: tags.length + 1,
          tag: e.target.value,
        };
  
        setTags((prevTags) => [...prevTags, newTag]);
        e.target.value = "";
      }
    };
  
    const hapusTag = (hapus: any) => {
      const sisaTag = tags.filter((tag: any) => tag !== hapus);
      setTags(sisaTag);
    };


  return (
    <>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(KirimForm)}
            className="grid grid-cols-4 justify-between gap-10"
            id={ typeBtn === "draf" ? "draf" : typeBtn === "publish" ? "publish" : "hapus" }
          >
            {/* // ! --- sisi kanan ----  */}
            <div className="col-span-3 flex flex-col gap-4">


              {/* field nama_kelas */}
              <FormField
                control={form.control}
                name="nama_kelas"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Nama Kelas" {...field} defaultValue={oldData ? oldData.name : "" || ""}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              {/* field tentang_kelas */}
              <FormField
                control={form.control}
                name="tentang_kelas"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Tulis Tentang Kelas Ini"
                        {...field}
                        className="h-48"
                        defaultValue={oldData ? oldData.about : ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              {/* area yang dipelajari */}
              <div className="w-full">
              <h3 className="mt-10 font-extrabold mb-5">Apa yang Dipelajari</h3>

              <div className="mb-1">
                <div className="flex gap-2 items-center">
                  <p>◾</p>
                  <p>Menjadi insan manusia yang berakhlak mulia</p>
                  <div className="flex gap-2 ml-10">
                    <Edit className="w-3 h-3 opacity-50  group-hover:opacity-80" />
                    <Trash className="w-3 h-3 opacity-50  group-hover:opacity-80" />
                  </div>
                </div>
              </div>

              <div className="mb-1">
                <div className="flex gap-2 items-center">
                  <p>◾</p>
                  <p>Menjadi insan manusia yang berakhlak mulia</p>
                  <div className="flex gap-2 ml-10">
                    <Edit className="w-3 h-3 opacity-50  group-hover:opacity-80" />
                    <Trash className="w-3 h-3 opacity-50  group-hover:opacity-80" />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex gap-2 items-center">
                  <p>◾</p>
                  <p>Menjadi insan manusia yang berakhlak mulia</p>
                  <div className="flex gap-2 ml-10">
                    <Edit className="w-3 h-3 opacity-50  group-hover:opacity-80" />
                    <Trash className="w-3 h-3 opacity-50  group-hover:opacity-80" />
                  </div>
                </div>
              </div>
              
              <Input 
              className="mb-2"
              placeholder="Menjadi Insan manusia yang berakhlak mulia" 
              onChange={(e) => setInputPelajari(e.target.value)}
              disabled/>
              <Button variant="secondary" onClick={tambahPelajari} className="w-full">+ Tambahkan</Button>
              </div>


              {/* area tambah instruktur */}
              <h3 className="font-extrabold mt-10">Anggota Instruktur/Dosen Pengajar</h3>
              <Input placeholder="Cari Instruktur" disabled/>
              <div>
                <div className="flex justify-between border-2 p-4">
                  <p>Devi Permatasari, S.E., M.Si</p>
                  <button className="underline text-blue-400">Tambahkan</button>
                </div>
                <div className="flex justify-between border-2 p-4">
                  <p>Devi Permatasari, S.E., M.Si</p>
                  <button className="underline text-blue-400">Tambahkan</button>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-10">
                <div className="flex gap-4 items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-extrabold">Prof. Olivia Fachrunnisa, S.E</p>
                    <p>Doctor of Philosophy (Ph.D), Curtin University, Perth, Australia</p>
                    <p>Knowledge Management</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="h-16 w-16 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-extrabold">Prof. Olivia Fachrunnisa, S.E</p>
                    <p>Doctor of Philosophy (Ph.D), Curtin University, Perth, Australia</p>
                    <p>Knowledge Management</p>
                  </div>
                </div>
              </div>   

              
              {/* area tambah kelas */}
              <TambahBab/>

            </div>

            {/* // ! --- sisi kiri ----  */}
            <div className="border">
              <h1 className="text-center text-md font-bold py-3 bg-gray-400">
                Informasi kelas
              </h1>

              {/* field lama_kelas */}
              <div>
                <div className="bg-gray-300">
                  <h2 className="py-2 pl-2 ">Durasi Kelas</h2>
                </div>

                <div className="p-2">
                  <FormField
                    control={form.control}
                    name="lama_kelas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Lama Kelas</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="8 minggu" {...field} defaultValue={oldData ? oldData.duration : 0}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="p-2">
                  {/* field upaya */}
                  <FormField
                    control={form.control}
                    name="upaya"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upaya</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="2-4 minggu" {...field}  defaultValue={oldData ? oldData.effort_taken : 0}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              
              {/* field Harga */}
              <div>
                <div className="bg-gray-300">
                  <h2 className="py-2 pl-2 ">Harga Kelas</h2>
                </div>

                <div className="p-2">
                  <FormField
                    control={form.control}
                    name="harga_kelas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Harga</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="200.000" {...field} defaultValue={oldData ? oldData.price : 0} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>


              {/* field bahasa kelas */}
              <div>
                <div className="bg-gray-300">
                  <h2 className="py-2 pl-2 ">Bahasa Materi</h2>
                </div>

                <div className="p-2">
                  
                  <FormField
                    control={form.control}
                    name="bahasa_kelas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Materi</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={oldData ? oldData.language : field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Indonesia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="indonesia">Indonesia</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="p-2">
                  {/* field transkrip bahasa kelas */}
                  <FormField
                    control={form.control}
                    name="transkrip_video"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transkrip Video</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={oldData ? oldData.language : field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Indonesia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="indonesia">Indonesia</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>


              {/* Kategori */}
              <div>
                <div className="bg-gray-300">
                  <h2 className="py-2 pl-2 ">Kategori</h2>
                </div>

                <div className="p-2 mt-2">
                  {/* field lama_kelas */}
                  <Input
                    placeholder="Cari Kategori"
                    value={cariKategori}
                    onChange={(e) => setCariKategori(e.target.value)}
                    disabled
                  />
                  <div className="mt-4 ml-4 h-20 overflow-y-scroll space-y-2">
                    <div className="flex gap-2 items-center">
                      <Checkbox/>
                      <p className="text-sm">Sejarah</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Checkbox/>
                      <p className="text-sm">Ekonomi</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Checkbox/>
                      <p className="text-sm">Sains</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Checkbox/>
                      <p className="text-sm">Agama</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Checkbox/>
                      <p className="text-sm">Sastra</p>
                    </div>
                    
                  </div>
                </div>
              </div>


              {/* tag */}
              <div>
                <div className="bg-gray-300">
                  <h2 className="py-2 pl-2 ">Tag</h2>
                </div>

                <div className="p-2">
                  {/* tag container */}
                  <div className="flex flex-wrap min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  </div>
                </div>
              </div>


            </div>

            {/* -----------batas form----------- */}
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormKelas;
