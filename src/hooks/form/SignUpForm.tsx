import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardTitle,
  CardContent, 
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

import useSignUp from "../login/useSignUp";

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

const formSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(8),
    email: z.string().email({
      message: "email 형식이 아닙니다",
    }),
    password: z.string().min(8).regex(passwordRegex, "숫자, 영문, 특수문자를 포함하여 최소 8자를 입력"),
    checkPassword: z.string().min(8).regex(passwordRegex, "숫자, 영문, 특수문자를 포함하여 최소 8자를 입력"),
  })
  .superRefine(({ checkPassword, password }, ctx) => {
    if (checkPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "password not matched",
        path: ["checkPassword"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "password not matched",
        path: ["password"],
      });
    }
  });

const SignUpForm = () => {
  const { signUp } = useSignUp();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      checkPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    signUp(values);
    console.log(values);
  }

  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle>회원가입</CardTitle>
        <CardDescription>회원가입 하씨오</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>USER NAME</FormLabel>
                  <FormControl>
                    <Input placeholder="User name" {...field} />
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
                  <FormLabel>PASSWORD</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Check PASSWORD</FormLabel>
                  <FormControl>
                    <Input placeholder="Check password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">회원가입</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
    </>
  );
};

export default SignUpForm;
