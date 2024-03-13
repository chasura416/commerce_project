import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
    checkPassword: z.string().min(8),
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

const useSignUpForm = () => {
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

  return {form, onSubmit};
};

export default useSignUpForm;
