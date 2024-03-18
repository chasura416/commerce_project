import Header from "@/layout/Header";
import GlobalLayout from "@/layout/GlobalLayout";

import { Link } from "react-router-dom";
import { auth } from "@/firebase";
import { Products } from "@/interface/Products";
import useGetProduct from "@/hooks/upload/useGetProduct";
import dayjs from "dayjs";

import { Button } from "@/components/ui/button";

const MyPage = () => {
  const { products, deleteProduct } = useGetProduct();
  const data = products.filter((v) => v.uid === auth.currentUser?.uid);

  return (
    <>
      <GlobalLayout>
        <Header />
        <div>
          <div className="border-b mb-10 pl-2 text-2xl font-semibold">My Page</div>
          <div className="flex justify-center">
            <div className="flex flex-col m-10 p-3 justify-center w-4/6">
            <div className="border-b mb-10 pl-2 text-2xl font-semibold">내가 쓴 글 목록</div>
              {data.map((product: Products) => (
                <div className="border rounded-lg">
                  <div className="mt-3">
                    <div className="flex justify-between p-10">
                      <div className="flex">
                        <Link to={`/productdetail/${product?.id}`}>
                          <img
                            src={product?.imgUrl as string}
                            className="w-48 h-48 rounded-xl bg-cover object-cover bg-center cursor-pointer"
                          />
                        </Link>
                        <div className="flex-grow-1 p-4">
                          <div className="text-lg">{product?.title}</div>
                          <div className="text-sm text-gray-500">
                            {dayjs(
                              (product?.createdAt.seconds +
                                product?.createdAt.nanoseconds / 1000000000) *
                                1000
                            ).format("YYYY.MM.DD")}
                          </div>
                          <div className="text-base">{product?.price}원</div>
                        </div>
                      </div>
                      <div className="flex flex-col pt-12 gap-1">
                        <Button>수정하기</Button>
                        {/* 무작위로 지워지니까 특정 글 지워지도록 삭제버튼 새로 이부분만 다시 만들 것 */}
                        <Button 
                          onClick={()=>{
                            deleteProduct(product?.id)
                          }}
                        >
                          삭제하기
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default MyPage;
