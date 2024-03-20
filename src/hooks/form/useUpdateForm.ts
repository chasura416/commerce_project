import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useParams } from "react-router-dom";

import useFileUpload from "../upload/useFileUpload";
import useGetProduct from "../upload/useGetProduct";

// const MAX_FILE_SIZE = 1024 * 1024 * 5;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
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

const useUpdateForm = () => {
  const { updateProduct, handleImageFile } = useFileUpload();
  const { id } = useParams();
  const { products } = useGetProduct();
  const data = products.filter((v) => v.id === id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data[0].title,
      price: data[0].price,
      content: data[0].content,
      image: data[0].imgUrl,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
      await updateProduct(values);
  }

  return { form, onSubmit, handleImageFile };
};

export default useUpdateForm;
