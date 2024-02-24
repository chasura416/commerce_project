import { Button } from "@/components/ui/button"

import { useParams } from "react-router-dom"

import useGetProduct from "@/hooks/upload/useGetProduct"

import Modal from "../modal/Modal"
// import { Modal } from "../modal/Modal"
// import { modal } from "../modal/Modal"

import { useState } from "react"

import OrderModal from "./OrderModal"

const CartCard = () => {
  const { id } = useParams;
  const { products } = useGetProduct;
  const [showModal, setShowModal] = useState(false);

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
                  <div>1000 원</div>
                </div>
                <div className="flex justify-between">
                  <div>총 할인 가격:</div>
                  <div>- 0 원</div>
                </div>
                <div className="flex justify-between">
                  <div>총 배송비:</div>
                  <div>2500 원</div>
                </div>
              </div>
              <hr />
              <div className="text-xl flex justify-end mt-2 mb-2">3500 원</div>
              <Button>구매하기</Button>
            </div>
          </div>
      </div>

      <Modal.Body>
        
        <Modal.Close onClickEffect={()=>{

        }}>
          asdf
        </Modal.Close>
      </Modal.Body>
      <div className="border m-auto w-96 h-96 flex items-center justify-center">
        <div className="">
          <div>
            <div>타이틀</div>
            <div>설명</div>
            <div>인풋</div>
          </div>
          <div className="">
            <Button>주문하기</Button>
            <Button>취소</Button>
          </div>
        </div>
      </div>

      {/* <Modal.Wrapper>
        <Modal.Header>
          모달 타이틀
        </Modal.Header>
        <Modal.Body>
          일단 실험
        </Modal.Body>
      </Modal.Wrapper> */}



        <OrderModal />


      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span> */}
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </>
  )
}

export default CartCard