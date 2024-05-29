"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm, Controller, FormProvider } from "react-hook-form";
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
import Image from "next/image";
import axios from "axios";

// Definisikan skema validasi menggunakan zod
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

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      console.log("Data:", result);
      if (result.success) {
        // Handle successful login here (e.g., store token, redirect, etc.)
        console.log("User:", result.user);
        console.log("Token:", result.token);
      } else {
        // Handle login failure here
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
          <div className="mb-6">
            <Image src="/images/logo.png" alt="Logo" width={400} height={400} />
          </div>
          <Card className="max-w-sm w-full">
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
        </div>
      </form>
    </FormProvider>
  );
}
