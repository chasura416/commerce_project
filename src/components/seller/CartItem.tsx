import { useState, useEffect } from "react";
import { db, storage, auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const CartItem = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  return (
    <>
      <div className="mt-10">
        <div className="flex p-10">
          <img className="w-48 h-48 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/350')] cursor-pointer" />
          <div className="flex-grow-1 p-4">
            <div className="text-lg">상품 제목</div>
            <div className="text-sm text-gray-500">2024년 2월 7일</div>
            <div className="text-base">2000원</div>
            <div className="">좋아요 버튼</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
