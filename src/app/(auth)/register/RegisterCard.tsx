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
import Image from "next/image";
import axios from "axios";

// Define validation schema using zod
const registerSchema = z
  .object({
    name: z.string().min(1, "Nama lengkap diperlukan"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    confirmPassword: z
      .string()
      .min(6, "Konfirmasi password minimal 6 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password harus sama",
    path: ["confirmPassword"],
  });

export default function RegisterCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("Data being sent:", {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      const response = await axios.post(`http://localhost:8000/api/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      const result = response.data;
      console.log("Data:", result);
      if (result.success) {
        // Handle successful registration here
        console.log("User:", result.user);
      } else {
        // Handle registration failure here
        console.log("Registration failed");
      }
    } catch (error) {
      if (error.response) {
        // Log the server error response for debugging
        console.error("Error response data:", error.response.data);
      } else {
        // Other errors
        console.error("Error:", error.message);
      }
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
              <CardTitle className="text-blue-500">Daftar</CardTitle>
              <hr />
            </CardHeader>
            <CardContent>
              <FormField
                name="name"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nama Lengkap"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    {errors.name && (
                      <FormMessage>{errors.name.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
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
              <FormField
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ulangi Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Ulangi Password"
                          {...field}
                          className="w-full"
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                        >
                          {showConfirmPassword ? (
                            <BiSolidHide />
                          ) : (
                            <BiSolidShow />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    {errors.confirmPassword && (
                      <FormMessage>
                        {errors.confirmPassword.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <div className="flex justify-between mb-6">
                <a href="/login" className="text-blue-500">
                  Sudah punya akun?
                </a>
                <a href="#" className="text-blue-500">
                  Lupa password?
                </a>
              </div>
              <Button type="submit" className="w-full bg-blue-500 text-white">
                Daftar
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    </FormProvider>
  );
}
