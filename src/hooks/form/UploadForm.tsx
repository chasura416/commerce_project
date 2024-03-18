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

import useUploadForm from "./useUploadForm";

const UploadForm = () => {
  const { form, onSubmit, handleImageFile } = useUploadForm();

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
