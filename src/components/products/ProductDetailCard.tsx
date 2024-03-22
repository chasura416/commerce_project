import { Button } from "@/components/ui/button";

import { useParams } from "react-router-dom";

import useGetProduct from "@/hooks/upload/useGetProduct";
import useFileUpload from "@/hooks/upload/useFileUpload";
import dayjs from "dayjs";

const ProductDetailCard = () => {
  const { id } = useParams();
  const { products, deleteProduct, navigate } = useGetProduct();
  const { cartUpdate } = useFileUpload();
  const data = products.filter((v) => v.id === id);

  return (
    <>
      <div className="flex flex-col p-3 justify-center w-5/6">
        <div className="border">
          <div className="text-3xl pl-8 pt-5">{data[0]?.title}</div>
          <div className="mt-3">
            <div className="flex justify-between p-10">
              <div className="flex">
                {data[0]?.imgUrl ? (
                  <img
                    src={data[0]?.imgUrl as string}
                    className="w-48 h-48 rounded-xl bg-cover bg-center object-cover cursor-pointer"
                  />
                ) : (
                  <img className="w-48 h-48 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/350')]" />
                )}
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
                <Button
                  onClick={() => {
                    cartUpdate(data[0]?.id);
                  }}
                >
                  장바구니 추가
                </Button>
                <Button>바로 주문하기</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>글 내용</div>
          <div className="border w-full p-4 mb-5">{data[0]?.content}</div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <Button onClick={()=>{
                navigate(`/productedit/${data[0]?.id}`)
              }}>수정하기</Button>
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
                onClick={() => {
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
    </>
  );
};

export default ProductDetailCard;
