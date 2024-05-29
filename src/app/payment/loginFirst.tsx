"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/src/components/ui/form";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

// Define validation schema using zod
const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data: { email: string; password: string }) => {
    // Handle login logic here
    console.log("Data:", data);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        Masuk Terlebih Dahulu
      </h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Card className="max-w-sm w-full mx-auto">
            <CardHeader className="text-left">
              <CardTitle className="text-blue-500">Masuk</CardTitle>
              <hr />
            </CardHeader>
            <CardContent>
              <FormField
                name="email"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    {errors.email && (
                      <FormMessage>{errors.email.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...field}
                          className="w-full"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                        >
                          {showPassword ? <BiSolidHide /> : <BiSolidShow />}
                        </button>
                      </div>
                    </FormControl>
                    {errors.password && (
                      <FormMessage>{errors.password.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <div className="flex justify-between mb-6">
                <a href="/register" className="text-blue-500">
                  Tidak punya akun?
                </a>
                <a href="#" className="text-blue-500">
                  Lupa password?
                </a>
              </div>
              <Button type="submit" className="w-full bg-blue-500 text-white">
                Masuk
              </Button>
            </CardContent>
          </Card>
        </form>
      </FormProvider>
    </>
  );
}
