import { Button } from "@/components/ui/button"

import { useParams } from "react-router-dom"

import useGetProduct from "@/hooks/upload/useGetProduct"

const CartCard = () => {
  const { id } = useParams;
  const { products } = useGetProduct;

  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/6">
          <div className="border">
            <div className="mt-3">
              <div className="flex justify-between p-10">
                <div className="flex">
                  <img className="w-28 h-28 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/100')] cursor-pointer"/>
                  <div className="flex-grow-1 p-4">
                    <div className="text-lg">상품 제목</div>
                    <div className="text-sm text-gray-500">2024년 2월 7일</div>
                    <div className="text-base">2000원</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <div className="text-lg">가격</div>
                  <div>2000원</div>
                  <Button>수정하기</Button>
                  <Button>삭제하기</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="w-3/12 ml-10">
            <div className="border rounded-xl flex flex-col p-5">
              <div className="text-xl">주문 예상 금액</div>
              <div>
                <div className="flex justify-between">
                  <div>총 상품 가격:</div>
                  <div>얼마얼마 원</div>
                </div>
                <div className="flex justify-between">
                  <div>총 할인 가격:</div>
                  <div>얼마얼마 원</div>
                </div>
                <div className="flex justify-between">
                  <div>총 배송비:</div>
                  <div>얼마얼마 원</div>
                </div>
              </div>
              <hr />
              <div className="text-xl flex justify-end mt-2 mb-2">얼마얼마 원</div>
              <Button>구매하기</Button>
            </div>
          </div>
      </div>
    </>
  )
}

export default CartCard