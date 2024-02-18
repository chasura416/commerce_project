import Header from "@/layout/Header";
import { Button } from "@/components/ui/button";

import { useParams, Link } from "react-router-dom";
import useGetProduct from "@/hooks/upload/useGetProduct";
import dayjs from "dayjs";

const MyPage = () => {
  const { id } = useParams();
  const { products: products } = useGetProduct();
  const data = products.filter((v) => v.id === (id));

  return (
    <>
      <Header />
      <div>
        <div>내가 쓴 글 리스트 나와야함</div>
        <hr />
        <div className="flex justify-center">
          <div className="flex flex-col m-10 p-3 justify-center w-4/6">
            <div className="border">
              <div className="mt-3">
                <div className="flex justify-between p-10">
                  <div className="flex">
                    <img className="w-48 h-48 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/350')] cursor-pointer" />
                    <div className="flex-grow-1 p-4">
                      <div className="text-lg">글 제목</div>
                      <div className="text-sm text-gray-500">2024.02.17</div>
                      <div className="text-base">2000원</div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-12 gap-1">
                    <Button>수정하기</Button>
                    <Button>삭제하기</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
