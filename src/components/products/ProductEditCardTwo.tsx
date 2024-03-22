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
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MdAddPhotoAlternate } from "react-icons/md";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useGetProduct from "@/hooks/upload/useGetProduct";
import useFileUpload from "@/hooks/upload/useFileUpload";
import { useNavigate } from "react-router-dom";

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

const ProductEditCardTwo = () => {
  const { updateProduct ,handleImageFile } = useFileUpload();
  const { products, getData, deleteProduct } = useGetProduct();
  const { id } = useParams();
  const data = products.filter((v) => v.id === id);
  const navigate = useNavigate();
  // console.log(data)
  // console.log(getData(id))

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data[0]?.title,
      price: data[0]?.price,
      content: data[0]?.content,
      image: undefined,
    },
  });


  // setValue만 하면 무한 렌더링이 나면서 수정값 입력이 불가능해진다.
  // useEffect(()=>{
  //   if(data){
  //     form.setValue("title", data[0]?.title)
  //     form.setValue("price", data[0]?.price)
  //     form.setValue("content", data[0]?.content)
  //   }
  //   console.log(data)
  // },[data, form])



  async function onSubmit(values: z.infer<typeof formSchema>) {
      await updateProduct(data[0].id, values);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>판매 글 수정</CardTitle>
          <CardDescription>수정 하세여</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data"  className="space-y-8">

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
                        onChange={(event)=> {
                          handleImageFile(event)
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
                      <Input 
                        value={field.value}
                        placeholder="제목" {...field} />
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
              <div className="flex justify-around">
                <Button type="submit">수정하기</Button>
                <Button 
                  type="button"
                  onClick={()=>{
                    deleteProduct(data[0]?.id)
                  }}
                >
                  삭제하기
                </Button>
                <Button 
                  type="button"
                  onClick={()=>{
                    navigate(-1)
                  }}
                >
                  취소하기
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductEditCardTwo;