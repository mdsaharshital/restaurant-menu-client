"use client";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { restaurantLogin } from "../../fetcher/authReq";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Toast from "@/components/Toast/Toast";
import { useRouter } from "next/navigation";

export default function LoginCom() {
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { success, message } = await restaurantLogin(data);
    if (success) {
      router.push("/dashboard/profile");
      toast({
        description: message,
      });
    } else {
      toast({
        description: message,
        variant: "destructive",
      });
      // Toast();
    }
    console.log(message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <button type="submit" className="w-full bg-black text-white py-2">
        Login
      </button>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );
}
