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
import { DipelajariKLS, KategoriKLS, TagKLS } from "@/src/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TambahBab from "./TambahBab";
import { Button } from "@/src/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"


const formSchema = z.object({
  nama_kelas: z.string(),
  tentang_kelas: z.string(),
  pelajari_kelas: z.array(z.string()).refine((value) => value.some((item) => item)),
  instruktur:  z.array(z.string()).refine((value) => value.some((item) => item)),
  lama_kelas: z.string(),
  upaya: z.string(),
  harga_kelas: z.string(),
  bahasa_kelas: z.string(),
  transkrip_video: z.string(),
  kategori: z.number(),
  tags: z.array(z.string()).refine((value) => value.some((item) => item)),
});



const FormKelas = ({typeBtn} : {typeBtn: string}) : JSX.Element => {

  // console.log(typeBtn);
  // console.log(typeBtn);
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_kelas: "",
      tentang_kelas: "",
      pelajari_kelas: [""],
      instruktur: [""],
      lama_kelas: "",
      upaya: "",
      harga_kelas: "",
      bahasa_kelas: "",
      transkrip_video: "",
      kategori: 1,
      tags: [""],
    },
  });

  function KirimForm (values: z.infer<typeof formSchema>) {
    alert(JSON.stringify(values));
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
    const sisaPelajari = pelajari.filter((tag: any) => tag !== hapus);
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
                      <Input placeholder="Nama Kelas" {...field} />
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
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              {/* area yang dipelajari */}
              <h3 className="mt-10 font-extrabold">Apa yang Dipelajari</h3>
              {pelajari.map((pel) => (            
                <FormField
                  key={pel.id}
                  control={form.control}
                  name="pelajari_kelas"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <p className="text-sm">⚫️</p>
                      <FormLabel>{pel.pelajari}</FormLabel>          
                      <FormControl>
                      <div className="relative">   
                        <Checkbox
                          onClick={() => hapusPelajari(pel)}
                          className="h-5 w-5 absolute -left-1 top-1 border-transparent"
                          checked={field.value?.includes(
                            pel.id.toString()
                          )}
                          onCheckedChange={(checked) => {
                            return checked ?
                              field.onChange(field.value?.filter((value) => value !== pel.id.toString()))
                              : field.onChange([...field.value, pel.id.toString()])
                          }}
                        />
                        <div className="flex gap-2">
                          {/* <button disabled className="hover:underline">✏️</button> */}
                          <button className="hover:underline">🗑️</button>
                        </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
              <Input placeholder="Menjadi Insan manusia yang berakhlak mulia" onChange={(e) => setInputPelajari(e.target.value)}/>
              <Button variant="secondary" onClick={tambahPelajari}>+ Tambahkan</Button>


              {/* area tambah instruktur */}
              <h3 className="font-extrabold mt-10">Anggota Instruktur/Dosen Pengajar</h3>
              <Input placeholder="Cari Instruktur"/>
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
                          <Input placeholder="8 minggu" {...field} />
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
                          <Input placeholder="2-4 minggu" {...field} />
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
                          <Input placeholder="200.000" {...field} />
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
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Indonesia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Indonesia</SelectItem>
                              <SelectItem value="dark">English</SelectItem>
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
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Indonesia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">Indonesia</SelectItem>
                              <SelectItem value="dark">English</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>


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
                          <Input placeholder="8 minggu" {...field} />
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
                  />
                  <div className="mt-4 ml-4 h-20 overflow-y-scroll">
                    <FormField 
                      control={form.control}
                      name="kategori"
                      render={({field})=> (
                        <FormItem>

                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value.toString()}
                              className="flex flex-col space-y-1"
                            >
                              {hasilCariKategori.map((item) => (
                                <FormItem className="flex items-center space-x-3 space-y-0" key={item.id}>
                                  <FormControl>
                                    <RadioGroupItem value={item.id.toString()} />
                                  </FormControl>
                                  <FormLabel>
                                    {item.kategori}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>

                        </FormItem>
                      )}
                    />
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
                    
                    <FormField 
                      control={form.control}
                      name="tags"
                      render={() => (
                        <FormItem>
                          {tags.map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="tags"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex gap-1 items-start mr-2 bg-gray-200 rounded-md px-2"
                                  >
                                    <FormControl>
                                      <div className="relative">
                                        <Checkbox
                                          onClick={() => hapusTag(item)}
                                          className="h-5 w-5 absolute -left-1 top-1 border-transparent"
                                          checked={field.value?.includes(
                                            item.id.toString()
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange(
                                                  field.value?.filter(
                                                    (value) =>
                                                      value !== item.id.toString()
                                                  )
                                                )
                                              : field.onChange([
                                                  ...field.value,
                                                  item.id.toString(),
                                                ]); // kalo ga di klik data masuk
                                          }}
                                        />
                                        <p className="mr-2">x</p>
                                      </div>
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item.tag}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </FormItem>
                      )}
                    />
                    
                    

                    <input
                      onKeyDown={tambahTag}
                      className="flex-1 border-none outline-none h-5"
                    />
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
