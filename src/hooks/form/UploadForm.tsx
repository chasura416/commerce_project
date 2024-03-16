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
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from "@/components/ui/card";

const formSchema = z.object({
  title: z.string(),
  price: z.number(),
  content: z.string(),
});

const UploadForm = () => {
  const {
    products,
    title,
    price,
    image,
    content,
    fileInput,
    imageUpload,
    addCart,
    cartUpdate,
    setAddCart,
    cartProductHandle,
    onChange,
    addProduct,
    handleImageFile,
  } = useFileUpload();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    addProduct(values);
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      <Input placeholder="가격" {...field} />
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
                    <FormLabel>PASSWORD</FormLabel>
                    <FormControl>
                      <Input placeholder="상세 내용" {...field} />
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
