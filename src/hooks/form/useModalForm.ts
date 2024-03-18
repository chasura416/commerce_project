import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "email형식이 아닙니다",
  }),
  phonenumber: z.string(),
  receiver: z.string(),
  address: z.string(),
  number: z.string(),
  request: z.string(),
});

const useModalForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      receiver: "",
      address: "",
      number: "",
      request: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return { form, onSubmit };
};

export default useModalForm;
