import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardTitle, CardContent, CardHeader, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MdAddPhotoAlternate } from "react-icons/md";

import useUploadForm from "./useUploadForm";
import { useNavigate } from "react-router-dom";

const UploadForm = () => {
  const { form, onSubmit, handleImageFile } = useUploadForm();
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>판매 글 작성</CardTitle>
          <CardDescription>많이 파세여</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              encType="multipart/form-data"
              className="space-y-8"
            >
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
                        onChange={(event) => {
                          handleImageFile(event);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>카테고리</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="콘솔 종류" />
                        </SelectTrigger>
                    </FormControl>
                        <SelectContent>
                          <SelectItem value="ps5">ps5</SelectItem>
                          <SelectItem value="ps4">ps4</SelectItem>
                          <SelectItem value="xbox">xbox</SelectItem>
                          <SelectItem value="switch">switch</SelectItem>
                        </SelectContent>
                      </Select>
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
              <div className="flex justify-around">
                <Button type="submit">작성하기</Button>
                <Button
                  type="button"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  뒤로가기
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default UploadForm;
