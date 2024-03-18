import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import useFileUpload from "../upload/useFileUpload";

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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { MdAddPhotoAlternate } from "react-icons/md";

import { ChangeEvent, FormEvent, useState } from "react";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  title: z.string(),
  price: z.coerce.number(),
  content: z.string(),
  image: z
    // .any()
    // .instanceof(File, { message: 'Please upload a file.'})
    .custom<FileList>()
    .refine((fileList)=> fileList.length === 1, 'Expect file')
    .transform((file) => file[0] as File)
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

const UploadForm = () => {
  const { fileInput, addProduct, handleImageFile } = useFileUpload();
  const [state, setState] = useState<File>();
  const [selectedImage, setSelectedImage] = useState< File | null >();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      content: "",
      image: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await addProduct(values);
    console.log(values, selectedImage);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>판매 글 작성</CardTitle>
          <CardDescription>많이 파세여</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data"  className="space-y-8">
              {/* <Label>이미지 추가</Label>
              <div className="border min-h-20 p-4 flex">
                <Label className="cursor-pointer" htmlFor="picture">
                  <MdAddPhotoAlternate size={40} />
                </Label>
                <Input
                  id="picture"
                  type="file"
                  multiple
                  accept="image/*"
                  name="image"
                  ref={fileInput}
                  onChange={handleImageFile}
                  style={{ display: "none" }}
                />
              </div> */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이미지 등록</FormLabel>
                    <div className="border rounded-md min-h-20 p-4 flex">
                      <FormLabel className="cursor-pointer" htmlFor="picture">
                        <MdAddPhotoAlternate size={40} />
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        id="picture"
                        accept="image/*"
                        type="file"
                        multiple
                        placeholder="image"
                        style={{ display: "none" }}
                        {...field}
                        // ref={fileInput}
                        // onChange={handleImageFile}
                        onChange={(event: ChangeEvent<HTMLInputElement>)=>{
                          if(!event.target.files) return
                          setSelectedImage(event?.target.files[0])
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>제목</FormLabel>
                    <FormControl>
                      <Input placeholder="제목" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>가격</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="가격" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>내용</FormLabel>
                    <FormControl>
                      <Textarea
                        className="border min-h-52 p-2"
                        placeholder="상세 내용"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">작성하기</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default UploadForm;
