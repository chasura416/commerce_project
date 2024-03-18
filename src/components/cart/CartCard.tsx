import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "../ui/checkbox";

import useGetProduct from "@/hooks/upload/useGetProduct";
import useFileUpload from "@/hooks/upload/useFileUpload";
import dayjs from "dayjs";
import OrderModal from "./OrderModal";
import { Products } from "@/interface/Products";

const CartCard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { products } = useGetProduct();
  const { cartUpdate } = useFileUpload();
  const data = products.filter((v) => v.addCart === true);

  const ShowModalHandler = () => {
    setShowModal(!showModal);
  };

  const checkBoxAllSelecter = () => {
    console.log("check");
  };

  const checkBoxHandler = () => {
    console.log("check");
  };

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 321px)" }} className="flex justify-center">
        <div className="w-3/6">
          <div className="border-b mb-10 pl-2 text-4xl font-semibold flex justify-center">CART</div>
          <div className="flex">
            <div className="flex justify-center items-center pl-3 mb-5">
              <Checkbox id="terms" className="mr-4" onCheckedChange={checkBoxAllSelecter} />
              <div className="text-xl font-bold">전체선택</div>
            </div>
          </div>
          {data.map((product: Products) => (
            <div key={product?.id} className="border rounded-xl">
              <div className="mt-3">
                <div className="flex justify-between p-10">
                  <div className="flex items-center">
                    <Checkbox id="terms" className="mr-4" onCheckedChange={checkBoxHandler} />
                    {product?.imgUrl ? (
                      <img
                        src={product?.imgUrl as string}
                        className="w-28 h-28 rounded-xl bg-cover bg-center object-contain cursor-pointer"
                      />
                    ) : (
                      <img className="w-28 h-28 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/100')] cursor-pointer" />
                    )}
                    <div className="p-4">
                      <div className="text-lg">{product?.title}</div>
                      <div className="text-sm text-gray-500">
                        {dayjs(
                          (product?.createdAt.seconds +
                            product?.createdAt.nanoseconds / 1000000000) *
                            1000
                        ).format("YYYY.MM.DD")}
                      </div>
                      <div className="text-sm text-gray-500">상품을 담아주세요</div>
                      {/* <div className="text-base">2000원</div> */}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="text-lg mr-10 font-semibold">{product?.price} 원</div>
                      <Button onClick={()=>{
                        cartUpdate(product?.id)
                      }}>삭제</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border rounded-xl">
            <div className="mt-3">
              <div className="flex justify-between p-10">
                <div className="flex items-center">
                  <Checkbox id="terms" className="mr-4" onCheckedChange={checkBoxHandler} />
                  <img className="w-28 h-28 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/100')] cursor-pointer" />
                  <div className="p-4">
                    <div className="text-lg">상품이 없습니다</div>
                    <div className="text-sm text-gray-500">상품을 담아주세요</div>
                    {/* <div className="text-base">2000원</div> */}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="text-lg mr-10 font-semibold">0 원</div>
                    <Button>삭제</Button>
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
