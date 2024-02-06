import Header from "@/layout/Header"
import { Button } from "@/components/ui/button"
import { db, storage, auth } from "@/firebase"

const Cart = () => {
  return (
    <>
      <Header />
      <div className="border">
        <div className="mt-3 ">
          <div className="flex justify-between p-10">
            <div className="flex">
              <img className="w-48 h-48 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/350')] cursor-pointer"/>
              <div className="flex-grow-1 p-4">
                <div className="text-lg">상품 제목</div>
                <div className="text-sm text-gray-500">2024년 2월 7일</div>
                <div className="text-base">2000원</div>
              </div>
            </div>
            <div className="flex flex-col pt-12">
              <div className="text-lg">가격</div>
              <div>2000원</div>
              <Button>수정하기</Button>
              <Button>취소</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>총 가격: 얼마</div>
        <Button>주문하기</Button>
      </div>
    </>
  )
}

export default Cart