"use client";
import React, { useState } from "react";
import { CardWrapper } from "@/Components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginSchema } from "../../../schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { login } from '../../../actions/login';
import { useTransition } from 'react';
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {

  const searchParams = useSearchParams();
  const urlError = searchParams && searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider"
    : "";
  
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
     
    const [isPending, startTransition] = useTransition()
    
  

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      console.log(values);
      setError("")
    setSuccess("")

    startTransition(() => {
      login(values).then((data) => {
        if(data?.error){
          form.reset();
          setError(data?.error)
        }
        // if(data?.success){
        //   form.reset();
        //   setSuccess(data?.success)
        // }

        // Todo: Add when we add 2FA
        // setSuccess(data?.success)
      })
      .catch(()=>setError("Something went wrong"));
    })
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className=" space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                          <Input
                          disabled={isPending}
                      {...field}
                      placeholder="example@mail.com"
                      type="email"
                      
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={ error || urlError }/>
          <FormSuccess message={ success }/>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};