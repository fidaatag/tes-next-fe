
"use client"

import React from 'react'
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/src/components/ui/form'
import { Input } from '@/src/components/ui/input'
import { Button } from '@/src/components/ui/button'
import { Textarea } from '@/src/components/ui/textarea'
 
const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
  desc: z.string(),
  penjelasan: z.string()

})

const TesFormHooks = ({tesBtn}: {tesBtn: string}): JSX.Element   => {

  console.log(tesBtn)

  // 1. Define your form. ---------------------------------------- ini bisa dibuat isi kalo mau ganti data, defaul isinya ambil di API
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      desc: "tulis aja",
      penjelasan: "",  // ----------------------------- kalo ini ga diisi / ga ditulis, maka dianggap required, krn default ini berguna kalo user ga ngisi
    },
  })


    // 2. Define a submit handler.
    function KIRIM(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      // console.log(values)
      alert ( tesBtn + JSON.stringify(values)) //---------- untuk misahin kirim data ke POST / PUT --> disini tempatnya
    }  


  return (
    <>
      <div>


      <Form {...form}>
      <form onSubmit={form.handleSubmit(KIRIM)} className="space-y-8" id={tesBtn === "edit" ? "edit" : tesBtn === "tes" ? "tes" : ""}>


        {/* ini per kolom inputan, pakenya formfield */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        {/* contoh form field beda coloum input */}
        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Tes desc - new field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* tes pake textarea */}
        <FormField
          control={form.control}
          name="penjelasan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Penjelasan</FormLabel>
              <FormControl>
                <Textarea placeholder='cobain text area' {...field}/>
              </FormControl>
              <FormDescription>
                Tes desc - new field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>


      </div>
    </>
  )
}

export default TesFormHooks