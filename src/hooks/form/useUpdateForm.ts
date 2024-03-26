import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import useFileUpload from "@/hooks/upload/useFileUpload";

// const MAX_FILE_SIZE = 1024 * 1024 * 5;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  category: z.string(),
  title: z.string(),
  price: z.coerce.number(),
  content: z.string(),
  image: z
    .any()
    // .instanceof(File, { message: 'Please upload a file.'})
    // .custom<FileList>()
    // .refine((fileList)=> fileList.length === 1, 'Expect file')
    // .transform((file) => file[0] as File)
    // .refine((files) => {
    //   return files?.size <= MAX_FILE_SIZE;
    // }, `Max image size is 5MB.`)
    // .refine(
    //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
    //   "Only .jpg, .jpeg, .png and .webp formats are supported."
    // ),
});

const useUpdateForm = (Props) => {
  const { updateProduct } = useFileUpload();
  const { data } = Props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: data.category,
      title: data.title,
      price: data.price,
      content: data.content,
      image: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
      await updateProduct(data.id, values);
  }

  return { form, onSubmit };
};

export default useUpdateForm;