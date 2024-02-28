import { useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Checkbox } from "../ui/checkbox";

import useGetProduct from "@/hooks/upload/useGetProduct";
import OrderModal from "./OrderModal";
import { Products } from "@/interface/Products";

const CartCard = () => {
  const { id } = useParams;
  const [showModal, setShowModal] = useState<boolean>(false);
  const { products } = useGetProduct();

  const ShowModalHandler = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  const checkBoxHandler = () => {
    console.log("check")
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/6">
          <div className="border-b mb-10 pl-2 text-4xl font-semibold flex justify-center">CART</div>
          <div className="border rounded-xl">
            <div className="mt-3">
              <div className="flex justify-between p-10">
                <div className="flex items-center">
                <Checkbox 
                  id="terms"
                  className="mr-4"
                  onCheckedChange={checkBoxHandler} 
                />
      {/* <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label> */}
                  <img className="w-28 h-28 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/100')] cursor-pointer" />
                  <div className="p-4">
                    <div className="text-lg">상품 제목</div>
                    <div className="text-sm text-gray-500">2024년 2월 7일</div>
                    {/* <div className="text-base">2000원</div> */}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="text-lg mr-10 font-semibold">2000 원</div>
                    <Button>삭제하기</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-3/12 ml-10">
          <div className="border rounded-xl flex flex-col p-5">
            <div className="border-b text-2xl font-semibold mb-3">주문 예상 금액</div>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between">
                <div>총 상품 가격</div>
                <div>1000 원</div>
              </div>
              <div className="flex justify-between">
                <div className="text-red-500">총 할인 가격</div>
                <div className="text-red-500">- 0 원</div>
              </div>
              <div className="flex justify-between">
                <div>총 배송비</div>
                <div>2500 원</div>
              </div>
            </div>
            <hr />
            <div className="text-2xl flex justify-end font-bold mt-2 mb-10">3500 원</div>
            <div className="flex flex-col space-y-3">
              <Button variant={"outline"}>선택상품 삭제</Button>
              <Button variant={"outline"}>선택상품 주문</Button>
              <Button onClick={ShowModalHandler}>전체상품 주문</Button>
            </div>
          </div>
        </div>
      </div>

      {showModal ? <OrderModal ShowModalHandler={ShowModalHandler} /> : null}
    </>
  );
};

export default CartCard;
