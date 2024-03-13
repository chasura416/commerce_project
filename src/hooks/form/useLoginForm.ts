import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import useLogin from "../login/useLogin";

const formSchema = z.object({
  email: z.string().email({
    message: "email형식이 아닙니다",
  }),
  password: z.string(),
});

const useLoginForm = () => {
  const { signIn } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    signIn(values);
  }

  return { form, onSubmit };
};

export default useLoginForm;
