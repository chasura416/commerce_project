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

import useUploadForm from "@/hooks/form/useUploadForm";

import { useParams } from "react-router-dom";

import useGetProduct from "@/hooks/upload/useGetProduct";
import useFileUpload from "@/hooks/upload/useFileUpload";
import dayjs from "dayjs";

const ProductEditCard = () => {
  const { id } = useParams();
  const { products, deleteProduct, navigate } = useGetProduct();
  const { cartUpdate } = useFileUpload();
  const { form, onSubmit, handleImageFile } = useUploadForm();
  const data = products.filter((v) => v.id === id);

  return (
    <>
      <div className="flex flex-col p-3 justify-center w-5/6">
        <div className="border">
          <div className="text-3xl pl-8 pt-5">{data[0]?.title}</div>
          <div className="mt-3">
            <div className="flex justify-between p-10">
              <div className="flex">
                { data[0]?.imgUrl ? 
                  <img 
                  src = {data[0]?.imgUrl as string}
                  className="w-48 h-48 rounded-xl bg-cover bg-center object-cover cursor-pointer" />
                  :
                  <img className="w-48 h-48 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/350')]" />
                }
                <div className="flex-grow-1 p-4">
                  <div className="text-lg">{data[0]?.title}</div>
                  <div className="text-sm text-gray-500">
                    {dayjs(
                      (data[0]?.createdAt.seconds + data[0]?.createdAt.nanoseconds / 1000000000) *
                        1000
                    ).format("YYYY.MM.DD")}
                  </div>
                  <div className="text-base">{data[0]?.price}</div>
                </div>
              </div>
              <div className="flex flex-col pt-12 gap-1">
                <div className="text-lg">가격</div>
                <div>{data[0]?.price}원</div>
                <Button onClick={()=>{
                  cartUpdate(data[0]?.id)
                }}>장바구니 추가</Button>
                <Button>바로 주문하기</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>글 내용</div>
          <div className="border w-full p-4 mb-5">
            {data[0]?.content}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <Button>수정하기</Button>
              <Button
                onClick={() => {
                  deleteProduct(data[0]?.id);
                }}
              >
                삭제하기
              </Button>
            </div>
            <div className="flex gap-1">
              <Button 
                onClick={()=>{
                  navigate(-1);
              }}
              >
                뒤로가기
              </Button>
              <Button>장바구니</Button>
              <Button>주문하기</Button>
            </div>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>판매 글 수정</CardTitle>
          <CardDescription>수정 하세여</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-8">

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
              <div className="flex justify-around">
                <Button type="submit">수정</Button>
                <Button 
                  type="button"
                  onClick={()=>{
                    deleteProduct(data[0]?.id)
                  }}
                >
                  삭제
                </Button>
                <Button 
                  type="button"
                  onClick={()=>{
                    navigate("-1")
                  }}
                >
                  취소
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductEditCard;
