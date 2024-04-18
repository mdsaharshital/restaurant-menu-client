"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { createRestaurant } from "../../fetcher/authReq";
import { useForm } from "react-hook-form";

export default function SignUpComp() {
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { success, message } = await createRestaurant(data);
    if (success) {
      router.push("/profile");
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
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Your Restaurant name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Food Junction"
          {...register("name", { required: "Restaurant name is required" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
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
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          type="text"
          placeholder="Dhamrai Bajar, Dhaka"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && (
          <span className="text-red-500">{errors.location.message}</span>
        )}
      </div>
      <Button type="submit" className="w-full">
        Signup
      </Button>
    </form>
  );
}
